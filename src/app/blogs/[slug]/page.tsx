import { getPost } from "@/data/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlurFade from "@/components/magicui/blur-fade";
import { ShareButtons } from "@/components/sharebutton";
import { headers } from "next/headers";

const BLUR_FADE_DELAY = 0.04;

interface BlogParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogParams): Promise<Metadata> {
  const post = await getPost(params.slug);
  

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function BlogPost({ params }: BlogParams) {
  const post = await getPost(params.slug);
  const headersList = headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const currentUrl = `${protocol}://${host}/blogs/${params.slug}`;
  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen w-full max-w-[95%] sm:max-w-[85%] lg:max-w-[55%] mx-auto px-4 sm:px-6 lg:px-10 py-6">
      <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none overflow-hidden">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <header className="mb-4 sm:mb-6 lg:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 break-words">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <time dateTime={post.date} className="whitespace-nowrap">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.readingTime && (
                <>
                  <span className="hidden sm:inline">•</span>
                  <span className="whitespace-nowrap">{post.readingTime}</span>
                </>
              )}
            </div>
          </header>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div 
            className="prose-sm sm:prose-base lg:prose-lg prose-zinc dark:prose-invert
            prose-pre:overflow-x-auto prose-pre:max-w-full
            prose-code:text-sm prose-code:sm:text-base
            prose-img:rounded-lg prose-img:mx-auto prose-img:max-w-full"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <p className="text-muted-foreground text-center italic mt-8 mb-16 animate-fadeInUp">
              Written by{" "}
              <span className="inline-block font-semibold hover:text-primary transition-transform duration-300 hover:scale-110 animate-shimmer">
                  Umang Patel
              </span>
          </p>
          <div className="mt-8 mb-16">
            <h4 className="text-center text-sm text-muted-foreground mb-2">Share With</h4>
            <ShareButtons url={currentUrl} title={post.title} />
          </div>
        </BlurFade>
      </article>
    </main>
  );
}