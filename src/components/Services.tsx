import { Card } from "./ui/card";
import { ArrowRight, GitBranch, Zap, Calendar, DollarSign, BarChart3, Users } from "lucide-react";

export function Services() {
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

  const services = [
    {
      icon: GitBranch,
      title: "Mapeamento de Processos (BPMN)",
      description: "DocumentaÃ§Ã£o e anÃ¡lise detalhada dos processos da sua empresa para identificar gargalos e oportunidades de melhoria."
    },
    {
      icon: Zap,
      title: "OtimizaÃ§Ã£o Operacional (Lean/Kaizen)",
      description: "ImplementaÃ§Ã£o de metodologias Ã¡geis para eliminar desperdÃ­cios, aumentar produtividade e melhorar fluxos de trabalho."
    },
    {
      icon: Calendar,
      title: "PCP â€“ Planejamento e Controle da ProduÃ§Ã£o",
      description: "GestÃ£o estratÃ©gica da capacidade produtiva, programaÃ§Ã£o de produÃ§Ã£o e controle de estoques para mÃ¡xima eficiÃªncia."
    },
    {
      icon: DollarSign,
      title: "Custos e OrÃ§amentos",
      description: "AnÃ¡lise profunda de estrutura de custos, formaÃ§Ã£o de preÃ§os e elaboraÃ§Ã£o de orÃ§amentos para decisÃµes mais assertivas."
    },
    {
      icon: BarChart3,
      title: "Indicadores & Dashboards (BI)",
      description: "Desenvolvimento de KPIs estratÃ©gicos e painÃ©is interativos para monitoramento em tempo real do desempenho da operaÃ§Ã£o."
    },
    {
      icon: Users,
      title: "Treinamentos In-Company",
      description: "CapacitaÃ§Ã£o customizada para suas equipes em ferramentas e metodologias de engenharia de produÃ§Ã£o e melhoria contÃ­nua."
    }
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-gradient-to-br from-[#F5F7FA] to-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-[#0B2559] mb-6" style={{ fontSize: '2.25rem', fontWeight: 700 }}>
            ServiÃ§os oferecidos
          </h2>
          <p className="text-[#1C2333]/80" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
            SoluÃ§Ãµes completas em engenharia de produÃ§Ã£o para transformar sua operaÃ§Ã£o
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 border-[#E6EAF0] hover:border-[#00BFA6] transition-all duration-200 hover:shadow-xl group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B2559] to-[#1F7A8C] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-[#0B2559]" style={{ fontSize: '1.125rem', fontWeight: 600, lineHeight: '1.4' }}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-[#1C2333]/70 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-[#1F7A8C] hover:text-[#00BFA6] inline-flex items-center gap-2 group/link transition-colors duration-150"
                  style={{ fontSize: '0.9375rem', fontWeight: 500 }}
                >
                  Saiba mais
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-150" />
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
