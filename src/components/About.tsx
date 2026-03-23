import { Card } from "./ui/card";
import { Award, Shield, TrendingUp, Users, CheckCircle, Briefcase } from "lucide-react";

export function About() {
  const metrics = [
    { icon: Users, value: "10+", label: "anos de experiÃªncia" },
    { icon: Briefcase, value: "120+", label: "projetos entregues" },
    { icon: Award, value: "98%", label: "satisfaÃ§Ã£o dos clientes" }
  ];

  const values = [
    { icon: Award, title: "ExcelÃªncia", description: "Compromisso com a qualidade em cada projeto" },
    { icon: Shield, title: "Ã‰tica", description: "TransparÃªncia e integridade em todas as relaÃ§Ãµes" },
    { icon: TrendingUp, title: "Foco em Resultados", description: "OrientaÃ§Ã£o para entrega de valor mensurÃ¡vel" }
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-[#0B2559] mb-6" style={{ fontSize: '2.25rem', fontWeight: 700 }}>
            Sobre a Focus
          </h2>
          <p className="text-[#1C2333]/80" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
            Somos especialistas em transformar desafios operacionais em oportunidades de crescimento. Nossa abordagem combina metodologia tÃ©cnica, anÃ¡lise de dados e foco em resultados prÃ¡ticos para entregar soluÃ§Ãµes que realmente fazem a diferenÃ§a no dia a dia das empresas.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="p-8 text-center border-[#E6EAF0] hover:border-[#00BFA6] transition-all duration-200 hover:shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[#0B2559]/5 rounded-2xl flex items-center justify-center">
                    <Icon size={32} className="text-[#0B2559]" />
                  </div>
                </div>
                <div className="text-[#0B2559] mb-2" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                  {metric.value}
                </div>
                <div className="text-[#1C2333]/70">
                  {metric.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-[#0B2559] text-center mb-8" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
            Nossos valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00BFA6] to-[#1F7A8C] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-[#0B2559] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {value.title}
                  </h4>
                  <p className="text-[#1C2333]/70">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
