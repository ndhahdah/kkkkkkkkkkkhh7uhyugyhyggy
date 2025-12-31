import Navigation from "@/components/Navigation";
import PreviewCard from "@/components/PreviewCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const previewData = {
  featured: [
    { type: "video" as const, title: "4K Nature Documentary", thumbnail: "/placeholder.svg" },
    { type: "video" as const, title: "Urban Timelapses Collection", thumbnail: "/placeholder.svg" },
    { type: "image" as const, title: "Professional Portrait Pack", thumbnail: "/placeholder.svg" },
    { type: "image" as const, title: "Landscape Photography Set", thumbnail: "/placeholder.svg" },
  ],
  videos: [
    { type: "video" as const, title: "Cinematic B-Roll Package", thumbnail: "/placeholder.svg" },
    { type: "video" as const, title: "Motion Graphics Templates", thumbnail: "/placeholder.svg" },
    { type: "video" as const, title: "Drone Footage Collection", thumbnail: "/placeholder.svg" },
    { type: "video" as const, title: "Tutorial Series Bundle", thumbnail: "/placeholder.svg" },
  ],
  images: [
    { type: "image" as const, title: "Stock Photo Library", thumbnail: "/placeholder.svg" },
    { type: "image" as const, title: "Abstract Art Collection", thumbnail: "/placeholder.svg" },
    { type: "image" as const, title: "Food Photography Set", thumbnail: "/placeholder.svg" },
    { type: "image" as const, title: "Texture Pack Premium", thumbnail: "/placeholder.svg" },
  ],
};

const Previews = () => {
  const [filter, setFilter] = useState<"all" | "video" | "image">("all");

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Media <span className="gradient-text">Previews</span>
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
            className={filter === "all" ? "bg-primary" : ""}
          >
            All Media
          </Button>
          <Button
            variant={filter === "video" ? "default" : "outline"}
            onClick={() => setFilter("video")}
            className={filter === "video" ? "bg-primary" : ""}
          >
            Videos
          </Button>
          <Button
            variant={filter === "image" ? "default" : "outline"}
            onClick={() => setFilter("image")}
            className={filter === "image" ? "bg-primary" : ""}
          >
            Images
          </Button>
        </div>

        {/* Featured Section */}
        {(filter === "all") && (
          <section className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {previewData.featured.map((item, index) => (
                <PreviewCard key={index} {...item} />
              ))}
            </div>
          </section>
        )}

        {/* Videos Section */}
        {(filter === "all" || filter === "video") && (
          <section className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8">Featured Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {previewData.videos.map((item, index) => (
                <PreviewCard key={index} {...item} />
              ))}
            </div>
          </section>
        )}

        {/* Images Section */}
        {(filter === "all" || filter === "image") && (
          <section>
            <h2 className="text-3xl font-display font-bold mb-8">Featured Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {previewData.images.map((item, index) => (
                <PreviewCard key={index} {...item} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Previews;
