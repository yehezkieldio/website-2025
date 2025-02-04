import { Navbar } from "#/components/navbar";
import { Separator } from "#/components/ui/separator";

export default function Information() {
    return (
        <div className="relative min-h-screen">
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-900/5 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-rose-800/10 blur-[100px]" />
            </div>

            <div className="relative flex min-h-screen w-full flex-col">
                <Navbar />
                <div className="relative mx-auto w-full max-w-screen-lg flex-1 pt-14">
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <header className="flex flex-col gap-1 text-left">
                                <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">
                                    About Me
                                </h1>
                            </header>
                            <Separator className="mt-4 mb-4" />
                            <article className="text-[#8daeac] max-w-screen-sm">
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                    Hello! I&apos;m Yehezkiel Dio Sinolungan, but you can call me Dio or Ezekiel (the
                                    English version of my first name). On the Internet, I sometimes go by the nicknames
                                    Eliziel or Liz. Currently, I&apos;m a Informatics student at Universitas Mulia,
                                    Balikpapan, East Kalimantan, Indonesia.
                                </p>
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                    I&apos;m a generalist programmer with a strong passion for web development. I’ve
                                    been coding since 2018, exploring a variety of technologies and programming
                                    languages along the way. My expertise lies primarily in TypeScript and the broader
                                    JavaScript ecosystem.
                                </p>
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                    Most of my experience has been as a full-stack developer, building websites and
                                    APIs, but I&apos;ve also dabbled in Rust, DevOps, and infrastructure management.
                                    This includes working with Docker, continuous integration and delivery (CI/CD)
                                    pipelines, and handling VPS. There’s nothing quite as satisfying as seeing GitHub
                                    Actions workflows run seamlessly or deploying a well-optimized system.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
