"use client";

import { motion } from "motion/react";

import { Socials } from "#/components/socials";

const VARIANTS_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const TRANSITION_SECTION = {
    duration: 0.3,
};

export default function Home() {
    return (
        <>
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-[1]" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-900/5 blur-[100px] z-[1]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-rose-800/10 blur-[100px] z-[1]" />
            </div>
            <div className="relative mx-auto w-full max-w-screen-md flex-1 pt-14 z-[2] px-4 md:px-0">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <motion.header
                            className="flex flex-col gap-1 max-w-xl"
                            variants={VARIANTS_CONTAINER}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.span variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
                                <h1 className="scroll-m-20 font-display font-semibold tracking-tight text-2xl md:text-4xl">
                                    Yehezkiel Dio Sinolungan
                                </h1>
                            </motion.span>
                        </motion.header>
                        <motion.div variants={VARIANTS_CONTAINER} initial="hidden" animate="visible">
                            <motion.article
                                variants={VARIANTS_SECTION}
                                transition={TRANSITION_SECTION}
                                className="mt-6 text-[#8daeac] max-w-screen-sm text-sm md:text-base"
                            >
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                    A software engineer based in Indonesia.
                                </p>
                                <p className="leading-7 [&:not(:first-child)]:mt-4">
                                    Hey, I&apos;m Yehezkiel Dio Sinolungan, also known as Eliziel or Liz, a software
                                    engineer based in Balikpapan, East Kalimantan. I am passionate about building
                                    accessible and delightful digital experiences.
                                </p>
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                    I&apos;m currently an informatics undergraduate student at Universitas Mulia,
                                    Balikpapan. <br />
                                    And also looking for opportunities to work on interesting projects.
                                </p>
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                    I specialize in full-stack web development, maintaining a generalized focus on
                                    front-end, back-end, and devops technologies, though I don&apos;t consider myself an
                                    expert in any specific area.
                                </p>

                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                    My current toolkit features TypeScript, React, Bun, Docker and more, along with
                                    various other tools from the JavaScript ecosystem. I also occasionally experiment
                                    with Rust and always looking to learn new things and improve my skills.
                                </p>

                                <div className="space-y-8 mt-8">
                                    <p className="leading-7">Find me on</p>
                                    <Socials />
                                    <p className="leading-7">
                                        Or mail me at <code>yehezkieldio@proton.me</code>
                                    </p>
                                </div>

                                <p className="leading-7 text-xs md:text-sm text-[#627574] [&:not(:first-child)]:mt-12">
                                    MIT License © 2025-PRESENT Yehezkiel Dio Sinolungan
                                </p>
                            </motion.article>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
