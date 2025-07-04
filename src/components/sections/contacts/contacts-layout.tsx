import {
  ChatCircleIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
} from '@phosphor-icons/react';

type ContactItem = {
  type: 'email' | 'address' | 'whatsapp' | 'phone';
  label: string;
  value: string;
  link?: string;
};

type operatingHour = {
  label: string;
  time: string;
};

type ContactsProps = {
  paragraphInfo: string;
  contacts: ContactItem[];
  operatingHours: operatingHour[];
};

const iconMap = {
  email: EnvelopeSimpleIcon,
  address: MapPinIcon,
  whatsapp: ChatCircleIcon,
  phone: PhoneIcon,
};

export function ContactsLayout({
  paragraphInfo,
  contacts,
  operatingHours,
}: ContactsProps) {
  const style = 'underline hover:text-amber-700 transition-colors';

  return (
    <section
      id="contact"
      className="w-full scroll-mt-[5rem] bg-yellow-50 py-8 text-amber-900"
    >
      <div className="mx-auto max-w-6xl space-y-24 px-10 md:px-20">
        <header className="mx-auto mb-8">
          <h2 className="font-bold text-4xl md:text-5xl">Contatos</h2>
          <hr className="mb-4 w-25 rounded-xl border-2 border-lime-800" />
          <p className="text-lg md:text-xl">{paragraphInfo}</p>
        </header>

        <div className="mx-auto grid grid-cols-1 gap-8">
          {contacts.map(({ type, label, value, link }) => {
            const Icon = iconMap[type];

            return (
              <div key={label} className="flex items-center gap-4">
                <div className="space-y-1">
                  <h3 className="flex items-center gap-2 font-bold text-lg md:text-xl">
                    <Icon size={24} />
                    {label}
                  </h3>
                  <div className="text-amber text-base md:text-lg">
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style}
                      >
                        {' '}
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="space-y-1">
            <h3 className="font-bold text-lg md:text-xl">
              Horário de Funcionamento
            </h3>
            {operatingHours.map(({ label, time }) => (
              <div key={label} className="text-amber text-base md:text-lg">
                {label} : {time}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
