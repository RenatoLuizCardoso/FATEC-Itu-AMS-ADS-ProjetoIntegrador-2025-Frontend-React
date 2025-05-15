import { Book, Contact, Home, LogIn, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Navbar() {
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

  const navItems = [
    {
      name: 'Home',
      icon: <Home size={18} />,
    },
    {
      name: 'Quem Somos',
      icon: <Book size={18} />,
    },
    {
      name: 'Contatos',
      icon: <Contact size={18} />,
    },
    {
      name: 'Login',
      icon: <LogIn size={18} />,
    },
  ];

  return (
    <nav
      className={`fixed z-50 mb-2 w-screen px-6 py-5 transition-all duration-300 md:px-10 ${scrolled || isOpen ? 'bg-amber-900 ' : 'bg-transparent'}  `}
    >
      <div className="tems-center container mx-auto flex justify-between px-4 text-amber-50">
        {/* Menu mobile */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-amber-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links desktop à esquerda */}

        {/* Logo centralizado */}
        <div className=" flex flex-grow items-center justify-center ">
          <span className="font-playfair font-semibold text-2xl md:text-3xl">
            NomeRestaurante
          </span>
        </div>
        {/* Links desktop à direita */}
      </div>

      {/* Menu dropdown mobile */}
      {isOpen && (
        <div
          className="absolute top-full right-0 left-0 z-50 rounded-b-xl border-yellow-200 border-t bg-yellow-50 px-6 py-4 shadow-2xl md:hidden"
          style={{
            animation: isOpen
              ? 'fadeIn 0.3s ease-out forwards'
              : 'fadeOut 0.3s ease-in forwards',
          }}
        >
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center gap-4 rounded-lg px-4 py-3 font-medium font-playfair text-base text-black transition-all duration-200 hover:bg-amber-900 hover:text-yellow-50"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
