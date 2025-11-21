// data/projects.ts
export type ProjectCategory = "Development" | "Design" | "Networking" | "Solar";

export interface Project {
  id: number;
  title: string;
  description: string;
  imagePath: string; // Path to image in /public
  liveLink: string;
  githubLink: string;
  categories: ProjectCategory[];
  techStack: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Eco-Synapse Smart Grid Dashboard",
    description:
      "A real-time data visualization dashboard for residential solar PV systems, built for efficiency monitoring and predictive maintenance.",
    imagePath: "/images/Energy_Dashboard_2x.jpg.png",
    liveLink: "#",
    githubLink: "#",
    categories: ["Development", "Solar", "Design"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Figma"],
  },
  {
    id: 2,
    title: "Enterprise VPN Mesh Configuration",
    description:
      "Designed and implemented a secure, fault-tolerant VPN mesh network connecting three global offices using Cisco ASA and EIGRP routing.",
    imagePath: "/images/images.jpeg",
    liveLink: "#",
    githubLink: "#",
    categories: ["Networking"],
    techStack: ["Cisco ASA", "EIGRP", "IPsec VPN", "Wireshark", "Python"],
  },
  {
    id: 3,
    title: "Modern Portfolio Redesign (UI/UX)",
    description:
      "Complete visual identity and interaction design system overhaul for a creative agency, focusing on accessibility and modern micro-interactions.",
    imagePath: "/images/hq720.jpg",
    liveLink: "#",
    githubLink: "#",
    categories: ["Design", "Development"],
    techStack: ["Figma", "Sketch", "A/B Testing", "Storybook", "Sass"],
  },
  {
    id: 4,
    title: "Custom Laravel/React CRM",
    description:
      "Full-stack development of a custom Customer Relationship Management platform tailored for a small business, improving sales tracking by 40%.",
    imagePath: "/images/freecodecamp-boolfalse-laravel-react-vite-draggable-tasklist.png",
    liveLink: "#",
    githubLink: "#",
    categories: ["Development"],
    techStack: ["Laravel", "React", "REST API", "MySQL", "Docker"],
  },
];
