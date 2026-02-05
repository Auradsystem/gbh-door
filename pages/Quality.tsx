import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { ShieldCheck, FileText, Lock } from 'lucide-react';

const Quality: React.FC = () => {
  return (
    <div className="pt-20 pb-20 bg-gbh-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle title="Qualité & conformité" subtitle="Rassurer les décideurs et les autorités de contrôle." />

        <div className="space-y-12">
            
            {/* Démarche Qualité */}
            <div className="bg-white p-8 shadow-sm rounded-sm border-l-4 border-gbh-black">
                <div className="flex items-start gap-4">
                    <ShieldCheck className="w-10 h-10 text-gbh-black flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-gbh-black mb-3">Notre démarche qualité</h3>
                        <p className="text-gbh-grey leading-relaxed">
                            Chez GBH Door, la qualité n'est pas subjective. Elle est mesurable et documentée. 
                            Nous distinguons clairement nos gammes de produits standards (rideaux, portails) 
                            de nos produits réglementés (portes coupe-feu) qui suivent un protocole strict.
                        </p>
                    </div>
                </div>
            </div>

            {/* Focus EFECTIS */}
            <div className="bg-white p-8 shadow-sm rounded-sm border border-gbh-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gbh-red/10 rounded-bl-full -mr-10 -mt-10 z-0"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gbh-red mb-6 uppercase tracking-wide">Focus : Portes coupe-feu</h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-gbh-black mb-2 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-gbh-red" />
                                Rapport EFECTIS
                            </h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Nos produits ont été testés en laboratoire et disposent de Procès-Verbaux (PV) de résistance au feu valides (CF30 / CF60).
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gbh-black mb-2 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-gbh-red" />
                                Traçabilité
                            </h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Nous garantissons que les portes livrées sont strictement identiques aux portes testées. 
                                Les composants critiques (joints, serrures CISA, âme isolante) sont certifiés.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 border border-gray-200 text-sm text-gray-700 italic">
                        "La sécurité incendie ne tolère aucune approximation. Nous fournissons systématiquement les documents nécessaires aux commissions de sécurité."
                    </div>
                </div>
            </div>

            {/* Composants */}
            <div>
                 <h3 className="text-xl font-bold text-gbh-black mb-6">Composants certifiés</h3>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 text-center border border-gray-200 rounded-sm">
                        <span className="block font-bold text-gbh-black mb-1">CISA</span>
                        <span className="text-xs text-gray-500">Serrurerie & antipanique</span>
                    </div>
                     <div className="bg-white p-4 text-center border border-gray-200 rounded-sm">
                        <span className="block font-bold text-gbh-black mb-1">Aciers</span>
                        <span className="text-xs text-gray-500">Galvanisés haute qualité</span>
                    </div>
                     <div className="bg-white p-4 text-center border border-gray-200 rounded-sm">
                        <span className="block font-bold text-gbh-black mb-1">Joints</span>
                        <span className="text-xs text-gray-500">Intumescents certifiés</span>
                    </div>
                     <div className="bg-white p-4 text-center border border-gray-200 rounded-sm">
                        <span className="block font-bold text-gbh-black mb-1">Moteurs</span>
                        <span className="text-xs text-gray-500">Standards industriels</span>
                    </div>
                 </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Quality;