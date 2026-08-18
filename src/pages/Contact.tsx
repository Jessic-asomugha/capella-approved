import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import PageHero from '../components/PageHero';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const WEB3FORMS_ACCESS_KEY = '79fc4dbc-cbd9-4a8c-be55-5476c77b2bfb';

const persistContactSubmission = async (payload: Record<string, unknown>) => {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...payload }),
  });

  const result = await response.json();

  if (!result.success) {
    return { error: { message: result.message || 'Submission failed' } };
  }

  return { error: null };
};

const contactInfo = [
  { icon: MapPin, label: 'Visit Us', value: 'Plot 471, behind Banilux Motors, Abuja 900211, Federal Capital Territory' },
  { icon: Phone, label: 'Call Us', value: '0706 206 2322 · 0904 848 6637' },
  { icon: Mail, label: 'Email Us', value: 'abuja@capella.com.ng' },
  { icon: Clock, label: 'Business Hours', value: 'Mon – Fri: 8:00 AM – 6:00 PM · Sat: 9:00 AM – 4:00 PM' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      company: form.company || null,
      subject: form.subject,
      message: form.message,
    };

    const { error } = await persistContactSubmission(payload);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  };

  return (
    <>
      <PageHero
        crumb="Contact"
        label="Get In Touch"
        title="Let's Start a Conversation"
        description="Reach us by phone, email, or the form below. We'll get back to you within one business day."
        image="https://images.pexels.com/photos/10347148/pexels-photo-10347148.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <span className="text-primary-600 text-xs font-semibold tracking-widest uppercase">Contact Information</span>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-2 mb-8">
              Reach Out Anytime
            </h2>
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const isPhone = item.label === 'Call Us';
                const isEmail = item.label === 'Email Us';
                return (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-primary-50 border border-primary-100 rounded-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{item.label}</div>
                      {isPhone ? (
                        <div className="flex flex-col gap-0.5">
                          <a href="tel:07062062322" className="text-sm text-neutral-800 font-medium hover:text-primary-600 transition-colors">0706 206 2322</a>
                          <a href="tel:09048486637" className="text-sm text-neutral-800 font-medium hover:text-primary-600 transition-colors">0904 848 6637</a>
                        </div>
                      ) : isEmail ? (
                        <a href={`mailto:${item.value}`} className="text-sm text-neutral-800 font-medium hover:text-primary-600 transition-colors">{item.value}</a>
                      ) : (
                        <div className="text-sm text-neutral-800 font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 p-6 bg-neutral-50 rounded-lg border border-neutral-200/60">
              <h3 className="font-semibold text-neutral-900 text-sm mb-2">Email Us</h3>
              <p className="text-sm text-neutral-600 mb-3">Send a message anytime and we'll respond within one business day.</p>
              <a href="mailto:abuja@capella.com.ng" className="text-primary-600 font-semibold text-sm">abuja@capella.com.ng</a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200/60">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">Send Us a Message</h2>
              <p className="text-sm text-neutral-600 mb-6">We'll get back to you within one business day.</p>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="w-14 h-14 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Message Sent</h3>
                  <p className="text-sm text-neutral-600 max-w-sm">
                    Thank you for reaching out. A member of our team will respond to your inquiry shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    <Field
                      label="Company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                  <Field
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                      Message <span className="text-primary-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-primary-600 bg-primary-50 border border-primary-200 rounded p-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 text-white font-semibold text-sm rounded transition-all duration-200 hover:bg-primary-700 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    {status !== 'submitting' && <Send className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

function Field({ label, name, value, onChange, type = 'text', required }: FieldProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
        {label} {required && <span className="text-primary-600">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-white border border-neutral-200 rounded text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
      />
    </div>
  );
}
