export default function Page() {
  return (
    <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
      
{/* Subtitle Notice Banner */}
<div className="flex items-center justify-between px-1 text-slate-500">
<p className="text-xs font-medium tracking-tight">Encrypted public-facing emergency medical dossier</p>
<span className="text-[11px] font-semibold text-indigo-600 flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">lock</span> Dynamic ID
      </span>
</div>
{/* Patient Identity & QR Hero Card */}
<div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] flex flex-col relative overflow-hidden">
{/* Top Passport Chip */}
<div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
<div className="flex items-center space-x-2">
<div className="w-7 h-7 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>health_metrics</span>
</div>
<span className="text-xs font-bold text-slate-800 tracking-tight">Universal Patient Key</span>
</div>
<div className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50/90 border border-emerald-200/60 px-2.5 py-0.5 rounded-full text-[11px] font-semibold">
<span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          Verified Dossier
        </div>
</div>
{/* Demographics & Blood Badge */}
<div className="pt-4 pb-4 flex items-center justify-between">
<div className="flex items-center space-x-3.5">
<div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-50 border border-slate-200 text-slate-800 flex items-center justify-center font-bold text-base shadow-xs">
            MN
          </div>
<div>
<h2 className="text-lg font-extrabold text-slate-900 tracking-tight leading-tight">Meera Nair</h2>
<p className="text-xs font-medium text-slate-500 mt-0.5">68 yrs • Female • DOB: 14 Oct 1955</p>
</div>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Blood Group</span>
<span className="mt-0.5 inline-flex items-center px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 font-extrabold text-sm tracking-tight shadow-xs">
            O+ POS
          </span>
</div>
</div>
{/* High-Contrast QR Code Plaza */}
<div className="w-full my-2 flex flex-col items-center">
<div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] relative group cursor-pointer transition-transform hover:scale-[1.01]">
<svg className="w-48 h-48" fill="none" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
{/* Position Detection Patterns (Top-Left, Top-Right, Bottom-Left) */}
<rect fill="#0F172A" height="42" rx="10" width="42" x="10" y="10"></rect>
<rect fill="#FFFFFF" height="26" rx="6" width="26" x="18" y="18"></rect>
<rect fill="#0F172A" height="14" rx="3" width="14" x="24" y="24"></rect>
<rect fill="#0F172A" height="42" rx="10" width="42" x="108" y="10"></rect>
<rect fill="#FFFFFF" height="26" rx="6" width="26" x="116" y="18"></rect>
<rect fill="#0F172A" height="14" rx="3" width="14" x="122" y="24"></rect>
<rect fill="#0F172A" height="42" rx="10" width="42" x="10" y="108"></rect>
<rect fill="#FFFFFF" height="26" rx="6" width="26" x="18" y="116"></rect>
<rect fill="#0F172A" height="14" rx="3" width="14" x="24" y="122"></rect>
{/* High Precision Functional Matrix Elements */}
<circle cx="62" cy="18" fill="#0F172A" r="3.4"></circle>
<circle cx="74" cy="18" fill="#0F172A" r="3.4"></circle>
<circle cx="86" cy="18" fill="#0F172A" r="3.4"></circle>
<circle cx="98" cy="18" fill="#4338CA" r="3.4"></circle>
<circle cx="62" cy="30" fill="#0F172A" r="3.4"></circle>
<circle cx="86" cy="30" fill="#0F172A" r="3.4"></circle>
<circle cx="74" cy="42" fill="#4338CA" r="3.4"></circle>
<circle cx="98" cy="42" fill="#0F172A" r="3.4"></circle>
<circle cx="18" cy="62" fill="#0F172A" r="3.4"></circle>
<circle cx="30" cy="62" fill="#0F172A" r="3.4"></circle>
<circle cx="42" cy="62" fill="#0F172A" r="3.4"></circle>
<circle cx="54" cy="62" fill="#0F172A" r="3.4"></circle>
<circle cx="66" cy="62" fill="#0F172A" r="3.4"></circle>
<circle cx="78" cy="62" fill="#0F172A" r="3.4"></circle>
<circle cx="90" cy="62" fill="#0F172A" r="3.4"></circle>
<circle cx="102" cy="62" fill="#0F172A" r="3.4"></circle>
<circle cx="114" cy="62" fill="#0F172A" r="3.4"></circle>
<circle cx="126" cy="62" fill="#0F172A" r="3.4"></circle>
<circle cx="138" cy="62" fill="#0F172A" r="3.4"></circle>
<circle cx="18" cy="74" fill="#0F172A" r="3.4"></circle>
<circle cx="42" cy="74" fill="#0F172A" r="3.4"></circle>
<circle cx="66" cy="74" fill="#4338CA" r="3.4"></circle>
<circle cx="90" cy="74" fill="#0F172A" r="3.4"></circle>
<circle cx="114" cy="74" fill="#0F172A" r="3.4"></circle>
<circle cx="138" cy="74" fill="#0F172A" r="3.4"></circle>
<circle cx="30" cy="86" fill="#0F172A" r="3.4"></circle>
<circle cx="54" cy="86" fill="#4338CA" r="3.4"></circle>
<circle cx="78" cy="86" fill="#0F172A" r="3.4"></circle>
<circle cx="102" cy="86" fill="#0F172A" r="3.4"></circle>
<circle cx="126" cy="86" fill="#0F172A" r="3.4"></circle>
<circle cx="18" cy="98" fill="#0F172A" r="3.4"></circle>
<circle cx="42" cy="98" fill="#0F172A" r="3.4"></circle>
<circle cx="66" cy="98" fill="#0F172A" r="3.4"></circle>
<circle cx="90" cy="98" fill="#4338CA" r="3.4"></circle>
<circle cx="114" cy="98" fill="#0F172A" r="3.4"></circle>
<circle cx="138" cy="98" fill="#0F172A" r="3.4"></circle>
<circle cx="62" cy="114" fill="#0F172A" r="3.4"></circle>
<circle cx="74" cy="114" fill="#0F172A" r="3.4"></circle>
<circle cx="86" cy="114" fill="#4338CA" r="3.4"></circle>
<circle cx="98" cy="114" fill="#0F172A" r="3.4"></circle>
<circle cx="110" cy="114" fill="#0F172A" r="3.4"></circle>
<circle cx="122" cy="114" fill="#0F172A" r="3.4"></circle>
<circle cx="134" cy="114" fill="#0F172A" r="3.4"></circle>
<circle cx="62" cy="126" fill="#0F172A" r="3.4"></circle>
<circle cx="86" cy="126" fill="#0F172A" r="3.4"></circle>
<circle cx="110" cy="126" fill="#0F172A" r="3.4"></circle>
<circle cx="134" cy="126" fill="#0F172A" r="3.4"></circle>
<circle cx="74" cy="138" fill="#0F172A" r="3.4"></circle>
<circle cx="98" cy="138" fill="#0F172A" r="3.4"></circle>
<circle cx="122" cy="138" fill="#0F172A" r="3.4"></circle>
{/* Center Medical Cross Emblem Badge */}
<circle cx="80" cy="80" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.12))" r="15"></circle>
<circle cx="80" cy="80" fill="#2563EB" r="11"></circle>
<path d="M80 74.5V85.5M74.5 80H85.5" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="2.6"></path>
</svg>
{/* Brightness Overlay Button */}
<button className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-2xl" id="qr-brightness-btn" type="button">
<span className="bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md">
<span className="material-symbols-outlined text-[15px]">brightness_high</span>
              Full Brightness
            </span>
