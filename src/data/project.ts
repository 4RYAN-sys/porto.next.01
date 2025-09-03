// src/types/project.ts
export interface Project {
  id: number;
  name: string;
  description: string;
  github: string;
  demo: string;
  image: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce dengan Next.js dan Stripe integration",
    github: "https://github.com/username/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    image: "/project-images/ecommerce.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind", "Stripe"]
  },
  {
    id: 2,
    name: "Task Management App",
    description: "Aplikasi manajemen tugas dengan drag-and-drop feature",
    github: "https://github.com/username/task-app",
    demo: "https://task-app.vercel.app",
    image: "/project-images/task.jpg",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"]
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "Dashboard cuaca real-time dengan data visualization",
    github: "https://github.com/username/weather",
    demo: "https://weather-demo.vercel.app",
    image: "/project-images/weather.jpg",
    tech: ["Next.js", "Chart.js", "API Integration"]
  },
  {
    id: 4,
    name: "Social Media Clone",
    description: "Clone Instagram dengan fitur posting dan komentar",
    github: "https://github.com/username/social-clone",
    demo: "https://social-clone.vercel.app",
    image: "/project-images/social.jpg",
    tech: ["Next.js", "Firebase", "Tailwind"]
  },
  {
    id: 5,
    name: "Portfolio Generator",
    description: "Tools untuk generate portfolio otomatis",
    github: "https://github.com/username/portfolio-gen",
    demo: "https://portfolio-gen.vercel.app",
    image: "/project-images/portfolio.jpg",
    tech: ["Next.js", "TypeScript", "AI Integration"]
  },
  {
    id: 6,
    name: "Recipe Finder App",
    description: "Aplikasi pencarian resep dengan filter kategori",
    github: "https://github.com/username/recipe-finder",
    demo: "https://recipe-finder.vercel.app",
    image: "/project-images/recipe.jpg",
    tech: ["React", "API", "Tailwind"]
  },
  {
    id: 7,
    name: "Chat Application",
    description: "Real-time chat dengan WebSocket",
    github: "https://github.com/username/chat-app",
    demo: "https://chat-app.vercel.app",
    image: "/project-images/chat.jpg",
    tech: ["Next.js", "Socket.io", "MongoDB"]
  },
  {
    id: 8,
    name: "Expense Tracker",
    description: "Aplikasi tracking pengeluaran dengan grafik",
    github: "https://github.com/username/expense-tracker",
    demo: "https://expense-tracker.vercel.app",
    image: "/project-images/expense.jpg",
    tech: ["Next.js", "Chart.js", "LocalStorage"]
  }
];