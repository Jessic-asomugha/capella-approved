import { Link } from 'react-router-dom';
import { ArrowRight, Check, Droplets, CheckCircle2, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { useInView } from '../hooks/useInView';

const industries = [
  'Oil & Gas', 'Construction Companies', 'Manufacturing Industries', 'Hotels',
  'Hospitals', 'Schools & Universities', 'Government Agencies', 'Telecommunications',
  'Logistics Companies', 'Estates', 'Supermarkets', 'Shopping Malls',
  'Churches', 'Banks', 'Restaurants', 'Agricultural Companies', 'Mining Companies',
];

const areas = [
  'Abuja (FCT)', 'Kaduna', 'Nasarawa', 'Niger State', 'Kogi',
];

export default function Services() {
  const [cardRef, cardInView] = useInView({ threshold: 0.1 });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.1 });

  return (
    <>
      <PageHero
        crumb="Services"
        label="What We Do"
        title="Diesel Supply, Delivered Right"
        description="Quality-assured Automotive Gas Oil, delivered reliably across every industry we serve."
        image="/images/diesel-supply.jpg"
      />

      {/* Single service card */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary-600 text-xs font-semibold tracking-widest uppercase">Our Service</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-4">
              One Job, Done Well
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Unadulterated diesel delivered across every industry we serve.
            </p>
          </div>

          <article
            ref={cardRef}
            className="group grid lg:grid-cols-2 gap-0 bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200/60 hover:shadow-xl hover:border-neutral-300 transition-all duration-300"
            style={{
              opacity: cardInView ? 1 : 0,
              transform: cardInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s ease, border-color 0.3s ease',
            }}
          >
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src="/images/diesel-supply.jpg"
                alt="Diesel (AGO) Supply"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
              <div className="absolute top-5 left-5 w-12 h-12 bg-white/95 rounded-sm flex items-center justify-center">
                <Droplets className="w-6 h-6 text-accent-400" />
              </div>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Diesel (AGO) Supply</h3>
              <p className="text-neutral-600 leading-relaxed mb-5">
                Reliable supply of Automotive Gas Oil for businesses that can't afford downtime —
                from hospitals and hotels to factories, estates, and government institutions.
              </p>
              <div className="p-4 bg-neutral-50 rounded border border-neutral-200/60 mb-6">
                <p className="text-sm text-neutral-700">
                  <span className="font-semibold text-neutral-900">Best For:</span>{' '}
                  Any organisation across our served industries requiring consistent,
                  quality-assured fuel delivery.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                {[
                  'Reliable supply network',
                  'Flexible delivery volumes',
                  'Competitive pricing',
                  'Timely delivery',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-neutral-700">
                    <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 text-white font-semibold text-sm rounded transition-all duration-200 hover:bg-primary-700 hover:gap-3 self-start"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary-600 text-xs font-semibold tracking-widest uppercase">Who We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Industries & Areas Covered</h2>
            <p className="text-neutral-600 mt-4">
              We deliver diesel and integrated services to organisations across multiple industries,
              with international partnerships available upon request.
            </p>
          </div>

          <div
            ref={industriesRef}
            className="grid lg:grid-cols-2 gap-12"
            style={{
              opacity: industriesInView ? 1 : 0,
              transform: industriesInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <div>
              <h3 className="font-semibold text-neutral-900 mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-600" /> Industries Served
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="inline-flex items-center px-4 py-2 bg-white border border-neutral-200/60 rounded text-sm text-neutral-700"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-900 mb-5 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-600" /> Areas Covered
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center px-4 py-2 bg-white border border-neutral-200/60 rounded text-sm text-neutral-700"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-sm text-neutral-500 mt-5">International partnerships available upon request.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
