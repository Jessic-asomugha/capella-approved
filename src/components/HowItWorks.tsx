import { useInView } from '../hooks/useInView';
import { PhoneCall, PackageCheck, Truck, Gauge } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Get In Touch',
    desc: 'Call or request a quote and tell us about your business needs and requirements.',
  },
  {
    icon: PackageCheck,
    title: 'Tailored Solution',
    desc: 'We design an integrated solution tailored to your organisation, timeline, and budget.',
  },
  {
    icon: Truck,
    title: 'Timely Execution',
    desc: 'Our professional workforce and reliable logistics deliver on schedule, every time.',
  },
  {
    icon: Gauge,
    title: 'Ongoing Support',
    desc: 'Customer-focused service ensuring dependable performance and lasting relationships.',
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="bg-primary-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-12">
          <span className="text-accent-400 text-xs font-semibold tracking-widest uppercase">How It Works</span>
          <h2 className="text-white text-3xl md:text-4xl font-bold mt-2">How We Work</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-lg overflow-hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="bg-primary-800 p-8 group hover:bg-primary-700 transition-colors duration-300"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
                }}
              >
                <div className="w-12 h-12 bg-accent-400/10 border border-accent-400/20 rounded-sm flex items-center justify-center mb-6 group-hover:bg-accent-400/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-accent-400" />
                </div>
                <div className="text-accent-400 text-xs font-bold mb-2">0{i + 1}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
