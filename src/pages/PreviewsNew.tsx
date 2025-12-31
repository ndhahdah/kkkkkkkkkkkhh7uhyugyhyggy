import Header from "@/components/Header";
import PreviewCard from "@/components/PreviewCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const previewData = {
  featured: [
    { type: "video" as const, title: "Premium Video 1", thumbnail: "https://cdn-cf-east.streamable.com/image/t3r86z.jpg", url: "https://streamable.com/t3r86z" },
    { type: "video" as const, title: "Premium Video 2", thumbnail: "https://cdn-cf-east.streamable.com/image/o80d0v.jpg", url: "https://streamable.com/o80d0v" },
    { type: "video" as const, title: "Premium Video 3", thumbnail: "https://cdn-cf-east.streamable.com/image/c6jgz5.jpg", url: "https://streamable.com/c6jgz5" },
  ],
  videos: [
    { type: "video" as const, title: "Premium Video 4", thumbnail: "https://cdn-cf-east.streamable.com/image/ojubtr.jpg", url: "https://streamable.com/ojubtr" },
    { type: "video" as const, title: "Premium Video 5", thumbnail: "https://cdn-cf-east.streamable.com/image/uzluux.jpg", url: "https://streamable.com/uzluux" },
    { type: "video" as const, title: "Premium Video 6", thumbnail: "https://cdn-cf-east.streamable.com/image/r9y9pa.jpg", url: "https://streamable.com/r9y9pa" },
  ],
};

const PreviewsNew = () => {
  const [filter, setFilter] = useState<"all" | "video" | "image">("all");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Media <span className="text-primary">Previews</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection of high-quality media content
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex gap-4 justify-center mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-primary text-primary-foreground" : "border-border"}
          >
            All Media
          </Button>
          <Button
            variant={filter === "video" ? "default" : "outline"}
            onClick={() => setFilter("video")}
            className={filter === "video" ? "bg-primary text-primary-foreground" : "border-border"}
          >
            Videos
          </Button>
          <Button
            variant={filter === "image" ? "default" : "outline"}
            onClick={() => setFilter("image")}
            className={filter === "image" ? "bg-primary text-primary-foreground" : "border-border"}
          >
            Images
          </Button>
        </div>

        {/* Featured Section */}
        {(filter === "all") && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {previewData.featured.map((item, index) => (
                <PreviewCard key={index} {...item} />
              ))}
            </div>
          </section>
        )}

        {/* Videos Section */}
        {(filter === "all" || filter === "video") && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">All Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {previewData.videos.map((item, index) => (
                <PreviewCard key={index} {...item} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default PreviewsNew;
