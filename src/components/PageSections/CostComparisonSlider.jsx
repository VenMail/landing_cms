import React, { useState } from "react";
import { useCurrency } from "@/contexts/CurrencyContext";

const providers = [
  { key: "google", name: "Google Workspace (min)", perUser: 6 },
  { key: "microsoft", name: "Microsoft 365 (min)", perUser: 6 },
  { key: "zoho", name: "Zoho Workplace (min)", perUser: 3 },
];

export default function CostComparisonSlider({ hasButton = false }) {
  const [users, setUsers] = useState(10);
  const { formatPrice, isLoading } = useCurrency();

  const venmailCost = users <= 10 ? 0 : 7; // Minimum above 10 users is $7/mo

  function formatCurrency(n) {
    return isLoading ? `$${n.toFixed(2)}` : formatPrice(n);
  }

  return (
    <div className="bg-gray-100 py-8 sm:py-24 relative overflow-hidden">
      {/* Cinematic vignette effect for pricing section */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-200/20 via-transparent to-gray-200/20 backdrop-blur-[50px]" />
      
      <div className="relative z-10 w-full max-w-[90%] lg:max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-center mb-3 sm:mb-4 text-black">
          What would it cost elsewhere?
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Pay for your true size. Pay for the actual features/storage you use.
        </p>
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8">
          <div className="text-lg sm:text-xl text-black">Team size: {users} {users === 1 ? "user" : "users"}</div>
          <div className="w-full sm:w-[90%] lg:w-[80%] mx-auto">
            <input
              type="range"
              min="1"
              max="200"
              value={users}
              onChange={(e) => setUsers(parseInt(e.target.value))}
              className="w-full appearance-none cursor-pointer relative
                [&::-webkit-slider-runnable-track]:h-[6px]
                [&::-webkit-slider-runnable-track]:bg-[#CCCCCC]
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:h-12
                [&::-webkit-slider-thumb]:w-12
                sm:[&::-webkit-slider-thumb]:h-16 
                sm:[&::-webkit-slider-thumb]:w-16 
                [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:bg-white 
                [&::-webkit-slider-thumb]:outline-none
                [&::-webkit-slider-thumb]:ring-4
                [&::-webkit-slider-thumb]:ring-black
                [&::-webkit-slider-thumb]:mt-[-25px]
                sm:[&::-webkit-slider-thumb]:mt-[-29px]
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:shadow-sm
                [&::-webkit-slider-thumb]:relative
                [&::-webkit-slider-thumb]:z-[2]
                before:content-['']
                before:absolute
                before:left-0
                before:top-[50%]
                before:h-[6px]
                before:bg-black
                before:w-[var(--before-width)]
                before:pointer-events-none
                before:z-[1]"
              style={{
                '--before-width': `${(users - 1) / (200 - 1) * 100}%`
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-4 sm:mt-8">
            <div className="glass-card p-6 rounded-md border bg-white/80 backdrop-blur-sm feature-glow">
              <div className="text-sm uppercase tracking-wide text-gray-700 mb-1">VenMail</div>
              <div className="text-2xl font-bold text-black mb-1">{formatCurrency(venmailCost)}/mo</div>
              <div className="text-xs text-gray-600">Free for 1–10 users, then starts at {formatCurrency(7)}/mo</div>
            </div>

            {providers.map((p) => {
              const total = p.perUser * users;
              return (
                <div key={p.key} className="glass-card p-6 rounded-md border bg-white/60 backdrop-blur-sm">
                  <div className="text-sm uppercase tracking-wide text-gray-700 mb-1">{p.name}</div>
                  <div className="text-2xl font-bold text-black mb-1">{formatCurrency(total)}/mo</div>
                  <div className="text-xs text-gray-600">Assumes minimum plan at {formatCurrency(p.perUser)}/user</div>
                </div>
              );
            })}
          </div>

          {hasButton && (
            <a href="/pricing" className="bg-black text-white px-8 py-2 rounded-none mt-10">
              See full pricing
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
