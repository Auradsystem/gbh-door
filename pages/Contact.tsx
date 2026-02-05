import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { COMPANY_CONTACT } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 pb-20 bg-gbh-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle title="Contactez-nous" subtitle="Notre équipe technique et commerciale est à votre écoute pour vos projets." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Form Side */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-gbh-border">
                <h3 className="text-xl font-bold text-gbh-black mb-6">Formulaire de contact</h3>
                <ContactForm />
            </div>

            {/* Info Side */}
            <div className="space-y-8">
                <div className="bg-gbh-black text-white p-8 rounded-sm shadow-lg">
                    <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-4">Coordonnées</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-gbh-red flex-shrink-0" />
                            <div>
                                <span className="block font-bold text-gray-200">Adresse</span>
                                <span className="text-gray-400 text-sm">{COMPANY_CONTACT.address}</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-gbh-red flex-shrink-0" />
                            <div>
                                <span className="block font-bold text-gray-200">Téléphone</span>
                                <span className="text-gray-400 text-sm">{COMPANY_CONTACT.phone}</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-gbh-red flex-shrink-0" />
                            <div>
                                <span className="block font-bold text-gray-200">Email</span>
                                <span className="text-gray-400 text-sm">{COMPANY_CONTACT.email}</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Clock className="w-6 h-6 text-gbh-red flex-shrink-0" />
                            <div>
                                <span className="block font-bold text-gray-200">Horaires</span>
                                <span className="text-gray-400 text-sm">{COMPANY_CONTACT.hours}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-sm shadow-sm border border-gbh-border">
                    <h4 className="font-bold text-gbh-black mb-2">Zone d'intervention</h4>
                    <p className="text-gbh-grey text-sm">
                        Nous livrons et installons nos solutions sur l'ensemble du territoire algérien. 
                        Nos équipes techniques se déplacent pour les relevés de cotes et l'assistance à la pose.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;