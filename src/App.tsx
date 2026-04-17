/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Menu as MenuIcon, 
  X, 
  ChevronRight, 
  Utensils, 
  Tent, 
  PartyPopper, 
  Instagram, 
  Facebook,
  MessageCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'services' | 'menu' | 'reviews' | 'contact';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  isOwnerReply?: boolean;
}

// --- Data ---
const LOGO_URL = "https://i.ibb.co/zTbNPgjL/headshotmaster260417-0107-32-removebg-preview.png";
const WHATSAPP_NUMBER = "03303874830";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const ADDRESS = "Shop #1 & 2 Ground Floor, Khalid Awan Heights, Bahria Greens overseas 5 Commercial Phase-8 Bahria Town, Rawalpindi, 46620";

const SERVICES = [
  {
    id: 'catering',
    title: 'Gourmet Catering',
    description: 'Traditional and modern cuisines prepared by expert chefs. Variety of options for any gathering.',
    icon: <Utensils className="w-8 h-8" />,
    image: "https://i.ibb.co/VYfqHBGB/images-17.jpg"
  },
  {
    id: 'tent',
    title: 'Tent Service',
    description: 'High-quality tents and structural setups for outdoor weddings and corporate events.',
    icon: <Tent className="w-8 h-8" />,
    image: "https://i.ibb.co/YFPzPH3G/d7c9dc0240e9415186146f4f91aa14c6.png"
  },
  {
    id: 'decor',
    title: 'Party Decoration',
    description: 'Elegant, creative decorations according to your theme. Stunning stage setups and floral designs.',
    icon: <PartyPopper className="w-8 h-8" />,
    image: "https://i.ibb.co/Fk0D2kN5/a325f60fd6a6467584c92ebe35f20cb5.png"
  }
];

const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Moon Babe",
    rating: 5,
    date: "a month ago",
    text: "Food was delicious with great presentation! Variety of options and friendly service made it a hit. Value for money was spot on 😊"
  },
  {
    id: 2,
    author: "Malik Suleman",
    rating: 5,
    date: "4 months ago",
    text: "We hired Punjab Catering for our event and were truly impressed. The food was delicious, well-presented, and served hot. Their staff was professional and punctual."
  },
  {
    id: 3,
    author: "Zoya Firdous",
    rating: 5,
    date: "2 months ago",
    text: "The decoration was elegant, creative, and exactly according to our theme. The team was professional, punctual, and very cooperative throughout the event."
  },
  {
    id: 4,
    author: "Aamir Ali",
    rating: 5,
    date: "9 months ago",
    text: "Outstanding Experience from Start to Finish! We hired Punjab Catering and Party Decorators for a family event, and they truly exceeded our expectations."
  }
];

