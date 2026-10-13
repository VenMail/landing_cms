import { useReducer } from 'react';
import { INITIAL_MAIL_EXAMPLE, mailExampleReducer } from './mailExampleState.mjs';

export default function MailExample() {
  const [example, dispatch] = useReducer(mailExampleReducer, INITIAL_MAIL_EXAMPLE);
  const assigned = example.owner === 'Daniel · Sales';
  const accepted = example.status === 'Server accepted — simulated only';

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white text-left shadow-[0_28px_80px_-38px_rgba(15,23,42,0.45)]">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3 sm:px-6">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-900">Example · no account or payment required</span>
      </div>

      <div className="grid sm:grid-cols-[13rem_1fr]">
        <div className="border-b border-slate-200 bg-[#f8fafb] p-4 sm:border-b-0 sm:border-r">
          <p className="px-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Shared inbox</p>
          <button
            type="button"
            onClick={() => dispatch({ type: 'open' })}
            aria-pressed={example.open}
            className="mt-3 w-full rounded-xl border border-orange-200 bg-white p-3 text-left shadow-sm transition hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            <span className="block text-sm font-bold text-slate-950">Maya Okafor</span>
            <span className="mt-1 block truncate text-xs text-slate-600">Pricing request for Acme supplies</span>
            <span className="mt-3 block text-xs font-semibold text-orange-700">Open inquiry</span>
          </button>
        </div>

        <div className="min-h-[28rem] p-5 sm:p-7">
          {!example.open ? (
            <div className="flex min-h-[22rem] flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-700">Customer inquiry</p>
              <p className="mt-5 text-sm font-semibold text-slate-600">Maya Okafor · maya@acme.example</p>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-950">Pricing request for Acme supplies</h2>
              <p className="mt-5 text-sm leading-7 text-slate-700">Hi, we’re reviewing suppliers for our next order. Could you send pricing for 200 units and confirm the expected delivery date?</p>
              <button type="button" onClick={() => dispatch({ type: 'open' })} className="mt-6 w-fit rounded-lg bg-orange-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2">Open inquiry</button>
            </div>
          ) : (
            <div>
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-700">Customer inquiry</p>
                  <p className="mt-2 text-sm font-semibold text-slate-600">Maya Okafor · maya@acme.example</p>
                  <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-950">Pricing request for Acme supplies</h2>
                </div>
                <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">Owner: {example.owner}</span>
              </div>

              <p className="py-5 text-sm leading-7 text-slate-700">Hi, we’re reviewing suppliers for our next order. Could you send pricing for 200 units and confirm the expected delivery date?</p>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <label htmlFor="sample-reply" className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Reply</label>
                <textarea
                  id="sample-reply"
                  value={example.reply}
                  onChange={event => dispatch({ type: 'edit', value: event.target.value })}
                  rows={4}
                  className="mt-3 w-full resize-none rounded-xl border border-slate-300 bg-white p-3 text-sm leading-6 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <button type="button" onClick={() => dispatch({ type: 'assign' })} disabled={assigned} className="rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-bold text-slate-800 transition hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-default disabled:opacity-50">Assign Daniel</button>
                  <button type="button" onClick={() => dispatch({ type: 'send' })} disabled={!assigned || !example.reply.trim() || accepted} className="rounded-lg bg-orange-700 px-3.5 py-2 text-sm font-bold text-white transition hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45">Send simulated reply</button>
                  <button type="button" onClick={() => dispatch({ type: 'reset' })} className="px-3 py-2 text-sm font-bold text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Reset example</button>
                </div>
              </div>

              <div aria-live="polite" role="status" className="mt-4 min-h-6 text-sm font-bold text-emerald-700">{example.status}</div>
            </div>
          )}
          <p className="text-xs leading-5 text-slate-500">No real email was sent. Server acceptance does not confirm inbox placement.</p>
        </div>
      </div>
    </div>
  );
}
