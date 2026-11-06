import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Play, Volume2, VolumeX, Sparkles, Anchor, ChevronRight } from 'lucide-react';
import { presentationMetadata } from '../data/slidesData';
import { BatikMegaMendung } from './BatikOrnaments';

interface SplashScreenProps {
  onStart: (enableAudio: boolean) => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
  const [withAudio, setWithAudio] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061224] text-white overflow-hidden"
    >
      {/* Background cinematic photograph with ocean scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/kapal_phinisi_samudra_1793952306889.jpg"
          alt="Kapal Phinisi Nusantara Mengarungi Samudra"
          className="w-full h-full object-cover object-center filter brightness-50 contrast-110 scale-105 animate-pulse duration-[10000ms]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061224] via-[#0B1F3A]/70 to-[#061224]/80" />
      </div>

      {/* Foreground Content Card */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-2xl text-center p-6 sm:p-10 rounded-3xl bg-[#0B1F3A]/85 backdrop-blur-xl border border-[#0FA3B1]/40 shadow-2xl space-y-6"
      >
        <div className="flex justify-center">
          <BatikMegaMendung className="w-28 h-12" color="#F2B705" opacity={0.9} />
        </div>

        {/* Institution ribbon */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0FA3B1]/20 text-[#0FA3B1] border border-[#0FA3B1]/40">
          <Compass className="w-4 h-4 text-[#F2B705]" />
          <span>Politeknik LP3I Tasikmalaya · Civic 2026</span>
        </div>

        {/* Main Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            WAWASAN NUSANTARA
          </h1>
          <p className="text-base sm:text-xl font-bold text-[#F2B705] italic">
            "Laut yang Menyatukan, Hukum yang Meneguhkan"
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Geografi, Geopolitik, dan Sejarah Hukum di Balik Kedaulatan Negara Kepulauan Indonesia
          </p>
        </div>

        {/* Presenter Squad */}
        <div className="pt-2 border-t border-slate-700/60">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
            Tim Penyaji:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {presentationMetadata.teamMembers.map((name, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg text-xs bg-black/40 border border-slate-700 text-slate-200 font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Ambient sound checkbox toggle & Start Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setWithAudio(!withAudio)}
            className={`px-3 py-2 rounded-xl text-xs flex items-center gap-2 border transition-colors ${
              withAudio
                ? 'bg-[#0FA3B1]/20 border-[#0FA3B1] text-[#0FA3B1]'
                : 'bg-black/30 border-slate-700 text-slate-400'
            }`}
          >
            {withAudio ? <Volume2 className="w-4 h-4 text-[#F2B705]" /> : <VolumeX className="w-4 h-4" />}
            <span>Suara Deburan Ombak: {withAudio ? 'Aktif' : 'Non-aktif'}</span>
          </button>

          <button
            onClick={() => onStart(withAudio)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#0FA3B1] to-[#F2B705] text-[#0B1F3A] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl hover:shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Mulai Presentasi</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
