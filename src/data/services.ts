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
    short: 'Reliable supply of Automotive Gas Oil for businesses that can\'t afford downtime.',
    desc: 'Reliable supply of Automotive Gas Oil for businesses that can\'t afford downtime — from hospitals and hotels to factories, estates, and government institutions.',
    features: ['Reliable supply network', 'Flexible delivery volumes', 'Competitive pricing', 'Timely delivery'],
    image: '/images/diesel-supply.jpg',
  },
];
