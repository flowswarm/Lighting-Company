import { motion } from "motion/react";
import { ArrowUpRight, Phone, Mail, Instagram, Facebook } from "lucide-react";

// --- Components ---

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-white flex items-center justify-center font-bold text-xs">BP</div>
          <span className="font-display font-bold tracking-tighter text-xl uppercase">Black Project</span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.2em] font-medium">
          <a href="#about" className="hover:text-brand-gold transition-colors">About Company</a>
          <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-brand-gold transition-colors">Portfolio</a>
        </div>

        <div className="hidden lg:flex flex-col items-end">
          <span className="text-sm font-display font-medium">+373-0099-4503</span>
          <div className="flex gap-3 text-[8px] opacity-50 tracking-widest uppercase">
            <span>Telegram</span>
            <span>WhatsApp</span>
            <span>Viber</span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Mansion Night" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[12vw] md:text-[10vw] font-display font-bold leading-[0.85] tracking-tighter uppercase mb-8"
        >
          Black <br /> Project
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md"
        >
          <p className="text-sm md:text-base uppercase tracking-widest leading-relaxed mb-8 opacity-80">
            We are a lighting company that is all ready to solve any of your problems and requests
          </p>
          
          <button className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:bg-white hover:text-brand-black transition-all duration-500 px-8 py-4 rounded-sm uppercase text-xs tracking-widest">
            Request a Project
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.3em] opacity-40">Scroll</span>
      </motion.div>
    </section>
  );
};

