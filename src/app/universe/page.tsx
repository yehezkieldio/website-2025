import { Navbar } from "#/components/navbar";

export default function Universe() {
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
                                    Technology Stack and Tools
                                </h1>
                                <p className="text-[#9fc4c1] font-normal leading-7 tracking-normal text-base">
                                    My technology stack and tools that I use for development, design, and productivity.
                                </p>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
