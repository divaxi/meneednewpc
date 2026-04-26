import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ExperienceCard } from "./experience-card";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>
      
      <div>
        <ol className="group/list space-y-12">
          {experiences.map((experience) => (
            <li key={experience.id}>
              <ExperienceCard experience={experience} />
            </li>
          ))}
        </ol>
        
        <div className="mt-12">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
              View Full Resume
            </span>
            <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
          </Link>
        </div>
      </div>
    </section>
  );
}
