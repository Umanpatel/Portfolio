import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookPenIcon } from "lucide-react";

export const DATA = {
  name: "Umang Patel",
  initials: "UP",
  url: "",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "I craft impactful software solutions, turning ideas into code. Think twice, code once. Programming isn't about what you know; it's about what you can figure out.There is always one more bug to fix.",
  summary:
    "Namaste! Hello! Bonjour! I'm from the vibrant heart of Gujarat, India, and I'm currently coding from Toronto, Canada. As a passionate full-stack developer, I am dedicated to delivering high-quality and user-friendly software solutions. Focusing on mastering React.js, Next.js. Beyond coding, I am a passionate gamer who sees technology as a playground of endless possibilities ♾️. Gaming 🎮 fuels my creativity, helping me think outside the box and build engaging, immersive applications.",   
  avatarUrl: "/profile1.jpeg",
  skills: [
    "React",
    "React Query",
    "Next",
    "Node",
    "Javascript",
    "Typescript",
    "Tailwind",
    "Java",
    "Spring Boot",
    "Spring Security",
    "Docker",
    "Microservices",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "RESTful APIs",
    "Supabase",
    "WebSockets",
    "Kafka",
    "Git",
    "GitHub Actions",
    "Vercel",
    "Imagekit",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
    { href: "/blogs", icon: NotebookPenIcon, label: "Blog" },
  ],
  contact: {
    email: "umpatel19041999@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Umanpatel",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/umang-patel-4b888a1a6/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:umpatel19041999@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "J&M Group",
      href: "http://www.jm-group.ca",
      location: "Toronto, ON",
      title: "Fullstack Developer",
      logoUrl: "/j&m.png",
      start: "Apr 2024",
      end: "Aug 2024",
      description:
        "Developed a job portal using an agile software development lifecycle. Leveraged Supabase as a backend to deliver instant alerts and facilitate efficient matching of job seekers with ad-hoc roles (data entry, retail, warehouse) in their vicinity. This resulted in increased application rates and reduced hiring times.",
    },
  ],
  education: [
    {
      school: "Humber College",
      href: "https://appliedtechnology.humber.ca/programs/information-technology-solutions.html",
      degree: "Information Technology Solutions",
      logoUrl: "/humber.png",
      start: "Jan 2023",
      end: "Aug 2024",
    },
    {
      school: "Nirma University",
      href: "https://cse.nirmauni.ac.in/",
      degree: "Computer Engineering",
      logoUrl: "/nirma.jpeg",
      start: "June 2017",
      end: "May 2021",
    }
  ],
  projects: [
    {
      title: "React Rooks",
      href: "https://github.com/Umanpatel/React-Rooks",
      dates: "Jun - Jul 2024",
      active: true,
      description:
        "React Rooks is a web-based chess game that allows users to play against an AI (Stockfish). It features game history, on-demand gameplay, real-time game analysis, player statistics, and three difficulty levels.",
      technologies: [
        "Next.js",
        "Typescript",
        "WebSockets",
        "WASM",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chess-against-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Umanpatel/React-Rooks",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ReactRooks.png",
    },
    {
      title: "AI-Powered Career Coach",
      href: "",
      dates: "March 2025",
      active: true,
      description:
        "Developed a comprehensive career development platform using Next.js 14 and Google Gemini AI that helps professionals accelerate their careers. The application features AI-powered resume building, intelligent cover letter generation, and adaptive interview preparation.",
      technologies: [
        "Next.js 14",
        "Google Gemini AI",
        "Prisma",
        "Zod",
        "PostgreSQL",
        "Clerk",
        "Inngest",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-career-coach-tan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Umanpatel/AI-Career-Coach",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ai-career-coach.png",
    },
    {
      title: "Reels Pro Social Media",
      href: "https://github.com/Umanpatel/ReelsProSocialMedia",
      dates: "Feb 2025",
      active: true,
      description:
        "A modern Next.js application for managing and selling video content using ImageKit integration. This project provides a full-featured platform with user authentication, video upload capabilities.",
      technologies: [
        "Next.js 15",
        "React 19",
        "Typescript",
        "Imagekit",
        "Tailwind CSS",
        "MongoDB",
        "DaisyUI",
        "React Hook Form",
      ],
      links: [
        {
          type: "Website",
          href: "https://reels-pro-social-media.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Umanpatel/ReelsProSocialMedia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/reelpro.png",
    },
    {
      title: "E-Commerce Microservices",
      href: "https://github.com/Umanpatel/E-Commerce_MicroServices",
      dates: "August 2024",
      active: true,
      description:
        "This project is a basic e-commerce application designed using a microservices architecture. It includes distinct services for handling Products, Orders, Admin operations, and Image management, all coordinated through an API Gateway. Each service is ensuring scalability and flexibility in managing the application.",
      technologies: [
        "PostgreSQL/H2Databse",
        "Spring Boot",
        "Apache Kafka",
        "Spring Cloud Gateway",
        "React.js",
        "Docker",
        "Open Feign",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Umanpatel/E-Commerce_MicroServices",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/EcommerceMicroservice.png",
    },
    {
      title: "Area Estimation Using HyperSpectral Image",
      href: "https://github.com/Umanpatel/Area-Estimation-Of-HyperSpectral-MultiSpectral-Images-and-Classification",
      dates: "Jan 2021 - May 2021",
      active: true,
      description:
        "I implemented a Hybrid-Spectral-Net model at Nirma University, focusing on hyperspectral image classification using CNN and PCA. The project achieved high accuracy in classifying and estimating the area of hyperspectral and multispectral images.",
      technologies: [
        "Jupyter",
        "Python",
        "Machine Learning",
        "CNN",
        "PCA",
        "Keras, Sklearn, Numpy",
        "GNU Octave",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Umanpatel/Area-Estimation-Of-HyperSpectral-MultiSpectral-Images-and-Classification",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/MajorProject.jpg",
    },
  ],
} as const;
