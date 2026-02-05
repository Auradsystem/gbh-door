import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 p-8 text-center rounded-sm">
        <h3 className="text-green-800 font-bold text-xl mb-2">Message envoyé</h3>
        <p className="text-green-700">Votre demande a bien été prise en compte. Notre service commercial vous recontactera sous 24h.</p>
        <button onClick={() => setStatus('idle')} className="mt-4 text-green-800 underline text-sm">Envoyer un autre message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet / Entreprise</label>
          <input required type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gbh-red focus:border-transparent outline-none" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email professionnel</label>
          <input required type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gbh-red focus:border-transparent outline-none" />
        </div>
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
        <input required type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gbh-red focus:border-transparent outline-none" />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Objet de la demande</label>
        <select id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gbh-red focus:border-transparent outline-none">
          <option>Demande de devis</option>
          <option>Étude technique</option>
          <option>Partenariat / Distribution</option>
          <option>Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Détails du projet</label>
        <textarea required id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gbh-red focus:border-transparent outline-none"></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-gbh-red hover:bg-red-700 text-white font-bold uppercase py-3 rounded-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === 'submitting' ? 'Envoi...' : <>Envoyer la demande <Send className="w-4 h-4" /></>}
      </button>
    </form>
  );
};

export default ContactForm;