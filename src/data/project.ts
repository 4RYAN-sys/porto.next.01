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
    name: "First Portofolio",
    description: "Portofolio pertama yang sederhana  ",
    github: "https://github.com/4RYAN-sys/hahahaha.git",
    demo: "https://slow-bro.vercel.app/",
    image: "/project-images/project1.jpg",
    tech: ["Javascript", "HTML", "CSS"]
  },
  {
    id: 2,
    name: "Web Biodata ",
    description: "Web sederhana untuk menampilkan biodata",
    github: "https://github.com/4RYAN-sys/New.git",
    demo: "https://new-seven-oatt.vercel.app/",
    image: "/project-images/project2.jpg",
    tech: ["HTML", "CSS",]
  },
  {
    id: 3,
    name: " Portofolio React",
    description: "Project SPA react pertama",
    github: "https://github.com/4RYAN-sys/portofolio-react.git",
    demo: "https://portofolioaryan.netlify.app/",
    image: "/project-images/project3.jpg",
    tech: ["React+vite", "JavaScript"]
  },
];