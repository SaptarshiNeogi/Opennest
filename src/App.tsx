import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, X, ArrowRight, Globe, Camera, Video, 
  CheckCircle2, Instagram, MessageCircle, ChevronDown,
  Star, Users, Film, Zap, Play, Calendar, Briefcase, Quote
} from 'lucide-react';

// --- Data ---

interface Project {
  slug: string;
  title: string;
  category: string;
  img: string;
  description: string;
  photos: string[];
  details: {
    client: string;
    year: string;
    services: string;
  };
  video?: string;
  aspectRatio?: string;
  feedback?: {
    text: string;
    author: string;
    role: string;
  };
}

const projects: Project[] = [
  { 
    slug: 'csb-cafe',
    title: 'CSB (Cafe)', 
    category: 'Product Photoshoots', 
    img: 'https://i.ibb.co/F4SMdsmf/IMG-3327.png',
    description: '❤️',
    video: 'https://res.cloudinary.com/di2oqwgqv/video/upload/v1775242808/document_6231219066493792736_biin0n.mp4',
    aspectRatio: '9/16',
    photos: [],
    details: {
      client: 'Chai Sutta Bar',
      year: '2026',
      services: 'Product Photography, Visual Storytelling'
    }
  },
  { 
    slug: 'fusion-cafe',
    title: 'Fusion Cafe', 
    category: 'Website Designs', 
    img: 'https://i.ibb.co/Nd2NP1yb/9f108c82-462f-4cb3-be71-307886a2023c.jpg',
    description: '❤️',
    video: 'https://res.cloudinary.com/di2oqwgqv/video/upload/v1775242909/document_6231219066493792735_mahph6.mp4',
    aspectRatio: '9/16',
    photos: [],
    details: {
      client: 'Fusion Cafe',
      year: '2026',
      services: 'Reels, Photoshoot'
    }
  },
  { 
    slug: 'cremabonn-cafe',
    title: 'Cremabonn (Cafe)', 
    category: 'Product Photoshoots', 
    img: 'https://i.ibb.co/Fk4tdsDw/ec0dbbff-d8b2-4c4f-8716-1d5f5c839584.jpg',
    description: '❤️',
    video: 'https://res.cloudinary.com/di2oqwgqv/video/upload/v1775241908/document_6231219066493792734_j0cnmn.mp4',
    aspectRatio: '9/16',
    photos: [],
    details: {
      client: 'Cremabonn',
      year: '2026',
      services: 'Cinematic Reel, Visual Branding'
    }
  },
  { 
    slug: 'influencer-brand',
    title: 'Influencer', 
    category: 'Reel Content', 
    img: 'https://i.ibb.co/Ld4chFZS/IMG-3338.jpg',
    description: '❤️',
    video: 'https://res.cloudinary.com/di2oqwgqv/video/upload/v1775243772/AQNP8KHjM3kdx6ZFx_GMN2yV7cfve9_SpN4kDvk2pjRsc7e_Wr0iImG_9C7OAGH_xvshbq.mp4',
    aspectRatio: '9/16',
    photos: [],
    details: {
      client: 'SUPERCHARGED_SB',
      year: '2025',
      services: 'Video Production, Reel Strategy, Personal Branding'
    }
  },
  { 
    slug: 'the-health-world',
    title: 'The Health World', 
    category: 'Brand Makeovers', 
    img: 'https://i.ibb.co/8gD205Cp/IMG-3337.jpg',
    description: '❤️',
    photos: [
      'https://res.cloudinary.com/di2oqwgqv/image/upload/v1775246424/Screenshot_20260404-011737.Instagram_uibvab.jpg',
      'https://res.cloudinary.com/di2oqwgqv/image/upload/v1775246424/Screenshot_20260404-011716.Instagram_2_uid4od.jpg',
      'https://res.cloudinary.com/di2oqwgqv/image/upload/v1775246423/Screenshot_20260404-011729.Instagram_t3i5xg.jpg',
      'https://res.cloudinary.com/di2oqwgqv/image/upload/v1775246423/Screenshot_20260404-011658.Instagram_obnp0f.jpg',
      'https://res.cloudinary.com/di2oqwgqv/image/upload/v1775246423/Screenshot_20260404-011749.Instagram_r7z5lv.jpg',
      'https://res.cloudinary.com/di2oqwgqv/image/upload/v1775246421/Screenshot_20260404-011809.Instagram_yjsncu.jpg'
    ],
    details: {
      client: 'The Health World Gym',
      year: '2025',
      services: 'Brand Identity, Social Media Strategy, Visual Content'
    }
  },
];

