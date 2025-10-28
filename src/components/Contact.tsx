import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin, MessageSquare, CheckCircle2, AlertCircle, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    acceptPrivacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptPrivacy) {
      toast.error("Por favor, aceite a Política de Privacidade para continuar.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock success
    setIsSubmitting(false);
    setSubmitStatus("success");
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        acceptPrivacy: false
      });
      setSubmitStatus("idle");
    }, 3000);
  };

  const quickActions = [
    { 
      icon: MessageSquare, 
      label: "WhatsApp", 
      value: "+55 11 99999-9999",
      href: "https://wa.me/5511999999999",
      color: "#25D366"
    },
    { 
      icon: Mail, 
      label: "E-mail", 
      value: "contato@focus.com.br",
      href: "mailto:contato@focus.com.br",
      color: "#1F7A8C"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      value: "/focus-consultoria",
      href: "https://linkedin.com/company/focus-consultoria",
      color: "#0077B5"
    },
    { 
      icon: Instagram, 
      label: "Instagram", 
      value: "@focus.consultoria",
      href: "https://instagram.com/focus.consultoria",
      color: "#E4405F"
    }
  ];

  return (
    <section id="contato" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-[#0B2559] mb-6" style={{ fontSize: '2.25rem', fontWeight: 700 }}>
            Vamos conversar?
          </h2>
          <p className="text-[#1C2333]/80" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
            Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares de eficiência
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-[#E6EAF0] focus:border-[#00BFA6] rounded-xl h-12"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-[#E6EAF0] focus:border-[#00BFA6] rounded-xl h-12"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-[#E6EAF0] focus:border-[#00BFA6] rounded-xl h-12"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="border-[#E6EAF0] focus:border-[#00BFA6] rounded-xl h-12"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Assunto *</Label>
                <Select
                  required
                  value={formData.subject}
                  onValueChange={(value) => setFormData({ ...formData, subject: value })}
                >
                  <SelectTrigger className="border-[#E6EAF0] focus:border-[#00BFA6] rounded-xl h-12">
                    <SelectValue placeholder="Selecione um assunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diagnostico">Solicitar diagnóstico</SelectItem>
                    <SelectItem value="processos">Mapeamento de Processos</SelectItem>
                    <SelectItem value="otimizacao">Otimização Operacional</SelectItem>
                    <SelectItem value="pcp">PCP</SelectItem>
                    <SelectItem value="custos">Custos e Orçamentos</SelectItem>
                    <SelectItem value="bi">Indicadores & BI</SelectItem>
                    <SelectItem value="treinamento">Treinamentos</SelectItem>
                    <SelectItem value="outro">Outro assunto</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-[#E6EAF0] focus:border-[#00BFA6] rounded-xl min-h-[120px] resize-none"
                  placeholder="Conte-nos mais sobre sua necessidade..."
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={formData.acceptPrivacy}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, acceptPrivacy: checked as boolean })
                  }
                  className="mt-1 border-[#E6EAF0] data-[state=checked]:bg-[#00BFA6] data-[state=checked]:border-[#00BFA6]"
                />
                <Label htmlFor="privacy" className="cursor-pointer leading-relaxed" style={{ fontWeight: 400 }}>
                  Li e aceito a{" "}
                  <a href="#" className="text-[#1F7A8C] hover:text-[#00BFA6] underline transition-colors">
                    Política de Privacidade
                  </a>
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className={`w-full h-12 rounded-xl transition-all duration-200 ${
                  submitStatus === "success"
                    ? "bg-green-600 hover:bg-green-600"
                    : submitStatus === "error"
                    ? "bg-red-600 hover:bg-red-600"
                    : "bg-[#0B2559] hover:bg-[#0B2559]/90"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : submitStatus === "success" ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    Mensagem enviada!
                  </span>
                ) : submitStatus === "error" ? (
                  <span className="flex items-center gap-2">
                    <AlertCircle size={20} />
                    Erro ao enviar
                  </span>
                ) : (
                  "Enviar mensagem"
                )}
              </Button>
            </form>
          </div>

          {/* Quick Actions & Address */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div>
              <h3 className="text-[#0B2559] mb-6" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Ações rápidas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <a
                      key={index}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-4 border border-[#E6EAF0] rounded-xl hover:border-[#00BFA6] hover:shadow-md transition-all duration-200 group"
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                        style={{ backgroundColor: `${action.color}15` }}
                      >
                        <Icon size={20} style={{ color: action.color }} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[#1C2333] mb-1" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                          {action.label}
                        </div>
                        <div className="text-[#1C2333]/60 truncate" style={{ fontSize: '0.875rem' }}>
                          {action.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Address */}
            <Card className="p-6 border-[#E6EAF0] bg-[#F5F7FA]/50">
              <h3 className="text-[#0B2559] mb-4" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Endereço
              </h3>
              <div className="flex items-start gap-3 mb-6">
                <MapPin size={20} className="text-[#1F7A8C] flex-shrink-0 mt-1" />
                <div className="text-[#1C2333]/80">
                  <p>Av. Paulista, 1000 - Conj. 1405</p>
                  <p>Bela Vista, São Paulo - SP</p>
                  <p>CEP 01310-100</p>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="w-full h-48 bg-[#E6EAF0] rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#0B2559]/5 to-[#1F7A8C]/5 flex items-center justify-center">
                  <MapPin size={48} className="text-[#1F7A8C]/30" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
