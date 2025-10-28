export function Footer() {
  return (
    <footer className="bg-[#0B2559] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="tracking-tight" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              Focus
            </span>
            <span className="text-[#00BFA6]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>.</span>
          </div>

          {/* Copyright & Info */}
          <div className="text-center md:text-right">
            <p className="text-white/80 mb-1">
              © {new Date().getFullYear()} Focus Consultoria em Engenharia de Produção. Todos os direitos reservados.
            </p>
            <p className="text-white/60" style={{ fontSize: '0.875rem' }}>
              CNPJ: 00.000.000/0000-00
            </p>
          </div>
        </div>

        {/* Policy Links */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="text-white/60 hover:text-[#00BFA6] transition-colors duration-150"
            style={{ fontSize: '0.875rem' }}
          >
            Política de Privacidade
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-[#00BFA6] transition-colors duration-150"
            style={{ fontSize: '0.875rem' }}
          >
            Termos de Uso
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-[#00BFA6] transition-colors duration-150"
            style={{ fontSize: '0.875rem' }}
          >
            LGPD
          </a>
        </div>
      </div>
    </footer>
  );
}
