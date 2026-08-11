import { useInView } from '../hooks/useInView';
import { ArrowRight, Droplets, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="bg-neutral-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary-600 text-xs font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-4">
            Diesel Supply, Done Right
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Unadulterated diesel delivered across every industry we serve.
          </p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <article
            className="group grid sm:grid-cols-2 gap-0 bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200/60 hover:shadow-xl hover:border-neutral-300 transition-all duration-300"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease',
            }}
          >
            <div className="relative h-52 sm:h-auto overflow-hidden">
              <img
                src="/images/diesel-supply.jpg"
                alt="Diesel (AGO) Supply"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
              <div className="absolute top-4 left-4 w-10 h-10 bg-white/95 rounded-sm flex items-center justify-center">
                <Droplets className="w-5 h-5 text-accent-400" />
              </div>
            </div>
            <div className="p-7 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">Diesel (AGO) Supply</h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                Reliable supply of Automotive Gas Oil for businesses that can't afford downtime —
                from hospitals and hotels to factories, estates, and government institutions.
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-5">
                {['Reliable supply', 'Flexible volumes', 'Competitive pricing', 'Timely delivery'].map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-neutral-700">
                    <Check className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-primary-600 text-sm font-semibold hover:gap-2.5 transition-all duration-200"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
