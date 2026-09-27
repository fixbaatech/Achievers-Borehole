import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PlayCircle, Loader2, Youtube, Pin } from "lucide-react";
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

// No API Key Required! 
const CHANNEL_ID = "UCwEwqnjjb0XPJU2b1O1LfDw";
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D${CHANNEL_ID}`;

type YouTubeVideo = {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
};

// 📌 ADD YOUR PINNED VIDEOS HERE
const PINNED_VIDEOS: YouTubeVideo[] = [
  {
    id: "YOUR_VIDEO_ID_1", 
    title: "Our Biggest Drilling Project in Ogun State",
    link: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1",
    thumbnail: "https://i.ytimg.com/vi/YOUR_VIDEO_ID_1/hqdefault.jpg", 
    pubDate: "2026-01-01T00:00:00Z"
  },
  {
    id: "YOUR_VIDEO_ID_2",
    title: "Complete Water Treatment System Installation",
    link: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
    thumbnail: "https://i.ytimg.com/vi/YOUR_VIDEO_ID_2/hqdefault.jpg",
    pubDate: "2026-02-01T00:00:00Z"
  }
];

function VideosPage() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(RSS_URL);
        const data = await response.json();
        
        if (data.status === "ok") {
          // Format RSS data to match our component structure
          const fetchedVideos = data.items.map((item: any) => {
            // Extract Video ID from the link
            const videoId = item.link.split('v=')[1];
            return {
              id: videoId,
              title: item.title,
              link: item.link,
              thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
              pubDate: item.pubDate,
            };
          });

          // Filter out videos that are already pinned
          const uniqueFetchedVideos = fetchedVideos.filter(
            (fetched: YouTubeVideo) => !PINNED_VIDEOS.some((pinned) => pinned.id === fetched.id)
          );

          setVideos(uniqueFetchedVideos);
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

  const displayVideos = [...PINNED_VIDEOS, ...videos];

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
          
          {/* Top Call to Action */}
          <div className="flex justify-end mb-8">
             <a 
                href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary gap-2"
              >
                <Youtube className="w-5 h-5" />
                Subscribe to our YouTube Channel
              </a>
          </div>

          {loading ? (
            <div className="flex h-64 items-center justify-center flex-col gap-4">
              <Loader2 className="h-10 w-10 animate-spin text-teal-deep" />
              <p className="text-muted-foreground font-medium">Loading project videos...</p>
            </div>
          ) : error && videos.length === 0 ? (
            <div className="flex h-64 items-center justify-center flex-col gap-4 bg-white rounded-2xl border border-dashed border-border p-8 text-center shadow-sm">
              <p className="text-muted-foreground font-medium">
                Unable to load videos at this time.
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-12">
              
              {/* Videos Grid */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
                {displayVideos.map((video, i) => {
                  const isPinned = i < PINNED_VIDEOS.length;
                  
                  return (
                    <Reveal key={`${video.id}-${i}`} delay={(i % 9) * 50} className="flex">
                      <a
                        href={video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ring-1 ${isPinned ? 'ring-teal-deep/50 shadow-teal-deep/10' : 'ring-border'}`}
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
                          {isPinned && (
                            <div className="absolute top-3 right-3 bg-teal-deep text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                              <Pin className="w-3 h-3 fill-current" /> Featured
                            </div>
                          )}
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
                  );
                })}
              </div>

              {/* Bottom Channel Action */}
              <div className="flex justify-center w-full pt-4">
                <a 
                  href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline gap-2 min-w-[200px]"
                >
                  <Youtube className="w-5 h-5 text-red-600" />
                  Watch All Videos on YouTube
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}