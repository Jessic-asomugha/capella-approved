import { useInView } from '../hooks/useInView';
import { ShieldCheck, Users, Award, Truck, ThumbsUp, Briefcase } from 'lucide-react';

const accomplishments = [
  { icon: ShieldCheck, label: 'Reliable diesel supply' },
  { icon: Users, label: 'Professional service' },
  { icon: Briefcase, label: 'Business-focused delivery' },
  { icon: Truck, label: 'Consistent fuel support' },
  { icon: Award, label: 'Competitive pricing' },
  { icon: ThumbsUp, label: 'Long-term customer value' },
];

export default function Accomplishments() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/why-trust-capella.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/80" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent-400 text-xs font-semibold tracking-widest uppercase">Why Trust Capella</span>
          <h2 className="text-white text-3xl md:text-4xl font-bold mt-2">
            Built on Professionalism and Trust
          </h2>
          <p className="text-white/60 mt-4">
            The foundations our clients across Nigeria rely on every day.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {accomplishments.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent-400/15 border border-accent-400/30 rounded-sm flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent-400" />
                </div>
                <div className="text-white/80 text-sm font-medium leading-snug">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
