import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PlayCircle, Loader2 } from "lucide-react";
import heroDrilling from "@/assets/hero-drilling.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/videos")({
  head: () =>
    pageMeta({
      title: "Video Gallery | Achievers Geotechnical",
      description: "Watch our latest borehole drilling and water system projects across Nigeria.",
      path: "/videos",
    }),
  component: VideosPage,
});

// Updated with the client's actual YouTube Channel ID
const CHANNEL_ID = "UCwEwqnjjb0XPJU2b1O1LfDw";
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D${CHANNEL_ID}`;

type YouTubeVideo = {
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
};

function VideosPage() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      // If the channel ID hasn't been set yet, don't try to fetch
      if (CHANNEL_ID === "YOUR_YOUTUBE_CHANNEL_ID_HERE") {
        setLoading(false);
        setError(true);
        return;
      }

      try {
        const response = await fetch(RSS_URL);
        const data = await response.json();
        
        if (data.status === "ok") {
          setVideos(data.items);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

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
          {loading ? (
            <div className="flex h-64 items-center justify-center flex-col gap-4">
              <Loader2 className="h-10 w-10 animate-spin text-teal-deep" />
              <p className="text-muted-foreground font-medium">Loading latest videos from YouTube...</p>
            </div>
          ) : error || videos.length === 0 ? (
            <div className="flex h-64 items-center justify-center flex-col gap-4 bg-white rounded-2xl border border-dashed border-border p-8 text-center shadow-sm">
              <p className="text-muted-foreground font-medium">
                Unable to load latest videos at this time.
              </p>
              <a 
                href="https://www.youtube.com/@AchieversGeotechnicalServices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline mt-2"
              >
                Visit our YouTube Channel Directly
              </a>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video, i) => (
                <Reveal key={video.link} delay={i * 50} className="flex">
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ring-1 ring-border"
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/10">
                        <PlayCircle className="h-12 w-12 text-white shadow-sm drop-shadow-md transition-transform group-hover:scale-110" />
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-display text-lg font-bold leading-tight text-navy-deep group-hover:text-teal-deep transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="mt-auto pt-3 text-xs font-medium text-muted-foreground">
                        {new Date(video.pubDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}