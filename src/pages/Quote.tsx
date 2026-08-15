import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import PageHero from '../components/PageHero';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const WEB3FORMS_ACCESS_KEY = '79fc4dbc-cbd9-4a8c-be55-5476c77b2bfb';

const persistQuoteRequest = async (payload: Record<string, unknown>) => {
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

const volumes = ['Under 500 Litres', '500 - 2,000 Litres', '2,000 - 10,000 Litres', 'Over 10,000 Litres'];
const frequency = ['One-time delivery', 'Weekly', 'Monthly', 'Custom schedule'];

export default function Quote() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    delivery_location: '',
    volume_needed: '',
    delivery_frequency: '',
    details: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      delivery_location: form.delivery_location || null,
      volume_needed: form.volume_needed || null,
      delivery_frequency: form.delivery_frequency || null,
      details: form.details,
    };

    const { error } = await persistQuoteRequest(payload);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong submitting your request. Please try again.');
      return;
    }

    setStatus('success');
    setForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      delivery_location: '',
      volume_needed: '',
      delivery_frequency: '',
      details: '',
    });
  };

  return (
    <>
      <PageHero
        crumb="Request a Quote"
        label="Get a Quote"
        title="Request a Project Quote"
        description="Share your service requirements and our team will prepare a tailored quote within two business days."
        image="/images/request-a-quote.jpg"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Sidebar info */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="w-12 h-12 bg-primary-50 border border-primary-100 rounded-sm flex items-center justify-center mb-5">
                <FileText className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">What Happens Next?</h2>
              <ol className="space-y-5">
                {[
                  { step: '01', title: 'We Review Your Request', desc: 'Our team reviews your volume, location, and delivery needs.' },
                  { step: '02', title: 'Tailored Quote', desc: 'You receive a competitive quote with timeline and delivery details within 2 business days.' },
                  { step: '03', title: 'Scheduled Delivery', desc: 'Once approved, our logistics team schedules and delivers your service.' },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="text-primary-600 font-bold text-sm flex-shrink-0">{item.step}</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 p-6 bg-neutral-50 rounded-lg border border-neutral-200/60">
                <h3 className="font-semibold text-neutral-900 text-sm mb-2">Prefer to talk directly?</h3>
                <p className="text-sm text-neutral-600 mb-3">Call or email our team for assistance.</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:07062062322" className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors">0706 206 2322</a>
                  <a href="tel:09048486637" className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors">0904 848 6637</a>
                  <a href="mailto:abuja@capella.com.ng" className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors mt-1">abuja@capella.com.ng</a>
                </div>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200/60">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="w-14 h-14 text-green-600 mb-4" />
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">Request Submitted</h2>
                  <p className="text-sm text-neutral-600 max-w-md">
                    Thank you for your interest. Our team will review your requirements and send
                    a tailored quote within two business days.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-1">Diesel Supply Request</h2>
                  <p className="text-sm text-neutral-600 mb-4">Fields marked with * are required.</p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                    <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                    <Field label="Company" name="company" value={form.company} onChange={handleChange} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Delivery Location" name="delivery_location" value={form.delivery_location} onChange={handleChange} required />
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                        Volume Needed
                      </label>
                      <select
                        name="volume_needed"
                        value={form.volume_needed}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-neutral-200 rounded text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
                      >
                        <option value="">Select volume...</option>
                        {volumes.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                      Delivery Frequency
                    </label>
                    <select
                      name="delivery_frequency"
                      value={form.delivery_frequency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
                    >
                      <option value="">Select frequency...</option>
                      {frequency.map((f) => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                      Additional Details <span className="text-primary-600">*</span>
                    </label>
                    <textarea
                      name="details"
                      value={form.details}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
                      placeholder="Any specific access instructions, preferred delivery time, or other details..."
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
                    {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
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
