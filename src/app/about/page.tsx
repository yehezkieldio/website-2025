"use client";

import { motion } from "motion/react";

import { TRANSITION_SECTION, VARIANTS_CONTAINER, VARIANTS_SECTION } from "#/lib/motion";

export default function About() {
    return (
        <>
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-[1]" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-900/5 blur-[100px] z-[1]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-rose-800/10 blur-[100px] z-[1]" />
            </div>
            <div className="relative mx-auto w-full max-w-screen-lg flex-1 pt-14 z-[2] px-4 md:px-0">
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
                                    A Little About Me
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas quibusdam
                                    iusto quis, deserunt fuga modi, minus sapiente odit accusantium, non omnis maiores
                                    tempora.
                                </p>
                            </motion.article>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
