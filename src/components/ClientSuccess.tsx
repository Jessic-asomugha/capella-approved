import { useInView } from '../hooks/useInView';
import { CheckCircle2, HardHat, Factory, Hotel } from 'lucide-react';

const industries = [
  {
    icon: HardHat,
    title: 'Construction',
    desc: 'Construction support and general contracting services that keep projects on track.',
  },
  {
    icon: Factory,
    title: 'Oil & Gas',
    desc: 'Integrated supply and logistics solutions for the oil and gas sector.',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    desc: 'Dependable services for hotels and facilities that cannot afford downtime.',
  },
];

export default function ClientSuccess() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-primary-900">
      <div className="absolute inset-0">
  
        <div className="absolute inset-0 bg-primary-900/75" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <CheckCircle2 className="w-6 h-6 text-accent-400" />
            <span className="text-white font-semibold text-lg">Built on reliability and trust</span>
          </div>
          <p className="text-white/70 mt-2">
            From factories and estates to hospitals and logistics operations, businesses trust Capella for dependable diesel supply and consistent support.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-neutral-50 rounded-lg p-7 border border-neutral-200/60 hover:shadow-lg hover:border-neutral-300 transition-all duration-300"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s, box-shadow 0.3s ease, border-color 0.3s ease`,
                }}
              >
                <div className="w-12 h-12 bg-primary-50 border border-primary-100 rounded-sm flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
