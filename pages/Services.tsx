import React from 'react';
import { ServiceCard } from '../components/ServiceCard';

const Services: React.FC = () => {
  const allServices = [
    { id: '1', title: 'AC Repair', description: 'Comprehensive diagnostics and repair for split systems, central air, and window units.', icon: '❄️', imageUrl: 'https://i.pinimg.com/736x/53/11/99/5311994ad6859159979864570b11ad8d.jpg' },
    { id: '2', title: 'Furnace Installation', description: 'Energy-efficient furnace installation to keep your heating bills low and comfort high.', icon: '🔥', imageUrl: 'https://i.pinimg.com/736x/a9/71/95/a9719531922a13e25d53770efdd8b293.jpg' },
    { id: '3', title: 'Duct Cleaning', description: 'Improve air quality by removing dust, allergens, and mold from your ductwork.', icon: '🌪️', imageUrl: 'https://i.pinimg.com/736x/fa/3d/91/fa3d9176a991e1a17e6c1c37cbecd048.jpg' },
    { id: '4', title: 'Thermostat Upgrades', description: 'Smart thermostat installation (Nest, Ecobee) for better control and efficiency.', icon: '📱', imageUrl: 'https://i.pinimg.com/736x/ca/32/f8/ca32f8b1879775ce21f7361defb9ea1b.jpg' },
    { id: '5', title: 'Commercial Refrigeration', description: 'Walk-in coolers and freezer repair for restaurants and businesses.', icon: '🧊', imageUrl: 'https://i.pinimg.com/736x/1a/8c/f8/1a8cf84b5a34a3a74356a20f2773f542.jpg' },
    { id: '6', title: 'Maintenance Plans', description: 'Scheduled seasonal checkups to prevent breakdowns before they happen.', icon: '🛠️', imageUrl: 'https://i.pinimg.com/736x/7a/65/61/7a6561c69356063002600b5e6e5316fc.jpg' },
  ];

  return (
    <div className="pt-8 pb-20">
      <div className="bg-brand-blue text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Our Services</h1>
          <p className="text-xl opacity-90">Professional Residential & Commercial Solutions</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map(s => <ServiceCard key={s.id} {...s} />)}
        </div>
      </div>
    </div>
  );
};

export default Services;