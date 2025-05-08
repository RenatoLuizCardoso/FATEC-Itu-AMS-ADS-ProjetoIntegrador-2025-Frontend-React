import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export function Contatos() {
  const style = 'underline hover:text-amber-700 transition-colors';

  const contatos = [
    {
      icon: Mail,
      label: 'Email',
      content: (
        <a href="mailto:nomerestaurante@gmail.com" className={style}>
          nomerestaurante@gmail.com
        </a>
      ),
    },
    {
      icon: MapPin,
      label: 'Endereço',
      content: (
        <a
          href="https://www.google.com/maps/place/V%C3%B4+Guerino+Bar/@-23.0824954,-47.2922158,13z/data=!4m10!1m2!2m1!1srestaurante+indaiatuba!3m6!1s0x94c8b3573f959ad5:0x39bc0975d6ca6617!8m2!3d-23.0825082!4d-47.2200975"
          target="_blank"
          rel="noopener noreferrer"
          className={style}
        >
          Rua Padre Manoel da Nóbrega, 271 <br />
          Vila Almeida, Indaiatuba - SP <br />
          CEP 13330-650
        </a>
      ),
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      content: (
        <a
          href="https://wa.me/551578542345"
          target="_blank"
          rel="noopener noreferrer"
          className={style}
        >
          +55 15 7854-2345
        </a>
      ),
    },
    {
      icon: Phone,
      label: 'Telefone',
      content: '+55 14 54773-1275',
    },
  ];

  return (
    <section className="w-screen py-8 text-amber-900 bg-yellow-50">
      <div className="mx-auto px-12 max-w-6xl space-y-24 md:px-12">
        <header className="mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">Contatos</h2>
          <hr className="border-2 rounded-xl w-25 mb-4 border-lime-800" />
          <p className="text-lg md:text-xl">
            Deseja fazer uma reserva ou tem alguma dúvida? Entre em contato
            conosco. Nossa equipe terá o prazer em atendê-lo.
          </p>
        </header>

        <div className="mx-auto grid grid-cols-1 gap-8">
          {contatos.map(({ icon: Icon, label, content }) => (
            <div key={label} className="flex gap-4">
              <Icon size={20} />
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold">{label}</h3>
                <div className="text-base md:text-lg text-amber">{content}</div>
              </div>
            </div>
          ))}
          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-bold">
              Horário de Funcionamento
            </h3>
            <div className="text-base md:text-lg text-amber">
              Terça a Quinta: 18h às 23h <br />
              Sexta e Sábado: 12h às 15h e 18h às 00h <br />
              Domingo: 12h às 17h <br />
              Segunda: Fechado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
