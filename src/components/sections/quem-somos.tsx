import ambiente from '@assets/ambiente.jpg';
import chefe from '@assets/chefe.jpg';

export function QuemSomos() {
  return (
    <section className="w-screen bg-yellow-50 py-16 text-amber-900">
      <div className="mx-auto max-w-7xl space-y-24 px-6">
        {/* Sessão Cultura & Pratos  */}
        <div className="flex justify-center px-4 md:px-12">
          <div className="text-center md:text-left">
            <h2 className="mx-auto mb-6 font-bold text-3xl md:text-4xl">
              Nossa Cultura & Pratos
            </h2>
            <p className="text-lg leading-relaxed md:text-xl">
              No Brasa & Alma, usamos ingredientes frescos e regionais para
              criar pratos brasileiros com um toque moderno. Valorizamos o sabor
              autêntico, o preparo artesanal e a apresentação caprichada. Nosso
              cardápio muda com as estações e é pensado para surpreender em cada
              detalhe.
            </p>
          </div>
        </div>

        {/* Sessão Ambiente */}
        <div className="flex flex-col items-center gap-10 px-4 md:flex-row md:px-12">
          <div className="max-w-xl flex-1 text-center md:text-left">
            <h2 className="mb-6 font-bold text-3xl md:text-4xl">
              Nosso Ambiente
            </h2>
            <p className="text-lg leading-relaxed md:text-xl">
              Estamos em um espaço rodeado pela natureza, com um ambiente
              rústico e acolhedor. A arquitetura mistura madeira, pedra e luz
              natural para criar um clima calmo e sofisticado. Ideal para
              encontros especiais, almoços tranquilos ou jantares a dois.
            </p>
          </div>
          <img
            src={ambiente}
            alt="Interior do restaurante"
            className="w-full max-w-xl rounded-2xl object-cover shadow-xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl"
          />
        </div>

        {/* Sessão História */}
        <div className="flex flex-col items-center gap-12 px-4 md:flex-row-reverse md:px-12">
          <div className="max-w-xl flex-1 text-center md:text-left">
            <h2 className="mb-6 font-bold text-3xl md:text-4xl">
              Nossa História
            </h2>
            <p className="text-lg leading-relaxed md:text-xl">
              Fundado em 2015 pela chef Helena Monteiro, o Brasa & Alma nasceu
              com a ideia de unir sabor e afeto. Helena estudou gastronomia na
              Europa e trouxe para o Brasil uma cozinha que mistura técnica e
              emoção. Hoje, somos referência em comida artesanal, com prêmios e
              reconhecimento nacional.
            </p>
          </div>
          <img
            src={chefe}
            alt="Foto do Chef Roberto"
            className="w-full max-w-xl rounded-2xl object-cover shadow-xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
