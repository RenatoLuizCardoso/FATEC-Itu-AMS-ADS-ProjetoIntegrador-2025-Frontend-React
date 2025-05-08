import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export function Contatos() {
  const style = 'underline hover:text-amber-600 transition-colors';

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
          href="https://www.google.com/maps/place/V%C3%B4+Guerino+Bar/@-23.0824954,-47.2922158,13z/data=!4m10!1m2!2m1!1srestaurante+indaiatuba!3m6!1s0x94c8b3573f959ad5:0x39bc0975d6ca6617!8m2!3d-23.0825082!4d-47.2200975!15sChZyZXN0YXVyYW50ZSBpbmRhaWF0dWJhWhgiFnJlc3RhdXJhbnRlIGluZGFpYXR1YmGSARFmYW1pbHlfcmVzdGF1cmFudKoBUBABKg8iC3Jlc3RhdXJhbnRlKAwyHxABIhu7bdN5mfNBe5rpOALsMLzKTaQxqiKezCabTosyGhACIhZyZXN0YXVyYW50ZSBpbmRhaWF0dWJh4AEA!16s%2Fg%2F1q5gmbfkl?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className={style}
        >
          Rua Padre Manoel da Nóbrega, 271 - Vila Almeida, Indaiatuba - SP,
          13330-650
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
    {
      icon: Clock,
      label: 'Horários',
      content: (
        <>
          Ter a Qui: 18h30 – 22h30 <br />
          Sex e Sáb: 18h30 – 23h30 <br />
          Dom: 12h – 16h
        </>
      ),
    },
  ];

  return (
    <section className="w-screen py-16 text-amber-900 bg-yellow-50">
      <div className='max-w-7xl mx-auto px-6 space-y-24"'>
        <header className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contato</h2>
          <p className="text-base md:text-lg">
            Entre em contato conosco ou confira nossos horários de
            funcionamento.
          </p>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
          {contatos.map(({ icon: Icon, label, content }) => (
            <div
              key={label}
              className="flex items-start gap-4 bg-white rounded-xl p-4 md:p-6 transition hover:shadow-md"
            >
              <Icon className="w-8 h-8 text-amber-700 flex-shrink-0" />
              <div className="space-y-1">
                <h3 className="text-lg font-bold">{label}:</h3>
                <div className="text-base">{content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
