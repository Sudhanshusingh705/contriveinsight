import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Industries", href: "/results" },
  { name: "Our Process", href: "/process" },
  { name: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { name: "Digital Engineering", href: "/services/digital-engineering" },
  { name: "OTT Platform", href: "/services/ott-platform" },
  { name: "AI Automation", href: "/services/ai-automation" },
  { name: "Intellectual Property", href: "/services/intellectual-property" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div
          className={`rounded-full border border-border/70 backdrop-blur-xl transition-all duration-300 ${
            isScrolled
              ? "bg-background/90 shadow-lg shadow-primary/10"
              : "bg-background/70 shadow-md shadow-black/5"
          }`}
        >
          <div className="flex items-center justify-between px-3 py-3 sm:px-6">
            <Link to="/" className="flex items-center gap-2 min-w-0">
              <img src={logo} alt="ContriveInsight" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
              <span className="text-base font-semibold text-foreground sm:text-xl">
                Contrive<span className="text-primary">Insight</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link
                key={navLinks[0].name}
                to={navLinks[0].href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(navLinks[0].href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {navLinks[0].name}
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                      isActive("/services")
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    Solutions
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="mt-2">
                  {serviceLinks.map((link) => (
                    <DropdownMenuItem key={link.name} asChild>
                      <Link to={link.href} className="w-full">
                        {link.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem asChild>
                    <Link to="/services" className="w-full font-semibold">
                      All Solutions
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link to="/contact">
                <Button variant="hero" size="default">
                  Let&apos;s Talk
                </Button>
              </Link>
            </div>

            <button
              className="lg:hidden rounded-full border border-border p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="border-t border-border/60 px-4 py-4 lg:hidden">
              <nav className="flex flex-col gap-2">
                <Link
                  to={navLinks[0].href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(navLinks[0].href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  {navLinks[0].name}
                </Link>

                <div className="rounded-2xl border border-border/70 bg-background/80 p-3">
                  <span className="block px-3 py-2 text-sm font-semibold text-muted-foreground">
                    Solutions
                  </span>
                  <div className="mt-2 flex flex-col gap-1">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          isActive(link.href)
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
                    >
                      All Solutions
                    </Link>
                  </div>
                </div>

                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" className="mt-2">
                  <Button variant="hero" className="w-full">
                    Let&apos;s Talk
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