// --- Components ---

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-center flex-col gap-4">
        <h1 className="text-4xl font-display font-bold">Project Not Found</h1>
        <button onClick={() => navigate('/')} className="text-accent hover:underline">Back to Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary overflow-x-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-lg py-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://res.cloudinary.com/di2oqwgqv/image/upload/v1773225240/image_15_1_pvovkn.png" 
              alt="OpenNest Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </Link>
          <Link to="/" className="glow-btn text-sm font-medium text-white/70 hover:text-accent transition-colors flex items-center gap-2 px-4 py-2 rounded-full border border-white/10">
            <ArrowRight size={16} className="rotate-180" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight">{project.title}</h1>
            <p className="text-white/60 text-xl md:text-2xl max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-y border-white/5 py-12">
            <div className="flex flex-col gap-2">
              <span className="text-white/30 uppercase text-xs tracking-widest font-bold">Client</span>
              <span className="text-xl font-medium">{project.details.client}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/30 uppercase text-xs tracking-widest font-bold">Year</span>
              <span className="text-xl font-medium">{project.details.year}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/30 uppercase text-xs tracking-widest font-bold">Services</span>
              <span className="text-xl font-medium">{project.details.services}</span>
            </div>
          </div>

          {/* Media Showcase */}
          <div className="space-y-12 mb-24">
            {project.video ? (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-3xl overflow-hidden shadow-2xl bg-black ${project.aspectRatio === '9/16' ? 'aspect-[9/16] max-w-md mx-auto' : 'aspect-video'}`}
              >
                <video 
                  src={project.video} 
                  controls 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ) : (
              project.photos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={photo} 
                    alt={`${project.title} showcase ${i + 1}`} 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))
            )}
          </div>

          {/* Feedback Section */}
          {project.feedback && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel p-12 md:p-20 relative overflow-hidden"
            >
              <Quote className="absolute top-10 right-10 text-accent/10 w-32 h-32 -z-10" />
              <div className="max-w-3xl">
                <div className="flex gap-1 text-accent mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-2xl md:text-4xl font-display font-medium mb-12 italic leading-snug">
                  "{project.feedback.text}"
                </p>
                <div>
                  <h5 className="text-xl font-bold">{project.feedback.author}</h5>
                  <p className="text-white/50">{project.feedback.role}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Next Project Link */}
          <div className="mt-32 text-center">
            <p className="text-white/30 mb-4 uppercase tracking-widest text-sm">Next Project</p>
            <Link 
              to={`/project/${projects[(projects.indexOf(project) + 1) % projects.length].slug}`}
              className="glow-btn text-4xl md:text-6xl font-display font-bold hover:text-accent transition-colors inline-flex items-center gap-4 group px-8 py-4 rounded-2xl border border-white/5"
            >
              {projects[(projects.indexOf(project) + 1) % projects.length].title}
              <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-primary/80 backdrop-blur-lg py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <img 
            src="https://res.cloudinary.com/di2oqwgqv/image/upload/v1773225240/image_15_1_pvovkn.png" 
            alt="OpenNest Logo" 
            className="h-10 w-auto"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-2 px-6 text-sm">
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-primary z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-display font-bold tracking-tighter">
              <img 
                src="https://res.cloudinary.com/di2oqwgqv/image/upload/v1773225240/image_15_1_pvovkn.png" 
                alt="OpenNest Logo" 
                className="h-8 w-auto"
                referrerPolicy="no-referrer"
              />
            </span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-display font-bold hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="mt-auto pt-12 border-t border-white/10">
              <p className="text-white/50 mb-4">Follow our journey</p>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/opennest.studio/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-white/70 hover:text-accent cursor-pointer transition-colors" />
                </a>
                <a href="https://wa.me/919641424318" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="text-white/70 hover:text-accent cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen md:h-screen w-full overflow-hidden flex flex-col md:justify-end items-center">
      {/* Video Background */}
      <div className="relative md:absolute md:inset-0 z-0 flex flex-col w-full bg-black">
        <div className="h-20 md:hidden" /> {/* Spacer for mobile header */}
        <div className="relative h-[60vh] md:h-full md:flex-1 overflow-hidden">
          <video 
            autoPlay 
            muted 
            playsInline
            className="w-full h-full object-cover"
            onEnded={(e) => (e.currentTarget.pause())}
          >
            <source src="https://res.cloudinary.com/di2oqwgqv/video/upload/v1773222409/IMG_2932_1_bhryft.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/80 z-10 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10 md:hidden" />
        </div>
      </div>

      <div className="relative z-20 text-center px-6 py-12 md:py-0 md:pb-24 max-w-5xl w-full bg-black md:bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="btn-secondary w-full sm:w-auto border-white/20 hover:border-accent hover:text-accent transition-all backdrop-blur-md bg-white/5">
              Book Now
            </a>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {[
            { label: 'Brands helped', value: '10+', icon: <Users size={20} className="text-accent" /> },
            { label: 'Reels created', value: '50+', icon: <Film size={20} className="text-accent" /> },
            { label: 'Social reach', value: '2M+', icon: <Zap size={20} className="text-accent" /> },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-4 md:p-6 flex items-center gap-4 hover:bg-white/10 transition-colors group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold font-display">
                  <Counter value={stat.value} />
                </div>
                <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            A Nest Where <br />
            <span className="text-accent">Brands Grow</span>
          </h2>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              OpenNest helps brands, shops, and startups improve their digital visibility. We combine web design, photoshoots, and social content so businesses can look professional online.
            </p>
            <p className="font-display text-white italic text-2xl border-l-4 border-accent pl-6 py-2 inline-block">
              "All brands deserve big visibility."
            </p>
            <p>
              We don't just create content; we build digital identities that demand attention. Our philosophy is rooted in the belief that every brand has a story worth telling cinematically.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Website Development',
      desc: 'Modern responsive websites designed to convert visitors into loyal customers.',
      icon: <Globe size={32} />,
      features: ['Fast Loading', 'SEO Structure', 'Mobile Friendly', 'Brand-focused Design']
    },
    {
      title: 'Brand Photoshoots',
      desc: 'Professional photography services that capture the essence of your brand identity.',
      icon: <Camera size={32} />,
      features: ['Product Photography', 'Lifestyle Photography', 'Brand Identity Visuals', 'High-end Retouching']
    },
    {
      title: 'Reel & Video Content',
      desc: 'Cinematic social media content creation that stops the scroll and builds engagement.',
      icon: <Video size={32} />,
      features: ['Reel Production', 'Product Videos', 'Cinematic Brand Stories', 'Trend-focused Editing']
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Services</h2>
        <p className="text-white/50 max-w-2xl mx-auto">
          We provide end-to-end creative solutions designed to make your brand unmissable in the digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="glass-panel p-10 hover:border-accent/50 transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
            <p className="text-white/60 mb-8 leading-relaxed">{service.desc}</p>
            <ul className="space-y-3">
              {service.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle2 size={16} className="text-accent" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Featured Package Callout */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent to-accent/80 p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest mb-4">Featured Service</span>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Social Media Visibility Package</h3>
          <p className="text-white/90 max-w-xl">
            The Working solution:  Photoshoot + Reels + Brand Visuals. Everything you need to launch or rebrand.
          </p>
        </div>
        <a href="#contact" className="glow-btn relative z-10 bg-white text-accent px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform whitespace-nowrap">
          Inquire Now
        </a>
        {/* Decorative Background Circles */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};



const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Work</h2>
          <p className="text-white/50 max-xl">
            A showcase of brands we've helped transform from invisible to unmissable.
          </p>
        </div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative group overflow-hidden rounded-2xl cursor-pointer"
          >
            <Link to={`/project/${project.slug}`}>
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h4 className="text-2xl font-display font-bold mb-4">{project.title}</h4>
                <div className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                  View Project <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: 'Brand Understanding', desc: 'We dive deep into your brand story, goals, and target audience.', icon: <Users size={24} /> },
    { title: 'Visual Identity Creation', desc: 'Designing the aesthetic foundation that will define your presence.', icon: <Zap size={24} /> },
    { title: 'Website Development', desc: 'Building your high-performance digital home.', icon: <Globe size={24} /> },
    { title: 'Content Production', desc: 'Capturing cinematic photos and reels that tell your story.', icon: <Camera size={24} /> },
    { title: 'Online Launch', desc: 'Unveiling your new visibility to the world.', icon: <Play size={24} /> },
  ];

  return (
    <section id="process" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">From Invisible to Unmissable</h2>
        <p className="text-white/50 max-w-2xl mx-auto">
          Our proven 5-step process designed to elevate your brand visibility systematically.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line Animation */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
        
        <div className="space-y-12 md:space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Step Number/Icon Circle */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center z-10 shadow-[0_0_20px_var(--color-accent-glow)]">
                <span className="text-white font-bold">{i + 1}</span>
              </div>

              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                <div className="glass-panel p-8 hover:bg-white/10 transition-colors">
                  <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="text-accent">{step.icon}</div>
                    <h3 className="text-2xl font-display font-bold">{step.title}</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  const packs = [
    {
      name: 'Starter Package',
      price: '₹799',
      recommended: false,
      features: [
        '1 reel',
        '5 Edited Images',
        'Professional shoot',
        'Advanced Video Editing & Color Grading',
        'Delivery 2-3 DAYS'
      ]
    },
    {
      name: 'Growth Package',
      price: '₹1499',
      recommended: true,
      features: [
        '2 reels',
        '10 Edited Images',
        'Professional shoot',
        'Advanced Video Editing & Color Grading',
        '1 revision',
        'Delivery 3-5 days'
      ]
    },
    {
      name: 'Premium Package',
      price: '₹3499',
      recommended: false,
      features: [
        '5 reels',
        '15 Edited Images',
        'Professional shoot',
        'Advanced Video Editing & Color Grading',
        '3 revisions',
        'Delivery 10-15 days'
      ]
    }
  ];

  return (
    <section id="packages" className="section-padding">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Choose Your Nest</h2>
        <p className="text-white/50 max-w-2xl mx-auto">
          Tailored packages designed to fit your brand's current stage and growth goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packs.map((pack, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`glass-panel p-10 flex flex-col relative ${pack.recommended ? 'border-accent shadow-[0_0_30px_rgba(255,106,0,0.15)] md:scale-105 z-10' : ''}`}
          >
            {pack.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                Recommended
              </div>
            )}
            <h3 className="text-2xl font-display font-bold mb-2">{pack.name}</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-accent text-3xl font-bold">{pack.price}</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {pack.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/70">
                  <CheckCircle2 size={18} className="text-accent shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className={`glow-btn w-full py-4 rounded-xl font-bold transition-all text-center ${pack.recommended ? 'bg-accent text-white hover:bg-accent/90' : 'bg-white/10 text-white hover:bg-white/20'}`}>
              Select Package
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
            Ready to <br />
            <span className="text-accent">Open the Nest?</span>
          </h2>
          <p className="text-white/60 text-xl mb-12 max-w-md">
            Let's discuss how we can elevate your brand's visibility and create something unmissable.
          </p>
          <div className="space-y-6">
            <a 
              href="https://www.instagram.com/opennest.studio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/80 hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors">
                <Instagram size={24} />
              </div>
              <span>@opennest.studio</span>
            </a>
            <a 
              href="https://wa.me/919641424318" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/80 hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors">
                <MessageCircle size={24} />
              </div>
              <span>+91 96414 24318</span>
            </a>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10"
        >
          <form action="https://formspree.io/f/xbdzodek" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Name</label>
                <input name="name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Business Name</label>
                <input name="business" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors" placeholder="Your Business" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/50">Service Needed</label>
              <select name="service" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors appearance-none">
                <option className="bg-primary">Website Development</option>
                <option className="bg-primary">Brand Photoshoot</option>
                <option className="bg-primary">Reel Content</option>
                <option className="bg-primary">Visibility Package</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/50">Phone / WhatsApp</label>
              <input name="phone" type="tel" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors" placeholder="+91 ..." />
            </div>
            <button type="submit" className="btn-primary w-full mt-4">
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <a href="#home" className="mb-6 block">
            <img 
              src="https://res.cloudinary.com/di2oqwgqv/image/upload/v1773225240/image_15_1_pvovkn.png" 
              alt="OpenNest Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </a>
          <p className="text-white/50 leading-relaxed">
            A premium creative visibility agency helping local brands become digital leaders through cinematic storytelling and modern design.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Navigation</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Social</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="https://www.instagram.com/opennest.studio/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://wa.me/919641424318" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
        <p>© 2026 OpenNest Agency. All rights reserved.</p>
        <p>Designed with passion for visibility.</p>
      </div>
    </footer>
  );
};

const CreativeShowcase = () => {
  return (
    <section className="py-32 overflow-hidden bg-primary relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent blur-[150px] rounded-full" />
      </div>
      <div className="relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-[10vw] md:text-[15vw] font-display font-bold leading-none tracking-tighter opacity-10 select-none whitespace-nowrap"
        >
          VISUAL STORYTELLING
        </motion.h2>
        <div className="max-w-5xl mx-auto px-6 -mt-20 md:-mt-40">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <img 
              src="https://res.cloudinary.com/di2oqwgqv/image/upload/v1773229274/Whisk_2ca429437487b2d8dd747414cf0b9067dr_kx2neu.jpg" 
              alt="Cinematic Visual" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: 'How long does a website take?', a: 'Typically, a custom website takes 2-4 weeks depending on complexity and content availability.' },
    { q: 'Do you offer trial reels?', a: 'Trial reels are available only during limited-time promotional offers. During these offers, clients receive two free trial reels — one ready-to-use reel and one watermarked reel for preview.' },
    { q: 'Do you shoot outside Kolkata?', a: 'Yes, we are available for travel for brand photoshoots and video content production.' },
    { q: 'Can small shops afford this?', a: 'Absolutely. We have packages specifically designed for small businesses and startups to help them grow.' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-panel overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="glow-btn w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-white/60"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

const LandingPage = () => {
  return (
    <div className="bg-primary min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <CreativeShowcase />
      <Packages />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
