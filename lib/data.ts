export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  url?: string;
  image?: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "TechVentures",
    companyUrl: "https://example.com",
    period: "2023 — Present",
    description:
      "Lead development of customer-facing applications serving millions of users. Architect scalable solutions using modern web technologies while mentoring junior developers and establishing best practices for code quality and accessibility.",
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "Digital Agency Co",
    companyUrl: "https://example.com",
    period: "2021 — 2023",
    description:
      "Built and maintained web applications for diverse clients across e-commerce, healthcare, and fintech sectors. Implemented CI/CD pipelines and improved deployment efficiency by 60%.",
    technologies: ["JavaScript", "Vue.js", "Python", "Docker", "GCP"],
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "StartupXYZ",
    companyUrl: "https://example.com",
    period: "2019 — 2021",
    description:
      "Developed responsive web interfaces and contributed to the company's design system. Collaborated closely with UX designers to deliver pixel-perfect implementations.",
    technologies: ["React", "Sass", "Jest", "Figma", "Storybook"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "DevFlow",
    description:
      "A developer productivity platform that streamlines code review workflows with AI-powered suggestions and automated testing integration.",
    url: "https://example.com",
    image: "/images/project-devflow.jpg",
    technologies: ["Next.js", "OpenAI", "Prisma", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "CloudSync",
    description:
      "Real-time file synchronization service with end-to-end encryption, supporting seamless collaboration across teams.",
    url: "https://example.com",
    image: "/images/project-cloudsync.jpg",
    technologies: ["Go", "WebSocket", "Redis", "S3"],
  },
  {
    id: "3",
    title: "MetricsDash",
    description:
      "Analytics dashboard for monitoring application performance with customizable widgets and real-time alerting.",
    url: "https://example.com",
    image: "/images/project-metrics.jpg",
    technologies: ["React", "D3.js", "InfluxDB", "Grafana"],
  },
  {
    id: "4",
    title: "TaskMaster",
    description:
      "Minimalist task management app with keyboard-first navigation and smart deadline predictions.",
    url: "https://example.com",
    image: "/images/project-taskmaster.jpg",
    technologies: ["Svelte", "Supabase",],
  },
];

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "GraphQL",
  "Tailwind CSS",
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "X", url: "https://x.com", icon: "x" },
  { name: "Email", url: "mailto:hello@example.com", icon: "mail" },
];