</button>
</div>
<p className="text-[12px] text-slate-500 font-medium text-center max-w-[270px] mt-3 leading-snug">
          Scannable by any smartphone camera. No app download or registration needed.
        </p>
</div>
{/* Action Row (Apple Wallet, Share Link, Revoke QR) */}
<div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-slate-100 mt-2">
<button className="flex flex-col items-center justify-center py-2.5 px-2 rounded-2xl bg-slate-50 hover:bg-slate-100 active:bg-slate-200/80 border border-slate-200/70 transition text-slate-800" id="btn-wallet" type="button">
<span className="material-symbols-outlined text-slate-700 text-[20px] mb-1">wallet</span>
<span className="text-[11px] font-semibold">Apple Wallet</span>
</button>
<button className="flex flex-col items-center justify-center py-2.5 px-2 rounded-2xl bg-slate-50 hover:bg-slate-100 active:bg-slate-200/80 border border-slate-200/70 transition text-slate-800" id="btn-share" type="button">
<span className="material-symbols-outlined text-slate-700 text-[20px] mb-1">ios_share</span>
<span className="text-[11px] font-semibold">Share Link</span>
</button>
<button className="flex flex-col items-center justify-center py-2.5 px-2 rounded-2xl bg-slate-50 hover:bg-slate-100 active:bg-slate-200/80 border border-slate-200/70 transition text-slate-800" id="btn-refresh" type="button">
<span className="material-symbols-outlined text-slate-700 text-[20px] mb-1">restart_alt</span>
<span className="text-[11px] font-semibold">Revoke QR</span>
</button>
</div>
</div>
{/* WHAT RESPONDERS MUST NOT DO (Warm Soft Amber Card) */}
<section className="rounded-3xl p-4 sm:p-5 bg-amber-50/90 border border-amber-200/80 shadow-[0_2px_8px_rgba(245,158,11,0.06)] space-y-3.5">
<div className="flex items-center space-x-2.5">
<div className="w-7 h-7 rounded-xl bg-amber-100 border border-amber-300/60 text-amber-900 flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-[17px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
</div>
<div>
<h2 className="text-sm font-bold text-amber-950 tracking-tight leading-none">What Responders Must NOT Do</h2>
<p className="text-[11px] font-medium text-amber-900/80 mt-1">Critical safety contraindications for first responders</p>
</div>
</div>
<div className="space-y-2 pt-0.5">
{/* Directive 1 */}
<div className="bg-white/95 rounded-2xl p-3.5 border border-amber-200/60 flex items-start space-x-3 shadow-xs">
<div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
<span className="material-symbols-outlined text-[15px]">block</span>
</div>
<div>
<span className="text-xs font-bold text-amber-950 block leading-tight">No Penicillin (Anaphylaxis Risk)</span>
<p className="text-[11px] text-amber-900/90 mt-0.5 font-normal leading-relaxed">Includes Amoxicillin, Augmentin, Piperacillin. Severe throat constriction within 4 minutes.</p>
</div>
</div>
{/* Directive 2 */}
<div className="bg-white/95 rounded-2xl p-3.5 border border-amber-200/60 flex items-start space-x-3 shadow-xs">
<div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
<span className="material-symbols-outlined text-[15px]">do_not_disturb_on</span>
</div>
<div>
<span className="text-xs font-bold text-amber-950 block leading-tight">No BP Cuff / IV on Right Arm</span>
<p className="text-[11px] text-amber-900/90 mt-0.5 font-normal leading-relaxed">Right-side lymphedema precaution post-mastectomy. Use left arm or thigh cuff only.</p>
</div>
</div>
{/* Directive 3 */}
<div className="bg-white/95 rounded-2xl p-3.5 border border-amber-200/60 flex items-start space-x-3 shadow-xs">
<div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
<span className="material-symbols-outlined text-[15px]">do_not_touch</span>
</div>
<div>
<span className="text-xs font-bold text-amber-950 block leading-tight">No Sudden Awakening / Closed MRI</span>
<p className="text-[11px] text-amber-900/90 mt-0.5 font-normal leading-relaxed">Severe claustrophobic panic triggers. Requires familiar companion presence or mild sedation.</p>
</div>
</div>
</div>
</section>
{/* Critical Medical Summary */}
<section className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] space-y-4">
<div className="flex items-center justify-between pb-3 border-b border-slate-100">
<div className="flex items-center space-x-2">
<div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
<span className="material-symbols-outlined text-[17px]">medical_services</span>
</div>
<h2 className="text-sm font-bold text-slate-900">Critical Medical Summary</h2>
</div>
<span className="text-[11px] font-semibold text-slate-400">Updated Today</span>
</div>
{/* Known Allergies */}
<div className="space-y-2">
<span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Known Allergies</span>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Penicillin Derivatives (Severe)
          </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Sulfa Drugs (Mild Rash)
          </span>
