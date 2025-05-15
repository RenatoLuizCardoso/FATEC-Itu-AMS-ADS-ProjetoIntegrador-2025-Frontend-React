export function Hero() {
  return (
    <section className="w-screen py-16 relative min-h-[80vh] flex items-center bg-cover bg-center">
      {/* Sobrepocição na imagem */}
      <div className="absolute inset-0 bg-black/40 z-10">{''}</div>

      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1682778418768-16081e4470a1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPosition: 'center',
        }}
      >
        {''}
      </div>

      {/* Conteúdo da sessão hero */}
      <div className="relative z-20 text-center px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-8 drop-shadow-lg">
          Nome & Restaurante
        </h1>
        {/* <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md max-w-2xl mx-auto">
          Uma frase agradável aos olhos do cliente
        </p> */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            type="button"
            className="text-white  bg-amber-900 hover:bg-amber-900/80 focus:outline-none focus:ring-4 focus:ring-amber-bg-amber-900/50 font-medium rounded-full text-lg px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105 mb-4"
          >
            Faça sua Reserva
          </button>

          <button
            type="button"
            className="text-white bg-amber-900 hover:bg-amber-900/80 focus:outline-none focus:ring-4 focus:ring-restaurant-brown/50 font-medium rounded-full text-lg px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105 mb-4"
          >
            Cardápio
          </button>
        </div>
      </div>
    </section>
  );
}
