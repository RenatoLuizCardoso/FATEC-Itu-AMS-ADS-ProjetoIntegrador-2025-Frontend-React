export function QuemSomos() {
  return (
    <section className="px-6 py-12 bg-yellow-50 text-amber-900">
      <div className="max-w-4xl mx-auto space-y-15 text-center leading-relaxed">
        {/* Sessão Cultura / Pratos */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Nossa Cultura & Pratos</h2>
          <p className="text-lg">
            No Brasa & Alma, usamos ingredientes frescos e regionais para criar
            pratos brasileiros com um toque moderno. Valorizamos o sabor
            autêntico, o preparo artesanal e a apresentação caprichada. Nosso
            cardápio muda com as estações e é pensado para surpreender em cada
            detalhe.
          </p>
        </div>

        {/* Sessão Ambiente */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Nosso Ambiente</h2>
          <p className="text-lg mb-6">
            Estamos em um espaço rodeado pela natureza, com um ambiente rústico
            e acolhedor. A arquitetura mistura madeira, pedra e luz natural para
            criar um clima calmo e sofisticado. Ideal para encontros especiais,
            almoços tranquilos ou jantares a dois.
          </p>
          <img
            src="/ambiente.jpg"
            alt="Interior do restaurante"
            className="rounded-2xl shadow-xl mx-auto max-w-[300px] max-h-[200px] object-cover"
          />
        </div>

        {/* Sessão Dono / História */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
          <p className="text-lg mb-6">
            Fundado em 2015 pela chef Helena Monteiro, o Brasa & Alma nasceu com
            a ideia de unir sabor e afeto. Helena estudou gastronomia na Europa
            e trouxe para o Brasil uma cozinha que mistura técnica e emoção.
            Hoje, somos referência em comida artesanal, com prêmios e
            reconhecimento nacional.
          </p>
          <img
            src="/chefe.jpg"
            alt="Foto do Chef Roberto"
            className="rounded-2xl shadow-xl mx-auto max-w-[300px] max-h-[200px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
