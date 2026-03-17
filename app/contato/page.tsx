import React from 'react';

export default function ContatoPage() {
  const whatsappNumber = "5551999999999"; // Número do seu irmão

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      
      {/* Cabeçalho da Página */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-4">
          Fale com a Nossa Equipe
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Atendimento 100% digital e ágil para provedores. Tire suas dúvidas, solicite orçamentos personalizados ou acompanhe seu pedido.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Lado Esquerdo: Informações de Contato */}
        <div className="bg-[#003366] p-10 lg:p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-8">Canais de Atendimento</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-800/50 p-3 rounded-lg text-[#FF6600]">
                  📞
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">WhatsApp / Telefone</p>
                  <p className="font-semibold text-lg">(51) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-800/50 p-3 rounded-lg text-[#FF6600]">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">E-mail Comercial</p>
                  <p className="font-semibold text-lg">contato@dkwtelecom.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-800/50 p-3 rounded-lg text-[#FF6600]">
                  🕒
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">Horário de Operação</p>
                  <p className="font-semibold text-lg">Segunda a Sexta<br/>08h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-800/50">
            <h3 className="font-semibold mb-2 text-blue-100">Dados da Empresa</h3>
            <p className="text-sm text-blue-300">DKW Telecomunicações LTDA</p>
            <p className="text-sm text-blue-300">CNPJ: 00.000.000/0001-00</p>
            <p className="text-sm text-blue-300 mt-2">Operação logística com envio para todo o território nacional.</p>
          </div>
        </div>

        {/* Lado Direito: Formulário Direto */}
        <div className="p-10 lg:p-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Envie uma Mensagem</h2>
          
          <form className="space-y-5">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-slate-700 mb-1">Nome ou Empresa</label>
              <input 
                type="text" 
                id="nome" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#FF6600] focus:border-[#FF6600] outline-none transition-all"
                placeholder="Ex: Provedor Net Sul"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#FF6600] focus:border-[#FF6600] outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="telefone" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#FF6600] focus:border-[#FF6600] outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-slate-700 mb-1">Como podemos ajudar?</label>
              <textarea 
                id="mensagem" 
                rows={4} 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#FF6600] focus:border-[#FF6600] outline-none transition-all resize-none"
                placeholder="Escreva sua dúvida ou solicitação aqui..."
              ></textarea>
            </div>

            {/* O formulário por enquanto é visual, mas podemos ligar ele a um serviço depois */}
            <button 
              type="button"
              className="w-full bg-[#FF6600] hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors shadow-md"
            >
              Enviar Mensagem
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500 mb-3">Ou se preferir, chame direto no WhatsApp:</p>
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-[#25D366] font-bold hover:text-[#20bd5a] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Iniciar conversa agora
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}