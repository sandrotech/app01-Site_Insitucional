import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-[#0B2559] tracking-tight" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
              Focus
            </span>
            <span className="text-[#00BFA6]" style={{ fontSize: '1.75rem', fontWeight: 700 }}>.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-[#1C2333] hover:text-[#0B2559] transition-colors duration-150"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-[#1C2333] hover:text-[#0B2559] transition-colors duration-150"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-[#1C2333] hover:text-[#0B2559] transition-colors duration-150"
            >
              Contato
            </button>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-[#0B2559] hover:bg-[#0B2559]/90 text-white px-6 rounded-xl transition-all duration-150"
            >
              Fale com a Focus
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1C2333]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E6EAF0]">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-[#1C2333] hover:text-[#0B2559] text-left py-2 transition-colors duration-150"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-[#1C2333] hover:text-[#0B2559] text-left py-2 transition-colors duration-150"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-[#1C2333] hover:text-[#0B2559] text-left py-2 transition-colors duration-150"
              >
                Contato
              </button>
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-[#0B2559] hover:bg-[#0B2559]/90 text-white w-full mt-2 rounded-xl transition-all duration-150"
              >
                Fale com a Focus
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
