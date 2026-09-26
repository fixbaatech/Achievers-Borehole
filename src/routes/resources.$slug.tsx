import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { blogPosts } from "@/data/resources";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/resources/$slug")({
  // This loader grabs the correct article from our data file based on the URL
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) {
      // If someone types a bad URL, send them safely back to the main resources page
      throw redirect({ to: "/resources" });
    }
    return { post };
  },
  head: ({ loaderData }) =>
    pageMeta({
      title: `${loaderData.post.title} | Achievers Geotechnical`,
      description: loaderData.post.excerpt,
      path: `/resources/${loaderData.post.slug}`,
    }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <article className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
        <div className="shell max-w-3xl">
          {/* Back Button */}
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-teal-deep transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all resources
          </Link>
          
          {/* Article Header */}
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full bg-[#022866]/10 px-3 py-1 text-xs font-semibold text-[#022866]">
              {post.category}
            </span>
          </div>
          
          <h1 className="font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl md:text-5xl mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground mb-10 border-b border-border pb-8">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-teal-deep" />
              {post.date}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-teal-deep" />
              {post.readTime}
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-12 overflow-hidden rounded-2xl shadow-md ring-1 ring-border">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto max-h-[450px] object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-xl font-medium leading-relaxed text-navy-deep mb-8 border-l-4 border-teal-deep pl-6">
              {post.excerpt}
            </p>
            
            {post.sections.map((section, i) => (
              <div key={i} className="mb-10">
                {section.heading && (
                  <h2 className="text-2xl font-bold text-navy-deep mt-10 mb-4 font-display">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((paragraph, j) => (
                  <p key={j} className="mb-5 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}