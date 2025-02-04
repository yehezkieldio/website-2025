import { Icons } from "#/components/icons";
import { Navbar } from "#/components/navbar";
import { SocialIcon } from "#/components/social-icon";
import { socials } from "#/lib/socials";

export default function Home() {
    return (
        <div className="relative min-h-screen">
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-900/5 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-rose-800/10 blur-[100px]" />
            </div>

            <div className="relative flex min-h-screen w-full flex-col">
                <Navbar />
                <div className="relative mx-auto w-full max-w-screen-md flex-1 pt-14">
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <header className="flex flex-col gap-1">
                                <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">
                                    {"Hey, I'm Yehezkiel Dio"}
                                </h1>
                                <p className="text-[#9fc4c1] font-normal leading-7 tracking-normal text-xl max-w-xl">
                                    {"A software engineer based in Indonesia."}
                                </p>
                            </header>
                            <article className="mt-8 text-[#8daeac] max-w-screen-sm">
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                    I&apos;m Yehezkiel Dio Sinolungan, also known as Eliziel, a software engineer based
                                    in Balikpapan, Indonesia. I specialize in full-stack development, crafting seamless
                                    and efficient solutions across both front-end and back-end, with the occasional
                                    dabbling in infrastructure, architecture, and devops.
                                </p>
                                <div className="mt-12 flex flex-row gap-6">
                                    <SocialIcon icon={Icons.github} href={socials.github} />
                                    <SocialIcon icon={Icons.x} href={socials.x} />
                                    <SocialIcon icon={Icons.instagram} href={socials.instagram} />
                                    <SocialIcon icon={Icons.linkedin} href={socials.linkedin} />
                                </div>
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                    Or mail me at <code className="font-mono">yehezkieldio@proton.me</code>
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
