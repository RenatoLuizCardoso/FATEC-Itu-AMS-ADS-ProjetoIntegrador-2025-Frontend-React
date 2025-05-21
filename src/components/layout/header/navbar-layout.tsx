import { Book, Contact, Home, LogIn, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

type NavbarItemType = 'home' | 'about' | 'contact' | 'login';

type NavbarItem = {
  type: NavbarItemType;
  label: string;
  href: string;
};

type NavbarLayoutProps = {
  logoText: string;
  items: NavbarItem[];
};

const iconMap = {
  home: Home,
  about: Book,
  contact: Contact,
  login: LogIn,
};

export function NavbarLayout({ logoText, items }: NavbarLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const offset = window.scrollY;
      setScrolled(offset > window.innerHeight * 0.6); // Quando passar da hero
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 mb-2 w-screen px-6 py-5 transition-all duration-300 md:px-10 ${scrolled || isOpen ? 'bg-amber-900 ' : 'bg-transparent'}  `}
    >
      <div className="tems-center container mx-auto flex justify-between px-4 text-amber-50">
        {/* Menu mobile */}
        <div className="flex items-center lg:hidden ">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-amber-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links desktop à esquerda */}
        <div className="hidden items-center gap-8 lg:flex">
          {items.slice(0, -2).map(({ type, label, href }) => {
            const Icon = iconMap[type];
            return (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 font-medium text-base transition-colors hover:text-yellow-300"
              >
                {Icon && <Icon size={18} />}
                {label}
              </a>
            );
          })}
        </div>

        {/* Logo centralizado */}
        <div className="-translate-x-1/2 absolute left-1/2 transform">
          <span className="font-playfair font-semibold text-2xl md:text-3xl">
            {logoText}
          </span>
        </div>

        {/* Links desktop à direita */}
        <div className="hidden items-center gap-4 md:flex">
          {items
            .filter((item) => item.type === 'contact' || item.type === 'login')
            .map(({ label, href, type }) => {
              const Icon = iconMap[type];
              const isLogin = type === 'login';
              return (
                <a
                  key={label}
                  href={href}
                  className={`flex items-center gap-2 rounded-md px-4 py-2 font-semibold transition-colors ${
                    isLogin
                      ? 'bg-yellow-50 text-amber-900 hover:bg-yellow-100'
                      : 'hidden text-amber-50 hover:text-yellow-300 lg:flex'
                  }`}
                >
                  {Icon && <Icon size={18} />}
                  {label}
                </a>
              );
            })}
        </div>
      </div>

      {/* Menu dropdown mobile */}
      {isOpen && (
        <div
          className="absolute top-full right-0 left-0 z-50 rounded-b-xl border-yellow-200 border-t bg-yellow-50 px-6 py-4 shadow-2xl lg:hidden"
          style={{
            animation: isOpen
              ? 'fadeIn 0.3s ease-out forwards'
              : 'fadeOut 0.3s ease-in forwards',
          }}
        >
          <ul className="flex flex-col space-y-4">
            {items.map(({ type, label, href }) => {
              const Icon = iconMap[type];
              const isLogin = type === 'login';
              return (
                <li key={label}>
                  <a
                    href={href}
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className={`flex w-full items-center gap-4 rounded-lg px-4 py-3 font-medium font-playfair text-base text-black transition-all duration-200 hover:bg-amber-900 ${isLogin ? 'hover:text-yellow-50 md:hidden' : 'hover:text-yellow-50'}`}
                  >
                    {Icon && <Icon size={18} />}
                    <span>{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
