import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import heroDrilling from "@/assets/hero-drilling.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { blogPosts } from "@/data/resources";
import { pageMeta } from "@/lib/seo";

// Notice the trailing slash in "/resources/" below!
export const Route = createFileRoute("/resources/")({
  head: () =>
    pageMeta({
      title: "Borehole Resources & Insights | Achievers Geotechnical",
      description:
        "Learn about borehole drilling costs, maintenance, geological surveys, and how to keep your water flowing safely in Nigeria.",
      path: "/resources",
    }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Borehole Insights & Guides"
        lede="Expert advice on drilling, maintenance, and water systems in Nigeria."
        image={heroDrilling}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Resources" }]}
      />

      <section className="section surface-muted">
        <div className="shell">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80} className="flex">
                <Link
                  to={`/resources/${post.slug}`} 
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ring-1 ring-border"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-teal-deep/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="font-display text-xl font-bold leading-tight text-navy-deep group-hover:text-teal-deep transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-5">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-deep group-hover:text-navy-deep transition-colors">
                        Read article <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}