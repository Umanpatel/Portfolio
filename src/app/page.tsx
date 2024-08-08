"use client"

import * as React from "react"
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
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
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ShineBorder from "@/components/magicui/shine-border";

const BLUR_FADE_DELAY = 0.04;

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    image: "/ReactRooks.png",
    title: "React Rooks",
    description: "React Rooks is a web-based chess game that allows users to play against an AI (Stockfish). It features game history, on-demand gameplay, real-time game analysis, player statistics, and three difficulty levels.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full lg:w-[40%] m-auto p-7 border-2">
      <section id="header" className="pb-10">
        <div className="flex flex-row gap-5 items-center w-full">
          <div className="gap-5 flex justify-center items-center">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none"
                yOffset={8}
                text={`Hi 👋, I'm ${DATA.name.split(" ")[0]} `}
              />
              <BlurFadeText
                className="max-w-[600px] text-xl text-pretty sm:text-xl xl:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 lg:gap-5 pt-5 lg:pt-10">
          <BlurFadeText
            delay={0.30 * 2}
            className="text-xl font-bold tracking-tighter sm:text-3xl xl:text-3xl/none"
            yOffset={8}
            text={`About Me`}
          />
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="max-w-[600px] text-xl text-pretty sm:text-xl xl:text-xl">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </div>
      </section>
      <section id="work" className="pb-10">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
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
      <section id="education" className="pb-10">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills" className="pb-10">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="pb-12">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-xl bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                  Check Out My Work
                </h2>
                <p className="text-black dark:text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&rsquo;ve been involved in creating a wide range of exciting projects, from small projects to large-scale web applications, all highlighting my dedication to coding and design.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 w-full mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ShineBorder
                  className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                  color={["#F3FC91", "#3DDFFC", "#FF0095"]}
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    links={project.links}
                  />
                </ShineBorder>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-12">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full rounded-2xl bg-gradient-to-r from-teal-100 to-violet-100 dark:from-teal-100 dark:to-violet-200">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-4xl font-extrabold tracking-tighter text-black sm:text-6xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have any questions (?), Feel free to reach out.
                <br />
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <p className="mx-auto max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Connect with me on{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-800 hover:underline font-semibold"
                >
                  LinkedIn
                </Link>{" "}
                for quick chats, or send me an{" "}
                <Link
                  href={DATA.contact.social.email.url}
                  className="text-blue-800 hover:underline font-semibold"
                >
                  email
                </Link>{" "}
                for detailed inquiries. Let’s make something great together!
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
