import { useInView } from '../hooks/useInView';
import { Target, Eye, ShieldCheck, Award, Sparkles, Users, MapPin, CheckCircle2, Briefcase, Handshake, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import Accomplishments from '../components/Accomplishments';
import CtaBand from '../components/CtaBand';

const values = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'We act with honesty and transparency, honoring every commitment to our clients and partners.' },
  { icon: Briefcase, title: 'Professionalism', desc: 'Experienced management and a professional workforce delivering dependable performance.' },
  { icon: Sparkles, title: 'Innovation', desc: 'Innovative, efficient, and cost-effective solutions tailored to your unique needs.' },
  { icon: Award, title: 'Quality', desc: 'Quality service and dependable performance in everything we deliver.' },
  { icon: Users, title: 'Teamwork', desc: 'Building lasting relationships through collaboration and shared success.' },
  { icon: ShieldCheck, title: 'Safety', desc: 'Safe practices that protect our workforce, clients, and communities.' },
];

const industries = [
  'Oil & Gas', 'Construction Companies', 'Manufacturing Industries', 'Hotels',
  'Hospitals', 'Schools & Universities', 'Government Agencies', 'Telecommunications',
  'Logistics Companies', 'Estates', 'Supermarkets', 'Shopping Malls',
  'Churches', 'Banks', 'Restaurants', 'Agricultural Companies', 'Mining Companies',
];

const areas = [
  'Abuja (FCT)', 'Kaduna', 'Nasarawa', 'Niger State', 'Kogi',
];

export default function About() {
  const [storyRef, storyInView] = useInView({ threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });

  return (
    <>
      <PageHero
        crumb="About"
        label="About Capella"
        title="Integrated Solutions. Trusted Results."
        description="Capella Integrated Global Limited is a diversified Nigerian company providing integrated business solutions across the oil and gas, procurement, logistics, engineering, construction support, and general contracting sectors."
        image="https://images.pexels.com/photos/7580652/pexels-photo-7580652.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Story */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={storyRef}
            style={{
              opacity: storyInView ? 1 : 0,
              transform: storyInView ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/11003992/pexels-photo-11003992.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Capella operations"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>
            <div className="absolute -mt-10 ml-6 bg-primary-900 text-white p-6 rounded shadow-xl max-w-[220px] hidden md:block">
              <div className="text-3xl font-bold text-accent-400">Est. 2024</div>
              <div className="text-sm text-white/70 mt-1">A new name in integrated services</div>
            </div>
          </div>

          <div>
            <span className="text-primary-600 text-xs font-semibold tracking-widest uppercase">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-6">
              A Diversified Nigerian Company
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Capella Integrated Global Limited is a diversified Nigerian company providing
                integrated business solutions across the oil and gas, procurement, logistics,
                engineering, construction support, and general contracting sectors.
              </p>
              <p>
                We deliver innovative, efficient, and cost-effective solutions tailored to meet
                the unique needs of corporate organisations, government institutions, and private
                businesses. Founded in 2024, we are built on experienced management, a professional
                workforce, reliable logistics, and customer-focused service.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: Target, title: 'Our Mission', desc: 'To deliver innovative business solutions that exceed customer expectations.' },
                { icon: Eye, title: 'Our Vision', desc: "To become Nigeria's most trusted integrated services company." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-5 bg-neutral-50 border border-neutral-200/60 rounded">
                    <Icon className="w-5 h-5 text-primary-600 mb-3" />
                    <h3 className="font-semibold text-neutral-900 text-sm mb-1.5">{item.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Accomplishments />

      {/* Values */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary-600 text-xs font-semibold tracking-widest uppercase">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Our Core Values</h2>
          </div>
          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-7 bg-neutral-50 rounded-lg border border-neutral-200/60 hover:shadow-md transition-shadow duration-300"
                  style={{
                    opacity: valuesInView ? 1 : 0,
                    transform: valuesInView ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s, box-shadow 0.3s ease`,
                  }}
                >
                  <div className="w-12 h-12 bg-primary-50 border border-primary-100 rounded-sm flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary-600 text-xs font-semibold tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">The Capella Advantage</h2>
            <p className="text-neutral-600 mt-4">
              Capella Integrated Global delivers complete business solutions backed by professionalism, integrity, and timely execution. Our focus is building lasting relationships through quality service and dependable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Briefcase, title: 'Integrated Solutions', desc: 'Multiple business services under one roof, tailored to your organisation.' },
              { icon: Handshake, title: 'Professionalism & Integrity', desc: 'Experienced management and a professional workforce you can trust.' },
              { icon: Clock, title: 'Timely Execution', desc: 'Reliable logistics and dependable performance that keep your projects on schedule.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-7 bg-white rounded-lg border border-neutral-200/60 hover:shadow-md transition-shadow duration-300"
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

      {/* Who We Serve */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary-600 text-xs font-semibold tracking-widest uppercase">Who We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Industries & Areas Covered</h2>
            <p className="text-neutral-600 mt-4">
              We provide integrated business solutions to organisations across multiple industries, with international partnerships available upon request.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-600" /> Industries Served
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="inline-flex items-center px-4 py-2 bg-neutral-50 border border-neutral-200/60 rounded text-sm text-neutral-700"
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
                    className="inline-flex items-center px-4 py-2 bg-neutral-50 border border-neutral-200/60 rounded text-sm text-neutral-700"
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