const MENU_CATEGORIES = [
  {
    title: "Signature Main Course",
    items: [
      { name: "Mutton Qorma", price: "Premium" },
      { name: "Chicken Biryani (Long Grain)", price: "Classic" },
      { name: "Beef Pulao", price: "Traditional" },
      { name: "Chicken Karahi (White/Red)", price: "House Special" },
    ]
  },
  {
    title: "Starters & Snacks",
    items: [
      { name: "Assorted Pakoras", price: "Freshly Fried" },
      { name: "Samosa Chaat", price: "Tangy" },
      { name: "Seekh Kabab", price: "Juicy" },
      { name: "Fish Crackers", price: "Crispy" },
    ]
  },
  {
    title: "Desserts",
    items: [
      { name: "Shahi Kheer", price: "Rich" },
      { name: "Gajar Ka Halwa", price: "Seasonal" },
      { name: "Gulab Jamun", price: "Sweet" },
      { name: "Zarda", price: "Colorful" },
    ]
  }
];

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'Menu', value: 'menu' },
    { label: 'Reviews', value: 'reviews' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brutal-black/80 backdrop-blur-md border-b border-punjab-light/10">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        <div 
          className="flex items-center gap-4 cursor-pointer" 
          onClick={() => { setCurrentPage('home'); setIsOpen(false); }}
        >
          <div className="w-16 h-16 flex items-center justify-center p-1 bg-white/5 rounded-full border border-punjab-light/20">
            <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif font-bold text-2xl tracking-tight text-punjab-light leading-none">PUNJAB CATERING</h1>
            <p className="text-[10px] font-bold opacity-30 uppercase tracking-[0.4em] mt-1 text-white">Elite Events & Decor</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setCurrentPage(item.value)}
              className={`font-display font-medium uppercase text-[10px] tracking-[0.2em] px-5 py-2 transition-all duration-300 ${
                currentPage === item.value 
                  ? 'text-punjab-light border-b border-punjab-light' 
                  : 'text-white/70 hover:text-punjab-light'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button className="md:hidden p-3 text-punjab-light" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-24 left-0 w-full bg-brutal-black border-b border-punjab-light/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-8">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => { setCurrentPage(item.value); setIsOpen(false); }}
                  className="font-serif italic text-3xl text-left text-punjab-light"
                >
                  {item.label}
                </button>
              ))}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                className="flex items-center justify-center gap-3 bg-punjab-light text-black p-5 font-display font-bold uppercase tracking-widest"
              >
                <MessageCircle size={24} />
                Connect on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onNavigate }: { onNavigate: (p: Page) => void }) => (
  <section className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block bg-punjab-green text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] px-4 py-2 brutal-border mb-6">
          Established & Trusted Service
        </div>
        <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.9] uppercase mb-8">
          Crafting <span className="text-punjab-green">Moments</span> Worth Gold.
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
          Premium catering, elegant decorations, and professional tent services for weddings, corporate events, and family gatherings in the heart of Islamabad and Rawalpindi.
        </p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => onNavigate('services')}
            className="bg-brutal-black text-white px-8 py-4 brutal-border font-display font-bold uppercase text-sm tracking-widest hover:translate-x-[-2px] hover:translate-y-[-2px] hover:brutal-shadow"
          >
            Our Services
          </button>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            className="bg-white text-brutal-black px-8 py-4 brutal-border font-display font-bold uppercase text-sm tracking-widest hover:translate-x-[-2px] hover:translate-y-[-2px] hover:brutal-shadow"
          >
            Contact Now
          </a>
        </div>
        
        <div className="mt-12 flex items-center gap-6">
          <div>
            <div className="flex text-punjab-light mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="font-display font-bold text-sm text-white/80">5.0 RATED</p>
          </div>
          <div className="w-[1px] h-10 bg-white/10"></div>
          <div>
            <p className="font-display font-bold text-2xl text-white">418+</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30">Google Reviews</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="relative z-10 brutal-border overflow-hidden">
          <img 
            src="https://picsum.photos/seed/wedding-stage/1200/1500" 
            alt="Event Setup" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-6 -right-6 w-full h-full brutal-border bg-punjab-green -z-10"></div>
        <div className="absolute -bottom-6 -left-6 bg-white brutal-border p-6 z-20 brutal-shadow hidden sm:block">
          <p className="font-display font-black text-4xl leading-none mb-1">24/7</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-punjab-green">Open 24 Hours</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const ServiceSection = () => (
  <section className="py-32 bg-punjab-green/5 border-y border-punjab-light/10 overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(10,47,31,0.15)_0%,transparent_100%)]"></div>
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="mb-24 text-center">
        <h2 className="font-serif italic text-6xl sm:text-8xl text-white mb-6 leading-none">
          Our <span className="text-punjab-light">Artistry</span>
        </h2>
        <div className="flex items-center justify-center gap-6">
          <div className="h-[1px] w-20 bg-punjab-light/30"></div>
          <p className="font-display font-bold uppercase tracking-[0.4em] text-[10px] text-punjab-light">Curation Excellence</p>
          <div className="h-[1px] w-20 bg-punjab-light/30"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bento-card group flex flex-col p-10 border-white/5"
          >
            <div className="h-72 overflow-hidden mb-10 relative">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-punjab-green/20 mix-blend-color transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
            <div className="flex-grow">
              <div className="text-punjab-light mb-6 opacity-60">{service.icon}</div>
              <h3 className="font-serif italic text-3xl uppercase mb-6 text-white">{service.title}</h3>
              <p className="font-sans text-sm text-white/50 mb-10 leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="flex items-center gap-3 font-display font-bold text-[10px] uppercase tracking-[0.3em] text-punjab-light group-hover:gap-5 transition-all duration-500">
                Inquire Details <ChevronRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

interface ReviewCardProps {
  review: Review;
  key?: React.Key;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
  <div className="bento-card min-h-[250px] group border-punjab-light/10">
    <div className="flex text-punjab-light mb-6 gap-1">
      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
    </div>
    <p className="font-serif italic text-xl text-white/80 mb-10 flex-grow leading-relaxed group-hover:text-white transition-colors duration-500">
      "{review.text}"
    </p>
    <div className="flex items-center justify-between border-t border-white/5 pt-8 mt-auto">
      <div>
        <p className="font-display font-black text-[10px] uppercase tracking-[0.2em] text-punjab-light">{review.author}</p>
        <p className="font-sans text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">{review.date}</p>
      </div>
      <div className="bg-punjab-light/10 p-3 rounded-full border border-punjab-light/20">
        <Star size={12} className="text-punjab-light" fill="currentColor" />
      </div>
    </div>
  </div>
);
const Footer = ({ onNavigate }: { onNavigate: (p: Page) => void }) => (
  <footer className="bg-brutal-black text-white pt-32 pb-16 border-t border-punjab-light/10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-32">
        <div className="space-y-10">
          <div className="flex items-center gap-5">
             <div className="w-20 h-20 bg-white/5 border border-punjab-light/20 flex items-center justify-center p-2 rounded-full">
              <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
             </div>
             <div>
               <h3 className="font-serif italic text-3xl text-punjab-light">Punjab Catering</h3>
               <p className="text-[9px] font-bold tracking-[0.5em] text-white/40 uppercase">Elite Events</p>
             </div>
          </div>
          <p className="font-sans text-sm text-white/40 leading-[1.8] max-w-sm">
            Curating high-end catering and decor experiences. Specializing in luxury weddings and corporate banquets across the Twin Cities for over a decade.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/punjabcateringdecorators/" target="_blank" className="p-4 border border-white/10 text-white/60 hover:border-punjab-light hover:text-punjab-light transition-all duration-500 rounded-full">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/61563449915665/" target="_blank" className="p-4 border border-white/10 text-white/60 hover:border-punjab-light hover:text-punjab-light transition-all duration-500 rounded-full">
              <Facebook size={20} />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" className="p-4 border border-punjab-light text-punjab-light hover:bg-punjab-light hover:text-black transition-all duration-500 rounded-full">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-black text-xl uppercase mb-8 pb-4 border-b border-gray-700">Quick Links</h4>
          <ul className="space-y-4 font-display font-bold uppercase text-sm tracking-widest">
            {[
              { label: 'Home', value: 'home' },
              { label: 'Services', value: 'services' },
              { label: 'Menu', value: 'menu' },
              { label: 'Reviews', value: 'reviews' },
              { label: 'Contact', value: 'contact' }
            ].map(link => (
              <li key={link.value}>
                <button 
                  onClick={() => onNavigate(link.value as Page)}
                  className="hover:text-punjab-green transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
           <h4 className="font-display font-black text-xl uppercase mb-8 pb-4 border-b border-gray-700">Head Office</h4>
           <ul className="space-y-6">
             <li className="flex gap-4">
               <MapPin className="text-punjab-green flex-shrink-0" />
               <p className="text-sm text-gray-300 leading-relaxed font-semibold uppercase tracking-tight">
                 {ADDRESS}
               </p>
             </li>
             <li className="flex gap-4">
               <Phone className="text-punjab-green flex-shrink-0" />
               <p className="text-sm text-gray-300 font-semibold tracking-widest">{WHATSAPP_NUMBER}</p>
             </li>
             <li className="flex gap-4">
               <Clock className="text-punjab-green flex-shrink-0" />
               <p className="text-sm text-gray-300 font-semibold tracking-widest leading-none">OPEN 24 HOURS<br/><span className="text-[10px] opacity-50">MONDAY - SUNDAY</span></p>
             </li>
           </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
          © 2026 Punjab Catering & Party Decorators. All rights reserved.
        </p>
        <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
          Designed for Excellence in Twin Cities
        </p>
      </div>
    </div>
  </footer>
);

// --- Main Pages ---

const HomePage = ({ onNavigate }: { onNavigate: (p: Page) => void }) => (
  <main className="max-w-7xl mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-6">
      
      {/* Hero Card */}
      <section className="bento-card bento-card-green lg:col-span-2 lg:row-span-2 relative group flex flex-col justify-end p-12">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://i.ibb.co/LDfjNH7k/headshotmaster260417-0152-39.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-punjab-green/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brutal-black via-brutal-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10">
          <span className="inline-block border border-punjab-light/30 text-punjab-light px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
            Established Excellence
          </span>
          <h1 className="font-serif italic text-6xl sm:text-8xl leading-none text-white mb-8">
            Nature's <br /> <span className="text-punjab-light/80">Elegance.</span>
          </h1>
          <p className="font-sans font-medium text-white/40 max-w-sm mb-10 leading-relaxed italic">
            Providing premium catering and professional event management across the Twin Cities.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate('services')}
              className="bg-punjab-light text-black px-10 py-4 font-display font-bold uppercase text-xs tracking-[0.2em] transition-all hover:bg-white"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Card */}
      <section className="bento-card lg:col-span-1 lg:row-span-2 border-white/5">
        <div className="bento-badge">Premium</div>
        <h3 className="font-serif italic text-3xl text-punjab-light mb-8">Expertise</h3>
        <ul className="space-y-6">
          {[
            'Wedding Curation',
            'Corporate Banquets',
            'Exotic Tentage',
            'Gourmet Catering',
            'Floral Architect',
            'Theme Staging'
          ].map((item, i) => (
            <li key={i} className="font-display font-bold flex items-center gap-3 border-b border-white/5 pb-3 text-[10px] uppercase tracking-widest text-white/60 group">
              <span className="w-1.5 h-1.5 bg-punjab-light/40 group-hover:bg-punjab-light transition-colors"></span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Rating Card */}
      <section className="bento-card lg:col-span-1 border-white/5 text-center justify-center items-center">
        <div className="font-serif italic text-7xl text-punjab-light/90 leading-none">5.0</div>
        <div className="flex text-punjab-light/40 my-4 gap-1">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Google Verified Excellence</p>
      </section>

      {/* WhatsApp Card */}
      <section className="bento-card lg:col-span-1 bg-punjab-light text-black justify-center items-center text-center group">
        <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-6">Immediate Inquiry</div>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          className="w-full py-5 border-2 border-punjab-green/10 font-serif italic text-2xl transition-all hover:bg-brutal-black hover:text-punjab-light"
        >
          {WHATSAPP_NUMBER}
        </a>
      </section>

      {/* Address Card */}
      <section className="bento-card lg:col-span-2 border-white/5 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-punjab-light/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <h4 className="font-display font-black text-[10px] text-punjab-light/60 uppercase mb-6 tracking-[0.4em]">The Address</h4>
        <p className="font-serif italic text-xl text-white/80 leading-relaxed max-w-md">
          {ADDRESS}
        </p>
        <div className="mt-auto pt-8 flex items-center gap-4">
          <div className="w-2 h-2 bg-punjab-light rounded-full animate-pulse shadow-[0_0_10px_rgba(230,240,235,0.4)]"></div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Operating 24 Hours</p>
        </div>
      </section>

      {/* Reviews Cards */}
      {REVIEWS.slice(0, 2).map((rev) => (
        <section key={rev.id} className="bento-card bg-white/5 border-white/5 lg:col-span-1 h-full min-h-[220px]">
          <div className="text-punjab-light/20 mb-4 block underline text-4xl font-serif">"</div>
          <p className="font-serif italic text-lg text-white/60 mb-8 flex-grow leading-relaxed">
            {rev.text}
          </p>
          <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
            <p className="font-display font-black text-[10px] text-punjab-light/70 uppercase tracking-widest">{rev.author}</p>
            <div className="flex text-punjab-light/20">
              {[...Array(5)].map((_, i) => <Star key={i} size={8} fill="currentColor" />)}
            </div>
          </div>
        </section>
      ))}

    </div>
  </main>
);

const ServicesPage = () => (
  <section className="pt-48 pb-24 px-4 max-w-7xl mx-auto">
    <div className="mb-32 text-center relative">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-punjab-green/10 rounded-full blur-[100px] -z-10"></div>
       <h1 className="font-serif italic text-6xl sm:text-9xl text-white mb-6">Our Services</h1>
       <p className="font-display font-bold text-punjab-light/60 uppercase tracking-[0.5em] text-[10px]">Elite Event Curation</p>
    </div>
    
    <div className="space-y-48">
       {SERVICES.map((service, idx) => (
         <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
           <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="text-punjab-light inline-block p-6 border border-punjab-light/20 bg-white/5 rounded-full mb-10">
                {service.icon}
              </div>
              <h2 className="font-serif italic text-5xl text-white mb-8">{service.title}</h2>
              <p className="font-sans text-xl text-white/50 mb-12 leading-relaxed">
                {service.description} We bring over 15 years of culinary and design expertise to your most important milestones.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {['Master Chefs', 'Global Pantry', 'Custom Themes', 'Bespoke Staging'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-display font-bold uppercase text-[10px] tracking-widest text-punjab-light/60">
                    <span className="w-1.5 h-1.5 bg-punjab-light/40"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_LINK} target="_blank" className="bg-punjab-light text-black px-12 py-5 font-display font-bold uppercase text-xs tracking-widest inline-block transition-all hover:bg-white">
                Book Inquiry
              </a>
           </div>
           <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''} group`}>
              <div className="border border-punjab-light/10 p-2 bg-white/5 rotate-2 relative overflow-hidden">
                <img src={service.image + "?w=1000"} alt={service.title} className="w-full aspect-[4/5] object-cover transition-all duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-punjab-green/40 mix-blend-color transition-opacity duration-500 group-hover:opacity-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brutal-black/60 to-transparent opacity-60"></div>
              </div>
           </div>
         </div>
       ))}
    </div>
  </section>
);

