export default function Page() {
  return (
    <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
      
<div className="flex flex-col w-full px-4 space-y-4 pt-2">
{/* Header & Verification Banner */}
<div className="flex flex-col pt-1 pb-1">
<div className="flex items-center justify-between mb-1">
<span className="text-[11.5px] font-bold tracking-wider text-slate-500 uppercase">Wednesday, Oct 24</span>
<div className="inline-flex items-center gap-1.5 bg-white border border-slate-200/90 px-2.5 py-0.5 rounded-full shadow-xs">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[11px] font-semibold text-slate-600">Care Passport Active • Synced 12m ago</span>
</div>
</div>
<h1 className="text-[27px] font-extrabold text-[#0F172A] tracking-tight leading-tight">Good morning, Meera</h1>
</div>
{/* Digital Health Passport Preview Card */}
<div className="apple-card p-4 flex flex-col gap-3.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200 shadow-inner flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Warm studio portrait of an Indian elderly woman named Meera with silver hair, wearing soft lilac spectacles and an elegant pastel kurta, gently smiling with quiet confidence and warmth against a clean neutral daylight background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwvEU4CsBX00TfWQPKjrkJyHRCl5vuhghIbQeUTRzmmsFOicPkyoSvBBC4JzrP2Mx64JcbrX0Mfd6vo6GqnwcrTrj2FT3bUVPVy9GGsYyMe-O2yMM9w1rtnTfwlQiTPWJ9HY033sUSlSq4JpYBo6VFNYuod3bKGs1cZ3C6xT0hy_uQWi9TQEcwE2holAOAHDanyjlKNly1YG0ckpdnjoCu0ul1qb8iJGPP_Q5eFp-rSPiCsx-HXm9D" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-bold text-[17px] text-[#0F172A] tracking-tight">Meera Nair</span>
<span className="bg-slate-100 text-slate-600 border border-slate-200 text-[11px] font-semibold px-2 py-0.5 rounded-md">68 yrs</span>
</div>
<span className="text-[12.5px] text-slate-500 font-medium">ID: HF-8820-MN</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-xs px-2.5 py-1 rounded-full">O+ POS</span>
<span className="text-[11px] text-slate-400 mt-1 font-medium">No DNR filed</span>
</div>
</div>
<div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-3 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[19px] text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-[13px] font-semibold text-slate-700">Offline Emergency Sheet ready</span>
</div>
<span className="text-[11px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">NFC &amp; QR Live</span>
</div>
<div className="grid grid-cols-2 gap-2 pt-0.5">
<button className="h-10 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-200 transition-colors rounded-xl flex items-center justify-center gap-2 text-slate-800 font-semibold text-[13px] shadow-xs" type="button">
<span className="material-symbols-outlined text-[18px] text-slate-600">qr_code_2</span>
<span>Show QR</span>
</button>
<button className="h-10 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-200 transition-colors rounded-xl flex items-center justify-center gap-2 text-slate-800 font-semibold text-[13px] shadow-xs" type="button">
<span className="material-symbols-outlined text-[18px] text-slate-600">ios_share</span>
<span>Share Passport</span>
</button>
</div>
</div>
{/* High-Contrast WHAT NOT TO DO Directive Banner */}
<div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-2xl p-4 shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-[#FDE68A] text-[#92400E] flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[16px]">warning</span>
</div>
<h2 className="font-extrabold text-[15px] text-[#92400E] tracking-tight">WHAT NOT TO DO</h2>
</div>
<span className="bg-[#FDE68A] text-[#78350F] text-[10.5px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">CRUCIAL</span>
</div>
<div className="flex flex-col divide-y divide-amber-200/50 bg-white/95 rounded-xl border border-amber-200/60 overflow-hidden shadow-xs">
<div className="p-3 flex items-start gap-2.5">
<span className="material-symbols-outlined text-[19px] text-[#D97706] flex-shrink-0 mt-0.5">do_not_disturb_on</span>
<p className="text-[13px] text-slate-700 leading-snug">
<strong className="font-bold text-slate-900">Do NOT administer Penicillin</strong> or cephalosporin derivatives (anaphylaxis risk).
            </p>
</div>
<div className="p-3 flex items-start gap-2.5">
<span className="material-symbols-outlined text-[19px] text-[#D97706] flex-shrink-0 mt-0.5">do_not_disturb_on</span>
<p className="text-[13px] text-slate-700 leading-snug">
<strong className="font-bold text-slate-900">Do NOT use right arm</strong> for blood pressure cuffs or venipuncture (lymphedema precaution).
            </p>
</div>
<div className="p-3 flex items-start gap-2.5">
<span className="material-symbols-outlined text-[19px] text-[#D97706] flex-shrink-0 mt-0.5">do_not_disturb_on</span>
<p className="text-[13px] text-slate-700 leading-snug">
<strong className="font-bold text-slate-900">Do NOT isolate in closed MRI</strong> without sedation escort (claustrophobia risk).
            </p>
</div>
</div>
<div className="flex items-center gap-1.5 px-0.5 text-amber-900/80">
<span className="material-symbols-outlined text-[15px]">visibility</span>
<span className="text-[11px] font-semibold">Visible immediately upon lockscreen tap or QR scan</span>
</div>
</div>
{/* Medication Summary Card */}
<div className="apple-card p-4 flex flex-col gap-3.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">medication</span>
</div>
<h3 className="font-bold text-[16px] text-[#0F172A] tracking-tight">Medication Regimen</h3>
</div>
<span className="text-[12px] font-semibold text-slate-600 bg-slate-100 border border-slate-200/90 px-2.5 py-0.5 rounded-full">3 of 4 taken (75%)</span>
</div>
{/* Progress Indicator */}
<div className="flex items-center gap-3.5 p-3 bg-slate-50 border border-slate-100 rounded-xl">
<div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
<svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
<path className="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-indigo-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-extrabold text-[11px] text-slate-800">75%</span>
</div>
<div className="flex flex-col min-w-0">
<span className="text-[13px] font-bold text-[#0F172A]">Almost completed today</span>
<span className="text-[12px] text-slate-500">Only 1 evening dose remaining</span>
</div>
</div>
{/* Upcoming Dose Spotlight Tile */}
<div className="bg-white border border-slate-200 rounded-xl p-3.5 flex flex-col gap-3 shadow-xs">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="text-[11px] font-extrabold text-indigo-600 uppercase tracking-wider">Upcoming Dose</span>
<span className="font-extrabold text-[16px] text-[#0F172A] mt-0.5">Atorvastatin 20mg</span>
<span className="text-[12.5px] text-slate-500">1 tablet • With evening meal</span>
</div>
<div className="text-right">
<span className="bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs px-2.5 py-1 rounded-full">8:00 PM</span>
<p className="text-[11px] text-slate-400 mt-1 font-semibold">in 2 hours</p>
</div>
</div>
<div className="flex items-center justify-between pt-2 border-t border-slate-100">
<div className="flex items-center gap-1.5 text-slate-500">
<span className="material-symbols-outlined text-[16px] text-slate-400">alarm</span>
<span className="text-[12px] font-medium">Alarm active</span>
</div>
<button className="h-9 px-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-lg font-bold text-[13px] shadow-sm transition-all flex items-center gap-1.5 active:scale-95" id="markTakenBtn" type="button">
<span className="material-symbols-outlined text-[17px]">check</span>
<span>Mark Taken</span>
</button>
</div>
</div>
</div>
{/* Emergency Response Circle (2 Prioritized Contacts) */}
<div className="apple-card p-4 flex flex-col gap-3.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">contacts</span>
</div>
<h3 className="font-bold text-[16px] text-[#0F172A] tracking-tight">Emergency Circle</h3>
</div>
<button className="text-indigo-600 font-semibold text-[13px] hover:underline" type="button">Manage (4)</button>
</div>
<div className="flex flex-col divide-y divide-slate-100">
{/* Primary Contact: Arjun Nair */}
<div className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
<div className="flex items-center gap-3 min-w-0">
<div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Profile portrait of a supportive 38-year-old Indian professional man named Arjun smiling warmly, high resolution, soft natural indoor lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvfxjtizxjvhXoqgM2NsO68YVFtdkddTd1bb5pyNjda_EqnAUpNBXJs6A-yC_w39GKFS1iScobGMjtiKL3EajXecdGLo0EbyeDE7DcWVWeBzDznCx8t3ds3V3_Hrhu13V76w3VPgeHXMVb0-5FLzbUQE_02lLt-ePgEo4m7XpsfscvRl2zkZXjZ54eAGXZpHj5DdpWknUFJoatyNSl9Sh0rM2ZHFtMeW8m_e7qK0KChxQUjwVN8w5B" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-bold text-[14.5px] text-[#0F172A] truncate">Arjun Nair</span>
<span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-1.5 py-0.2 rounded-full">Primary</span>
</div>
<span className="text-[12px] text-slate-500 truncate">Son • 1.2 mi away</span>
</div>
</div>
<a aria-label="Call Arjun" className="w-9 h-9 rounded-full bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 border border-slate-200 flex items-center justify-center text-slate-700 active:scale-95 transition-all shadow-xs" href="tel:5550192">
<span className="material-symbols-outlined text-[18px]">call</span>
</a>
</div>
{/* Doctor Contact: Dr. Ramesh Verma */}
<div className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
<div className="flex items-center gap-3 min-w-0">
<div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait headshot of Dr Ramesh Verma, a senior male cardiologist with a polite reassuring smile, clean white clinical coat, soft bokeh clinical clinic background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVIZBrYqDu3_uXwMCnsHetYgmxkwmcyeQbg6xCFTEMb5Ha3J9CjGuiFZh7bdJOHQYlts5aSkSzWbFwuH_gjzDK-3v9zOEV9HGLM3fRFr8DlA2FcOD3YRucxJhEPlnqH879fSz6TInJbJz38FJlbp1eld6AKYCkkfA8wuVBygGUUEqugu3zHlMtifewopd33Gs3Tp8ZFEIAcI4CxFXNiVrHL2hQqXItbgqYURTrr_PuO4pBIZP9YtQN" />
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-bold text-[14.5px] text-[#0F172A] truncate">Dr. Ramesh Verma</span>
<span className="bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-semibold px-1.5 py-0.2 rounded-full">On Call</span>
</div>
<span className="text-[12px] text-slate-500 truncate">Cardiologist • Apollo Hospital</span>
</div>
</div>
<a aria-label="Call Doctor" className="w-9 h-9 rounded-full bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 border border-slate-200 flex items-center justify-center text-slate-700 active:scale-95 transition-all shadow-xs" href="tel:5550144">
<span className="material-symbols-outlined text-[18px]">call</span>
</a>
</div>
</div>
</div>
{/* Recent Safety Activity Log */}
<div className="apple-card p-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-slate-600 text-[19px]">history</span>
<h3 className="font-bold text-[15px] text-[#0F172A] tracking-tight">Recent Activity</h3>
</div>
<span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider">Audit Trail</span>
</div>
<div className="flex flex-col divide-y divide-slate-100">
<div className="flex items-start gap-3 py-2.5 first:pt-0 last:pb-0">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[17px]">qr_code_scanner</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="text-[13px] font-semibold text-[#0F172A]">QR Passport scanned</span>
<span className="text-[12px] text-slate-500">Apollo Senior Clinic Reception</span>
</div>
<span className="text-[11px] font-medium text-slate-400 flex-shrink-0">11:42 AM</span>
</div>
<div className="flex items-start gap-3 py-2.5 first:pt-0 last:pb-0">
<div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[17px]">check_circle</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="text-[13px] font-semibold text-[#0F172A]">Morning Metformin 500mg</span>
<span className="text-[12px] text-slate-500">Logged on bedside device</span>
</div>
<span className="text-[11px] font-medium text-slate-400 flex-shrink-0">8:05 AM</span>
</div>
</div>
</div>
</div>


    </main>
  );
}
