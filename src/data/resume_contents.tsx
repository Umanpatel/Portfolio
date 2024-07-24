import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, FileDownIcon } from "lucide-react";

export const DATA = {
  name: "Umang Patel",
  initials: "UP",
  url: "",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "I craft impactful software solutions, turning ideas into code.Think twice, code once. Programming isn't about what you know; it's about what you can figure out.There is always one more bug to fix.",
  summary:
    "Namaste! Hello! Bonjour! I'm from the vibrant heart of Gujarat, India, and I'm currently residing in Toronto, ON, Canada. As a passionate full-stack developer, I am dedicated to delivering high-quality and user-friendly software solutions. My deep connection to nature, love for music, and excitement for the world of games inspire my work. I blend my technical expertise with creativity, exploring new strategies and rhythms to drive my innovative journey.",   
  avatarUrl: "/profile1.jpeg",
  skills: [
    "React",
    "Next",
    "Node",
    "Javascript",
    "Typescript",
    "React Query",
    "Tailwind",
    "Java",
    "Spring Boot",
    "Docker",
    "Microservices",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Supabase",
    "WebSockets",
    "Kafka",
    "ORM's [Drizzle, Hibernate]",
    "Git",
    "GitHub Actions",
    "Vercel",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "https://drive.google.com/file/d/10XfioJAuNNsxx757X6fsSvtRLoHVftwF/view?usp=sharing", icon: FileDownIcon, label: "Resume", target: "_blank" },
  ],
  contact: {
    email: "umpatel19041999@gmail.com",
    tel: "+1 (647) 897-3398",
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
    //   X: {
    //     name: "X",
    //     url: "https://x.com/0xadityaa",
    //     icon: Icons.x,

    //     navbar: true,
    //   },
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
      end: "Present",
      description:
        "Developed a job portal using an agile software development lifecycle. Leveraged Supabase as a backend to deliver instant alerts and facilitate efficient matching of job seekers with ad-hoc roles (data entry, retail, warehouse) in their vicinity. This resulted in increased application rates and reduced hiring times.",
    },
    // {
    //   company: "Opensource Contributor",
    //   badges: [],
    //   href: "https://github.com/0xadityaa",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/GitHub.svg",
    //   start: "Sept 2022",
    //   end: "Jan 2023",
    //   description:
    //     "Spearheaded the development of a widely used open-source projects, contributing over 5,000 lines to the Codebase that helped improve the learning experience for new developers in the community.",
    // },
  ],
  education: [
    {
      school: "Humber College",
      href: "https://humber.ca/",
      degree: "Information Technology Solutions",
      logoUrl: "/humber.png",
      start: "Jan 2023",
      end: "Aug 2024",
    },
    {
      school: "Nirma University",
      href: "https://nirmauni.ac.in/",
      degree: "Computer Engineering",
      logoUrl: "/nirma.jpeg",
      start: "June 2017",
      end: "May 2021",
    }
  ],
  projects: [
    {
      title: "React Rooks",
      href: "https://github.com/0xadityaa/React-Rooks-UI",
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
          href: "https://react-rooks-ui.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xadityaa/React-Rooks-UI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ReactRooks.png",
    },
    
    {
      title: "Crypto Maniac",
      href: "https://github.com/0xadityaa/Crypto-Maniac",
      dates: "Jul 2021 - Jan 2022",
      active: true,
      description:
        "This project is a mobile app for crypto paper trading that allows user to perform paper trading on live market data for cryptocurrencies along with features like portfolio tracking, alerts, realtime market news, and more.",
      technologies: [
        "Flutter",
        "Firebase",
        "FCM",
        "GCP",
        "Firestore",
        "Android",
        "iOS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xadityaa/Crypto-Maniac",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Crypto-Maniac.png",
    },
  ],
} as const;