const MenuPage = () => (
  <section className="pt-48 pb-24 px-4 max-w-5xl mx-auto">
    <div className="mb-32 text-center">
       <h1 className="font-serif italic text-6xl sm:text-8xl text-punjab-light mb-6">Culinary Menu</h1>
       <p className="font-display font-bold text-white/40 uppercase tracking-[0.5em] text-[10px]">Exquisite Flavors, Timeless Traditions</p>
    </div>

    <div className="grid grid-cols-1 gap-12">
       {MENU_CATEGORIES.map((cat, i) => (
         <div key={i} className="bento-card p-12 lg:p-20 relative overflow-visible border-white/5">
           <h2 className="font-serif italic text-4xl text-punjab-light/80 mb-16 border-b border-white/10 pb-6">
             {cat.title}
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              {cat.items.map((item, j) => (
                <div key={j} className="flex flex-col gap-2 group border-b border-white/5 pb-4">
                   <div className="flex justify-between items-baseline">
                     <h3 className="font-serif text-2xl text-white group-hover:text-punjab-light transition-colors">{item.name}</h3>
                     <p className="font-display font-bold text-punjab-light/60 text-[10px] tracking-widest">{item.price}</p>
                   </div>
                   <p className="font-sans text-[9px] text-white/20 font-bold uppercase tracking-[0.2em]">Chef's Special Recommendation</p>
                </div>
              ))}
           </div>
         </div>
       ))}
    </div>

    <div className="mt-32 bento-card p-16 bg-punjab-light text-black text-center relative overflow-hidden">
       <div className="absolute top-0 right-0 w-64 h-64 bg-punjab-green/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
       <h3 className="font-serif italic text-4xl mb-6">Bespoke Gastronomy</h3>
       <p className="font-sans font-medium mb-12 text-lg max-w-2xl mx-auto opacity-70">Our culinary team is ready to curate a custom menu that perfectly aligns with your refined taste and vision.</p>
       <a href={WHATSAPP_LINK} target="_blank" className="bg-brutal-black text-white px-16 py-5 font-display font-bold uppercase text-[10px] tracking-[0.3em] inline-block hover:opacity-90 transition-all">
          Request Consultation
       </a>
    </div>
  </section>
);

