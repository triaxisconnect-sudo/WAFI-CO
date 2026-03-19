import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  UploadCloud, 
  Wand2, 
  Truck, 
  Star, 
  MessageCircle,
  Instagram,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

// Components
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6 text-brand-text" />
          </button>
          <a href="#" className="font-serif text-2xl tracking-widest font-semibold">WAFI & CO.</a>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#products" className="hover:text-brand-accent transition-colors">Shop</a>
          <a href="#how-it-works" className="hover:text-brand-accent transition-colors">How it Works</a>
          <a href="#reviews" className="hover:text-brand-accent transition-colors">Reviews</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hover:text-brand-accent transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            className="fixed inset-0 bg-brand-bg z-50 flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl tracking-widest font-semibold">WAFI & CO.</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-brand-text" />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-xl font-serif">
              <a href="#products" onClick={() => setMobileMenuOpen(false)}>Shop</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it Works</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2574&auto=format&fit=crop" 
          alt="Romantic couple holding photos" 
          className="w-full h-full object-cover object-center opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/60 via-brand-bg/40 to-brand-bg"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-handwriting text-3xl md:text-4xl text-brand-accent mb-4 block">
            Because memories deserve more than just a phone gallery
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-6 text-brand-text">
            Turn Your Memories Into <br className="hidden md:block"/> Something You Can Hold
          </h1>
          <p className="text-lg md:text-xl text-brand-text/80 mb-10 max-w-2xl mx-auto font-light">
            Custom polaroids, magazines & frames made just for your special moments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-text text-white rounded-full font-medium tracking-wide hover:bg-brand-text/90 transition-all flex items-center justify-center gap-2 group">
              Create Yours Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-brand-text border border-brand-text/10 rounded-full font-medium tracking-wide hover:bg-brand-pink transition-all">
              Shop Collection
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: "Retro Polaroids",
      desc: "Your favorite moments, printed in classic vintage style.",
      price: "From $12",
      img: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2676&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "The Love Magazine",
      desc: "A fully customized 24-page magazine telling your unique story.",
      price: "From $45",
      img: "https://images.unsplash.com/photo-1544377193-33dce4ea0a0b?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Memory Frames",
      desc: "Elegant minimalist frames to showcase your best days.",
      price: "From $28",
      img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Curated For You</h2>
        <p className="text-brand-text/70 font-light max-w-xl mx-auto">
          Thoughtfully designed pieces to bring your digital memories into the physical world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-brand-pink">
              <img 
                src={product.img} 
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-brand-text px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Customize Now
                </button>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl mb-2">{product.title}</h3>
              <p className="text-brand-text/70 text-sm mb-3 px-4">{product.desc}</p>
              <p className="font-medium">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <UploadCloud className="w-8 h-8 text-brand-accent" />,
      title: "Upload Photos",
      desc: "Select your favorite memories directly from your phone or Instagram."
    },
    {
      icon: <Wand2 className="w-8 h-8 text-brand-accent" />,
      title: "Customize Design",
      desc: "Add your own text, dates, and choose from our aesthetic templates."
    },
    {
      icon: <Truck className="w-8 h-8 text-brand-accent" />,
      title: "We Deliver",
      desc: "We print with premium quality and deliver straight to their door."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-pink/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="font-handwriting text-3xl text-brand-accent mb-2 block">Simple & Easy</span>
          <h2 className="font-serif text-4xl md:text-5xl">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-brand-pink-dark border-dashed border-t-2 border-brand-pink-dark/50 z-0"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 border border-brand-pink-dark/20">
                {step.icon}
              </div>
              <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
              <p className="text-brand-text/70 leading-relaxed max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EmotionalShowcase = () => {
  const cases = [
    { title: "For Your Girlfriend ❤️", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2670&auto=format&fit=crop" },
    { title: "Anniversary Gift 💍", img: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2670&auto=format&fit=crop" },
    { title: "Birthday Surprise 🎂", img: "https://images.unsplash.com/photo-1530103862676-de8892ebeea0?q=80&w=2670&auto=format&fit=crop" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="md:w-1/3">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Make them feel special</h2>
          <p className="text-brand-text/70 mb-8 font-light text-lg">
            In a way they'll never forget. Our customized gifts are designed to bring tears of joy and warm hugs.
          </p>
          <button className="px-8 py-4 bg-brand-accent text-white rounded-full font-medium hover:bg-brand-accent-hover transition-colors">
            Find the Perfect Gift
          </button>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cases.map((c, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group"
            >
              <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white font-serif text-xl">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      text: "I got the custom magazine for our 1st anniversary and she literally cried. The quality is insane and it feels so premium.",
      author: "Sarah & Mike",
      rating: 5
    },
    {
      text: "The polaroids look so aesthetic on my wall! The ordering process was super easy and shipping was fast.",
      author: "Emily R.",
      rating: 5
    },
    {
      text: "Best birthday gift I've ever given. It's so much more meaningful than buying something generic from a store.",
      author: "David T.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Loved by Couples</h2>
          <div className="flex justify-center gap-1 text-brand-accent mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
          <p className="text-brand-text/70">Over 10,000+ happy tears delivered.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-brand-bg p-8 rounded-3xl"
            >
              <div className="flex gap-1 text-brand-accent mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif text-xl leading-relaxed mb-6 italic">"{review.text}"</p>
              <p className="font-medium text-sm uppercase tracking-wider">{review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CustomizationHighlight = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-brand-pink/40 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2574&auto=format&fit=crop" 
            alt="Customization process" 
            className="rounded-2xl w-full aspect-square object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:w-1/2">
          <span className="font-handwriting text-3xl text-brand-accent mb-4 block">Made with care</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Fully Personalized. <br/> Uniquely Yours.</h2>
          <ul className="space-y-4 mb-10">
            {['Live 3D preview of your designs', 'Premium matte & gloss finishes', 'Add your own text & dates', 'Hand-packaged with love'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg text-brand-text/80">
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <button className="px-8 py-4 bg-brand-text text-white rounded-full font-medium hover:bg-brand-text/90 transition-colors">
            Start Customizing
          </button>
        </div>
      </div>
    </section>
  );
};

const UrgencyOffer = () => {
  return (
    <section className="py-16 bg-brand-text text-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Order before Eid for guaranteed delivery 🌙</h2>
        <p className="text-white/80 mb-8 text-lg">Plus, get a free mini polaroid set with every Magazine order!</p>
        <button className="px-8 py-4 bg-white text-brand-text rounded-full font-medium hover:bg-brand-pink transition-colors">
          Claim Offer Now
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-bg pt-24 pb-12 px-6 md:px-12 border-t border-brand-text/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <h3 className="font-serif text-2xl tracking-widest font-semibold mb-6">WAFI & CO.</h3>
          <p className="text-brand-text/70 text-sm leading-relaxed mb-6">
            Creating emotional connections through beautifully crafted, personalized memory gifts.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-brand-text hover:bg-brand-accent hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">Shop</h4>
          <ul className="space-y-4 text-brand-text/70 text-sm">
            <li><a href="#" className="hover:text-brand-accent transition-colors">Polaroid Prints</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Custom Magazines</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Photo Frames</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Gift Cards</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">Help</h4>
          <ul className="space-y-4 text-brand-text/70 text-sm">
            <li><a href="#" className="hover:text-brand-accent transition-colors">Track Order</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">Stay in the loop</h4>
          <p className="text-brand-text/70 text-sm mb-4">Get special offers and gift inspiration.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white border border-brand-text/10 rounded-l-full px-4 py-2 w-full focus:outline-none focus:border-brand-accent"
            />
            <button className="bg-brand-text text-white px-6 py-2 rounded-r-full hover:bg-brand-text/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-brand-text/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text/50">
        <p>&copy; {new Date().getFullYear()} WAFI & CO. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-text transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-text transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppSticky = () => {
  return (
    <a 
      href="https://wa.me/1234567890" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-pink-dark selection:text-brand-text">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <HowItWorks />
        <EmotionalShowcase />
        <CustomizationHighlight />
        <Reviews />
        <UrgencyOffer />
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  );
}
