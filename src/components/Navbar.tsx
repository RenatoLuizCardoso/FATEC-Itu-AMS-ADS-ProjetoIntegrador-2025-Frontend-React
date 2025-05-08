import { Book, Contact, Home, LogIn, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={
        'fixed w-screen  hero-section px-6 md:px-10 py-5 transition-all duration-300 z-50 bg-amber-900 mb-2'
      }
    >
      <div className="container mx-auto flex justify-between px-4 tems-center text-amber-50">
        {/* Links desktop à esquerda */}

        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-amber-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Logo centralizado */}
        <div className=" flex items-center justify-center flex-grow ">
          <span className="text-2xl md:text-3xl font-playfair font-semibold">
            NomeRestaurante
          </span>
        </div>
        {/* Links desktop à direita */}

        {/* Menu mobile */}
      </div>

      {/* Menu dropdown mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 bg-yellow-50 right-0 shadow-lg py-4 px-6 z-50 ">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.name}
              className="flex items-center py-3 space-x-3 text-black hover:text-amber-800"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
