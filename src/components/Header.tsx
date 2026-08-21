import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  onSignInClick?: () => void;
  onGetStartedClick?: () => void;
  onSupportClick?: () => void;
  onDemoClick?: () => void;
}

export function Header({
  onSignInClick,
  onGetStartedClick,
  onSupportClick,
  onDemoClick,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-18 items-center justify-between px-4">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <button type="button" onClick={onDemoClick} className="text-muted-foreground hover:text-foreground transition-colors">
            Demo
          </button>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <button
            onClick={onSupportClick}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Support
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            className="hidden md:inline-flex text-muted-foreground"
            onClick={onSignInClick}
          >
            Sign In
          </Button>
          <Button onClick={onGetStartedClick} className="px-5">
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="border-t border-border/70 bg-background px-4 py-4 md:hidden">
          <div className="container mx-auto grid gap-1">
            <a href="#features" onClick={closeMenu} className="rounded-lg px-3 py-2.5 text-muted-foreground hover:bg-muted hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" onClick={closeMenu} className="rounded-lg px-3 py-2.5 text-muted-foreground hover:bg-muted hover:text-foreground">
              How It Works
            </a>
            <button type="button" onClick={() => { closeMenu(); onDemoClick?.(); }} className="rounded-lg px-3 py-2.5 text-left text-muted-foreground hover:bg-muted hover:text-foreground">
              Demo Workspace
            </button>
            <button type="button" onClick={() => { closeMenu(); onSupportClick?.(); }} className="rounded-lg px-3 py-2.5 text-left text-muted-foreground hover:bg-muted hover:text-foreground">
              Support
            </button>
            <button type="button" onClick={() => { closeMenu(); onSignInClick?.(); }} className="rounded-lg px-3 py-2.5 text-left text-muted-foreground hover:bg-muted hover:text-foreground">
              Sign In
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
