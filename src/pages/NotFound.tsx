
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { CloudOff } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-6">
        <CloudOff className="mx-auto h-20 w-20 text-primary opacity-60 mb-6" />
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! We couldn't find the weather for this page.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
        >
          Return to Weather Forecast
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
