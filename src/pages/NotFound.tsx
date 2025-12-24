import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-section-light">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-warm-brown">404</h1>
        <p className="text-xl text-warm-gray">Oops! Page not found</p>
        <Link to="/">
          <Button variant="hero" size="lg" className="mt-4">
            <Home className="w-5 h-5" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
