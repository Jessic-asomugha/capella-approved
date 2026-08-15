import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CtaBand() {
  return (
    <section className="bg-accent-400 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
            Ready to keep your operations moving?
          </h2>
          <p className="text-white/80 text-sm md:text-base">
            Talk to our team about dependable diesel supply, competitive pricing, and professional service for your business.
          </p>
        </div>
        <Link
          to="/quote"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-900 text-white font-semibold text-sm rounded hover:bg-primary-800 transition-all duration-200 hover:gap-3 whitespace-nowrap"
        >
          Request a Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
