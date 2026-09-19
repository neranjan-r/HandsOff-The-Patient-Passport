export default function Page() {
  return (
    <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
      <div className="flex flex-col w-full px-margin pb-6 gap-space-lg">
{/* Header Title Block */}
<div className="flex flex-col gap-1 pt-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Health Audit &amp; Surveillance</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
        Sync Active
      </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">Activity &amp; Caregiver Audit</h1>
<p className="font-body-md text-body-md text-secondary">Real-time log of caregiver actions, medical passes, and routine compliance.</p>
</div>
{/* Active Caregiver Status Card */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-center gap-3 min-w-0">
<div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-inner">
<img className="w-full h-full object-cover" data-alt="Warm portrait of Arjun Nair, an Indian man in his mid-30s wearing a clean soft-blue knit sweater, natural daylight, looking warmly into the camera with gentle reassuring expression, soft neutral background, photorealistic clinical elegance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFqUGFLeButIE2Z-A6Gn1KW-W_Rv-AMnX-gIF2yc36Ct60Gj2kxGk73PDWI1RjSBFZUxrP-Lno4KwDXliwvPm7ngN7DxXBvrpkEOAhK5GKwd1StBKdQ8pvc5o9D8KU4zJA9HHN96jShxqkWQDgszDO44NjpaCs8MHgg1jCp2BCzsK8X9F87QwfpLAgcAs4CNgeZEvGpKjo-fboV0At7DCxT74eYm8CwgyX9t3hJM0" />
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">Arjun Nair</h2>
<span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
</div>
<span className="font-label-md text-label-md text-secondary truncate">Son • Primary Caretaker</span>
</div>
</div>
<button className="h-9 px-4 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform shrink-0" id="ping-btn" >
<span className="material-symbols-outlined text-[16px]">sensors</span>
<span id="ping-label">Ping</span>
</button>
</div>
{/* Telemetry & Location Ribbon */}
<div className="flex items-center justify-between pt-1 gap-2">
<div className="flex items-center gap-1.5 text-secondary min-w-0">
<span className="material-symbols-outlined text-[18px] text-secondary shrink-0">location_on</span>
<span className="font-label-md text-label-md text-on-surface truncate">Bengaluru (15 mins away)</span>
</div>
<div className="flex items-center gap-1 text-emerald-600 bg-surface-container-low px-2.5 py-1 rounded-full shrink-0">
<span className="material-symbols-outlined text-[14px]">cell_tower</span>
<span className="font-label-sm text-label-sm font-semibold">Active Realtime Sync</span>
</div>
</div>
</div>
{/* Care Adherence Protocol: Weekly Care Rhythm */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Care Adherence Protocol</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Weekly Care Rhythm</h3>
</div>
<div className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-lg text-label-lg flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
        96% Total
      </div>
</div>
{/* Adherence Bar Chart Graphic */}
<div className="pt-3 flex items-end justify-between h-32 px-1">
{/* Monday */}
<div className="flex flex-col items-center gap-2 flex-1">
<span className="font-label-sm text-label-sm text-secondary">100%</span>
<div className="w-7 bg-primary rounded-t-md h-24 transition-all duration-500 hover:opacity-90"></div>
<span className="font-label-md text-label-md text-on-surface font-medium">M</span>
</div>
{/* Tuesday */}
<div className="flex flex-col items-center gap-2 flex-1">
<span className="font-label-sm text-label-sm text-secondary">100%</span>
<div className="w-7 bg-primary rounded-t-md h-24 transition-all duration-500 hover:opacity-90"></div>
<span className="font-label-md text-label-md text-on-surface font-medium">T</span>
</div>
{/* Wednesday */}
<div className="flex flex-col items-center gap-2 flex-1">
<span className="font-label-sm text-label-sm text-secondary">100%</span>
<div className="w-7 bg-primary rounded-t-md h-24 transition-all duration-500 hover:opacity-90"></div>
<span className="font-label-md text-label-md text-on-surface font-medium">W</span>
</div>
{/* Thursday */}
<div className="flex flex-col items-center gap-2 flex-1">
<span className="font-label-sm text-label-sm text-secondary">78%</span>
<div className="w-7 bg-secondary-fixed-dim rounded-t-md h-16 transition-all duration-500 relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-[10px] px-1.5 py-0.5 rounded shadow whitespace-nowrap">1 Delay</div>
</div>
<span className="font-label-md text-label-md text-on-surface font-medium">Th</span>
</div>
{/* Friday */}
<div className="flex flex-col items-center gap-2 flex-1">
<span className="font-label-sm text-label-sm text-secondary">100%</span>
<div className="w-7 bg-primary rounded-t-md h-24 transition-all duration-500 hover:opacity-90"></div>
<span className="font-label-md text-label-md text-on-surface font-medium">F</span>
</div>
{/* Saturday */}
<div className="flex flex-col items-center gap-2 flex-1">
<span className="font-label-sm text-label-sm text-secondary">100%</span>
<div className="w-7 bg-primary rounded-t-md h-24 transition-all duration-500 hover:opacity-90"></div>
<span className="font-label-md text-label-md text-on-surface font-medium">Sa</span>
</div>
{/* Sunday */}
<div className="flex flex-col items-center gap-2 flex-1">
<span className="font-label-sm text-label-sm text-secondary">94%</span>
<div className="w-7 bg-primary-container rounded-t-md h-20 transition-all duration-500 hover:opacity-90"></div>
<span className="font-label-md text-label-md text-on-surface font-medium">Su</span>
</div>
</div>
{/* Insight Banner */}
<div className="flex items-start gap-3 bg-surface-container-low p-3.5 rounded-lg">
<span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">sentiment_satisfied</span>
<p className="font-body-sm text-body-sm text-on-surface">
        Great consistency this week. Only 1 delayed dose recorded on Thursday afternoon. All mandatory night vitals met on time.
      </p>
</div>
</div>
{/* Event Audit Trail (Immutable SHA-256 Ledger) */}
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Event Audit Trail</h3>
<span className="material-symbols-outlined text-secondary text-[16px]">lock</span>
</div>
<span className="font-label-sm text-label-sm text-secondary tracking-tight">SHA-256 Verified</span>
</div>
{/* Audit List Container */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-3">
{/* Card 1: Passport QR Scanned */}
<div className="flex items-start gap-3.5 p-3 rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-headline-sm text-headline-sm text-on-surface text-[15px] font-semibold truncate">Care Passport QR Scanned</span>
<span className="font-label-sm text-label-sm text-secondary shrink-0">11:42 AM</span>
</div>
<p className="font-body-sm text-body-sm text-secondary pt-0.5">Apollo Senior Clinic Reception • Terminal 4</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[13px]">verified_user</span>
              Verified Healthcare Provider
            </span>
</div>
</div>
</div>
{/* Card 2: Morning Meds Confirmed */}
<div className="flex items-start gap-3.5 p-3 rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0 text-secondary">
<span className="material-symbols-outlined text-[20px]">medication</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-headline-sm text-headline-sm text-on-surface text-[15px] font-semibold truncate">Morning Meds Confirmed</span>
<span className="font-label-sm text-label-sm text-secondary shrink-0">08:05 AM</span>
</div>
<p className="font-body-sm text-body-sm text-secondary pt-0.5">
            Metformin 500mg &amp; Amlodipine 5mg logged via bedside dispenser unit.
          </p>
<div className="flex items-center gap-2 mt-2 text-secondary">
<span className="font-label-sm text-label-sm text-emerald-600 font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">task_alt</span> Auto-dispensed
            </span>
<span className="font-label-sm text-label-sm text-outline">•</span>
<span className="font-label-sm text-label-sm text-secondary">Telemetry Hash: #9d42f</span>
</div>
</div>
</div>
{/* Card 3: Evening Med Taken */}
<div className="flex items-start gap-3.5 p-3 rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-on-surface">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-headline-sm text-headline-sm text-on-surface text-[15px] font-semibold truncate">Evening Med Taken</span>
<span className="font-label-sm text-label-sm text-secondary shrink-0">Yesterday 08:00 PM</span>
</div>
<p className="font-body-sm text-body-sm text-secondary pt-0.5">
            Atorvastatin 20mg • Signed off by Arjun Nair (Caregiver App).
          </p>
</div>
</div>
{/* Card 4: Drill Mode Emergency Practice */}
<div className="flex items-start gap-3.5 p-3 rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
<div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0 text-on-tertiary-fixed">
<span className="material-symbols-outlined text-[20px]">notifications_active</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-headline-sm text-headline-sm text-on-surface text-[15px] font-semibold truncate">Drill Mode Emergency Practice</span>
<span className="font-label-sm text-label-sm text-secondary shrink-0">Yesterday 03:15 PM</span>
</div>
<p className="font-body-sm text-body-sm text-secondary pt-0.5">
            Completed 10s practice run. All contacts alerted with [DRILL] simulation tag. SOS flow passed.
          </p>
<div className="flex items-center gap-1.5 mt-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-medium">
<span className="material-symbols-outlined text-[13px]">military_tech</span>
              Readiness Drill 100%
            </span>
</div>
</div>
</div>
{/* Card 5: Doctor Visit Summary Generated */}
<div className="flex items-start gap-3.5 p-3 rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 text-on-secondary-fixed">
<span className="material-symbols-outlined text-[20px]">description</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-headline-sm text-headline-sm text-on-surface text-[15px] font-semibold truncate">Doctor Visit Summary Generated</span>
<span className="font-label-sm text-label-sm text-secondary shrink-0">Oct 22</span>
</div>
<p className="font-body-sm text-body-sm text-secondary pt-0.5">
            Encrypted PDF dispatch sent directly to Dr. Ramesh Verma (Cardiology Lead).
          </p>
<div className="flex items-center gap-2 mt-2">
<span className="font-label-sm text-label-sm text-primary font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">download</span> PDF Export (1.2 MB)
            </span>
</div>
</div>
</div>
</div>
</div>
{/* Access Governance & Safeguards */}
<div className="flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary px-1">Governance &amp; Safeguards</span>
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
{/* Action Row 1: Access Logs */}
<button className="w-full text-left p-space-md flex items-center justify-between hover:bg-surface-container-low transition-colors active:opacity-80">
<div className="flex items-center gap-3 min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[18px]">key</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface text-[15px] font-semibold truncate">Access Logs &amp; Cryptographic IP Hashes</span>
<span className="font-body-sm text-body-sm text-secondary truncate">42 read requests in past 30 days</span>
</div>
</div>
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0">chevron_right</span>
</button>
{/* Soft inset separator */}
<div className="h-[1px] bg-surface-container mx-space-md"></div>
{/* Action Row 2: Authorized Caregivers */}
<button className="w-full text-left p-space-md flex items-center justify-between hover:bg-surface-container-low transition-colors active:opacity-80">
<div className="flex items-center gap-3 min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[18px]">group</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface text-[15px] font-semibold truncate">Manage Authorized Caregivers</span>
<span className="font-body-sm text-body-sm text-secondary truncate">1 Active primary • 2 Read-only emergency contacts</span>
</div>
</div>
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0">chevron_right</span>
</button>
</div>
</div>
{/* Regulatory & Encryption Footer Note */}
<div className="flex flex-col items-center justify-center gap-1.5 pt-2 text-center">
<div className="flex items-center gap-1.5 text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary">verified</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-medium">HIPAA • NDHM Compliant Patient Audit Trail</span>
</div>
<p className="font-body-sm text-body-sm text-outline">
      All entries are cryptographically stamped with SHA-256. Changes cannot be altered or removed.
    </p>
</div>
</div>

    </main>
  );
}
