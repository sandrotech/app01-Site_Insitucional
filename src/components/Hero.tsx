import { Button } from "./ui/button";
import { ArrowRight, Target } from "lucide-react";

export function Hero() {
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
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-[#F5F7FA] to-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-[#0B2559]" style={{ fontSize: '2.5rem', lineHeight: '1.2', fontWeight: 700 }}>
              Consultoria em Engenharia de Produção focada em eficiência e resultados.
            </h1>
            <p className="text-[#1C2333]/80" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
              Ajudamos empresas a otimizar processos, reduzir custos e escalar operações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-[#0B2559] hover:bg-[#0B2559]/90 text-white px-8 py-6 rounded-xl transition-all duration-150 shadow-lg hover:shadow-xl"
                style={{ fontSize: '1.0625rem' }}
              >
                Solicitar diagnóstico
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection("servicos")}
                variant="outline"
                className="border-2 border-[#1F7A8C] text-[#1F7A8C] hover:bg-[#1F7A8C] hover:text-white px-8 py-6 rounded-xl transition-all duration-150"
                style={{ fontSize: '1.0625rem' }}
              >
                Conheça nossos serviços
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Abstract geometric shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Main circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-[#0B2559]/10 to-[#1F7A8C]/10 animate-pulse" style={{ animationDuration: '3s' }} />
                  
                  {/* Accent circles */}
                  <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#00BFA6]/20 blur-2xl" />
                  <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-[#1F7A8C]/20 blur-2xl" />
                  
                  {/* Geometric shapes */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 border-4 border-[#0B2559]/20 rounded-xl rotate-12" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-[#1F7A8C]/30 rounded-xl -rotate-6" />
                  
                  {/* Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#00BFA6] rounded-2xl flex items-center justify-center shadow-2xl">
                    <Target size={48} className="text-white" />
                  </div>
                  
                  {/* Small accent dots */}
                  <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-[#00BFA6]" />
                  <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-[#1F7A8C]" />
                  <div className="absolute top-2/3 left-1/4 w-4 h-4 rounded-full bg-[#0B2559]/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
