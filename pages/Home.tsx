import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Settings, Globe, HardHat } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { KEY_STATS, PRODUCTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-gbh-black text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Placeholder */}
        <div className="absolute inset-0 z-0 bg-gray-900 border-b border-gray-800">
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gbh-black via-gbh-black/90 to-transparent z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-gbh-red px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest text-white">
              Qualité industrielle & prix compétitifs
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Solutions de fermeture <br/> <span className="text-gray-400">industrielles & tertiaires</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl font-light">
              Des systèmes de fermeture conformes aux standards internationaux, à prix direct usine. 
              Optimisez vos coûts de construction sans compromis sur la sécurité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-gbh-red hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-all">
                Nos solutions <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="border border-white text-white hover:bg-white hover:text-gbh-black px-8 py-4 rounded-sm font-bold uppercase tracking-wide flex items-center justify-center transition-all">
                Demander une étude
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="bg-gbh-dark py-12 border-b border-gbh-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {KEY_STATS.map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <p className="text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gbh-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Nos solutions" 
            subtitle="Une gamme complète alliant robustesse, conformité réglementaire et maîtrise budgétaire."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <Link 
                key={product.id} 
                to={`/products/${product.id}`}
                className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
              >
                <div className="h-48 relative bg-gray-200 border-b border-gray-100 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  {product.isRegulated && (
                    <div className="absolute top-4 right-4 bg-gbh-red text-white text-xs font-bold px-2 py-1 uppercase z-20 shadow-md">
                      Réglementé
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gbh-black mb-2 group-hover:text-gbh-red transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gbh-grey text-sm mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <span className="text-xs font-bold uppercase tracking-wider text-gbh-black flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                    Voir détails <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Authority / Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle 
                title="Maîtrise industrielle" 
                subtitle="Nous ne sommes pas de simples revendeurs. GBH Door est un industriel intégrant toute la chaîne de valeur pour optimiser les coûts."
              />
              
              <div className="space-y-8 mt-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center text-gbh-red">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gbh-black mb-2">Process intégrés</h4>
                    <p className="text-gbh-grey text-sm">Découpe, pliage, soudage et laquage réalisés sur nos propres lignes. L'absence de sous-traitance garantit des prix compétitifs.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center text-gbh-red">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gbh-black mb-2">Conformité certifiée</h4>
                    <p className="text-gbh-grey text-sm">Nos produits coupe-feu disposent de PV EFECTIS valides. Traçabilité totale des composants (colles, joints, quincaillerie).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center text-gbh-red">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gbh-black mb-2">Composants de premier plan</h4>
                    <p className="text-gbh-grey text-sm">Nous intégrons des composants sourcés auprès de leaders mondiaux (Europe et Chine) pour assurer la fiabilité de nos systèmes.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link to="/about" className="text-gbh-red font-bold uppercase tracking-wide text-sm hover:underline">
                  Découvrir notre modèle &rarr;
                </Link>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px]">
                <div className="w-full h-[400px] rounded-sm shadow-xl overflow-hidden">
                    <img src="/images/usine.png" alt="Usine GBH Door" className="w-full h-full object-cover" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gbh-black p-6 rounded-sm shadow-xl max-w-xs hidden lg:block">
                    <p className="text-white text-sm font-medium">
                        "La performance industrielle au service de la maîtrise budgétaire."
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-gray-400 text-xs uppercase tracking-widest">
                        <HardHat className="w-4 h-4" />
                        <span>Direction industrielle</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gbh-red py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Vos projets aux normes, au meilleur prix.</h2>
          <p className="text-xl mb-8 text-white/90">Contactez notre service commercial pour une cotation rapide.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-gbh-red px-8 py-3 rounded-sm font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;