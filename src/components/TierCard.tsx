import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import CryptoPaymentDialog from "./CryptoPaymentDialog";

interface TierCardProps {
  title: string;
  price: string;
  storage: string;
  videos: string;
  images: string;
  popular?: boolean;
}

const TierCard = ({
  title,
  price,
  storage,
  videos,
  images,
  popular = false,
}: TierCardProps) => {
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);

  return (
    <>
    <div className={`relative tier-card p-6 ${popular ? "border-primary" : ""}`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground border-0">
          Most Popular
        </Badge>
      )}

      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
          <div className="text-4xl font-bold text-primary">
            {price}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Check className="w-5 h-5 text-primary flex-shrink-0" />
            <span>{storage}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Check className="w-5 h-5 text-primary flex-shrink-0" />
            <span>{videos} Videos</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Check className="w-5 h-5 text-primary flex-shrink-0" />
            <span>{images} Images</span>
          </div>
        </div>

        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
          onClick={() => setPaymentDialogOpen(true)}
        >
          Purchase
        </Button>
      </div>
    </div>

    <CryptoPaymentDialog
      open={paymentDialogOpen}
      onOpenChange={setPaymentDialogOpen}
      tierTitle={title}
      tierPrice={price}
    />
    </>
  );
};

export default TierCard;