</div>
</div>
{/* Active Diagnoses */}
<div className="space-y-2 pt-1">
<span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Active Diagnoses</span>
<div className="space-y-2">
<div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/80 border border-slate-200/60">
<div className="flex items-center space-x-3">
<span className="material-symbols-outlined text-[20px] text-slate-600">bloodtype</span>
<div>
<span className="text-xs font-bold text-slate-900 block leading-tight">Type 2 Diabetes</span>
<span className="text-[11px] text-slate-500 font-medium">Managed via oral hypoglycemics</span>
</div>
</div>
<span className="text-[11px] font-semibold text-emerald-700 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs">Stable</span>
</div>
<div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/80 border border-slate-200/60">
<div className="flex items-center space-x-3">
<span className="material-symbols-outlined text-[20px] text-slate-600">monitor_heart</span>
<div>
<span className="text-xs font-bold text-slate-900 block leading-tight">Essential Hypertension</span>
<span className="text-[11px] text-slate-500 font-medium">Target 125/82 mmHg</span>
</div>
</div>
<span className="text-[11px] font-semibold text-emerald-700 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-xs">Controlled</span>
</div>
<div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/80 border border-slate-200/60">
<div className="flex items-center space-x-3">
<span className="material-symbols-outlined text-[20px] text-slate-600">healing</span>
<div>
<span className="text-xs font-bold text-slate-900 block leading-tight">Post-Mastectomy (Right)</span>
<span className="text-[11px] text-slate-500 font-medium">Surgical remission (2018)</span>
</div>
</div>
<span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200 shadow-xs">Precaution</span>
</div>
</div>
</div>
{/* Current Prescriptions */}
<div className="space-y-2 pt-1">
<span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Current Prescriptions</span>
<div className="grid grid-cols-3 gap-2">
<div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex flex-col justify-between">
<span className="text-xs font-bold text-slate-900">Metformin</span>
<span className="text-[11px] font-medium text-slate-500 mt-1">500mg • Bid</span>
</div>
<div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex flex-col justify-between">
<span className="text-xs font-bold text-slate-900">Amlodipine</span>
<span className="text-[11px] font-medium text-slate-500 mt-1">5mg • Daily</span>
</div>
<div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex flex-col justify-between">
<span className="text-xs font-bold text-slate-900">Atorvastatin</span>
<span className="text-[11px] font-medium text-slate-500 mt-1">10mg • Night</span>
</div>
</div>
</div>
</section>
{/* Emergency Contacts Section */}
<section className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] space-y-3.5">
<div className="flex items-center justify-between pb-3 border-b border-slate-100">
<div className="flex items-center space-x-2">
<div className="w-7 h-7 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
<span className="material-symbols-outlined text-[17px]">contact_emergency</span>
</div>
<h2 className="text-sm font-bold text-slate-900">Emergency Contacts</h2>
</div>
<span className="text-[11px] font-bold text-indigo-600">2 Verified</span>
</div>
{/* Contact 1: Arjun Nair */}
<div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs border border-indigo-200">
            AN
          </div>
