import Link from "next/link";

interface SocialIconProps {
    icon: React.ComponentType<{ className?: string }>;
    href: string;
}

export function SocialIcon({ icon: Icon, href }: SocialIconProps) {
    return (
        <Link href={href} className="group" target="_blank" rel="noopener noreferrer" passHref>
            <Icon className="text-[#809f9d] group-hover:text-foreground transition-colors duration-300 w-5 h-5" />
        </Link>
    );
}
