import React from 'react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "5 Signs Your AC Needs Repair",
      excerpt: "Is your AC making strange noises or blowing warm air? Here is what to look for...",
      date: "Oct 12, 2023",
      imageUrl: "https://i.pinimg.com/1200x/4f/ac/59/4fac59a4b4a7299c10f52a7fd9471df5.jpg",
      category: "Maintenance"
    },
    {
      id: 2,
      title: "Why Indoor Air Quality Matters",
      excerpt: "Dust, pollen, and mold can affect your health. Learn about modern filtration solutions.",
      date: "Sep 28, 2023",
      imageUrl: "https://i.pinimg.com/1200x/33/42/8d/33428d8c80485ec1c6875e475500e1aa.jpg",
      category: "Health"
    },
    {
      id: 3,
      title: "Heat Pump vs. Furnace",
      excerpt: "Comparing the pros and cons of different heating systems for New York winters.",
      date: "Sep 15, 2023",
      imageUrl: "https://i.pinimg.com/736x/c6/aa/2d/c6aa2dac1d3833dfbf4d4b01b11b7ada.jpg",
      category: "Guides"
    }
  ];

  return (
    <div className="py-20">
       <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-brand-blue mb-4">HVAC Tips & News</h1>
          <p className="text-gray-600">Stay informed about your home's comfort systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs font-bold text-brand-red uppercase mb-2 block">{post.category}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span className="font-bold text-brand-blue cursor-pointer">Read Article</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;