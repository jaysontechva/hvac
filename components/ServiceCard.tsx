import React from 'react';
import { Service } from '../types';

export const ServiceCard: React.FC<Partial<Service>> = ({ title, description, icon, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-2xl">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-blue mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
        <span className="text-brand-red font-bold text-sm uppercase tracking-wider group-hover:underline cursor-pointer">
          Learn More &rarr;
        </span>
      </div>
    </div>
  );
};