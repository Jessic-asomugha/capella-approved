import { useInView } from '../hooks/useInView';
import { Target, Eye, BarChart3 } from 'lucide-react';

export default function MissionVision() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [imgRef, imgInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div
          ref={imgRef}
          className="relative order-2 lg:order-1"
          style={{
            opacity: imgInView ? 1 : 0,
            transform: imgInView ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/11003992/pexels-photo-11003992.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Oil pump at sunset"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
          </div>

        </div>

        {/* Text */}
        <div ref={ref} className="order-1 lg:order-2">
          <span className="text-primary-600 text-xs font-semibold tracking-widest uppercase">About Capella</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-6">
            Powering businesses.<br />Fueling growth.
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed mb-8">
            Capella Integrated Global Limited is a Nigerian company focused on providing
            reliable diesel supply to businesses and organisations across different industries.
            We help businesses maintain smooth operations through dependable fuel supply,
            competitive pricing, and professional service.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To provide reliable, quality fuel supply that helps businesses maintain efficient, uninterrupted operations — delivered with professionalism and lasting value.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                desc: 'To grow into a trusted Nigerian name in energy solutions, known for reliability and sustainable value.',
              },
              {
                icon: BarChart3,
                title: 'Why Choose Us',
                desc: 'Reliable supply, trusted product quality, practical pricing, and service that grows with the businesses we serve.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex gap-4"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(15px)',
                    transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`,
                  }}
                >
                  <div className="flex-shrink-0 w-11 h-11 bg-primary-50 border border-primary-100 rounded-sm flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
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
