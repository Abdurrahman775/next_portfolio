export type ProjectCategory = "Development" | "Mobile" | "Fintech" | "Education" | "Tools";

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
    title: "VTU App — Airtime, Data & Cable Platform",
    description:
      "Wallet-based VTU reselling platform supporting airtime top-up, data bundles, and cable TV subscriptions. Built as a full monorepo with a Next.js web app and a Flutter mobile client sharing a single backend API.",
    imagePath: "/images/vtu-app.png",
    liveLink: "#",
    githubLink: "https://github.com/Abdurrahman775/vtu-app",
    categories: ["Fintech", "Mobile"],
    techStack: ["Next.js", "TypeScript", "Flutter", "Dart", "Node.js", "PostgreSQL", "Paystack"],
  },
  {
    id: 2,
    title: "Pricing & PRD Generator Tool",
    description:
      "Web tool that generates structured product requirement documents and pricing strategy recommendations. Helps founders and product teams go from idea to actionable spec faster.",
    imagePath: "/images/pricing-tool.png",
    liveLink: "#",
    githubLink: "https://github.com/Abdurrahman775/pricing-tool",
    categories: ["Tools"],
    techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 3,
    title: "EduLearn — Learning Management System",
    description:
      "Full-featured LMS with course creation, student enrollment, quiz management, and progress tracking. Designed for schools and training organisations managing multiple instructors and learners.",
    imagePath: "/images/edulearn.png",
    liveLink: "#",
    githubLink: "https://github.com/Abdurrahman775/edulearn-lms",
    categories: ["Education", "Development"],
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    id: 4,
    title: "Client Portal",
    description:
      "Agency-client collaboration platform with project tracking, milestone updates, file sharing, and invoicing. Keeps clients informed and agencies organised without back-and-forth emails.",
    imagePath: "/images/client-portal.png",
    liveLink: "#",
    githubLink: "https://github.com/Abdurrahman775/client-portal",
    categories: ["Development"],
    techStack: ["PHP", "MySQL", "JavaScript", "CSS"],
  },
  {
    id: 5,
    title: "CBT Examination Platform",
    description:
      "Computer-based testing system supporting multiple subjects, timed assessments, randomised questions, and instant result calculation. Used for academic and professional examination scenarios.",
    imagePath: "/images/cbt.png",
    liveLink: "#",
    githubLink: "https://github.com/Abdurrahman775/chprbn-cbt",
    categories: ["Education", "Development"],
    techStack: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
  },
  {
    id: 6,
    title: "Employee Management System",
    description:
      "HR dashboard for managing staff records, attendance tracking, leave requests, and basic payroll summaries. Simplifies people operations for small and medium businesses.",
    imagePath: "/images/employee-mgmt.png",
    liveLink: "#",
    githubLink: "https://github.com/Abdurrahman775/employee-mgmt",
    categories: ["Development"],
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    id: 7,
    title: "Northland School Management System",
    description:
      "Multi-role school management platform built for Northland Schools, Kano. Covers student registration, teacher management, timetable generation, results processing, attendance, and a full finance module with fee collection, expense approval, and receipt generation.",
    imagePath: "/images/nskn.png",
    liveLink: "#",
    githubLink: "https://github.com/Abdurrahman775/nskn",
    categories: ["Education", "Development"],
    techStack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "PhpSpreadsheet"],
  },
];
