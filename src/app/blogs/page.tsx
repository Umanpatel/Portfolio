import BlurFade from "@/components/magicui/blur-fade"
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

async function Blog() {
  const { posts, total, hasMore } = await getBlogPosts(1, 10);

  return (
    <main className="flex flex-col min-h-screen w-full lg:w-[55%] m-auto p-7 border-2 lg:p-10">
      <section id="blogs" className="pb-12">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-xl bg-foreground text-background px-3 py-1 text-m">
                  The Codeverse of Umang
                </div>
                <p className="text-black dark:text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Welcome to my digital playground, where code meets creativity! Every blog I share is a reflection of my thoughts, experiences, and experiments in the world of technology. From building scalable applications to navigating the challenges of software development, I document my learnings and insights. Let&apos;s grow and innovate together!</p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="inline-block rounded-xl bg-foreground text-background px-3 py-1">
              Latest Posts
            </div>
          </BlurFade>
          <div className="grid gap-8">
            {posts.map((post) => (
              <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * 12}>
                <article className="group relative rounded-lg border p-6 hover:bg-muted transition-colors">
                  <Link href={`/blogs/${post.slug}`} className="block">
                    <div className="flex flex-col space-y-2">
                      <h2 className="text-2xl font-bold tracking-tight">{post.title}</h2>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        {post.readingTime && (
                          <>
                            <span>•</span>
                            <span>{post.readingTime}</span>
                          </>
                        )}
                      </div>
                      <p className="text-muted-foreground">{post.summary}</p>
                    </div>
                  </Link>
                </article>
              </BlurFade>
            ))}
          </div>

          {total === 0 && (
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="text-center text-muted-foreground">
                No blog posts found.
              </div>
            </BlurFade>
          )}
        </div>
        
      </section>
    </main>
  )
}

export default Blog