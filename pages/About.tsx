import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl font-black text-brand-blue mb-6">About JaysonR HVAC</h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded on the principles of integrity and technical excellence, JaysonR has been serving New York residents and businesses with top-tier heating and cooling solutions. 
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our team isn't just about fixing pipes and vents; we're about restoring comfort to your home. We use advanced diagnostic tools and AI-driven scheduling to ensure we are there when you need us most.
            </p>
          </div>
          <div className="relative">
             <img src="https://i.pinimg.com/1200x/d2/a0/e2/d2a0e25fd4a0cd5e9b430cc846e54fb3.jpg" alt="Team" className="rounded-lg shadow-2xl z-10 relative" />
             <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-red rounded-lg -z-0"></div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-blue">Meet Our Experts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center group">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-brand-blue group-hover:border-brand-red transition-colors">
                <img src={`https://i.pinimg.com/736x/ce/81/3b/ce813b44a3f38b7ce0765bb8769d807e.jpg`} {`https://i.pinimg.com/1200x/c1/fe/27/c1fe27f198980aace4b0eb75bcfa002e.jpgalt="Team Member" />`}
              </div>
              <h3 className="font-bold text-lg">Technician {i}</h3>
              <p className="text-sm text-gray-500">Senior HVAC Specialist</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;