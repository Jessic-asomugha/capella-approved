import { useInView } from '../hooks/useInView';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Truck, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: Briefcase,
    title: 'Integrated Solutions',
    desc: 'Oil and gas, procurement, logistics, engineering, construction support, and general contracting under one roof.',
  },
  {
    icon: Truck,
    title: 'Reliable Logistics',
    desc: 'Dependable delivery and professional workforce ensuring timely execution across our service areas.',
  },
  {
    icon: MapPin,
    title: 'Coverage Across Nigeria',
    desc: 'Serving Abuja, Kaduna, Nasarawa, Niger State, and Kogi, with international partnerships on request.',
  },
];

export default function ShapingFuture() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-primary-900">
      <div className="absolute inset-0">
        <img
          src="/partner-with-us.jpg"
          alt="partner with us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/80" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-accent-400 text-xs font-semibold tracking-widest uppercase">Why Partner With Us</span>
            <h2 className="text-white text-3xl md:text-4xl font-bold mt-2 mb-6 leading-tight">
              Integrated Solutions.<br />Trusted Results.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
              Capella Integrated Global delivers complete business solutions backed by
              professionalism, integrity, and timely execution. Our focus is building lasting
              relationships through quality service and dependable performance.
            </p>

            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-400 text-primary-900 font-semibold text-sm rounded transition-all duration-200 hover:bg-accent-300 hover:gap-3"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Pillars */}
          <div className="space-y-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="group flex gap-5 p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/8 hover:border-accent-400/30 transition-all duration-300"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateX(0)' : 'translateX(30px)',
                    transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s, background-color 0.3s ease, border-color 0.3s ease`,
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-400/15 border border-accent-400/30 rounded-sm flex items-center justify-center group-hover:bg-accent-400/25 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1.5">{p.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
