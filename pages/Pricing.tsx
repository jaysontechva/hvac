import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const packages = [
    {
      title: 'Basic Tune-Up',
      price: '$89',
      features: ['20-Point Inspection', 'Filter Check', 'Thermostat Calibration', 'Safety Check'],
    },
    {
      title: 'Annual Maintenance',
      price: '$199',
      features: ['2 Seasonal Visits', 'Priority Scheduling', '15% Off Repairs', 'No Overtime Fees'],
      isPopular: true,
    },
    {
      title: 'System Installation',
      price: 'Custom',
      features: ['Free In-Home Estimate', 'Energy Efficiency Analysis', '10-Year Warranty', 'Smart Thermostat Included'],
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-brand-blue mb-4">Transparent Pricing</h1>
          <p className="text-gray-600">Choose the plan that fits your needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 ${pkg.isPopular ? 'border-brand-red transform md:-translate-y-4' : 'border-transparent'}`}>
              {pkg.isPopular && <div className="bg-brand-red text-white text-center text-sm font-bold py-1">MOST POPULAR</div>}
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{pkg.title}</h3>
                <div className="text-4xl font-black text-brand-blue mb-6">{pkg.price}</div>
                <ul className="space-y-4 mb-8 text-left">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/landing">
                  <Button fullWidth variant={pkg.isPopular ? 'primary' : 'outline'}>Choose Plan</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <h3 className="text-2xl font-bold mb-6">Payment Options</h3>
           <div className="flex justify-center gap-8 grayscale opacity-70">
             <span className="font-bold text-2xl">VISA</span>
             <span className="font-bold text-2xl">MasterCard</span>
             <span className="font-bold text-2xl">PayPal</span>
             <span className="font-bold text-2xl">Stripe</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;