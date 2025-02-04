"use client";

import * as React from "react";

import { ArrowUp } from "lucide-react";

import { cn } from "#/lib/utils";

import { Button } from "./ui/button";

export function ScrollToTop() {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const isVisible = window.scrollY > 300;
            setShow(isVisible);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Button
            variant="outline"
            size="icon"
            className={cn(
                "fixed bottom-4 right-4 z-[9999] rounded-full transition-opacity duration-300",
                show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ArrowUp className="h-4 w-4" />
        </Button>
    );
}
