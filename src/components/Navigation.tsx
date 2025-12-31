import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary glow-effect">
              <Video className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-display font-bold gradient-text">
              MediaVault
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/previews"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/previews") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Previews
            </Link>
            <Link to="/buy-access">
              <Button
                variant={isActive("/buy-access") ? "default" : "outline"}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Buy Access
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
