import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <div className="pt-20 pb-20 bg-gbh-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="bg-white p-8 md:p-12 shadow-sm rounded-sm border border-gbh-border mb-12">
            <SectionTitle title="À propos de GBH Door" subtitle="Une vision pragmatique de la fermeture industrielle." />
            <div className="prose prose-lg text-gbh-grey max-w-none">
                <p>
                    GBH Door est une nouvelle entité industrielle spécialisée dans la fabrication de systèmes de fermeture. 
                    Notre modèle est fondé sur un constat simple : le marché a besoin de produits fiables, conformes, et immédiatement disponibles, 
                    sans supporter les coûts et délais excessifs liés à l'importation.
                </p>
                <p>
                    En intégrant la production localement avec un outil industriel moderne, nous supprimons les intermédiaires. 
                    Cela nous permet d'offrir un rapport qualité/prix extrêmement agressif tout en garantissant un suivi technique de proximité.
                </p>
            </div>
        </div>

        {/* Vision & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gbh-black text-white p-8 rounded-sm shadow-lg">
                <h3 className="text-2xl font-bold mb-4 border-l-4 border-gbh-red pl-4">Compétitivité</h3>
                <p className="text-gray-300 leading-relaxed">
                    Nous avons optimisé chaque étape de notre chaîne de valeur pour réduire les coûts superflus. 
                    Notre parc machine de dernière génération assure une productivité élevée, ce qui se répercute directement 
                    sur la compétitivité de nos offres commerciales.
                </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm border border-gbh-border">
                <h3 className="text-2xl font-bold text-gbh-black mb-4 border-l-4 border-gbh-red pl-4">Rigueur technique</h3>
                <p className="text-gbh-grey leading-relaxed">
                    L'économie ne se fait jamais au détriment de la sécurité. Nos produits coupe-feu respectent les protocoles EFECTIS 
                    et nos fermetures industrielles sont conçues pour durer. Nous offrons le standard de qualité attendu par les professionnels.
                </p>
            </div>
        </div>

        {/* Value Chain */}
        <div className="bg-white p-8 md:p-12 shadow-sm rounded-sm border border-gbh-border">
            <SectionTitle title="Chaîne de valeur maîtrisée" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="p-4 border border-dashed border-gray-300 rounded-sm">
                    <span className="block text-4xl font-bold text-gbh-red mb-2">01</span>
                    <h4 className="font-bold text-gbh-black mb-2 uppercase text-sm">Sourcing</h4>
                    <p className="text-xs text-gray-500">Achat direct des matières premières (Acier, Moteurs) sans intermédiaires.</p>
                </div>
                <div className="p-4 border border-dashed border-gray-300 rounded-sm">
                    <span className="block text-4xl font-bold text-gbh-red mb-2">02</span>
                    <h4 className="font-bold text-gbh-black mb-2 uppercase text-sm">Production</h4>
                    <p className="text-xs text-gray-500">Transformation locale automatisée pour optimiser les coûts.</p>
                </div>
                <div className="p-4 border border-dashed border-gray-300 rounded-sm">
                    <span className="block text-4xl font-bold text-gbh-red mb-2">03</span>
                    <h4 className="font-bold text-gbh-black mb-2 uppercase text-sm">Disponibilité</h4>
                    <p className="text-xs text-gray-500">Stock tampon de pièces détachées et délais de fabrication courts.</p>
                </div>
                <div className="p-4 border border-dashed border-gray-300 rounded-sm">
                    <span className="block text-4xl font-bold text-gbh-red mb-2">04</span>
                    <h4 className="font-bold text-gbh-black mb-2 uppercase text-sm">Service</h4>
                    <p className="text-xs text-gray-500">Réactivité immédiate pour le SAV et les pièces de rechange.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;