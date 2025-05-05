import ambiente from '@assets/ambiente.jpg';
import chefe from '@assets/chefe.jpg';

export function QuemSomos() {
  return (
    <section className="px-6 py-16 bg-yellow-50 text-amber-900">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Sessão Cultura & Pratos  */}
        <div className="px-4 md:px-12 flex justify-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl mx-auto font-bold mb-6">
              Nossa Cultura & Pratos
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              No Brasa & Alma, usamos ingredientes frescos e regionais para
              criar pratos brasileiros com um toque moderno. Valorizamos o sabor
              autêntico, o preparo artesanal e a apresentação caprichada. Nosso
              cardápio muda com as estações e é pensado para surpreender em cada
              detalhe.
            </p>
          </div>
        </div>

        {/* Sessão Ambiente */}
        <div className="flex flex-col md:flex-row items-center gap-10 px-4 md:px-12">
          <div className="flex-1 text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nosso Ambiente
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Estamos em um espaço rodeado pela natureza, com um ambiente
              rústico e acolhedor. A arquitetura mistura madeira, pedra e luz
              natural para criar um clima calmo e sofisticado. Ideal para
              encontros especiais, almoços tranquilos ou jantares a dois.
            </p>
          </div>
          <img
            src={ambiente}
            alt="Interior do restaurante"
            className="rounded-2xl shadow-xl object-cover w-full max-w-xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl"
          />
        </div>

        {/* Sessão História */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 px-4 md:px-12">
          <div className="flex-1 text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossa História
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
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
            className="rounded-2xl shadow-xl object-cover w-full max-w-xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
