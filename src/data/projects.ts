export type ProjectCategory = "Development" | "Mobile" | "Fintech" | "Education" | "Tools" | "On-site";

export interface GalleryItem {
  type: "image" | "video";
  src: string;
  caption?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  liveLink?: string;
  githubLink: string;
  categories: ProjectCategory[];
  techStack: string[];
  featuredOnly?: boolean; // if false, only show in /projects, not on homepage
  isGallery?: boolean;    // show "View Gallery" instead of "View Live"
  gallery?: GalleryItem[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "VTU App — Airtime, Data & Cable Platform",
    description:
      "Wallet-based VTU reselling platform supporting airtime top-up, data bundles, and cable TV subscriptions. Built as a full monorepo with a Next.js web app and a Flutter mobile client sharing a single backend API.",
    imagePath: "/images/vtu-app.png",
    githubLink: "https://github.com/Abdurrahman775/vtu-app",
    categories: ["Fintech", "Mobile"],
    techStack: ["Next.js", "TypeScript", "Flutter", "Dart", "Node.js", "PostgreSQL", "Paystack"],
  },
  {
    id: 2,
    title: "EduLearn — Learning Management System",
    description:
      "Full-featured LMS with course creation, student enrollment, quiz management, and progress tracking. Designed for schools and training organisations managing multiple instructors and learners.",
    imagePath: "/images/edulearn.png",
    liveLink: "http://ab-dev.infinityfree.me/edulearn",
    githubLink: "https://github.com/Abdurrahman775/edulearn-lms",
    categories: ["Education", "Development"],
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    id: 3,
    title: "Employee Management System",
    description:
      "HR dashboard for managing staff records, attendance tracking, leave requests, and basic payroll summaries. Simplifies people operations for small and medium businesses.",
    imagePath: "/images/employee-mgmt.png",
    liveLink: "http://ab-dev.infinityfree.me/employee-mgmt",
    githubLink: "https://github.com/Abdurrahman775/employee-mgmt",
    categories: ["Development"],
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    id: 4,
    title: "Client Portal",
    description:
      "Agency-client collaboration platform with project tracking, milestone updates, file sharing, and invoicing. Keeps clients informed and agencies organised without back-and-forth emails.",
    imagePath: "/images/client-portal.png",
    liveLink: "http://ab-dev.infinityfree.me/client-portal/login.php",
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
    liveLink: "http://ab-dev.infinityfree.me/cbt",
    githubLink: "https://github.com/Abdurrahman775/chprbn-cbt",
    categories: ["Education", "Development"],
    techStack: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
  },
  {
    id: 6,
    title: "Northland School Management System",
    description:
      "Multi-role school management platform built for Northland Schools, Kano. Covers student registration, teacher management, timetable generation, results processing, attendance, and a full finance module with fee collection, expense approval, and receipt generation.",
    imagePath: "/images/nskn.png",
    liveLink: "http://ab-dev.infinityfree.me/nskn",
    githubLink: "https://github.com/Abdurrahman775/nskn",
    categories: ["Education", "Development"],
    techStack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "PhpSpreadsheet"],
  },
  {
    id: 7,
    title: "Traxovia AI — Algorithmic Forex Trading Platform",
    description:
      "ICT-powered trading platform with a 7-gate signal filter, XGBoost AI layer, and live MT5 execution across 5 major forex pairs. Features backtesting engine, Stripe subscription billing, Telegram alerts, and a rolling drawdown circuit breaker.",
    imagePath: "/images/traxovia.png",
    githubLink: "https://github.com/Abdurrahman775/traxovia",
    categories: ["Fintech", "Development"],
    techStack: ["Python", "FastAPI", "XGBoost", "React", "Celery", "PostgreSQL", "Stripe"],
  },
  {
    id: 9,
    title: "CCTV Installation — Site Work",
    description:
      "On-site CCTV camera installation project. Covers cable routing, camera mounting, DVR configuration, and full system testing across a multi-room facility.",
    imagePath: "/images/cctv/cctv-1.jpg",
    githubLink: "https://github.com/Abdurrahman775",
    categories: ["On-site"],
    techStack: ["CCTV", "Cable Routing", "DVR Setup", "Network Config"],
    isGallery: true,
    gallery: [
      { type: "image", src: "/images/cctv/cctv-1.jpg", caption: "Installation site overview" },
      { type: "image", src: "/images/cctv/cctv-2.jpg", caption: "Camera mounting" },
      { type: "image", src: "/images/cctv/IMG_8861.jpg", caption: "Cable routing" },
      { type: "image", src: "/images/cctv/IMG_8864.jpg", caption: "DVR configuration" },
      { type: "image", src: "/images/cctv/IMG_8871.jpg", caption: "Camera positioning" },
      { type: "image", src: "/images/cctv/IMG_8875.jpg", caption: "Site walkthrough" },
      { type: "image", src: "/images/cctv/IMG_8877.jpg", caption: "System testing" },
      { type: "image", src: "/images/cctv/IMG_8878.jpg", caption: "Final setup" },
      { type: "image", src: "/images/cctv/IMG_8879.jpg", caption: "Full coverage check" },
      { type: "image", src: "/images/cctv/IMG_8880.jpg", caption: "Equipment closeup" },
      { type: "image", src: "/images/cctv/IMG_8881.jpg", caption: "Mounting bracket detail" },
      { type: "image", src: "/images/cctv/IMG_8882.jpg", caption: "Completed installation" },
      { type: "video", src: "/images/cctv/IMG_8858.mp4", caption: "Installation process" },
      { type: "video", src: "/images/cctv/IMG_8860.mp4", caption: "Cable work" },
      { type: "video", src: "/images/cctv/IMG_8872.mp4", caption: "Camera field of view" },
      { type: "video", src: "/images/cctv/IMG_8876.mp4", caption: "System live test" },
      { type: "video", src: "/images/cctv/IMG_8883.mp4", caption: "Final walkthrough" },
    ],
  },
  {
    id: 10,
    title: "Pricing & PRD Generator Tool",
    description:
      "Web tool that generates structured product requirement documents and pricing strategy recommendations. Helps founders and product teams go from idea to actionable spec faster.",
    imagePath: "/images/pricing-tool.png",
    liveLink: "http://ab-dev.infinityfree.me/pricing-tool",
    githubLink: "https://github.com/Abdurrahman775/pricing-tool",
    categories: ["Tools"],
    techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    featuredOnly: false,
  },
];