<div>
<div className="flex items-center space-x-1.5">
<span className="text-xs font-bold text-slate-900">Arjun Nair</span>
<span className="text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-1.5 py-0.2 rounded font-semibold">Son • Primary</span>
</div>
<p className="text-[11px] text-slate-500 mt-0.5 font-medium">+91 98450 12345 • 24/7 Priority</p>
</div>
</div>
<a className="w-9 h-9 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white flex items-center justify-center transition shadow-xs" href="tel:+919845012345">
<span className="material-symbols-outlined text-[18px]">call</span>
</a>
</div>
{/* Contact 2: Dr. Ramesh Verma */}
<div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs border border-slate-300">
            RV
          </div>
<div>
<div className="flex items-center space-x-1.5">
<span className="text-xs font-bold text-slate-900">Dr. Ramesh Verma</span>
<span className="text-[10px] bg-white text-slate-600 border border-slate-200 px-1.5 py-0.2 rounded font-semibold">Cardiologist</span>
</div>
<p className="text-[11px] text-slate-500 mt-0.5 font-medium">Fortis Hospital • +91 80 2345 6789</p>
</div>
</div>
<a className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-800 border border-slate-200 flex items-center justify-center transition shadow-xs" href="tel:+918023456789">
<span className="material-symbols-outlined text-[18px]">call</span>
</a>
</div>
</section>
{/* Privacy Guard & Access History */}
<section className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] space-y-3.5">
<div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
<div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
<span className="material-symbols-outlined text-[17px]">shield_person</span>
</div>
<h2 className="text-sm font-bold text-slate-900">Privacy Guard &amp; Access Controls</h2>
</div>
{/* Scan Audit Banner */}
<div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-start space-x-3">
<span className="material-symbols-outlined text-slate-500 text-[18px] mt-0.5">query_stats</span>
<div>
<span className="text-xs font-bold text-slate-900 block">2 public scans recorded this week</span>
<p className="text-[11px] text-slate-500 mt-0.5 font-normal leading-relaxed">
            Last scan: Yesterday 4:12 PM (Indiranagar). IP address and geographic location are cryptographically obscured.
          </p>
</div>
</div>
{/* iOS Style Toggle Rows */}
<div className="divide-y divide-slate-100 pt-1">
<div className="flex items-center justify-between py-3">
<div className="pr-3">
<span className="text-xs font-bold text-slate-900 block leading-tight">Show to first responders</span>
<span className="text-[11px] text-slate-500 font-normal">Make critical section visible on camera scan without passcode</span>
</div>
<button aria-pressed="true" className="w-11 h-6 rounded-full bg-emerald-500 p-0.5 transition-colors relative shrink-0 focus:outline-none shadow-xs" id="toggle-responders" type="button">
<span className="w-5 h-5 rounded-full bg-white block transform translate-x-5 transition-transform shadow-sm"></span>
</button>
</div>
<div className="flex items-center justify-between py-3">
<div className="pr-3">
<span className="text-xs font-bold text-slate-900 block leading-tight">Notify emergency contacts on scan</span>
<span className="text-[11px] text-slate-500 font-normal">Dispatches high-priority SMS ping to Arjun Nair immediately</span>
</div>
<button aria-pressed="true" className="w-11 h-6 rounded-full bg-emerald-500 p-0.5 transition-colors relative shrink-0 focus:outline-none shadow-xs" id="toggle-notify" type="button">
<span className="w-5 h-5 rounded-full bg-white block transform translate-x-5 transition-transform shadow-sm"></span>
</button>
</div>
</div>
</section>

    </main>
  );
}
