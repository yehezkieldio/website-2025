"use client";

import { useEffect, useState } from "react";

import { Icons } from "#/components/icons";
import { Button } from "#/components/ui/button";
import { cn } from "#/lib/utils";

export function ScrollToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isVisible = window.scrollY > window.innerHeight * 0.25;
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
                show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                "fixed bottom-4 right-4 z-[9999] rounded-full transition-opacity duration-300"
            )}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <Icons.arrowUp />
        </Button>
    );
}
