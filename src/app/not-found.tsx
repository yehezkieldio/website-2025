import Link from "next/link";

import { buttonVariants } from "#/components/ui/button";
import { cn } from "#/lib/utils";

export default function NotFound() {
    return (
        <div className="relative mx-auto w-full max-w-screen-md flex-1 pt-32">
            <div className="flex items-center justify-center text-center">
                <div>
                    <header className="flex flex-col gap-1 max-w-xl">
                        <h1 className="text-rose-200 font-display scroll-m-20 font-semibold tracking-tight text-2xl md:text-4xl">
                            404
                        </h1>
                        <p className="text-[#9fc4c1] font-normal leading-7 tracking-normal text-base md:text-xl">
                            {"The page you're looking for doesn't exist."}
                        </p>
                        <Link
                            href="/"
                            passHref
                            className={cn(
                                buttonVariants({ variant: "outline", size: "default" }),
                                "mt-4 w-fit self-center font-mono"
                            )}
                        >
                            Return to Home
                        </Link>
                    </header>
                </div>
            </div>
        </div>
    );
}
