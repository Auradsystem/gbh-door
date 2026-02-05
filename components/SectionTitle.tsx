import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle: React.FC<Props> = ({ title, subtitle, light = false }) => {
  return (
    <div className="mb-12">
      <h2 className={`text-3xl font-bold uppercase tracking-wide mb-4 ${light ? 'text-white' : 'text-gbh-black'}`}>
        {title}
      </h2>
      <div className={`w-20 h-1 mb-6 ${light ? 'bg-gbh-red' : 'bg-gbh-red'}`}></div>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${light ? 'text-gray-300' : 'text-gbh-grey'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;