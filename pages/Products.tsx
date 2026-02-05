import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { PRODUCTS } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="pt-20 pb-20 bg-gbh-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Gamme de produits" 
          subtitle="Des solutions techniques pour chaque configuration industrielle et tertiaire." 
        />

        <div className="space-y-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-sm shadow-sm border border-gbh-border overflow-hidden flex flex-col md:flex-row h-full group">
              <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto bg-gray-200 border-r border-gray-100">
                 <img src={product.image} alt={product.title} className="w-full h-full object-cover" />

                {product.isRegulated && (
                   <div className="absolute top-0 left-0 bg-gbh-red text-white text-xs font-bold px-3 py-2 uppercase shadow-md flex items-center gap-2">
                     <CheckCircle2 className="w-4 h-4" /> Certification requise
                   </div>
                )}
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gbh-black">{product.title}</h3>
                    <span className={`text-[10px] uppercase font-bold px-2 py-1 border rounded-sm ${product.category === 'industrial' ? 'border-gbh-dark text-gbh-dark' : 'border-gbh-grey text-gbh-grey'}`}>
                      Usage {product.category === 'industrial' ? 'industriel' : 'tertiaire'}
                    </span>
                  </div>
                  <p className="text-gbh-grey mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {product.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-gbh-red rounded-full"></div>
                            {feature}
                        </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex justify-end">
                    <Link 
                        to={`/products/${product.id}`}
                        className="text-gbh-black font-bold uppercase text-sm flex items-center gap-2 group-hover:text-gbh-red transition-colors"
                    >
                        Consulter la fiche technique <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;