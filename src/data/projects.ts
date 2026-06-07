// data/projects.ts
export type ProjectCategory = "Development" | "Design" | "Networking" | "Security" | "AI";

export interface Project {
  id: number;
  title: string;
  description: string;
  imagePath: string;
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
      "Real-time monitoring dashboard for residential solar PV systems. Tracks energy output, flags anomalies, and surfaces predictive maintenance alerts — reducing manual inspection time by over 60%.",
    imagePath: "/images/Energy_Dashboard_2x.jpg.png",
    liveLink: "#",
    githubLink: "#",
    categories: ["Development", "Design"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Figma"],
  },
  {
    id: 2,
    title: "Enterprise VPN Mesh Network",
    description:
      "Designed and deployed a secure, fault-tolerant VPN mesh connecting three global offices. Achieved zero-downtime failover using EIGRP routing with full IPsec encryption across all tunnels.",
    imagePath: "/images/images.jpeg",
    liveLink: "#",
    githubLink: "#",
    categories: ["Networking", "Security"],
    techStack: ["Cisco ASA", "EIGRP", "IPsec VPN", "Wireshark", "Python"],
  },
  {
    id: 3,
    title: "Draggable Task Manager (Laravel + React)",
    description:
      "Full-stack task management app with drag-and-drop Kanban boards, real-time updates, and role-based access control. Built to handle multi-user workspaces with a REST API backend.",
    imagePath: "/images/freecodecamp-boolfalse-laravel-react-vite-draggable-tasklist.jpg",
    liveLink: "#",
    githubLink: "#",
    categories: ["Development"],
    techStack: ["Laravel", "React", "Vite", "REST API", "MySQL"],
  },
  {
    id: 4,
    title: "Custom CRM Platform",
    description:
      "Built a tailored Customer Relationship Management system for a small business, consolidating lead tracking, pipeline management, and reporting into one platform. Improved sales tracking efficiency by 40%.",
    imagePath: "/images/Energy_Dashboard_2x.jpg.png",
    liveLink: "#",
    githubLink: "#",
    categories: ["Development"],
    techStack: ["PHP", "React", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
];
