import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Experience } from "@/lib/data";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
        {experience.period}
      </header>

      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug">
          <Link
            href={experience.companyUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>
              {experience.title}
              <span className="mx-1 text-muted-foreground">·</span>
              {experience.company}
              <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
            </span>
          </Link>
        </h3>

        <p className="mt-2 text-sm leading-normal text-muted-foreground">
          {experience.description}
        </p>

        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {experience.technologies.map((tech) => (
            <li key={tech} className="mr-1.5 mt-2">
              <span className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
