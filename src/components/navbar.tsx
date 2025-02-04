"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";

import { Icons } from "#/components/icons";
import { Button } from "#/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "#/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "#/components/ui/sheet";
import { socials } from "#/lib/socials";
import { cn } from "#/lib/utils";

interface NavigationItem {
    title: string;
    href: string;
    icon: React.ReactNode | string;
}

const navigationItems: NavigationItem[] = [
    { title: "About", href: "/about", icon: "" },
    { title: "Writing", href: "/posts", icon: "" },
    { title: "Projects", href: "/projects", icon: "" },
    {
        title: "X",
        href: socials.x,
        icon: <Icons.x />,
    },
    {
        title: "GitHub",
        href: socials.github,
        icon: <Icons.github />,
    },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="font-mono">
            <div className="flex items-center justify-between px-4 py-7 md:py-7 max-w-7xl mx-auto">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        className="rounded-full border transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        src="/android-chrome-512x512.png"
                        alt="Yehezkiel Dio"
                        width={40}
                        height={40}
                    />
                </Link>

                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink
                                        href={item.href}
                                        className={cn(
                                            "group inline-flex",
                                            "h-9 w-max items-center justify-center",
                                            "px-4 py-2",
                                            "text-base font-base tracking-tight",
                                            "text-[#809f9d]",
                                            "bg-transparent",
                                            "transition-colors duration-300",
                                            "hover:text-foreground",
                                            "focus:bg-background focus:text-foreground focus:outline-none",
                                            "data-[active]:bg-accent/50",
                                            "data-[state=open]:bg-background/50",
                                            "disabled:pointer-events-none disabled:opacity-50"
                                        )}
                                        target={item.icon ? "_blank" : undefined}
                                        rel={item.icon ? "noopener noreferrer" : undefined}
                                    >
                                        {item.icon || item.title}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTitle hidden={true}>Yehezkiel Dio</SheetTitle>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="rounded-full">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col space-y-4 mt-4">
                                {navigationItems.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="text-lg font-medium font-mono"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
