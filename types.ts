import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface QuoteRequest {
  customerName: string;
  email: string;
  phone: string;
  serviceType: string;
  propertyType: string;
  squareFootage: string;
  notes: string;
}

export interface PricingPackage {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}