import { Play, Image as ImageIcon } from "lucide-react";

interface PreviewCardProps {
  type: "video" | "image";
  title: string;
  thumbnail: string;
  url?: string;
}

const PreviewCard = ({ type, title, thumbnail, url }: PreviewCardProps) => {
  const handleClick = () => {
    window.open(url || "https://mega.nz/folder/v8x3kDpI#sXaZUs6ij8Mw4dYbXS5Odw", "_blank");
  };

  return (
    <div 
      onClick={handleClick}
      className="group relative overflow-hidden rounded-xl tier-card p-0 cursor-pointer"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play/Image icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
            {type === "video" ? (
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            ) : (
              <ImageIcon className="w-8 h-8 text-primary-foreground" />
            )}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 capitalize">{type}</p>
      </div>
    </div>
  );
};

export default PreviewCard;
