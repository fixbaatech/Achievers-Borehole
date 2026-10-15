import { MapPin, Ruler } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const cardContent = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.service} — ${project.location}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-navy-deep uppercase backdrop-blur">
          {project.service}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg leading-snug font-semibold text-navy-deep">
          {project.title}
        </h3>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-teal-deep" aria-hidden="true" />
            {project.location}
          </span>
          {project.depth && (
            <span className="flex items-center gap-1.5">
              <Ruler className="h-4 w-4 text-teal-deep" aria-hidden="true" />
              {project.depth}
            </span>
          )}
        </div>
        
        {project.youtubeUrl && (
          <div className="mt-auto pt-5">
            {/* Converted from <a> to <div>. Hover color uses 'group-hover' to trigger when the card is hovered */}
            <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F59E0B] group-hover:text-[#D97706] transition-colors">
              Open on YouTube 
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );

  // If there is a YouTube URL, wrap the entire card in a native <a> tag
  if (project.youtubeUrl) {
    return (
      <a 
        href={project.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("media-zoom card-quiet group flex flex-col cursor-pointer block", className)}
      >
        {cardContent}
      </a>
    );
  }

  // If no YouTube URL exists, render the standard article wrapper
  return (
    <article className={cn("media-zoom card-quiet group flex flex-col", className)}>
      {cardContent}
    </article>
  );
}