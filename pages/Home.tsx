import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';

const Home: React.FC = () => {
  const services = [
    {
      id: '1',
      title: 'AC Repair & Maintenance',
      description: 'Expert diagnostics and repair for all AC models. Keep your cool when it matters most.',
      icon: '❄️',
      imageUrl: 'https://i.pinimg.com/1200x/d8/4c/2e/d84c2e472790ec4b60bbab68ecc7adfd.jpg'
    },
    {
      id: '2',
      title: 'Heating Installation',
      description: 'High-efficiency furnace and heat pump installations. Stay warm efficiently.',
      icon: '🔥',
      imageUrl: 'https://i.pinimg.com/1200x/5b/08/3a/5b083a99a8426bdbc4ed384e398e98c1.jpg'
    },
    {
      id: '3',
      title: 'Commercial HVAC',
      description: 'Scalable solutions for offices, retail, and industrial buildings.',
      icon: '🏢',
      imageUrl: 'https://i.pinimg.com/736x/55/aa/84/55aa84120410b7ea628e4104023cc976.jpg'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/65/25/37/65253744122bf5f73e0108e6ca5e97f7.jpg" 
            alt="AC technician working" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Comfort You Can <br/> <span className="text-brand-red">Count On.</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              New York's most trusted HVAC experts. 24/7 Emergency repairs, installations, and maintenance for home and business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/landing">
                <Button variant="primary" className="text-lg px-8 py-4">
                  Get Free Estimate
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-blue text-lg px-8 py-4">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-100 py-8 border-b">
        <div className="container mx-auto px-4 flex flex-wrap justify-around items-center gap-8 text-gray-500 font-bold uppercase tracking-widest text-sm">
          <span>Certified Technicians</span>
          <span>24/7 Availability</span>
          <span>Licensed & Insured</span>
          <span>Satisfaction Guaranteed</span>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-brand-blue mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide comprehensive heating and cooling solutions tailored to your specific needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(s => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="secondary">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-red py-16 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Emergency? We're here 24/7.</h2>
            <p className="opacity-90">Don't suffer in the heat or cold. Call JaysonR now.</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-right hidden md:block">
              <span className="block text-sm opacity-80">Call Us Now</span>
              <span className="block text-2xl font-black">+639282300210</span>
            </div>
            <Link to="/contact">
              <Button className="bg-white text-brand-red hover:bg-gray-100">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://i.pinimg.com/736x/6d/0b/b2/6d0bb20241778940932967671249f205.jpg" alt="Tools" className="rounded-lg shadow-xl" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-brand-blue mb-6">Why JaysonR?</h2>
            <ul className="space-y-6">
              {[
                { title: 'Expert Team', desc: 'Our technicians are highly trained and certified.' },
                { title: 'Transparent Pricing', desc: 'No hidden fees. You approve the price before we start.' },
                { title: 'Latest Technology', desc: 'We use modern tools and AI-driven diagnostics.' },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Map Section - Homepage Only */}
      <section className="w-full h-80 md:h-96 bg-gray-200 relative">
        <iframe 
          title="Office Location"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0} 
          src="https://maps.google.com/maps?q=New%20York%2C%20NY&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="g-map-embed absolute inset-0 w-full h-full"
        ></iframe>
        <div className="absolute bottom-4 left-4 bg-white text-brand-blue p-4 shadow-lg rounded max-w-xs z-10">
          <p className="font-bold">JaysonR HVAC Office</p>
          <p className="text-sm">New York, NY, USA</p>
          <a href="tel:+639282300210" className="text-xs text-brand-red font-bold mt-1 block">Call for Directions</a>
        </div>
      </section>
    </div>
  );
};

export default Home;