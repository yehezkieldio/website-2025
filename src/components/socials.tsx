import { socials } from "#/lib/socials";

import { Icons } from "./icons";
import { SocialIcon } from "./social-icon";

interface SocialLink {
    icon: React.ComponentType<{ className?: string }>;
    href: string;
}

const socialLinks: SocialLink[] = [
    { icon: Icons.github, href: socials.github },
    { icon: Icons.x, href: socials.x },
    { icon: Icons.instagram, href: socials.instagram },
    { icon: Icons.linkedin, href: socials.linkedin },
];

export function Socials() {
    return (
        <div className="flex flex-row gap-6 mt-6">
            {socialLinks.map((social, index) => (
                <SocialIcon key={index} icon={social.icon} href={social.href} />
            ))}
        </div>
    );
}
