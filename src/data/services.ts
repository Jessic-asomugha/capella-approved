import { Droplets } from 'lucide-react';

export interface Service {
  icon: typeof Droplets;
  title: string;
  short: string;
  desc: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    icon: Droplets,
    title: 'Diesel (AGO) Supply',
    short: 'Dependable diesel supply that keeps operations running smoothly and efficiently.',
    desc: 'Dependable diesel delivery that helps businesses maintain smooth operations through reliable supply, competitive pricing, and professional service across different industries.',
    features: ['Reliable diesel supply', 'Flexible delivery volumes', 'Competitive pricing', 'Professional service'],
    image: '/images/diesel-supply.jpg',
  },
];
