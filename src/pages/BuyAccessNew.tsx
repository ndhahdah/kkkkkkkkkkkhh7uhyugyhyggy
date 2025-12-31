import Header from "@/components/Header";
import TierCard from "@/components/TierCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Send } from "lucide-react";

const standardTiers = [
  {
    title: "Starter Tier",
    price: "$15.00",
    storage: "15 GBs",
    videos: "500+",
    images: "50+",
  },
  {
    title: "Tier 1",
    price: "$30.00",
    storage: "45 GBs",
    videos: "1,000+",
    images: "100+",
  },
  {
    title: "Tier 2",
    price: "$50.00",
    storage: "105 GBs",
    videos: "4,500+",
    images: "500+",
  },
  {
    title: "Tier 3",
    price: "$80.00",
    storage: "260 GBs",
    videos: "21,500+",
    images: "650+",
    popular: true,
  },
  {
    title: "Tier 4",
    price: "$120.00",
    storage: "1 TB",
    videos: "50,000+",
    images: "1,000+",
  },
  {
    title: "Tier 5",
    price: "$170.00",
    storage: "2 TBs",
    videos: "180,000+",
    images: "1,500+",
  },
  {
    title: "Tier 6",
    price: "$200.00",
    storage: "5 TBs",
    videos: "425,000+",
    images: "2,350+",
  },
];

const BuyAccessNew = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-8">Available Tiers</h1>
          
          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="mb-8 bg-transparent border border-border">
              <TabsTrigger 
                value="standard" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Standard Tiers
              </TabsTrigger>
              <TabsTrigger 
                value="special"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Special Tiers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="standard" className="space-y-8">
              {/* Telegram Support Box */}
              <div className="bg-gradient-to-r from-telegram-blue/20 to-telegram-blue/10 border-2 border-telegram-blue/50 rounded-lg p-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-telegram-blue flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Want a Personalized Tier or Promotions?</h3>
                    <p className="text-sm text-muted-foreground">
                      Contact our support team via Telegram for personalized recommendations or to learn about current promotions.
                    </p>
                  </div>
                  <Button className="bg-telegram-blue hover:bg-telegram-blue/90 text-white font-bold">
                    Telegram Support
                  </Button>
                </div>
              </div>

              {/* Tier Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {standardTiers.map((tier, index) => (
                  <TierCard key={index} {...tier} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="special">
              <div className="text-center py-20">
                <p className="text-muted-foreground">
                  Contact support via Telegram to learn about special tier options
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default BuyAccessNew;
