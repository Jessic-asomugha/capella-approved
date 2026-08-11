import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const hero = {
  image: 'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&h=650&w=1600',
  kicker: 'Integrated Solutions. Trusted Results.',
  heading: 'Capella Integrated\nGlobal Limited',
  sub: 'A diversified Nigerian company providing integrated business solutions across oil and gas, procurement, logistics, engineering, construction support, and general contracting.',
};

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={hero.image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/50 to-primary-900/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div style={{ animation: 'fadeInUp 0.6s ease-out forwards' }} className="max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent-400" />
            <span className="text-accent-400 text-xs font-semibold tracking-widest uppercase">
              {hero.kicker}
            </span>
            <span className="h-px w-10 bg-accent-400" />
          </div>
          <h1 className="text-white font-bold leading-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', whiteSpace: 'pre-line' }}>
            {hero.heading}
          </h1>
          <p className="text-white/70 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            {hero.sub}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-400 text-primary-900 font-semibold text-sm rounded transition-all duration-200 hover:bg-accent-300 hover:gap-3"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold text-sm rounded transition-all duration-200 hover:border-white/60 hover:bg-white/5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#how-it-works"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white/80 transition-colors flex flex-col items-center gap-1 text-xs tracking-widest uppercase"
      >
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
      <div id="how-it-works" className="absolute -bottom-1 left-0" />
    </section>
  );
}
