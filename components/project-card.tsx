import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      {/* Project Image */}
      <div className="z-10 sm:order-2 sm:col-span-2">
        {project.image && (
          <div className="relative aspect-video overflow-hidden rounded-md border border-border/50 bg-secondary/30">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        )}
      </div>

      <div className="z-10 sm:order-1 sm:col-span-6">
        <h3 className="font-medium leading-snug">
          <Link
            href={project.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>
              {project.title}
              <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
            </span>
          </Link>
        </h3>

        <p className="mt-2 text-sm leading-normal text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {project.technologies.map((tech) => (
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
