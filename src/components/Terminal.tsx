import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import './Terminal.css';

type Line = { type: 'prompt' | 'output' | 'error' | 'blank'; text: string };

const COMMANDS: Record<string, string[]> = {
  help: [
    '  Available commands:',
    '',
    '  whoami            who is this person?',
    '  cat resume.txt    quick summary',
    '  ls projects/      list projects',
    '  ls skills/        list skill categories',
    '  cat skills/<name> cloud · devops · iac · development',
    '  cat contact.txt   get in touch',
    '  clear             clear the terminal',
    '  exit              close this terminal',
  ],
  whoami: [
    '  Justin Smidt',
    '  DevOps & Cloud Engineer — S-Squared Software Development',
    '  Contracted to Blulabel Telecoms',
    '',
    '  Building cloud infrastructure on AWS and Azure,',
    '  automating everything in between.',
    '',
    '  BSc Honours in Computing — Magna Cum Laude',
    '  Belgium Campus ITversity, 2023',
  ],
  'cat resume.txt': [
    '  ┌─────────────────────────────────────────────┐',
    '  │  DevOps & Cloud Engineer   Feb 2025–Present │',
    '  │  Junior Software Developer Nov 2023–Feb 2025│',
    '  └─────────────────────────────────────────────┘',
    '',
    '  Kubernetes · Terraform · Azure AKS · AWS EKS',
    '  Helm · Nginx · Redis · RabbitMQ · CI/CD · Docker',
  ],
  'ls projects/': [
    '  drwxr-xr-x  unipay/       Azure AKS  — 3 environments built from scratch',
    '  drwxr-xr-x  ticketpro/    AWS EKS    — production environment maintenance',
    '  drwxr-xr-x  on-prem/      Docker     — multiple on-premises projects',
  ],
  'ls skills/': [
    '  cloud/          devops/         iac/            development/',
  ],
  'cat skills/cloud': [
    '  AWS  ·  Azure  ·  EKS  ·  AKS  ·  VNets  ·  Subnets  ·  DNS',
  ],
  'cat skills/devops': [
    '  Kubernetes  ·  Docker  ·  Helm  ·  Nginx  ·  Redis  ·  RabbitMQ  ·  Bash',
  ],
  'cat skills/iac': [
    '  Terraform  ·  Helm  ·  Bash',
  ],
  'cat skills/development': [
    '  Java  ·  AngularJS  ·  TypeScript  ·  SQL',
  ],
  'cat contact.txt': [
    '  email:     jus.smidt@gmail.com',
    '  linkedin:  linkedin.com/in/justin-smidt-113502196',
  ],
};

const INTRO: Line[] = [
  { type: 'output', text: '  Welcome to Justin\'s portfolio terminal.' },
  { type: 'output', text: '  Type "help" to see available commands.' },
  { type: 'blank', text: '' },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Terminal({ open, onClose }: Props) {
  const [lines, setLines] = useState<Line[]>(INTRO);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const newLines: Line[] = [
      { type: 'prompt', text: raw },
    ];

    if (cmd === '') {
      // do nothing
    } else if (cmd === 'clear') {
      setLines(INTRO);
      setInput('');
      return;
    } else if (cmd === 'exit') {
      onClose();
      setInput('');
      return;
    } else if (COMMANDS[cmd]) {
      COMMANDS[cmd].forEach((t) =>
        newLines.push({ type: 'output', text: t })
      );
    } else {
      newLines.push({
        type: 'error',
        text: `  command not found: ${cmd} — try "help"`,
      });
    }

    newLines.push({ type: 'blank', text: '' });
    setLines((prev) => [...prev, ...newLines]);
    setHistory((prev) => [raw, ...prev]);
    setHistoryIndex(-1);
    setInput('');
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(next);
      setInput(history[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(historyIndex - 1, -1);
      setHistoryIndex(next);
      setInput(next === -1 ? '' : history[next]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className={`terminal-overlay ${open ? 'terminal-overlay--open' : ''}`}>
      <div className="terminal-box">
        <div className="terminal-box__header">
          <button className="terminal-box__close" onClick={onClose} aria-label="Close terminal">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </button>
          <span className="terminal-box__title">justin@portfolio: ~</span>
          <span className="terminal-box__hint">ESC or exit to close · ` to reopen</span>
        </div>
        <div className="terminal-box__body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
          {lines.map((line, i) => (
            <div key={i} className={`terminal-line terminal-line--${line.type}`}>
              {line.type === 'prompt' && (
                <span className="terminal-prompt">justin@portfolio:~$ </span>
              )}
              {line.text}
            </div>
          ))}
          <div className="terminal-input-row">
            <span className="terminal-prompt">justin@portfolio:~$ </span>
            <input
              ref={inputRef}
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
