export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmad Rahman",
    role: "Project Manager",
    company: "TechCorp Indonesia",
    content: "Aryan is an exceptional web developer. His attention to detail and ability to deliver clean, efficient code is impressive. He successfully delivered our e-commerce platform ahead of schedule.",
    avatar: "/avatars/avatar1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    role: "UI/UX Designer",
    company: "Creative Studio",
    content: "Working with Aryan was a great experience. He has a strong understanding of modern web technologies and is very collaborative. The portfolio website he built for us exceeded our expectations.",
    avatar: "/avatars/avatar2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Tech Lead",
    company: "StartupXYZ",
    content: "Aryan brought fresh ideas and modern solutions to our project. His React skills are top-notch, and he quickly adapted to our existing codebase. Highly recommended!",
    avatar: "/avatars/avatar3.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Maya Sari",
    role: "CEO",
    company: "Digital Agency",
    content: "We hired Aryan for a complex web application, and he delivered beyond our expectations. His problem-solving skills and dedication to quality work are outstanding.",
    avatar: "/avatars/avatar4.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "Rizki Pratama",
    role: "Full Stack Developer",
    company: "Freelance",
    content: "Aryan is not just a skilled developer but also a great team player. His knowledge of both frontend and backend technologies makes him a valuable asset to any project.",
    avatar: "/avatars/avatar5.jpg",
    rating: 5
  },
  {
    id: 6,
    name: "Dewi Anggraini",
    role: "Product Manager",
    company: "InnovateTech",
    content: "The landing page Aryan created for our product increased our conversion rate by 40%. His understanding of user experience and modern design principles is excellent.",
    avatar: "/avatars/avatar6.jpg",
    rating: 5
  }
];
