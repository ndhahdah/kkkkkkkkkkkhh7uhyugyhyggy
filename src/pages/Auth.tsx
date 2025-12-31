import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const navigate = useNavigate();
  const { toast } = useToast();

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({ num1, num2, answer: num1 + num2 });
    setCaptchaAnswer("");
  };

  useEffect(() => {
    generateCaptcha();
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/");
      }
    });
  }, [navigate]);

  const verifyCaptcha = () => {
    return parseInt(captchaAnswer) === captchaQuestion.answer;
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!verifyCaptcha()) {
      toast({
        title: "Incorrect Captcha",
        description: "Please solve the captcha correctly.",
        variant: "destructive",
      });
      generateCaptcha();
      return;
    }

    // Gerar email interno a partir do username
    const email = `${username.toLowerCase().trim()}@kidsgods.local`;

    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        
        toast({
          title: "Login successful!",
          description: "Welcome back.",
        });
        navigate("/");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: {
              username: username,
            },
          },
        });
        
        if (error) throw error;
        
        toast({
          title: "Account created!",
          description: "Successfully logged in.",
        });
        navigate("/");
      }
    } catch (error: any) {
      let errorMessage = error.message;
      
      if (errorMessage.includes("Invalid login credentials")) {
        errorMessage = "Incorrect username or password.";
      } else if (errorMessage.includes("User already registered")) {
        errorMessage = "This username already exists.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      generateCaptcha();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <Card className="w-full max-w-md p-8 tier-card">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-foreground">Kids</span>
            <span className="text-primary">Gods</span>
          </h1>
          <p className="text-muted-foreground">
            {isLogin ? "Sign in to your account" : "Create your account"}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Username</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength={3}
              maxLength={20}
              pattern="[a-zA-Z0-9_]+"
              className="bg-input border-border"
              placeholder="your_username"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Only letters, numbers and underscore (_)
            </p>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="bg-input border-border"
              placeholder="••••••"
            />
          </div>

          {/* Captcha */}
          <div className="tier-card p-4">
            <label className="text-sm font-medium mb-2 block">
              Solve the captcha to continue
            </label>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 text-center p-3 bg-card rounded border-2 border-primary/30">
                <span className="text-2xl font-bold text-primary">
                  {captchaQuestion.num1} + {captchaQuestion.num2} = ?
                </span>
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={generateCaptcha}
                className="border-primary text-primary"
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
            <Input
              type="number"
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              required
              className="bg-input border-border"
              placeholder="Your answer"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {loading ? "Loading..." : isLogin ? "Sign In" : "Register"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-primary hover:underline"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Auth;