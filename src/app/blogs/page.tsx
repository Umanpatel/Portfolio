import BlurFade from "@/components/magicui/blur-fade"
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume_contents";

const BLUR_FADE_DELAY = 0.04;

function Blog() {
    return (
        <main className="flex flex-col min-h-screen w-full lg:w-[55%] m-auto p-7 border-2 lg:p-10">
            <section id="blogs" className="pb-12">
              <div className="space-y-12 w-full py-12">
                <BlurFade delay={BLUR_FADE_DELAY * 11}>
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="inline-block rounded-xl bg-foreground text-background px-3 py-1 text-m">
                        Welcome to My Blog
                      </div>
                      {/* <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl ">
                        I&rsquo;ve been <a className='text-red-600 underline'>Building Cool✨ & Innovative💡Projects.</a>
                      </h2> */}
                      <p className="text-black dark:text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Exciting things are coming! I'm in the process of writing blogs on full-stack development, AI, and software engineering. Check back soon for updates!
                      </p>
                    </div>
                  </div>
                </BlurFade>
                {/* <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 w-full mx-auto">
                  {DATA.projects.map((project, id) => (
                    <BlurFade
                      key={project.title}
                      delay={BLUR_FADE_DELAY * 12 + id * 0.05}
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
                    </BlurFade>
                  ))}
                </div> */}
              </div>
            </section>
        </main>
    )
  }
  
  export default Blog