const EngineeringSection = () => {
  return (
    <section className="py-32 px-6 bg-brand-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter opacity-10">About Company</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight mb-8">
              Black Project is unique in its engineering approach to solving tasks
            </h2>
            <p className="text-sm uppercase tracking-widest opacity-50 leading-relaxed max-w-md">
              In the realm of marketing, we are focused on ensuring that the equipment or solution you choose not only functions effectively for as long as possible but also brings maximum positive emotions.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <motion.div 
              whileInView={{ scale: [1.1, 1] }}
              transition={{ duration: 1.5 }}
              className="aspect-video overflow-hidden rounded-sm"
            >
              <img src="https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=1200" alt="Engineering" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div 
              whileInView={{ scale: [1.1, 1] }}
              transition={{ duration: 1.5 }}
              className="aspect-video overflow-hidden rounded-sm"
            >
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" alt="Quality" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          <div className="text-right flex flex-col items-end">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight mb-8">
              We aim to provide our customers with the highest quality available on the market
            </h2>
            <p className="text-sm uppercase tracking-widest opacity-50 leading-relaxed max-w-md">
              We tackle all kinds of tasks, even the most challenging and complex ones, that others consider impossible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  return (
    <section className="py-32 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase leading-tight">
              We provide quality products and solutions
            </h2>
            <p className="text-sm uppercase tracking-widest opacity-50 leading-relaxed max-w-md">
              So that further use brings you relaxation and enjoyment.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600" alt="Office" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square overflow-hidden rounded-sm pt-8">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" alt="House" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          <div className="space-y-12 lg:pl-20">
            <div className="aspect-[4/5] overflow-hidden rounded-sm mb-12">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight">
              We are a team of engineers prepared to solve any of your tasks and problems
            </h2>
            <p className="text-sm uppercase tracking-widest opacity-50 leading-relaxed">
              Unlike other companies, we understand the construction of each lamp, from growing the LED crystal to calculating the required heat dissipation and assembling the lamp. With this expertise, you get the best product on the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const IntroSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase leading-tight mb-8">
            We are a <br /> lighting company
          </h2>
          <p className="text-lg opacity-60 max-w-lg mb-12 leading-relaxed">
            We offer comprehensive solutions for residential and commercial projects, ensuring high quality at every stage of work.
          </p>
          <button className="flex items-center gap-4 border-b border-white/20 pb-2 hover:border-brand-gold transition-colors uppercase text-xs tracking-widest">
            View Solutions <ArrowUpRight className="w-4 h-4" />
          </button>
          
          <div className="mt-20">
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-30">Experience</span>
            <p className="text-sm uppercase tracking-widest mt-2">Over 10 years of experience in design, installation and automation</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 relative">
          <div className="space-y-4">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800" alt="Modern Interior" className="w-full h-full object-cover image-parallax" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="aspect-square overflow-hidden rounded-sm"
            >
              <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800" alt="Office Lighting" className="w-full h-full object-cover image-parallax" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          <div className="space-y-4 pt-12">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="aspect-square overflow-hidden rounded-sm"
            >
              <img src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800" alt="Architectural Detail" className="w-full h-full object-cover image-parallax" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800" alt="Residential Lighting" className="w-full h-full object-cover image-parallax" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  linkText: string;
  key?: string | number;
}

const ServiceCard = ({ number, title, description, linkText }: ServiceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group p-8 border border-white/5 hover:bg-white/5 transition-all duration-500 flex flex-col h-full"
    >
      <span className="text-5xl font-display font-light opacity-20 mb-8 group-hover:opacity-100 group-hover:text-brand-gold transition-all">.{number}</span>
      <h3 className="text-xl font-display font-bold uppercase mb-4 tracking-tight leading-tight">{title}</h3>
      <p className="text-sm opacity-50 mb-8 leading-relaxed flex-grow">{description}</p>
      <button className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold group-hover:text-brand-gold transition-colors">
        {linkText} <ArrowUpRight className="w-3 h-3" />
      </button>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    { number: "01", title: "Designing lighting and control systems", description: "Our experts will develop a unique project that meets your requirements and modern standards.", linkText: "Discuss Project" },
    { number: "02", title: "Supply and sale of lamps and components", description: "We produce lamps and lighting systems with a high level of reliability using quality components.", linkText: "Discuss Supply" },
    { number: "03", title: "Installation and wiring of systems", description: "We will install and wire any equipment, even the most specific, ensuring safety and precision.", linkText: "Discuss Installation" },
    { number: "04", title: "Start-up and adjustment works", description: "Setting up lighting control systems according to your statement of work (SOW) and DALI protocols.", linkText: "Discuss Start-up" },
    { number: "05", title: "Equipment maintenance and repair", description: "If your system is broken or needs adjustments, we will always be happy to help you.", linkText: "Discuss Repair" },
    { number: "06", title: "Require additional services?", description: "Lighting design, engineering calculations, and feasibility studies for complex architectural projects.", linkText: "Discuss Task" },
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter">Services</h2>
          <p className="max-w-xs text-[10px] uppercase tracking-[0.3em] opacity-40 text-right">
            Comprehensive engineering approach to every lighting task
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((s) => (
            <ServiceCard 
              key={s.number} 
              number={s.number} 
              title={s.title} 
              description={s.description} 
              linkText={s.linkText} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "Room Lighting", category: "Apartment", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1600" },
    { title: "Bright Horizons Office", category: "Office", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" },
    { title: "Architectural Lighting of the House", category: "House", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600" },
  ];

  return (
    <section id="portfolio" className="bg-brand-black">
      <div className="py-20 text-center">
        <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter">Portfolio</h2>
      </div>
      
      <div className="space-y-2">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative h-[60vh] md:h-[80vh] group overflow-hidden cursor-pointer"
          >
            <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 0.6 }}
                className="text-xs uppercase tracking-[0.5em] mb-4"
              >
                {p.category}
              </motion.span>
              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight"
              >
                {p.title}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase leading-tight mb-12">
              Need advice <br /> or want to discuss <br /> your project?
            </h2>
            <div className="space-y-4">
              <a href="tel:+37300994503" className="block text-3xl md:text-5xl font-display font-medium hover:text-brand-gold transition-colors">
                +373-0099-4503
              </a>
              <a href="mailto:blackproject@gmail.com" className="block text-xl opacity-50 hover:opacity-100 transition-opacity uppercase tracking-widest">
                blackproject@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex flex-col justify-between lg:items-end">
            <div className="space-y-8 text-right hidden lg:block">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.4em] opacity-30">Experience</span>
                <p className="text-xs uppercase tracking-widest">Over 10 years in lighting engineering</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.4em] opacity-30">Quality</span>
                <p className="text-xs uppercase tracking-widest">Ensuring high quality at every stage</p>
              </div>
            </div>
            
            <div className="flex gap-6 mt-12 lg:mt-0">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-black transition-all">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-white flex items-center justify-center font-bold text-[8px]">BP</div>
            <span className="font-display font-bold tracking-tighter text-sm uppercase">Black Project</span>
          </div>
          
          <p className="text-[10px] uppercase tracking-widest opacity-30">
            &copy; {new Date().getFullYear()} Black Project. All rights reserved.
          </p>
          
          <p className="text-[10px] uppercase tracking-widest opacity-30">
            Developed by Pavlo Klymash
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <EngineeringSection />
        <TeamSection />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
