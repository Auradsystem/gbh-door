import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gbh-black text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo-gbh-3d.svg" alt="GBH" className="h-10 w-auto" />
              <span className="font-bold text-xl text-white">GBH DOOR</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Fabricant algérien de systèmes de fermeture industriels et tertiaires. 
              Excellence technique et conformité réglementaire.
            </p>
          </div>

          {/* Column 2: Solutions */}
          <div className="col-span-1">
            <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-4 border-l-2 border-gbh-red pl-3">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products/portes-coupe-feu" className="hover:text-gbh-red transition-colors">Portes coupe-feu</Link></li>
              <li><Link to="/products/rideaux-rapides" className="hover:text-gbh-red transition-colors">Rideaux rapides</Link></li>
              <li><Link to="/products/portes-sectionnelles" className="hover:text-gbh-red transition-colors">Portes sectionnelles</Link></li>
              <li><Link to="/products" className="hover:text-gbh-red transition-colors">Toutes nos solutions</Link></li>
            </ul>
          </div>

          {/* Column 3: Entreprise */}
          <div className="col-span-1">
            <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-4 border-l-2 border-gbh-red pl-3">Entreprise</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gbh-red transition-colors">À propos</Link></li>
              <li><Link to="/capabilities" className="hover:text-gbh-red transition-colors">Capacités industrielles</Link></li>
              <li><Link to="/quality" className="hover:text-gbh-red transition-colors">Qualité & conformité</Link></li>
              <li><Link to="/contact" className="hover:text-gbh-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-1">
            <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-4 border-l-2 border-gbh-red pl-3">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gbh-red mt-0.5 flex-shrink-0" />
                <span>{COMPANY_CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gbh-red flex-shrink-0" />
                <span>{COMPANY_CONTACT.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gbh-red flex-shrink-0" />
                <span>{COMPANY_CONTACT.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} GBH Door. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Mentions légales</span>
            <span className="hover:text-white cursor-pointer">Politique de confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;