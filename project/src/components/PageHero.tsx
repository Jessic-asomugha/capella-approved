import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  image: string;
  crumb: string;
}

export default function PageHero({ label, title, description, image, crumb }: PageHeroProps) {
  return (
    <section className="relative h-[52vh] min-h-[380px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/70 to-primary-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-5">
          <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-accent-400">{crumb}</span>
        </nav>
        <span className="inline-block text-accent-400 text-xs font-semibold tracking-widest uppercase mb-3">
          {label}
        </span>
        <h1
          className="text-white font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', animation: 'fadeInUp 0.6s ease-out forwards' }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.1s forwards', opacity: 0 }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
