import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { DATA } from "@/data/resume_contents";
import Markdown from "react-markdown";
import { ResumeCard } from "@/components/resume-card";

const BLUR_FADE_DELAY = 0.04;

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "👋,",
    },
    {
      text: "I'm",
    },
    {
      text: "Umang",
    },
    
  ];
  return(
    <TypewriterEffectSmooth words={words} />
  );
}

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "React Rooks",
    description: "React Rooks is a web-based chess game that allows users to play against an AI (Stockfish). It features game history, on-demand gameplay, real-time game analysis, player statistics, and three difficulty levels.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];


export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 pl-5 pr-7 light:bg-white">
      <section id="header">
        <div className="flex flex-row gap-5 items-center">
          <div>
            {/* <Image
              src="/profile1.jpeg" // Path relative to the 'public' directory
              alt=""
              width={110}
              height={110}
              className="max-w-xs sm:max-w-sm rounded-full"
            /> */}
            {/* <Avatar className="w-28 h-28 lg:w-32 lg:h-32">
              <AvatarImage src="/profile1.jpeg" />
              <AvatarFallback className="max-w-xs sm:max-w-sm rounded-full">UP</AvatarFallback>
            </Avatar> */}
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
          {/* <Avatar className="w-28 h-28 lg:w-32 lg:h-32">
            <AvatarImage src="/profile1.jpeg" />
            <AvatarFallback className="max-w-xs sm:max-w-sm rounded-full">CN</AvatarFallback>
          </Avatar> */}
          <section id="about">
            {/* <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-2xl font-bold pb-3 tracking-tighter sm:text-3xl xl:text-3xl/none"
              yOffset={8}
              text={` Hi👋, I'm Umang`}
            /> */}
            <TypewriterEffectSmoothDemo/>
            {/* <BlurFade delay={0.25 * 2} inView>
              <span className="text-sm text-pretty sm:text-2xl xl:text-2xl/none">
                I craft impactful software solutions, turning ideas into code.
                Programming isn't about what you know; it's about what you can figure out.
                There is always one more bug to fix.
              </span>
            </BlurFade> */}
            <BlurFadeText
                className="text-sm text-pretty sm:text-2xl xl:text-2xl/none"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
          </section>
        </div>
        <div className="flex flex-col gap-1 lg:gap-5 pt-5 lg:pt-10">
          <BlurFadeText
            delay={0.30 * 2}
            className="text-xl font-bold tracking-tighter sm:text-3xl xl:text-3xl/none"
            yOffset={8}
            text={`About Me`}
          />
          {/* <BlurFade delay={0.40 * 2} inView>
            <span className="text-sm text-pretty sm:text-2xl xl:text-2xl/none">
              Namaste! Hello! Bonjour! I'm from the vibrant heart of Gujarat, India, and I'm currently residing in Toronto, ON, Canada.
              As a passionate full-stack developer, I am dedicated to delivering high-quality and user-friendly software solutions.
              My deep connection to nature, love for music, and excitement for the world of games inspire my work.
              I blend my technical expertise with creativity, exploring new strategies and rhythms to drive my innovative journey.
            </span>
          </BlurFade> */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="text-sm text-pretty sm:text-2xl xl:text-2xl/none">
            {DATA.summary}
          </Markdown>
        </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3 pt-5">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-bold">⚙️ Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <h2>3D card Effect Component Aceternity</h2>
      <h2>Bento grid component aceternity for projects </h2>
      <BentoGridDemo/>
      <h2>Tracing beams</h2>
    </main>
  );
}
