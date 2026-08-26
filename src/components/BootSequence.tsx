import { useEffect, useState } from 'react';
import './BootSequence.css';

const LINES = [
  { text: 'Starting kernel modules...', delay: 0 },
  { text: 'Loading portfolio v1.0.0...', delay: 220 },
  { text: 'Mounting components...', delay: 440 },
  { text: 'Initializing DevOps interface...', delay: 660 },
  { text: 'Connecting to cloud providers...', delay: 880 },
  { text: 'Starting services: nginx · redis · rabbitmq', delay: 1100 },
  { text: 'All systems operational', delay: 1320, green: true },
  { text: 'Launching justin@portfolio...', delay: 1600, prompt: true },
];

interface Props {
  onDone: () => void;
}

export default function BootSequence({ onDone }: Props) {
  const [visible, setVisible] = useState<number[]>([]);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    LINES.forEach((line, i) => {
      timers.push(setTimeout(() => {
        setVisible((v) => [...v, i]);
      }, line.delay));
    });

    timers.push(setTimeout(() => setFading(true), 2200));
    timers.push(setTimeout(() => onDone(), 2650));

    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div className={`boot ${fading ? 'boot--fading' : ''}`}>
      <div className="boot__terminal">
        {LINES.map((line, i) =>
          visible.includes(i) ? (
            <div key={i} className="boot__line">
              {line.prompt ? (
                <span className="boot__prompt">$ </span>
              ) : (
                <span className={`boot__ok ${line.green ? 'boot__ok--green' : ''}`}>
                  [  OK  ]
                </span>
              )}
              <span className={line.green ? 'boot__text--green' : 'boot__text'}>
                {line.text}
              </span>
            </div>
          ) : null
        )}
        {visible.length > 0 && !fading && (
          <div className="boot__cursor" />
        )}
      </div>
    </div>
  );
}
