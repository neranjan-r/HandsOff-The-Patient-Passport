export default function Page() {
  return (
    <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
      
<div className="flex flex-col w-full px-margin space-y-4 pt-3 pb-6">
{/* Care Cadence & Title Bar */}
<div className="flex flex-col gap-2 pt-1">
<div className="flex items-center justify-between">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold block">Care Cadence</span>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">Daily Schedule</h1>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-primary border border-surface-container hover:bg-surface-container transition-all active:scale-95 shadow-sm" id="sync-btn" type="button">
<span className="material-symbols-outlined text-[18px] transition-transform duration-700" id="sync-icon">sync</span>
<span className="font-label-md text-label-md font-semibold">Sync</span>
</button>
</div>
{/* Active Caregiver Tether Badge */}
<div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container/60">
<div className="flex items-center gap-2.5 min-w-0">
<div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-secondary-container text-on-secondary-fixed shrink-0">
<span className="material-symbols-outlined text-[18px]">family_restroom</span>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest"></span>
</div>
<div className="truncate">
<p className="font-label-md text-label-md text-on-surface font-semibold truncate">Arjun Nair <span className="text-secondary font-normal">• monitoring</span></p>
<p className="font-body-sm text-body-sm text-secondary">Tether active • Synced 15m ago</p>
</div>
</div>
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0 ml-2">verified_user</span>
</div>
</div>
{/* Today's Adherence Card */}
<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container/60">
<div className="flex items-center justify-between mb-4">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold block">Today's Adherence</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight mt-0.5">Daily Medication Care</h2>
</div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-primary font-label-md text-label-md font-semibold border border-surface-container">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            On Schedule
          </span>
</div>
<div className="flex items-center gap-space-lg">
{/* Circular Progress Ring (Apple Health Style) */}
<div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
<svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 96 96">
<circle className="text-surface-container-high fill-none" cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-primary-container fill-none transition-all duration-1000" cx="48" cy="48" id="progress-circle" r="40" stroke="currentColor" strokeDasharray="251.32" strokeDashoffset="62.83" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold leading-none">75%</span>
<span className="font-label-sm text-label-sm text-secondary mt-0.5">Goal</span>
</div>
</div>
{/* Detail Metrics */}
<div className="flex flex-col justify-center space-y-1.5 min-w-0">
<div className="flex items-baseline gap-2">
<span className="font-display-lg-mobile text-[26px] leading-tight font-bold text-on-surface">3 of 4</span>
<span className="font-body-md text-body-md text-secondary leading-tight">doses safely logged</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
<span>Next: 8:00 PM (1 dose pending)</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">100% adherence streak: 12 days active</p>
</div>
</div>
</div>
{/* Chronological Regimen Section Header */}
<div className="flex items-center justify-between pt-1">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">Chronological Regimen</h3>
<span className="font-label-sm text-label-sm text-secondary font-medium">Wednesday, Oct 24</span>
</div>
{/* Regimen Stack */}
<div className="space-y-3.5">
{/* 08:00 AM • Morning Dose (Completed) */}
<div className="rounded-xl bg-surface-container-lowest p-4 shadow-sm border border-surface-container/60 transition-all opacity-90">
<div className="flex items-center justify-between mb-2.5 pb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-emerald-600 text-[20px]">check_circle</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">08:00 AM • Morning Dose</span>
</div>
<span className="font-label-sm text-label-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/50 px-2.5 py-0.5 rounded-full">Completed</span>
</div>
<div className="space-y-2 pl-7">
<div className="flex items-start justify-between">
<div>
<p className="font-label-lg text-label-lg text-on-surface font-semibold">Metformin 500mg</p>
<p className="font-body-sm text-body-sm text-secondary">Taken with breakfast at 8:05 AM</p>
</div>
<span className="font-label-sm text-label-sm text-secondary px-2.5 py-0.5 rounded-md bg-surface-container">Oral Tablet</span>
</div>
<div className="flex items-start justify-between pt-1">
<div>
<p className="font-label-lg text-label-lg text-on-surface font-semibold">Amlodipine 5mg</p>
<p className="font-body-sm text-body-sm text-secondary">Taken at 8:05 AM</p>
</div>
<span className="font-label-sm text-label-sm text-secondary px-2.5 py-0.5 rounded-md bg-surface-container">Blood Pressure</span>
</div>
</div>
</div>
{/* 01:30 PM • Lunch Dose (Completed) */}
<div className="rounded-xl bg-surface-container-lowest p-4 shadow-sm border border-surface-container/60 transition-all opacity-90">
<div className="flex items-center justify-between mb-2.5 pb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-emerald-600 text-[20px]">check_circle</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">01:30 PM • Lunch Dose</span>
</div>
<span className="font-label-sm text-label-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/50 px-2.5 py-0.5 rounded-full">Completed</span>
</div>
<div className="pl-7 flex items-start justify-between">
<div>
<p className="font-label-lg text-label-lg text-on-surface font-semibold">Aspirin 75mg</p>
<p className="font-body-sm text-body-sm text-secondary">Taken at 1:45 PM with water</p>
</div>
<span className="font-label-sm text-label-sm text-secondary px-2.5 py-0.5 rounded-md bg-surface-container">Cardio Care</span>
</div>
</div>
{/* 08:00 PM • Evening Dose (Upcoming • ACTION REQUIRED) */}
<div className="rounded-2xl bg-surface-container-lowest p- space-lg p-4 shadow-md border-2 border-primary-container/20 relative overflow-hidden transition-all duration-300" id="action-dose-card">
{/* Top Accent Bar */}
<div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-container"></div>
<div className="flex items-center justify-between mb-3 pt-1">
<div className="flex items-center gap-2">
<span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-ping"></span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">08:00 PM • Evening Dose</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider bg-primary-fixed px-2.5 py-1 rounded-full border border-primary-container/20">Action Required</span>
</div>
{/* Medication Card Detail */}
<div className="bg-surface-container-low rounded-xl p-3.5 mb-3.5 border border-surface-container">
<div className="flex items-start justify-between mb-1">
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Atorvastatin 20mg</h4>
<p className="font-label-md text-label-md text-secondary">Oral Tablet • Cholesterol Care</p>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm shrink-0">
<span className="material-symbols-outlined text-[22px]">medication</span>
</div>
</div>
<div className="flex items-center gap-2 mt-2 pt-2 border-t border-surface-container text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-amber-600 shrink-0">info</span>
<span>Prescription directive: <strong className="font-semibold text-on-surface">Take after dinner with fresh water</strong></span>
</div>
</div>
{/* Action Controls */}
<div className="space-y-2" id="dose-controls">
<button className="w-full h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(67,56,202,0.28)] hover:opacity-95 active:scale-[0.98] transition-transform" id="mark-taken-btn" type="button">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
<span>Mark as Taken</span>
</button>
<div className="grid grid-cols-2 gap-2">
<button className="h-10 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:bg-surface-container-high active:scale-95 transition-all" id="snooze-btn" type="button">
<span className="material-symbols-outlined text-[16px]">update</span>
<span>+15m Remind</span>
</button>
<button className="h-10 rounded-xl bg-surface-container text-secondary font-label-md text-label-md font-semibold flex items-center justify-center gap-1 hover:text-error active:scale-95 transition-all" id="skip-btn" type="button">
<span className="material-symbols-outlined text-[16px]">close</span>
<span>Skip Dose</span>
</button>
</div>
</div>
{/* Completed State (Hidden initially) */}
<div className="hidden py-3 text-center text-emerald-700 font-label-lg text-label-lg flex items-center justify-center gap-2 bg-emerald-50 rounded-xl border border-emerald-200/60" id="dose-completed-msg">
<span className="material-symbols-outlined text-emerald-600">task_alt</span>
<span className="font-bold">Marked taken safely at 7:58 PM!</span>
</div>
</div>
{/* 10:00 PM • Bedtime Dose (Queued) */}
<div className="rounded-xl bg-surface-container-lowest p-4 shadow-sm border border-surface-container/60 transition-all opacity-80">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">bedtime</span>
<span className="font-label-lg text-label-lg text-secondary font-bold">10:00 PM • Bedtime Dose</span>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2.5 py-0.5 rounded-full">Queued</span>
</div>
<div className="pl-7 flex items-start justify-between">
<div>
<p className="font-label-lg text-label-lg text-on-surface font-semibold">Metformin 500mg</p>
<p className="font-body-sm text-body-sm text-secondary">With evening snack or full glass of water</p>
</div>
<span className="font-label-sm text-label-sm text-secondary px-2.5 py-0.5 rounded-md bg-surface-container">Glucoregulator</span>
</div>
</div>
</div>
{/* Caregiver Guardrail Active Card */}
<div className="rounded-2xl bg-primary-fixed p-space-md shadow-sm border border-primary-fixed-dim/40 relative overflow-hidden">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary-container shrink-0 mt-0.5 shadow-sm">
<span className="material-symbols-outlined text-[20px]">shield</span>
</div>
<div className="space-y-1 min-w-0">
<div className="flex items-center gap-2">
<h4 className="font-label-lg text-label-lg text-on-primary-fixed font-bold">Caregiver Guardrail Active</h4>
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
</div>
<p className="font-body-sm text-body-sm text-on-primary-fixed-variant leading-relaxed">
              If the evening dose is missed by &gt;30 mins, an automated gentle notification dispatches to primary caregiver <strong className="font-semibold text-on-primary-fixed">Arjun Nair</strong> via secure SMS.
            </p>
</div>
</div>
</div>
{/* Action Buttons */}
<div className="flex flex-col gap-2.5 pt-1">
<button className="w-full h-12 rounded-xl bg-surface-container-lowest text-on-surface font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-sm border border-surface-container hover:bg-surface-container-low active:scale-[0.99] transition-all" type="button">
<span className="material-symbols-outlined text-primary text-[20px]">add_circle</span>
<span>Add New Medication Schedule</span>
</button>
<button className="w-full h-12 rounded-xl bg-surface-container-lowest text-secondary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-sm border border-surface-container hover:bg-surface-container-low active:scale-[0.99] transition-all" type="button">
<span className="material-symbols-outlined text-[20px]">description</span>
<span>Export Care Log for Doctor (PDF)</span>
</button>
</div>
</div>


    </main>
  );
}
