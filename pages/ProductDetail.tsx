import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import SectionTitle from '../components/SectionTitle';
import { ShieldAlert, FileCheck, Info, ArrowLeft } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return <Navigate to="/products" />;
  }

  const isFireDoor = product.id === 'portes-coupe-feu';

  return (
    <div className="pt-20 pb-20 bg-gbh-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8">
            <Link to="/products" className="text-gray-500 hover:text-gbh-black text-sm flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Retour aux produits
            </Link>
        </div>

        {/* Header Placeholder */}
        <div className="bg-gbh-black rounded-t-sm shadow-sm border-b border-gray-800 overflow-hidden">
            <div className="relative h-80 md:h-96 bg-gray-900 overflow-hidden">
                 <img src={product.image} alt={product.title} className="w-full h-full object-cover absolute inset-0" />
                 
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end pointer-events-none">
                    <div className="p-8 md:p-12 w-full">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{product.title}</h1>
                        <p className="text-gray-300 text-lg">{product.shortDescription}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Description */}
                <div className="bg-white p-8 rounded-sm shadow-sm border border-gbh-border">
                    <h2 className="text-2xl font-bold text-gbh-black mb-6">Présentation technique</h2>
                    <p className="text-gbh-grey leading-relaxed text-lg mb-6">
                        {product.description}
                    </p>
                    <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-gbh-red">
                        <h3 className="font-bold text-gbh-black mb-4 uppercase text-sm tracking-wide">Caractéristiques clés</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {product.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 bg-gbh-red rounded-full flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Specific Section for Fire Doors */}
                {isFireDoor && (
                    <div className="bg-white p-8 rounded-sm shadow-sm border border-gbh-red/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <ShieldAlert className="w-48 h-48" />
                        </div>
                        
                        <SectionTitle title="Conformité & certification" subtitle="Cadre réglementaire strict EFECTIS" />
                        
                        <div className="space-y-6 relative z-10">
                            <div className="flex gap-4 items-start">
                                <FileCheck className="w-8 h-8 text-gbh-red flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-bold text-gbh-black mb-1">Procès-verbal feu</h4>
                                    <p className="text-gray-600 text-sm">
                                        Nos portes coupe-feu sont fabriquées strictement conformément aux Procès-Verbaux (PV) 
                                        délivrés par le laboratoire agréé <strong>EFECTIS</strong>.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <Info className="w-8 h-8 text-gbh-red flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-bold text-gbh-black mb-1">Configuration figée</h4>
                                    <p className="text-gray-600 text-sm">
                                        La configuration livrée est identique à la configuration testée. Aucune substitution de composant n'est tolérée.
                                        Cela inclut les aciers, les isolants internes, les joints intumescents et les colles spécifiques.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 text-red-900 text-sm border border-red-100 rounded-sm">
                                <strong>Important :</strong> Un dossier documentaire spécifique (Certificats, PV, Fiches techniques composants) 
                                est remis à la livraison pour la réception par les organismes de contrôle (CTC, Protection Civile).
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
                
                {/* CTA Card */}
                <div className="bg-gbh-black text-white p-8 rounded-sm shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Besoin d'une étude ?</h3>
                    <p className="text-gray-400 text-sm mb-6">
                        Notre bureau technique valide la faisabilité et la conformité de votre demande selon vos plans.
                    </p>
                    <Link to="/contact" className="block w-full text-center bg-gbh-red hover:bg-red-700 text-white font-bold uppercase py-3 rounded-sm transition-colors">
                        Demander un devis
                    </Link>
                </div>

                {/* Specs Card */}
                <div className="bg-white p-6 rounded-sm shadow-sm border border-gbh-border">
                    <h3 className="font-bold text-gbh-black mb-4 border-b pb-2">Détails rapides</h3>
                    <dl className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <dt className="text-gray-500">Catégorie</dt>
                            <dd className="font-medium text-gbh-black capitalize">{product.category === 'industrial' ? 'Industriel' : 'Tertiaire'}</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-gray-500">Service</dt>
                            <dd className="font-medium text-gbh-black">Direct usine</dd>
                        </div>
                        {isFireDoor && (
                             <div className="flex justify-between">
                                <dt className="text-gray-500">Classement</dt>
                                <dd className="font-medium text-gbh-red">CF 30 / CF 60</dd>
                            </div>
                        )}
                         <div className="flex justify-between">
                            <dt className="text-gray-500">Disponibilité</dt>
                            <dd className="font-medium text-gbh-black">Sur commande</dd>
                        </div>
                    </dl>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;