import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Hammer, Cog, Ruler, Truck } from 'lucide-react';

const Capabilities: React.FC = () => {
  return (
    <div className="pt-20 pb-20 bg-gbh-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gbh-black mb-4">Capacités industrielles</h1>
            <p className="text-xl text-gbh-grey">
                GBH Door n'est pas un revendeur. Nous sommes une usine de transformation métallique équipée pour répondre aux standards internationaux.
            </p>
        </div>

        {/* Main visual */}
        <div className="mb-16 rounded-sm overflow-hidden shadow-lg h-80 lg:h-96 relative">
            <img src="/images/usine.png" alt="Usine GBH Door - Vue panoramique" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gbh-black/10 flex items-center justify-center pointer-events-none">
                <span className="border-2 border-white text-white px-6 py-2 text-2xl font-bold uppercase tracking-widest bg-black/20 backdrop-blur-sm">
                    Production intégrée
                </span>
            </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
                <SectionTitle title="Process industriels" subtitle="Un parc machine moderne et performant." />
                <div className="prose text-gbh-grey">
                    <p>
                        Notre unité de production située à Alger s'étend sur plus de 5000 m². Elle est organisée en îlots de production 
                        dédiés à chaque famille de produits pour optimiser les flux et garantir la qualité.
                    </p>
                    <p>
                        Nous avons investi dans des équipements de pointe, majoritairement d'origine asiatique (Chine) auprès de leaders 
                        mondiaux de la machine-outil, garantissant précision et répétabilité à des coûts maîtrisés.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-sm shadow-sm border border-gbh-border hover:border-gbh-red transition-colors group">
                    <Ruler className="w-8 h-8 text-gbh-grey mb-4 group-hover:text-gbh-red" />
                    <h4 className="font-bold text-gbh-black mb-2">Découpe & pliage</h4>
                    <p className="text-sm text-gray-500">Cisailles guillotine et presses plieuses numériques pour le formage des tôles d'acier.</p>
                </div>
                <div className="bg-white p-6 rounded-sm shadow-sm border border-gbh-border hover:border-gbh-red transition-colors group">
                    <Hammer className="w-8 h-8 text-gbh-grey mb-4 group-hover:text-gbh-red" />
                    <h4 className="font-bold text-gbh-black mb-2">Soudage & assemblage</h4>
                    <p className="text-sm text-gray-500">Postes de soudure MIG/TIG et tables d'assemblage gabariées pour la précision dimensionnelle.</p>
                </div>
                <div className="bg-white p-6 rounded-sm shadow-sm border border-gbh-border hover:border-gbh-red transition-colors group">
                    <Cog className="w-8 h-8 text-gbh-grey mb-4 group-hover:text-gbh-red" />
                    <h4 className="font-bold text-gbh-black mb-2">Mécanique</h4>
                    <p className="text-sm text-gray-500">Intégration des motorisations et systèmes de commande électrique.</p>
                </div>
                <div className="bg-white p-6 rounded-sm shadow-sm border border-gbh-border hover:border-gbh-red transition-colors group">
                    <Truck className="w-8 h-8 text-gbh-grey mb-4 group-hover:text-gbh-red" />
                    <h4 className="font-bold text-gbh-black mb-2">Logistique</h4>
                    <p className="text-sm text-gray-500">Emballage renforcé et palettisation pour une livraison sécurisée sur chantier.</p>
                </div>
            </div>
        </div>

        {/* Quality Control Bar */}
        <div className="bg-gbh-dark text-white p-8 md:p-12 rounded-sm shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Contrôle qualité systématique</h3>
            <p className="max-w-2xl mx-auto text-gray-300 mb-8">
                Chaque porte, chaque rideau sortant de nos lignes subit une inspection visuelle et fonctionnelle. 
                Pour les produits coupe-feu, un contrôle des points critiques de sécurité est documenté.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm font-semibold text-gray-400 uppercase tracking-wide">
                <span>Contrôle dimensionnel</span>
                <span>Qualité des soudures</span>
                <span>Fonctionnement serrurerie</span>
                <span>Conformité laquage</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Capabilities;