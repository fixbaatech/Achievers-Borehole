import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle, ExternalLink } from "lucide-react";
import heroDrilling from "@/assets/hero-drilling.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/seo";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/videos")({
  head: () =>
    pageMeta({
      title: "Video Gallery | Achievers Geotechnical",
      description: "Watch our latest borehole drilling and water system projects across Nigeria.",
      path: "/videos",
    }),
  component: VideosPage,
});

function VideosPage() {
  // Extract all projects that have a YouTube URL so they populate automatically
  const videoProjects = projects.filter((p) => p.youtubeUrl);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Project Videos"
        lede="Watch our teams in action on sites across Ogun State and beyond."
        image={heroDrilling}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Videos" }]}
      />

      <section className="section surface-muted">
        <div className="shell">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-navy-deep sm:text-3xl">
              Latest Field Documentation & Drilling Operations
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Explore our live video logs showcasing successful borehole drills, difficult terrain solutions, and client handovers across Abeokuta and Ogun State.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videoProjects.map((project, i) => {
              // Convert standard YouTube watch/short URLs into clean embed/thumbnail links if needed
              const videoIdMatch = project.youtubeUrl?.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
              const videoId = videoIdMatch ? videoIdMatch[1] : null;
              const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : project.image;

              return (
                <Reveal key={project.slug} delay={i * 40} className="flex">
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ring-1 ring-border"
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={thumbnailUrl}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/15">
                        <PlayCircle className="h-12 w-12 text-white shadow-sm drop-shadow-md transition-transform group-hover:scale-110" />
                      </div>
                      <div className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm flex items-center gap-1">
                        Watch on YouTube <ExternalLink className="h-3 w-3" />
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs font-semibold text-teal-deep mb-1">{project.location}</span>
                      <h3 className="font-display text-lg font-bold leading-tight text-navy-deep group-hover:text-teal-deep transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      {project.depth && (
                        <p className="mt-auto pt-3 text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                          <span className="inline-block w-2 h-2 rounded-full bg-teal-deep"></span>
                          Drilled Depth: {project.depth}
                        </p>
                      )}
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 text-center bg-white rounded-2xl p-8 border border-border shadow-sm max-w-xl mx-auto">
            <h3 className="font-display text-xl font-bold text-navy-deep">Want to see more videos?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Subscribe to our official YouTube channel to get notified every time we post a new project walkthrough.
            </p>
            <a
              href="https://www.youtube.com/channel/UCwEwqnjjb0XPJU2b1O1LfDw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent mt-6 inline-flex items-center gap-2"
            >
              Visit Achievers YouTube Channel <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}