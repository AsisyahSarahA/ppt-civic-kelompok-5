import React from 'react';
import { SlideContent } from '../types/presentation';
import { X, Grid } from 'lucide-react';

interface SlideOverviewDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideContent[];
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

export const SlideOverviewDrawer: React.FC<SlideOverviewDrawerProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlide,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="overview-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0B1F3A] border border-[#0FA3B1]/40 text-slate-100 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-700/60 flex items-center justify-between bg-slate-900/70">
          <div className="flex items-center gap-2.5">
            <Grid className="w-5 h-5 text-[#F2B705]" />
            <div>
              <h3 id="overview-title" className="text-base sm:text-lg font-bold text-white">
                Peta Seluruh Slide Presentasi (18 Slide)
              </h3>
              <p className="text-xs text-slate-400">
                Klik kartu slide mana saja untuk langsung melompat ke materi tersebut.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Tutup ringkasan slide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid of 18 slides */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
          {slides.map((s, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={s.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`p-3.5 rounded-xl text-left transition-all duration-200 relative group overflow-hidden border ${
                  isActive
                    ? 'bg-[#0FA3B1]/20 border-[#F2B705] ring-2 ring-[#F2B705]/50 shadow-lg'
                    : 'bg-slate-900/50 hover:bg-slate-800/80 border-slate-700/60 hover:border-[#0FA3B1]'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-mono font-bold text-[#F2B705]">
                    Slide {String(s.id).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-cyan-300 font-mono">
                    {s.category}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white line-clamp-1 group-hover:text-[#F2B705] transition-colors">
                  {s.title}
                </h4>

                {s.subtitle && (
                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                    {s.subtitle}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-700/60 bg-slate-900/70 flex items-center justify-between text-xs text-slate-400">
          <span>Gunakan tombol panah ◄ ► pada keyboard untuk navigasi cepat</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#0FA3B1] hover:bg-[#0d8c99] text-white font-semibold transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
