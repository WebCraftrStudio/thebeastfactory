/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  TrendingUp, 
  Users, 
  HeartPulse, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  MapPin, 
  Star, 
  Menu, 
  X, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Plans', href: '#plans' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-red-900/30' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
          <Dumbbell className="text-red-600 w-8 h-8" />
          <span>LIFE <span className="text-red-600">FITNESS</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.4)]"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-red-900/30 py-8 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-bold uppercase tracking-widest text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-red-600 text-white py-4 rounded-xl font-bold uppercase text-center tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-red-600/10 border border-red-600/30 text-red-500 text-xs font-black uppercase tracking-[0.3em] animate-pulse">
            Build Strength. Unleash Your Potential.
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-white uppercase tracking-tighter leading-[0.9] mb-8">
            UNLEASH YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">POTENTIAL</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-medium">
            Premium gym with top-class equipment and expert trainers in Naigaon East. Start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="group relative px-10 py-5 bg-red-600 text-white rounded-full font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(220,38,38,0.5)]"
            >
              <span className="relative z-10">Join Life Fitness</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a 
              href="#about" 
              className="px-10 py-5 border border-white/20 text-white rounded-full font-black uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Explore More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Interior" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Stats Badge */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-red-600 p-8 rounded-3xl shadow-2xl hidden md:block">
              <div className="text-center">
                <div className="text-4xl font-black text-white">4.9</div>
                <div className="flex justify-center gap-1 my-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="white" className="text-white" />)}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/80">106+ Reviews</div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.4em] mb-4">About Life Fitness</h2>
            <h3 className="text-4xl md:text-5xl font-display text-white uppercase leading-tight mb-8">
              WHERE CHAMPIONS ARE <span className="text-red-600">MADE</span>
            </h3>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Life Fitness is one of the highest-rated gyms in Naigaon East with a 4.9-star rating. We provide a premium, hygienic environment equipped with modern machinery and supportive expert trainers who are committed to your fitness journey.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <ShieldCheck className="text-red-600" />, title: "Premium & Hygienic", desc: "Clean environment with sanitized equipment." },
                { icon: <Users className="text-red-600" />, title: "Expert Trainers", desc: "Friendly professionals to guide your every move." },
                { icon: <Sparkles className="text-red-600" />, title: "Modern Equipment", desc: "Top-tier machines for maximum results." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 bg-red-600/10 p-3 rounded-xl border border-red-600/20">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-tight">{item.title}</h4>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Dumbbell />, title: "Strength Training", desc: "Build raw power and muscle mass with our heavy-duty equipment." },
    { icon: <TrendingUp />, title: "Weight Loss", desc: "Customized programs designed to burn fat and boost metabolism." },
    { icon: <Users />, title: "Personal Training", desc: "One-on-one sessions with expert coaches for targeted results." },
    { icon: <HeartPulse />, size: "Cardio Section", desc: "High-intensity cardio zone for endurance and heart health." },
    { icon: <ShieldCheck />, title: "Modern Equipment", desc: "The latest fitness technology to optimize your workouts." },
    { icon: <Sparkles />, title: "Clean & Spacious", desc: "Ample room to train comfortably in a premium atmosphere." },
  ];

  return (
    <section id="services" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.4em] mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-display text-white uppercase">PREMIUM FACILITIES</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                {service.icon}
              </div>
              <h4 className="text-xl font-black text-white uppercase mb-4 tracking-tight">{service.title}</h4>
              <p className="text-white/40 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.4em] mb-4">Life Fitness Floor</h2>
          <h3 className="text-4xl md:text-5xl font-display text-white uppercase">VISUAL EXPERIENCE</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/10"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Rahul Sharma", text: "One of the best gyms I've trained at. Motivating atmosphere and top equipment. The trainers actually know what they are doing.", rating: 5 },
    { name: "Priya Patel", text: "Clean, aesthetic gym with very kind staff. I felt comfortable from day one as a beginner. Highly recommend!", rating: 5 },
    { name: "Amit Varma", text: "Great trainers who genuinely help you achieve your goals. The equipment is always well-maintained and the vibe is just different.", rating: 5 },
  ];

  return (
    <section className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.4em] mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-display text-white uppercase">FITNESS SUCCESS STORIES</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 relative">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="#dc2626" className="text-red-600" />)}
              </div>
              <p className="text-white/70 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white uppercase">
                  {review.name.charAt(0)}
                </div>
                <h5 className="text-white font-bold uppercase tracking-widest text-sm">{review.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MembershipPlans = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "999",
      features: [
        "Full gym access during operating hours",
        "Basic cardio and weight equipment",
        "Locker room facilities",
        "Free fitness assessment",
        "Access to general training area"
      ],
      note: "Visit our gym or call +91 9518398413 to complete your membership registration and payment.",
      highlight: false
    },
    {
      name: "Standard Plan",
      price: "1999",
      features: [
        "Everything in Basic Plan",
        "Unlimited group classes (Zumba, Yoga, HIIT)",
        "Monthly trainer guidance session",
        "Nutrition consultation",
        "Priority equipment access",
        "Guest pass (2 per month)"
      ],
      note: "Contact us at +91 9518398413 or visit Life Fitness Gym to enroll in this popular plan.",
      highlight: true,
      badge: "MOST POPULAR"
    },
    {
      name: "Premium Plan",
      price: "3999",
      features: [
        "Everything in Standard Plan",
        "Dedicated personal trainer (3 sessions/week)",
        "Customized diet and meal plan",
        "Full access to all premium equipment",
        "Body composition analysis monthly",
        "Free merchandise and supplements",
        "24/7 gym access",
        "Unlimited guest passes"
      ],
      note: "For VIP membership, please call +91 9518398413 or visit us for a personalized consultation.",
      highlight: false
    }
  ];

  const handleGetStarted = (planName: string) => {
    const message = `Hi, I am interested in the ${planName}. Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919518398413?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="plans" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.4em] mb-4">Membership Plans</h2>
          <h3 className="text-4xl md:text-5xl font-display text-white uppercase mb-6">Choose Your Perfect Plan</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Select the membership that fits your goals and budget. All plans include access to our world-class facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[2rem] bg-white/5 border transition-all duration-500 hover:-translate-y-2 ${
                plan.highlight ? 'border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.2)]' : 'border-white/10'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg z-10">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-black text-white uppercase mb-2 tracking-tight">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display text-white">₹{plan.price}</span>
                  <span className="text-white/40 text-sm font-bold uppercase tracking-widest">/ month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm text-white/60">
                    <ShieldCheck size={18} className="text-red-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] text-white/30 leading-relaxed mb-6 italic">
                  {plan.note}
                </p>
                <button
                  onClick={() => handleGetStarted(plan.name)}
                  className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    plan.highlight 
                      ? 'bg-red-600 text-white shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:bg-red-700' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = { name: '', phone: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Format the WhatsApp message
      const whatsappMessage = `New Enquiry from Website:

Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/919518398413?text=${encodedMessage}`;

      // Simulate a small delay for UX
      await new Promise(resolve => setTimeout(resolve, 800));

      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setIsSuccess(true);
      setFormData({ name: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.4em] mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-display text-white uppercase mb-8">GET IN <span className="text-red-600">TOUCH</span></h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="bg-red-600/10 p-4 rounded-2xl border border-red-600/20 text-red-600">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest mb-1">Our Location</h4>
                  <p className="text-white/50">First floor, Christ House, E, Naigaon East, Juchandra, Vasai-Virar, Maharashtra 401208</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-red-600/10 p-4 rounded-2xl border border-red-600/20 text-red-600">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest mb-1">Call Us</h4>
                  <a href="tel:+919518398413" className="text-white/50 hover:text-red-600 transition-colors">+91 9518398413</a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 rounded-3xl overflow-hidden border border-white/10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.432657788325!2d72.853039!3d19.339686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9e3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sTHE%20BEAST%20FACTORY!5e0!3m2!1sen!2sin!4v1710912345678!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck size={40} />
                  </div>
                  <h4 className="text-2xl font-display text-white uppercase mb-4">Message Sent!</h4>
                  <p className="text-white/60 mb-8">Your message has been sent successfully! We will get back to you soon.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-red-600 font-bold uppercase tracking-widest hover:text-red-500 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-600' : 'border-white/10'} rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors`}
                      />
                      {errors.name && <p className="text-red-600 text-[10px] font-bold uppercase tracking-widest ml-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Phone</label>
                      <input 
                        type="tel" 
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-white/5 border ${errors.phone ? 'border-red-600' : 'border-white/10'} rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors`}
                      />
                      {errors.phone && <p className="text-red-600 text-[10px] font-bold uppercase tracking-widest ml-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your fitness goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full bg-white/5 border ${errors.message ? 'border-red-600' : 'border-white/10'} rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-red-600 text-[10px] font-bold uppercase tracking-widest ml-1">{errors.message}</p>}
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-xl font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(220,38,38,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2 mb-6">
              <Dumbbell className="text-red-600 w-8 h-8" />
              <span>LIFE <span className="text-red-600">FITNESS</span></span>
            </a>
            <p className="text-white/40 mb-8 leading-relaxed">
              Premium fitness destination in Naigaon East. We provide the best environment, equipment, and training to help you unleash your potential.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-red-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-red-600 transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8">Opening Hours</h4>
            <ul className="space-y-4 text-white/40">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span className="text-white font-medium">5:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-t border-white/5 pt-4">
                <span>Sunday</span>
                <span className="text-red-600 font-bold uppercase">Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8">Newsletter</h4>
            <p className="text-white/40 mb-6 text-sm">Get fitness tips and exclusive offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-red-600"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-red-600 text-white px-6 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} LIFE FITNESS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-red-600 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <MembershipPlans />
        <Gallery />
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop" 
              alt="CTA Background" 
              className="w-full h-full object-cover opacity-20 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 to-black" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center lg:text-left lg:flex items-center justify-between gap-12">
            <div className="max-w-2xl mb-12 lg:mb-0">
              <h3 className="text-4xl md:text-6xl font-display text-white uppercase mb-6 leading-tight">
                READY TO <span className="text-red-600">TRANSFORM</span> YOUR BODY?
              </h3>
              <p className="text-white/70 text-lg">
                Don't wait for tomorrow. Join the highest-rated gym in Naigaon East and start your journey today.
              </p>
            </div>
            <a 
              href="#contact" 
              className="inline-block px-12 py-6 bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Join LIFE FITNESS Today
            </a>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
