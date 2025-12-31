import Navigation from "@/components/Navigation";
import PricingCard from "@/components/PricingCard";

const tiers = [
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

const BuyAccess = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Choose Your <span className="gradient-text">Access Tier</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your media needs. Upgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            All tiers include instant access, secure downloads, and lifetime updates.
          </p>
        </div>
      </main>
    </div>
  );
};

export default BuyAccess;
