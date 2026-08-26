export const personal = {
  name: "Justin Smidt",
  title: "DevOps & Cloud Engineer",
  tagline: "Building reliable infrastructure, automating everything in between.",
  phone: "073 905 3934",
  email: "jus.smidt@gmail.com",
  linkedin: "https://www.linkedin.com/in/justin-smidt-113502196/",
  location: "South Africa",
};

export const about = `DevOps and Cloud Engineer with hands-on experience building a cloud platform from the ground up on Azure AKS
— networking, managed data stores, CI/CD, and production operations — alongside experience maintaining
production workloads on AWS EKS. Backed by a software engineering foundation, I approach infrastructure with
an emphasis on automation, version control, and systems that stay reliable under pressure.`;

export const education = [
  {
    qualification: "Bachelor of Computing (Honours) — NQF Level 8",
    field: "Computing",
    institution: "Belgium Campus ITversity",
    period: "2020 – 2023",
    note: "Magna Cum Laude",
  },
  {
    qualification: "Bachelor of Commerce: Marketing Management",
    field: "Marketing Management",
    institution: "North-West University",
    period: "2015 – 2018",
    note: "",
  },
];

export const experience = [
  {
    role: "DevOps & Cloud Engineer",
    company: "S-Squared Software Development",
    client: "Blulabel Telecoms",
    period: "Feb 2025 – Present",
    duration: "Feb 2025 – Present",
    bullets: [],
    projects: [
      {
        name: "Unipay",
        tag: "Azure AKS",
        bullets: [
          "Sole infrastructure engineer responsible for building dev, QA, and production environments entirely from scratch on Azure AKS using Terraform.",
          "Designed and provisioned VNets, subnets, and NSGs to establish the underlying network foundation for each AKS environment.",
          "Set up multiple managed databases with private endpoint access enforced via jumpbox.",
          "Deployed and configured Redis (caching) and RabbitMQ (message brokering) as supporting platform services.",
          "Implemented Nginx ingress controller, provisioned DNS A-records, and authored ingress manifests for all workloads across all three environments.",
          "Built and maintained CI/CD pipelines and Helm charts for approximately 20 microservices deployed across the platform.",
        ],
      },
      {
        name: "Ticketpro",
        tag: "AWS EKS",
        bullets: [
          "Maintained the production Kubernetes environment on AWS EKS, covering cluster health, workload deployments, and incident response.",
        ],
      },
      {
        name: "Additional Blulabel Projects",
        tag: "AWS · Azure · On-Premises",
        bullets: [
          "Contribute across a broader portfolio of Blulabel projects spanning AWS, Azure, and on-premises environments, with all repositories and pipelines hosted on Azure DevOps.",
          "Maintain and troubleshoot existing CI/CD pipelines across these environments, diagnosing and resolving build and deployment issues on infrastructure originally provisioned by other teams.",
        ],
      },
    ],
  },
  {
    role: "Junior Software Developer",
    company: "S-Squared Software Development",
    client: "",
    period: "Mar 2024 – Feb 2025",
    duration: "Mar 2024 – Feb 2025",
    bullets: [
      "Placed on the Interface project, a bespoke solution developed for Alexander Forbes, working alongside a senior developer.",
      "Developed backend services and REST APIs in Java and contributed to the AngularJS frontend.",
      "Participated in code reviews, sprint planning, and feature delivery across the full development cycle.",
    ],
    projects: [],
  },
  {
    role: "Intern Software Developer",
    company: "S-Squared Software Development",
    client: "",
    period: "Nov 2023 – Mar 2024",
    duration: "Nov 2023 – Mar 2024",
    bullets: [
      "Performed manual and functional testing on the BluAdvance project.",
      "Documented bugs, tracked issues, and collaborated with developers to verify fixes.",
      "Gained hands-on exposure to the software development lifecycle in a professional environment.",
    ],
    projects: [],
  },
  {
    role: "Marketing Graduate Program",
    company: "MacDonald's Transport, Kwazulu-Natal",
    client: "",
    period: "2019",
    duration: "2019",
    bullets: [
      "Rotated across Sales & Marketing, Logistics, and Operations departments to gain exposure to the full organization.",
      "Conducted customer site visits to understand customer-specific requirements and appropriate solutions.",
      "Oversaw port activities for incoming vessels and supported warehouse layout and stock management.",
      "Coordinated yard activities for receiving and storing goods.",
    ],
    projects: [],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Azure", "EKS", "AKS", "VNets", "Subnets", "DNS"],
  },
  {
    category: "IaC & Orchestration",
    items: ["Terraform", "Kubernetes", "Helm", "Docker"],
  },
  {
    category: "Platform Services",
    items: ["Nginx", "Redis", "RabbitMQ"],
  },
  {
    category: "CI/CD & Automation",
    items: ["CI/CD Pipelines", "Bash"],
  },
  {
    category: "Development",
    items: ["Java", "AngularJS", "TypeScript", "SQL"],
  },
];
