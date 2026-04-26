import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  x: Twitter,
  mail: Mail,
};

export function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon className="h-5 w-5" />
          </Link>
        );
      })}
    </div>
  );
}
