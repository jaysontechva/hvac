import React from 'react';
import { Button } from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-brand-blue mb-4">Contact Us</h1>
          <p className="text-gray-600">We are ready to help 24/7.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-xl shadow-xl overflow-hidden mb-12">
          {/* Info */}
          <div className="p-12 bg-brand-blue text-white">
            <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-blue-100">123 HVAC Street, New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-blue-100">+639282300210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-blue-100">jaysonramosp@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               <h3 className="font-bold mb-4">Office Hours</h3>
               <p className="text-sm text-blue-100">Mon-Fri: 8am - 6pm</p>
               <p className="text-sm text-blue-100">Sat: 9am - 2pm</p>
               <p className="text-sm text-blue-100">Sun: Emergency Only</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full border p-3 rounded" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full border p-3 rounded" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea className="w-full border p-3 rounded h-32" placeholder="How can we help?"></textarea>
              </div>
              <Button fullWidth>Send Message</Button>
            </form>
          </div>
        </div>

        {/* Medium Map Section for Contact Page */}
        <div className="w-full h-80 bg-gray-200 relative rounded-xl overflow-hidden shadow-lg border-2 border-white">
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
           <div className="absolute top-4 left-4 bg-white text-brand-blue p-4 shadow-lg rounded max-w-xs z-10">
            <p className="font-bold">JaysonR HVAC Office</p>
            <p className="text-sm">New York, NY, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;