import { Book, Contact, Home, Menu, X } from 'lucide-react';
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
    },
  ];

  return (
    <nav
      className={`fixed w-full px-6 md:px-10 py-4 transition-all duration-300 z-50 ${
        scrolled ? 'bg-restaurant-brown shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Links desktop à esquerda */}

        {/* Logo centralizado */}
        <div className="flex items-center justify-center flex-grow md:flex-grow-0">
          <span className="text-2xl md:text-3xl font-playfair font-semibold text-restaurant-beige">
            NomeRestaurante
          </span>
        </div>
        {/* Links desktop à direita */}

        {/* Menu mobile */}
        <div className="md:hidden flex items items-center">
          <button type="button">
            {' '}
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Menu dropdown mobile */}
      <div className="md:hidden absolute top-full left-0 right-0 bg-restaurant-brown shadow-lg py-4 px-6 z-50 animate-fade-in">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center py-3 space-x-3 text-black hover:text-restaurant-cream"
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}