const ReviewsPage = () => (
  <section className="pt-48 pb-24 px-4 max-w-7xl mx-auto">
    <div className="mb-32 text-center">
       <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex text-punjab-light text-glow">
             {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <span className="font-serif italic text-4xl text-white ml-4">5.0</span>
       </div>
       <h1 className="font-serif italic text-6xl sm:text-9xl text-white mb-6">Testimonials</h1>
       <p className="font-display font-bold text-punjab-light/60 uppercase tracking-[0.5em] text-[10px]">Verified Excellence from the twin cities</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[...REVIEWS, ...REVIEWS, ...REVIEWS].slice(0, 12).map((rev, idx) => (
        <ReviewCard key={idx} review={rev} />
      ))}
    </div>

    <div className="mt-40 text-center">
       <div className="inline-block border border-punjab-light/20 p-16 bg-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-punjab-light/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
          <p className="font-serif italic text-3xl mb-12 relative z-10">Read all 418+ bespoke client experiences on Google</p>
          <a 
            href="#" 
            className="inline-flex items-center gap-4 bg-punjab-light text-black px-12 py-5 font-display font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-white transition-all relative z-10"
          >
            Go to Google Maps <ExternalLink size={16} />
          </a>
       </div>
    </div>
  </section>
);

const ContactPage = () => (
  <section className="pt-48 pb-24 px-4 max-w-7xl mx-auto">
    <div className="mb-32 text-center">
       <h1 className="font-serif italic text-6xl sm:text-9xl text-white mb-6">Concierge</h1>
       <p className="font-display font-bold text-punjab-light/60 uppercase tracking-[0.5em] text-[10px]">Your vision, Our execution</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
       <div className="space-y-16">
          <div className="bento-card p-12 h-auto border-punjab-light/10">
             <div className="flex gap-8">
                <div className="text-punjab-light p-6 border border-punjab-light/20 bg-white/5 h-fit rounded-full">
                   <MapPin size={32} />
                </div>
                <div>
                   <h3 className="font-serif italic text-3xl mb-6 text-punjab-light">Our Atelier</h3>
                   <p className="font-sans font-medium text-lg text-white/60 leading-relaxed uppercase tracking-tight">
                     {ADDRESS}
                   </p>
                   <button className="mt-8 flex items-center gap-4 font-display font-bold text-[10px] uppercase tracking-[0.3em] text-punjab-light group">
                     Locate Us <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                   </button>
                </div>
             </div>
          </div>

          <div className="bento-card p-12 h-auto border-punjab-light/10">
             <div className="flex gap-8">
                <div className="text-punjab-light p-6 border border-punjab-light/20 bg-white/5 h-fit rounded-full">
                   <Phone size={32} />
                </div>
                <div>
                   <h3 className="font-serif italic text-3xl mb-6 text-punjab-light">Direct Lines</h3>
                   <p className="font-serif text-4xl text-white mb-8 tracking-tighter">{WHATSAPP_NUMBER}</p>
                   <div className="flex flex-wrap gap-4">
                      <a href={`tel:${WHATSAPP_NUMBER}`} className="bg-white/5 border border-white/10 text-white px-8 py-4 font-display font-bold uppercase text-[10px] tracking-[0.2em] hover:border-punjab-light hover:text-punjab-light transition-all duration-500">Call Office</a>
                      <a href={WHATSAPP_LINK} target="_blank" className="bg-punjab-light text-black px-8 py-4 font-display font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white transition-all">WhatsApp Concierge</a>
                   </div>
                </div>
             </div>
          </div>
       </div>

       <div className="bento-card p-12 lg:p-20 border-punjab-light/10 bg-punjab-green/5">
          <h3 className="font-serif italic text-4xl mb-12 text-white">Event Inquiry</h3>
          <form className="space-y-10" onSubmit={e => e.preventDefault()}>
             <div className="grid grid-cols-1 gap-12">
                <div className="space-y-4">
                   <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-punjab-light/40">Full Name</label>
                   <input type="text" className="w-full bg-transparent border-b border-white/10 p-4 focus:border-punjab-light focus:outline-none transition-colors text-white placeholder:text-white/10" placeholder="Identity" />
                </div>
                <div className="space-y-4">
                   <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-punjab-light/40">Occasion</label>
                   <select className="w-full bg-transparent border-b border-white/10 p-4 focus:border-punjab-light focus:outline-none transition-colors text-white/50">
                      <option className="bg-brutal-black">Grand Wedding</option>
                      <option className="bg-brutal-black">Corporate Gala</option>
                      <option className="bg-brutal-black">Private Banquet</option>
                      <option className="bg-brutal-black">Theme Party</option>
                   </select>
                </div>
             </div>
             <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-punjab-light/40">Vision / Desires</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 p-4 focus:border-punjab-light focus:outline-none transition-colors text-white placeholder:text-white/10" placeholder="Envision your event..."></textarea>
             </div>
             <button className="w-full bg-punjab-light text-black p-6 font-display font-bold uppercase tracking-[0.4em] text-[10px] transition-all hover:bg-white">
                Submit Reservation
             </button>
          </form>
       </div>
    </div>
  </section>
);

// --- App Root ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'services': return <ServicesPage />;
      case 'menu': return <MenuPage />;
      case 'reviews': return <ReviewsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
