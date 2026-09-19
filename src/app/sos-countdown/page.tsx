export default function Page() {
  return (
    <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
      
{/* Incident Status Card */}
<div className="bg-surface-container-lowest rounded-2xl p-3.5 shadow-sm border border-slate-100 mt-2">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error text-white">
<span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
<span className="text-[11px] font-bold tracking-wider uppercase">INCIDENT #EM-8821 ARMED</span>
</div>
<div className="text-[12px] font-medium text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-secondary">schedule</span>
<span>14:02:18 IST</span>
</div>
</div>
<div className="flex items-center gap-1.5 pt-2 text-[12px] text-secondary font-medium">
<span className="material-symbols-outlined text-[16px] text-error">my_location</span>
<span className="font-semibold text-on-surface">12.8912° N, 77.5968° E</span>
<span className="text-outline-variant">•</span>
<span>Accuracy ±3m (GPS Locked)</span>
</div>
</div>
{/* Reassuring Message Banner */}
<div className="text-center pt-1 px-2">
<h2 className="text-[26px] font-extrabold text-on-surface tracking-tight leading-tight">Help is about to be sent.</h2>
<p className="text-[14px] text-secondary pt-1 leading-snug">Nothing has been sent yet. Cancel anytime before zero.</p>
</div>
{/* Central Circular Gauge (19s timer) */}
<div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center relative overflow-hidden circle-pulse">
<div className="relative w-56 h-56 flex items-center justify-center">
{/* Ambient subtle glow */}
<div className="absolute inset-2 rounded-full bg-error/10 blur-xl pointer-events-none"></div>
{/* SVG Circular Progress Ring: Perimeter = 2 * PI * 84 ≈ 527.8 */}
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
<circle className="text-surface-container-high" cx="100" cy="100" fill="transparent" r="84" stroke="currentColor" strokeWidth="12"></circle>
{/* 19s remaining out of 30s: offset = 528 - (528 * 19 / 30) = 528 - 334.4 = 193.6 */}
<circle className="text-error transition-all duration-1000 ease-linear" cx="100" cy="100" fill="transparent" id="countdown-ring" r="84" stroke="currentColor" strokeDasharray="528" strokeDashoffset="194" strokeLinecap="round" strokeWidth="12"></circle>
</svg>
{/* Center Counter Display */}
<div className="absolute flex flex-col items-center justify-center text-center select-none">
<span className="text-[58px] font-extrabold text-on-surface tracking-tight leading-none" id="countdown-val">19</span>
<span className="text-[11px] font-bold uppercase tracking-widest text-secondary mt-1">SECONDS</span>
<div className="flex items-center gap-1 mt-1.5 text-error font-semibold text-[12px]">
<span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
<span>Autodispatch active</span>
</div>
</div>
</div>
</div>
{/* Emergency Sequence Stepper */}
<div className="bg-surface-container-lowest rounded-2xl py-3 px-4 shadow-sm border border-slate-100">
<div className="flex items-center justify-between text-center relative px-2">
{/* Progress Track */}
<div className="absolute top-4 left-8 right-8 h-[2px] bg-surface-container -z-0"></div>
<div className="absolute top-4 left-8 w-1/6 h-[2px] bg-error -z-0"></div>
{/* Step 1: Armed */}
<div className="flex flex-col items-center z-10">
<div className="w-8 h-8 rounded-full bg-error text-white flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
</div>
<span className="text-[11px] font-bold text-error mt-1.5">1. Armed</span>
</div>
{/* Step 2: Dispatch */}
<div className="flex flex-col items-center z-10">
<div className="w-8 h-8 rounded-full bg-surface-container text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[16px]">send</span>
</div>
<span className="text-[11px] font-semibold text-secondary mt-1.5">2. Dispatch</span>
</div>
{/* Step 3: Response */}
<div className="flex flex-col items-center z-10">
<div className="w-8 h-8 rounded-full bg-surface-container text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[16px]">support_agent</span>
</div>
<span className="text-[11px] font-semibold text-secondary mt-1.5">3. Response</span>
</div>
{/* Step 4: Resolved */}
<div className="flex flex-col items-center z-10">
<div className="w-8 h-8 rounded-full bg-surface-container text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
</div>
<span className="text-[11px] font-semibold text-secondary mt-1.5">4. Resolved</span>
</div>
</div>
</div>
{/* Server-Side Fail-Safe Guarantee Banner */}
<div className="bg-[#d2e4ff]/70 border border-[#b9d5ff] rounded-2xl p-3.5 flex gap-3 items-start">
<div className="w-9 h-9 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-primary shadow-xs">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
</div>
<div className="flex flex-col text-left">
<h3 className="text-[14px] font-bold text-[#0b1c30]">Server-side timer active</h3>
<p className="text-[12px] text-[#3e5066] leading-snug mt-0.5">Alert dispatches automatically at 00:00 even if your phone disconnects, loses signal, or powers down.</p>
</div>
</div>
{/* Armed Recipients Packet Checklist */}
<div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-slate-100 space-y-3">
<div className="flex items-center justify-between pb-1 border-b border-surface-container/50">
<span className="text-[11px] font-bold uppercase tracking-wider text-secondary">ARMED RECIPIENTS PACKET</span>
<span className="text-[11px] font-bold text-on-surface bg-surface-container px-2.5 py-0.5 rounded-full">3 Ready</span>
</div>
{/* Recipient 1: Arjun Nair */}
<div className="flex items-center justify-between py-0.5">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">person</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="text-[14px] font-bold text-on-surface truncate">Arjun Nair</span>
<span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
</div>
<span className="text-[12px] text-secondary truncate">Son • Primary Emergency Contact</span>
</div>
</div>
<span className="text-[12px] font-semibold text-secondary flex-shrink-0 pl-2">SMS + Call</span>
</div>
{/* Recipient 2: Dr. Ramesh Verma */}
<div className="flex items-center justify-between py-0.5">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">medical_services</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="text-[14px] font-bold text-on-surface truncate">Dr. Ramesh Verma</span>
<span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
</div>
<span className="text-[12px] text-secondary truncate">Cardiologist • Apollo Hospital</span>
</div>
</div>
<span className="text-[12px] font-semibold text-secondary flex-shrink-0 pl-2">Direct Telemetry</span>
</div>
{/* Recipient 3: Location Packet */}
<div className="flex items-center justify-between py-0.5">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">location_on</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="text-[14px] font-bold text-on-surface truncate">Bannerghatta Main Rd, Bengal...</span>
</div>
<span className="text-[12px] text-secondary truncate">Telemetry &amp; precise map ready</span>
</div>
</div>
<span className="text-[12px] font-semibold text-secondary flex-shrink-0 pl-2">Live Sync</span>
</div>
</div>
{/* Actions Section */}
<div className="flex flex-col gap-2.5 pt-1">
{/* Send Help Immediately Button */}
<button className="w-full h-14 rounded-full bg-error text-white font-bold text-[14px] tracking-wider uppercase flex items-center justify-center gap-2 shadow-md shadow-error/30 active:scale-[0.98] transition-all" id="send-now-btn" type="button">
<span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
<span>SEND HELP IMMEDIATELY</span>
</button>
{/* Hold to Cancel Button */}
<div className="relative w-full h-14 rounded-full bg-surface-container-high overflow-hidden select-none border border-slate-200/60">
<div className="absolute left-0 top-0 bottom-0 bg-[#c4d7f8] w-0 transition-all duration-75" id="cancel-fill-bar"></div>
<button className="relative z-10 w-full h-full flex items-center justify-center gap-2 text-on-surface font-bold text-[14px] tracking-wide focus:outline-none" id="hold-cancel-btn" type="button">
<span className="material-symbols-outlined text-[20px] text-secondary">cancel</span>
<span id="cancel-btn-label">HOLD TO CANCEL (1.0s)</span>
</button>
</div>
{/* Tap to Call 112 Directly */}
<div className="flex justify-center pt-1">
<a className="inline-flex items-center gap-1.5 py-2 px-4 rounded-full text-secondary hover:text-on-surface active:opacity-75 transition-colors" href="tel:112">
<span className="material-symbols-outlined text-[18px]">call</span>
<span className="text-[13px] font-semibold underline underline-offset-4">Tap to Call 112 Directly</span>
</a>
</div>
</div>

    </main>
  );
}
