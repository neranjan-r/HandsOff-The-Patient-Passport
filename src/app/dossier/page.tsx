'use client';

import { useState, useEffect } from 'react';

export default function DossierPage() {
  const [notifyText, setNotifyText] = useState('Notify Family with Live Scan Location');
  const [notifyState, setNotifyState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      setTime(now.toLocaleDateString('en-GB', opts) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const sendBystanderPing = () => {
    setNotifyState('sending');
    setNotifyText('Transmitting Location to Arjun...');
    
    setTimeout(() => {
      setNotifyText('Location Sent to Kin (Bengaluru Node)');
      setNotifyState('sent');
    }, 900);
  };

  return (
    <div className="bg-color-f9f9ff font-sans text-card-foreground flex flex-col items-center min-h-screen">
      <div className="w-full max-w-[430px] min-h-screen relative flex flex-col bg-color-f9f9ff">
        <header className="fixed top-0 w-full max-w-[430px] z-50 bg-color-f9f9ff/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
          <div className="h-16 px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center rounded-lg text-card-foreground hover:bg-color-e9edff active:bg-color-e1e8fd transition-colors" onClick={() => window.history.back()}>
                <span className="material-symbols-outlined text-[22px]">arrow_back</span>
              </button>
              <h1 className="font-semibold text-lg text-card-foreground truncate tracking-tight">Emergency Dossier</h1>
            </div>
            <div className="w-8 h-8 rounded-full bg-color-3525cd flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </div>
          </div>
        </header>
        <main className="flex-1 flex flex-col relative w-full px-4 pt-16 pb-safe bg-color-f9f9ff">
          <div className="flex flex-col w-full pb-8">
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-color-f1f3ff shadow-sm mb-3">
              <div className="flex items-center gap-2 min-w-0">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span className="text-xs text-color-464555 truncate font-semibold uppercase tracking-wider">Verified Emergency Dossier</span>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0 text-destructive-hover">
                <span className="material-symbols-outlined text-[14px]">lock</span>
                <span className="text-xs font-mono text-color-464555">{time}</span>
              </div>
            </div>

            <section className="mb-4 rounded-xl bg-amber-50 p-4 shadow-md">
              <div className="flex items-start gap-2.5 mb-2.5">
                <div className="p-1.5 rounded-lg bg-amber-200/70 text-amber-900 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                </div>
                <div>
                  <span className="text-xs tracking-wider uppercase text-amber-800 font-bold block">Critical Responder Directive</span>
                  <h2 className="text-xl text-amber-950 font-bold leading-snug">WHAT CLINICIANS MUST NOT DO</h2>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2 bg-white/90 p-2.5 rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-rose-600 text-[18px] flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-rose-950 font-bold leading-tight">DO NOT administer Penicillin or cephalosporins</p>
                    <p className="text-xs text-rose-900 mt-0.5">High lethal anaphylaxis risk. Immediate respiratory compromise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/90 p-2.5 rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-amber-700 text-[18px] flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>do_not_disturb_on</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-amber-950 font-bold leading-tight">DO NOT use right arm for BP cuffs or IV lines</p>
                    <p className="text-xs text-amber-900 mt-0.5">Severe post-mastectomy lymphedema precaution. <span className="font-bold underline">Left arm only.</span></p>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/90 p-2.5 rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-amber-700 text-[18px] flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>block</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-amber-950 font-bold leading-tight">DO NOT isolate in closed MRI without sedation</p>
                    <p className="text-xs text-amber-900 mt-0.5">Diagnosed severe claustrophobic panic & acute disorientation.</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 gap-2.5 mb-4">
              <a className="w-full py-3.5 px-4 rounded-xl bg-destructive text-white flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform" href="tel:112">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                <span className="text-lg font-bold tracking-tight">CALL 112 (AMBULANCE & POLICE)</span>
              </a>
              <button 
                className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform ${notifyState === 'sent' ? 'bg-emerald-100 text-emerald-900' : 'bg-color-dd3022 text-color-930002'} ${notifyState === 'sending' ? 'opacity-75' : ''}`}
                onClick={sendBystanderPing}
                disabled={notifyState !== 'idle'}
              >
                {notifyState !== 'sent' && <span className="material-symbols-outlined text-[20px] text-color-3525cd">share_location</span>}
                <span className="text-sm font-semibold">{notifyText}</span>
              </button>
            </div>
            
            {/* Identity Card */}
            <section className="rounded-xl bg-white p-4 shadow-sm mb-4">
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-16 h-16 rounded-full bg-color-e1e8fd flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Meera Nair portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQhdk9d2iVSYSQxBIC12_BBIQyCfVQ6PCL5jZn-JXhvf9olTHUvpOWek9lfWA4mxAPl07KiOQEX8S06PHkC_xgJ5ro_3N3d_M5on_zJslne8pvyIo6fd4C9Ts_Dkv58-Q5J26YLd_puLAawfR1KOQrUhVl4ap3cGTfPvqSJ0JYXmp09UYOixtowOQdtzQloUGTBoqoA_sCmGu7azNmyTuOVHMBZez3ftLX5wVkbuiwJv7MStz7A--a" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h2 className="text-lg text-card-foreground font-bold truncate">Meera Nair</h2>
                    <span className="material-symbols-outlined text-color-3525cd text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified by Medical ID">verified</span>
                  </div>
                  <p className="text-sm text-color-464555">68 yrs • Female • Malayalam, English</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 rounded-full bg-color-e1e8fd text-color-3525cd text-xs font-bold">Blood: O+ POS</span>
                    <span className="px-2 py-0.5 rounded-full bg-color-e1e8fd text-color-464555 text-xs">No DNR (Full Code)</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2 bg-color-f1f3ff p-2.5 rounded-lg">
                <div className="text-center">
                  <span className="text-xs text-destructive-hover block uppercase">Blood Group</span>
                  <span className="text-xl text-destructive font-bold">O+</span>
                </div>
                <div className="text-center">
                  <span className="text-xs text-destructive-hover block uppercase">Organ Donor</span>
                  <span className="text-xl text-card-foreground font-bold">YES</span>
                </div>
                <div className="text-center">
                  <span className="text-xs text-destructive-hover block uppercase">Resuscitation</span>
                  <span className="text-xl text-color-3525cd font-bold">FULL</span>
                </div>
              </div>
            </section>
            
            <section className="rounded-xl bg-white p-4 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-md bg-destructive-light text-color-93000a flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">healing</span>
                  </div>
                  <h3 className="text-lg text-card-foreground font-semibold">Critical Allergies</h3>
                </div>
                <span className="text-xs text-destructive font-bold">2 Recorded</span>
              </div>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-red-50 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm text-red-950 font-bold">Penicillin Derivatives</p>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-red-200 text-red-900 font-bold uppercase">Lethal</span>
                    </div>
                    <p className="text-xs text-red-800 mt-0.5">Anaphylactic shock, bronchial spasms, circulatory collapse.</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-color-f1f3ff flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm text-card-foreground font-bold">Sulfa Drugs (Sulfonamides)</p>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-200 text-amber-900 font-semibold uppercase">Moderate</span>
                    </div>
                    <p className="text-xs text-color-464555 mt-0.5">Contact dermatitis, widespread urticaria & hives.</p>
                  </div>
                </div>
              </div>
            </section>
            
          </div>
        </main>
      </div>
    </div>
  );
}
