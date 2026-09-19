import { useState } from 'react';
import DefaultLayout from '@/components/layout/DefaultLayout';
import { QUOTE_ENDPOINT } from '@/config/pricing.mjs';

const initialForm = {
  name: '',
  work_email: '',
  company: '',
  team_size: '',
  requirements: '',
  website: '',
};

export default function RequestQuote() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const updateField = event => setForm(current => ({ ...current, [event.target.name]: event.target.value }));

  const submit = async event => {
    event.preventDefault();
    setStatus('sending');
    setError('');

    try {
      const response = await fetch(QUOTE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Unable to send the request.');
      setStatus('sent');
      setForm(initialForm);
    } catch (submissionError) {
      setStatus('idle');
      setError(submissionError.message || 'Unable to send the request.');
    }
  };

  return (
    <DefaultLayout>
      <main className="bg-slate-50 py-20 sm:py-28">
        <section className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-700">Enterprise / White-label</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Build the right email service.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">Share the deployment, migration, storage, or branding requirements. A Venmail specialist will follow up with the right path and pricing.</p>

          <form onSubmit={submit} className="mt-10 space-y-6 border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-900">Name<input required name="name" value={form.name} onChange={updateField} autoComplete="name" className="mt-2 w-full border border-slate-300 px-3 py-2.5 text-slate-950" /></label>
              <label className="block text-sm font-medium text-slate-900">Work email<input required type="email" name="work_email" value={form.work_email} onChange={updateField} autoComplete="email" className="mt-2 w-full border border-slate-300 px-3 py-2.5 text-slate-950" /></label>
              <label className="block text-sm font-medium text-slate-900">Company<input required name="company" value={form.company} onChange={updateField} autoComplete="organization" className="mt-2 w-full border border-slate-300 px-3 py-2.5 text-slate-950" /></label>
              <label className="block text-sm font-medium text-slate-900">Email accounts<input name="team_size" value={form.team_size} onChange={updateField} inputMode="numeric" className="mt-2 w-full border border-slate-300 px-3 py-2.5 text-slate-950" /></label>
            </div>
            <label className="block text-sm font-medium text-slate-900">Requirements<textarea required name="requirements" value={form.requirements} onChange={updateField} rows={5} className="mt-2 w-full border border-slate-300 px-3 py-2.5 text-slate-950" placeholder="Migration, storage, white-label, security, or support requirements" /></label>
            <label className="sr-only" aria-hidden="true">Website<input tabIndex="-1" name="website" value={form.website} onChange={updateField} autoComplete="off" /></label>
            {status === 'sent' && <p role="status" className="border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Request received. A Venmail specialist will follow up.</p>}
            {error && <p role="alert" className="border border-red-200 bg-red-50 p-4 text-red-900">{error}</p>}
            <button disabled={status === 'sending'} type="submit" className="bg-primary-600 px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60">{status === 'sending' ? 'Sending request…' : 'Request a quote'}</button>
          </form>
        </section>
      </main>
    </DefaultLayout>
  );
}
