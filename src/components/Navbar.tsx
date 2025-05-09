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
      className={`fixed w-screen px-6 md:px-10 py-5 transition-all duration-300 z-50 mb-2 ${scrolled || isOpen ? 'bg-amber-900 ' : 'bg-transparent'}  `}
    >
      <div className="container mx-auto flex justify-between px-4 tems-center text-amber-50">
        {/* Menu mobile */}
        <div className="md:hidden flex items-center">
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
        <div className=" flex items-center justify-center flex-grow ">
          <span className="text-2xl md:text-3xl font-playfair font-semibold">
            NomeRestaurante
          </span>
        </div>
        {/* Links desktop à direita */}
      </div>

      {/* Menu dropdown mobile */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-yellow-50 shadow-2xl rounded-b-xl border-t border-yellow-200 px-6 py-4 z-50"
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
                  className="flex items-center w-full gap-4 text-black text-base font-medium font-playfair hover:text-yellow-50 hover:bg-amber-900 px-4 py-3 rounded-lg transition-all duration-200"
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
