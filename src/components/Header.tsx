import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, ShoppingCart, Eye, Home, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "See you later!",
    });
    navigate("/auth");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-foreground">Kids</span>
              <span className="text-primary">Gods</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link
              to="/"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isActive("/") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link
              to="/buy-access"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isActive("/buy-access") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              Buy Access
            </Link>
            <Link
              to="/previews"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isActive("/previews") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Eye className="w-4 h-4" />
              Previews
            </Link>
          </nav>

          {/* User Section */}
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-notification-badge rounded-full text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </button>
            
            <Badge variant="outline" className="bg-transparent border-primary text-primary">
              Free
            </Badge>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">kidsgods</span>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">K</span>
              </div>
            </div>

            <Button
              onClick={handleLogout}
              variant="outline"
              size="icon"
              className="border-border hover:border-destructive hover:text-destructive"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
