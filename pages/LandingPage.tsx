import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { generateQuoteEstimate } from '../services/geminiService';
import { Button } from '../components/Button';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceType: 'AC Repair',
    propertyType: 'Residential',
    squareFootage: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // AI Estimation logic
    const estimateJson = await generateQuoteEstimate(formData);
    
    // Navigate to Thank You page with the estimate data
    navigate('/thank-you', { state: { estimate: estimateJson, name: formData.customerName } });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-brand-blue text-white py-8 text-center">
        <h1 className="text-3xl font-bold">Get Your Free AI-Powered Estimate</h1>
        <p>Fast, accurate, and no obligation.</p>
      </div>

      <div className="container mx-auto px-4 py-12 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Value Prop */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-brand-red">
            <h3 className="text-xl font-bold mb-2">Why JaysonR?</h3>
            <ul className="space-y-3">
              <li className="flex gap-2">✅ <span>Same-Day Service Available</span></li>
              <li className="flex gap-2">✅ <span>Licensed & Insured NY Experts</span></li>
              <li className="flex gap-2">✅ <span>Upfront Pricing - No Surprises</span></li>
              <li className="flex gap-2">✅ <span>100% Satisfaction Guarantee</span></li>
            </ul>
          </div>

          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
             <img src="https://picsum.photos/600/400?random=30" className="w-full h-full object-cover" alt="Technician" />
             <div className="absolute bottom-0 left-0 bg-black/60 text-white p-4 w-full">
               <p className="font-bold">"Best service in town!" - Local Customer</p>
             </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-black text-gray-800 mb-6 border-b pb-4">Request Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
              <input required name="customerName" onChange={handleChange} className="w-full border p-3 rounded bg-gray-50" placeholder="John Doe" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                <input required name="email" type="email" onChange={handleChange} className="w-full border p-3 rounded bg-gray-50" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                <input required name="phone" type="tel" onChange={handleChange} className="w-full border p-3 rounded bg-gray-50" placeholder="+1 (555)..." />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Service Type</label>
                <select name="serviceType" onChange={handleChange} className="w-full border p-3 rounded bg-gray-50">
                  <option>AC Repair</option>
                  <option>AC Installation</option>
                  <option>Furnace Repair</option>
                  <option>Maintenance</option>
                  <option>Commercial HVAC</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Property</label>
                <select name="propertyType" onChange={handleChange} className="w-full border p-3 rounded bg-gray-50">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Approx. Sq Footage</label>
              <input name="squareFootage" type="number" onChange={handleChange} className="w-full border p-3 rounded bg-gray-50" placeholder="e.g. 2000" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Describe the Issue / Requirements</label>
              <textarea name="notes" onChange={handleChange} className="w-full border p-3 rounded bg-gray-50 h-24" placeholder="AC makes a rattling noise..."></textarea>
            </div>

            <Button disabled={isSubmitting} fullWidth className="mt-4 text-lg">
              {isSubmitting ? 'Analyzing Request...' : 'Get Instant Estimate'}
            </Button>
            <p className="text-xs text-center text-gray-500 mt-2">By submitting, you agree to receive calls/texts from JaysonR HVAC.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;