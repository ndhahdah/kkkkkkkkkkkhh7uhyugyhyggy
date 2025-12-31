import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  storage: string;
  videos: string;
  images: string;
  popular?: boolean;
}

const PricingCard = ({
  title,
  price,
  storage,
  videos,
  images,
  popular = false,
}: PricingCardProps) => {
  return (
    <div
      className={`relative card-gradient rounded-2xl p-8 border-2 hover-lift ${
        popular
          ? "border-primary glow-effect scale-105"
          : "border-border/50 hover:border-primary/50"
      }`}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1">
          Most Popular
        </Badge>
      )}

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-display font-bold mb-2">{title}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-display font-bold gradient-text">
              {price}
            </span>
          </div>
        </div>

        <div className="space-y-3 py-6 border-y border-border/50">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-foreground">{storage} Storage</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-foreground">{videos} Videos</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-foreground">{images} Images</span>
          </div>
        </div>

        <Button
          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6"
          size="lg"
        >
          Purchase
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
