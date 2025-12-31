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

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-gradient rounded-2xl p-8 hover-lift border border-border/50 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
