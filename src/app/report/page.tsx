export default function Page() {
  return (
    <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
      
<div className="flex flex-col w-full pb-10 space-y-5 px-margin">
{/* Report Metadata & Document Status Header */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3">
<div className="flex flex-col space-y-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              Official Medical Dossier
            </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Ready for Consultation
            </span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">Doctor Visit Clinical Summary</h2>
<p className="font-body-sm text-body-sm text-secondary">Generated Oct 24, 2024 • 04:30 PM • Verified by HandsOff Clinical Engine</p>
</div>
{/* Quick Utility Bar */}
<div className="flex items-center gap-2 self-start sm:self-center">
<button className="h-10 px-3.5 rounded-lg bg-surface-container-lowest shadow-sm flex items-center gap-1.5 text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md" id="shareBtn">
<span className="material-symbols-outlined text-[18px]">share</span>
<span>Share PDF</span>
</button>
<button className="h-10 px-3.5 rounded-lg bg-surface-container-lowest shadow-sm flex items-center gap-1.5 text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md" id="printBtn">
<span className="material-symbols-outlined text-[18px]">print</span>
<span>Print / Export</span>
</button>
</div>
</div>
{/* Patient Dossier Header Card */}
<div className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-start sm:items-center gap-4">
<div className="relative">
<img className="w-16 h-16 rounded-full object-cover shadow-sm bg-surface-container" data-alt="High-resolution clinical profile portrait of an elegant 68-year-old South Asian woman with silver-streaked hair, soft serene expression, gentle warm indoor studio lighting with neutral institutional background tones matching modern digital healthcare interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt_bpImOmHBmy5yMBvXu6q-WgMtEsMJxDYsB29zSuj5j6HRrjshpbj9ynqzha9_pk59zpsVWMsqwYO5p5C0PrW3Ks0Iob6-vu4LTIrVlnJOF1hTDhHjkFOz0jSaw6ZxVm2U5bml8jI_w7_tECwLJhXQQcVrSeYbIkDsawUO9QR0_hjgJGP-YC3cdnhP4PPTaKVFGgndS2fCZGS0ycD9Do8UxOYNKjznOuQqdgLvl0" />
<span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-primary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Meera Nair</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm uppercase font-semibold tracking-wider">O+ POS</span>
</div>
<p className="font-body-sm text-body-sm text-secondary truncate">68 yrs • Female • DOB: 14 Oct 1955</p>
<p className="font-label-sm text-label-sm text-outline mt-0.5">Medical ID: <span className="text-on-surface font-semibold">HF-8820-MN</span></p>
</div>
</div>
{/* Attending Provider Chip */}
<div className="flex items-center gap-3 bg-surface-container-low rounded-lg p-3">
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[20px]">stethoscope</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Primary Physician</span>
<span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">Dr. Ramesh Verma</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Cardiologist • Apollo Hospital</span>
</div>
</div>
</div>
</div>
{/* CRITICAL "WHAT NOT TO DO" ADVISORY CARD */}
<div className="w-full bg-[#FEF3C7] rounded-xl p-space-lg shadow-sm border border-[#FDE68A]/60">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-[#B45309] text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
<h3 className="font-label-lg text-label-lg text-[#B45309] tracking-wider uppercase font-bold">CRITICAL CONTRAINDICATIONS FOR CLINICIANS</h3>
</div>
<p className="font-body-sm text-body-sm text-[#92400E] mb-4">
          Mandatory clinical directives recorded by patient's primary care team. Immediate attention required prior to diagnostics, phlebotomy, or pharmacotherapy.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
{/* Directive 1 */}
<div className="bg-surface-container-lowest/90 backdrop-blur-xs rounded-lg p-3 flex items-start gap-2.5 shadow-xs">
<span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">do_not_disturb_on</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">No Penicillin Derivatives</span>
<span className="font-body-sm text-body-sm text-[#92400E]">Severe Anaphylaxis Risk (Recorded 2012)</span>
</div>
</div>
{/* Directive 2 */}
<div className="bg-surface-container-lowest/90 backdrop-blur-xs rounded-lg p-3 flex items-start gap-2.5 shadow-xs">
<span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">front_hand</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">No BP Cuff / Needles on Right Arm</span>
<span className="font-body-sm text-body-sm text-[#92400E]">Post-Mastectomy Lymphedema Precaution</span>
</div>
</div>
{/* Directive 3 */}
<div className="bg-surface-container-lowest/90 backdrop-blur-xs rounded-lg p-3 flex items-start gap-2.5 shadow-xs">
<span className="material-symbols-outlined text-[#B45309] text-[20px] shrink-0 mt-0.5">psychology_alt</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">No Closed MRI Without Sedation</span>
<span className="font-body-sm text-body-sm text-[#92400E]">Severe claustrophobia panic escort protocol</span>
</div>
</div>
</div>
</div>
{/* Active Diagnoses & Chronic Care Status */}
<div className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[22px]">vital_signs</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Active Diagnoses &amp; Care History</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2.5 py-1 rounded-full">3 Monitored Conditions</span>
</div>
<div className="flex flex-col space-y-3">
{/* Item 1 */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-surface-container-low rounded-lg gap-2">
<div className="flex items-start gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-600 mt-2 shrink-0"></div>
<div>
<div className="font-label-lg text-label-lg text-on-surface font-semibold">Type 2 Diabetes Mellitus</div>
<div className="font-body-sm text-body-sm text-secondary">Controlled diet &amp; oral hypoglycemics • Low hypoglycemia episode rate</div>
</div>
</div>
<div className="flex items-center gap-2 self-start sm:self-center pl-5 sm:pl-0">
<span className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-xs font-semibold">HbA1c: 6.4%</span>
<span className="font-label-sm text-label-sm text-secondary">Last checked Dec 2024</span>
</div>
</div>
{/* Item 2 */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-surface-container-low rounded-lg gap-2">
<div className="flex items-start gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-600 mt-2 shrink-0"></div>
<div>
<div className="font-label-lg text-label-lg text-on-surface font-semibold">Essential Hypertension</div>
<div className="font-body-sm text-body-sm text-secondary">Daily telemetry synced via Omron cuff • Controlled response</div>
</div>
</div>
<div className="flex items-center gap-2 self-start sm:self-center pl-5 sm:pl-0">
<span className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-xs font-semibold">Avg 124/82 mmHg</span>
<span className="font-label-sm text-label-sm text-secondary">Medicated</span>
</div>
</div>
{/* Item 3 */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-surface-container-low rounded-lg gap-2">
<div className="flex items-start gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0"></div>
<div>
<div className="font-label-lg text-label-lg text-on-surface font-semibold">Post-Mastectomy (Right Side)</div>
<div className="font-body-sm text-body-sm text-secondary">Surgical resection 2018 • Clear margins • Yearly oncological clearance valid</div>
</div>
</div>
<div className="flex items-center gap-2 self-start sm:self-center pl-5 sm:pl-0">
<span className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-xs font-semibold">Remission (Yr 6)</span>
<span className="font-label-sm text-label-sm text-secondary">Annual Review</span>
</div>
</div>
</div>
</div>
{/* 30-Day Medication & Vitals Adherence Metrics */}
<div className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[22px]">monitoring</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">30-Day Medication &amp; Biometrics</h3>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold">Sensor Synced</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
{/* Metric Card: Adherence */}
<div className="p-4 bg-surface-container-low rounded-lg flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase">Medication Adherence</span>
<span className="font-display-lg text-display-lg text-on-surface mt-1">96%</span>
<span className="font-body-sm text-body-sm text-secondary">116 of 120 doses logged on time</span>
</div>
{/* Progress Circular Visual */}
<div className="relative w-16 h-16 flex items-center justify-center shrink-0">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-highest stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3.5"></path>
<path className="text-primary stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="96, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-label-md text-label-md text-on-surface font-bold">96%</span>
</div>
</div>
{/* Metric Card: BP Trend Sparkline */}
<div className="p-4 bg-surface-container-low rounded-lg flex flex-col justify-between">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase">Resting Blood Pressure</span>
<span className="font-display-lg text-display-lg text-on-surface mt-1">122/80 <span className="font-label-md text-label-md text-secondary font-normal">avg</span></span>
</div>
<span className="px-2 py-1 bg-surface-container-lowest text-emerald-700 font-label-sm text-label-sm rounded-full flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[14px]">trending_flat</span> Normal
              </span>
</div>
{/* Sparkline SVG */}
<div className="w-full h-10 mt-2">
<svg className="w-full h-full overflow-visible" viewBox="0 0 200 40">
<defs>
<linearGradient id="grad-bp" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#4338ca" stopOpacity="0.25"></stop>
<stop offset="100%" stopColor="#4338ca" stopOpacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,28 Q25,20 50,22 T100,16 T150,24 T200,18 L200,40 L0,40 Z" fill="url(#grad-bp)"></path>
<path d="M0,28 Q25,20 50,22 T100,16 T150,24 T200,18" fill="none" stroke="#4338ca" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="200" cy="18" fill="#4338ca" r="3.5"></circle>
</svg>
</div>
</div>
</div>
{/* Active Prescriptions List */}
<div className="flex flex-col space-y-2">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-1">Current Daily Prescriptions</span>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
<div className="p-3 bg-surface-container-low rounded-lg flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[16px]">medication</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate font-semibold">Metformin 500mg</span>
<span className="font-body-sm text-body-sm text-secondary">Twice Daily (BID) with meals</span>
</div>
</div>
<div className="p-3 bg-surface-container-low rounded-lg flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[16px]">pill</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate font-semibold">Amlodipine 5mg</span>
<span className="font-body-sm text-body-sm text-secondary">Once Daily Morning (AM)</span>
</div>
</div>
<div className="p-3 bg-surface-container-low rounded-lg flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[16px]">vaccines</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate font-semibold">Atorvastatin 20mg</span>
<span className="font-body-sm text-body-sm text-secondary">Once Daily Bedtime (HS)</span>
</div>
</div>
</div>
</div>
</div>
{/* Physician Consultation & Physical Annotation Area */}
<div className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[22px]">draw</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Doctor Consultation Notes &amp; Directives</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary">Physical / In-App Signing</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-4">
          Space reserved for attending physician clinical recommendations, updated dosage regimens, or diagnostic requisitions.
        </p>
{/* Blank Ruled Note Lines for Print/Tablet Stylus Support */}
<div className="flex flex-col space-y-4 bg-surface-container-low/60 rounded-lg p-5">
<div className="w-full h-6 bg-surface-container-high/40 rounded-sm"></div>
<div className="w-full h-6 bg-surface-container-high/40 rounded-sm"></div>
<div className="w-full h-6 bg-surface-container-high/40 rounded-sm"></div>
<div className="w-3/4 h-6 bg-surface-container-high/40 rounded-sm"></div>
{/* Doctor Signature Slot */}
<div className="flex flex-col sm:flex-row sm:items-end justify-between pt-6 gap-4 border-t border-surface-container-high/60">
<div className="flex items-center gap-3">
<img className="w-12 h-12 rounded-full object-cover bg-surface-container" data-alt="Official round clinic verification stamp mark on light paper, medical council accreditation aesthetic with soft purple institutional emblem" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXI9956JTyWkTxHWP1wlySuFvn5p3SyS3VrEVO9IeBk7UdsSQHx2qxQbqzqThtp6Jm3_s5D3af90en6WXqeaHh4d-0GHli3H62O76XtovYU7EKhK7yR0tPgfZCgWZJG53ZkScFfQ3eNzx4sWybr-fS3CvdPX31ldKGzzWvUJItzLhjGlWJgY9YyXwtD2WuXjnTnZ6_dOyI-8q95c9utpnckf3y0FXRToPIcJR3wms" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Accredited Facility</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Apollo Heart &amp; Vascular Centre</span>
</div>
</div>
<div className="flex flex-col items-start sm:items-end">
<div className="w-48 h-8 flex items-center justify-center text-secondary/60 italic font-body-sm text-body-sm">
                Dr. Ramesh Verma, MD, DM
              </div>
<div className="w-52 h-0.5 bg-surface-container-highest rounded-full"></div>
<span className="font-label-sm text-label-sm text-secondary mt-1">Physician Signature &amp; Date</span>
</div>
</div>
</div>
</div>
{/* Bottom Interactive Action Bar */}
<div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
<button className="w-full sm:flex-1 h-12 rounded-full bg-primary-container hover:bg-primary-container/90 text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]" id="downloadPdfBtn">
<span className="material-symbols-outlined text-[20px]">file_download</span>
<span>Download Verified PDF Report</span>
</button>
<button className="w-full sm:flex-1 h-12 rounded-full bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.99] border border-outline-variant/30" id="sendClinicBtn">
<span className="material-symbols-outlined text-primary text-[20px]">send_to_mobile</span>
<span>Send to Apollo Clinic Reception</span>
</button>
</div>
{/* Micro Interaction Toast Slot */}
<div className="fixed bottom-6 left-1/2 -translate-x-1/2 max-w-sm w-11/12 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 opacity-0 pointer-events-none transition-all duration-300 z-50" id="toastNotification">
<span className="material-symbols-outlined text-emerald-400 text-[20px]">check_circle</span>
<span className="font-body-sm text-body-sm font-medium" id="toastMessage">Action completed successfully.</span>
</div>
</div>


    </main>
  );
}
