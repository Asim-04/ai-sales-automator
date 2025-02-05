
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-muted/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/20f8adf2-3e9c-450b-8af2-34e1caf23697.png"
              alt="SequenceLab Logo"
              className="h-8 w-auto"
            />
            <Link to="/" className="text-2xl font-bold text-primary">
              SequenceLab
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="animate-in slide-in-from-top-2 duration-200">
                    <div className="p-2 min-w-[160px] bg-muted/95">
                      <Link 
                        to="/products#email" 
                        className="block px-4 py-2 text-sm text-primary hover:bg-primary/5 rounded-md transition-colors"
                      >
                        AI E-mail Marketing Expert
                      </Link>
                      <Link 
                        to="/products#whatsapp" 
                        className="block px-4 py-2 text-sm text-primary hover:bg-primary/5 rounded-md transition-colors"
                      >
                        AI WhatsApp Chatbot
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link 
              to="/about" 
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              About Us
            </Link>
            <Link 
              to="/blogs" 
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Blogs
            </Link>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => navigate('/trial')}
              className="bg-primary hover:bg-primary/90"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-muted/95 animate-in slide-in-from-top-2 duration-200">
                <DropdownMenuItem>
                  <Link to="/products" className="w-full text-primary">Products</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/about" className="w-full text-primary">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/blogs" className="w-full text-primary">Blogs</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
