import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, Eye, Shield, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Download,
    title: "Fast Downloads",
    description: "Lightning-fast download speeds for all your media files",
  },
  {
    icon: Eye,
    title: "Unlimited Viewing",
    description: "Stream and preview unlimited content before downloading",
  },
  {
    icon: Shield,
    title: "Secure Cloud Storage",
    description: "Enterprise-grade security keeps your media safe and private",
  },
  {
    icon: RefreshCw,
    title: "Constant Updates",
    description: "Fresh content added daily to keep your library growing",
  },
];

const HomeNew = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            Welcome to the best seller content <span className="text-primary">@kidsgods</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Instant access to thousands of videos & images in multiple storage tiers.
          </p>
          
          {/* Telegram Info */}
          <div className="mb-8 p-6 bg-telegram-blue/20 border-2 border-telegram-blue/50 rounded-lg max-w-md mx-auto">
            <p className="text-lg font-semibold text-foreground">
              Telegram: <span className="text-telegram-blue font-bold">@kidsgods</span>
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/previews">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Previews
              </Button>
            </Link>
            <Link to="/buy-access">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Buy Access
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="tier-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default HomeNew;
