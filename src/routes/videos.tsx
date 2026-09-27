import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PlayCircle, Loader2, Youtube } from "lucide-react";
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

// YouTube API Configuration
const API_KEY = "AIzaSyBRupprhM9a4ebJvBZWkT7NSXRMlYMIDco";
const CHANNEL_ID = "UCwEwqnjjb0XPJU2b1O1LfDw";
// The Uploads playlist ID is always the Channel ID but starting with 'UU' instead of 'UC'
const UPLOADS_PLAYLIST_ID = "UUwEwqnjjb0XPJU2b1O1LfDw"; 
const RESULTS_PER_PAGE = 9; // Loads 9 videos at a time (perfect for a 3-column grid)

type YouTubeVideo = {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
};

function VideosPage() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);

  const fetchVideos = async (pageToken = "") => {
    if (!pageToken) setLoading(true);
    else setLoadingMore(true);

    try {
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=${RESULTS_PER_PAGE}&key=${API_KEY}${pageToken ? `&pageToken=${pageToken}` : ""}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.items) {
        const formattedVideos = data.items.map((item: any) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          link: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
          thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
          pubDate: item.snippet.publishedAt,
        }));

        setVideos((prev) => [...prev, ...formattedVideos]);
        setNextPageToken(data.nextPageToken || null);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
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
              <p className="text-muted-foreground font-medium">Loading project videos...</p>
            </div>
          ) : error && videos.length === 0 ? (
            <div className="flex h-64 items-center justify-center flex-col gap-4 bg-white rounded-2xl border border-dashed border-border p-8 text-center shadow-sm">
              <p className="text-muted-foreground font-medium">
                Unable to load videos at this time.
              </p>
              <a 
                href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline mt-2 gap-2"
              >
                <Youtube className="w-5 h-5 text-red-600" />
                Visit our YouTube Channel Directly
              </a>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-12">
              {/* Videos Grid */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
                {videos.map((video, i) => (
                  <Reveal key={`${video.id}-${i}`} delay={(i % RESULTS_PER_PAGE) * 50} className="flex">
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

              {/* Load More & Channel Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-4">
                {nextPageToken && (
                  <button
                    onClick={() => fetchVideos(nextPageToken)}
                    disabled={loadingMore}
                    className="btn btn-outline min-w-[200px]"
                  >
                    {loadingMore ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Loading...
                      </span>
                    ) : (
                      "Load More Videos"
                    )}
                  </button>
                )}
                
                <a 
                  href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary gap-2 min-w-[200px]"
                >
                  <Youtube className="w-5 h-5" />
                  Visit YouTube Channel
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