import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types/presentation';
import { oceanAudio } from '../utils/audio';
import {
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Clock,
  Volume2,
  VolumeX,
  FileText,
  Grid,
  Maximize,
  Minimize,
  Play,
  Pause,
  HelpCircle
} from 'lucide-react';

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  themeMode: ThemeMode;
  effectiveTheme: 'day' | 'night';
  onNext: () => void;
  onPrev: () => void;
  onSetThemeMode: (mode: ThemeMode) => void;
  onOpenOverview: () => void;
  isPlayingAuto: boolean;
  onToggleAutoPlay: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  themeMode,
  effectiveTheme,
  onNext,
  onPrev,
  onSetThemeMode,
  onOpenOverview,
  isPlayingAuto,
  onToggleAutoPlay
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isNight = effectiveTheme === 'night';

  const toggleAudio = async () => {
    if (isPlayingAudio) {
      oceanAudio.stop();
      setIsPlayingAudio(false);
    } else {
      oceanAudio.setMasterVolume(volume);
      const started = await oceanAudio.start();
      setIsPlayingAudio(started);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    oceanAudio.setMasterVolume(val);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <nav
      aria-label="Kontrol Navigasi Presentasi"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl transition-all duration-300"
    >
      <div
        className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl flex items-center justify-between gap-2 shadow-2xl backdrop-blur-xl border ${
          isNight
            ? 'bg-[#0B1F3A]/90 border-cyan-800/40 text-slate-100'
            : 'bg-white/95 border-slate-300 text-slate-800'
        }`}
      >
        {/* Left: Secondary Utility Buttons (Audio, Theme Mode, AutoPlay) */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Ambient Ocean Audio Button */}
          <div className="flex items-center gap-1">
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-xl transition-all cursor-pointer ${
                isPlayingAudio
                  ? 'bg-[#0FA3B1] text-white shadow-md'
                  : 'hover:bg-slate-700/20 text-slate-400 hover:text-white'
              }`}
              title={isPlayingAudio ? 'Matikan Suara Ombak' : 'Bunyikan Deburan Ombak Laut'}
              aria-label="Toggle suara deburan ombak laut"
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {isPlayingAudio && (
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-14 sm:w-16 accent-[#0FA3B1] h-1.5 cursor-pointer hidden sm:block"
                aria-label="Volume deburan ombak"
              />
            )}
          </div>

          {/* Theme Mode Selector */}
          <div className="flex items-center bg-black/20 rounded-xl p-0.5 border border-slate-700/40 text-xs">
            <button
              onClick={() => onSetThemeMode('day')}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                themeMode === 'day' ? 'bg-[#F2B705] text-slate-900 font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="Mode Siang (Matahari & Awan)"
              aria-label="Ganti ke mode siang"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSetThemeMode('night')}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                themeMode === 'night' ? 'bg-[#0FA3B1] text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="Mode Malam (Bulan & Bintang)"
              aria-label="Ganti ke mode malam"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSetThemeMode('auto')}
              className={`px-1.5 py-1 text-[10px] font-mono rounded-lg transition-all cursor-pointer ${
                themeMode === 'auto' ? 'bg-cyan-900 text-cyan-200 font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="Mode Otomatis (Mengikuti jam nyata saat ini)"
              aria-label="Ganti ke mode otomatis berdasarkan jam"
            >
              AUTO
            </button>
          </div>

          {/* Autoplay Timer */}
          <button
            onClick={onToggleAutoPlay}
            className={`p-2 rounded-xl text-xs flex items-center gap-1 transition-all cursor-pointer ${
              isPlayingAuto
                ? 'bg-amber-500/20 text-[#F2B705] border border-amber-500/40 font-bold'
                : 'hover:bg-slate-700/20 text-slate-400 hover:text-white'
            }`}
            title="Auto-play Slide (10 detik/slide)"
            aria-label="Mulai atau jeda auto-play slide"
          >
            {isPlayingAuto ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span className="hidden md:inline font-mono text-[11px]">Auto</span>
          </button>
        </div>

        {/* Center: Slide Navigator (Previous, Counter, Next) */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={onPrev}
            disabled={currentSlide === 0}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              currentSlide === 0
                ? 'opacity-30 cursor-not-allowed text-slate-500'
                : 'bg-black/20 hover:bg-[#0FA3B1] text-white'
            }`}
            aria-label="Slide sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenOverview}
            className="px-2.5 py-1 rounded-xl bg-black/20 hover:bg-black/40 border border-slate-700/40 text-xs font-mono font-bold tracking-wider text-[#F2B705] flex items-center gap-1.5 cursor-pointer"
            title="Klik untuk membuka peta seluruh slide"
            aria-label="Buka ringkasan seluruh slide"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>
              {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          </button>

          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              currentSlide === totalSlides - 1
                ? 'opacity-30 cursor-not-allowed text-slate-500'
                : 'bg-black/20 hover:bg-[#0FA3B1] text-white'
            }`}
            aria-label="Slide selanjutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Overview & Fullscreen */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={onOpenOverview}
            className="px-2.5 py-1.5 rounded-xl bg-[#0FA3B1]/20 hover:bg-[#0FA3B1]/30 text-[#0FA3B1] border border-[#0FA3B1]/40 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            title="Daftar 18 Slide"
            aria-label="Buka daftar slide"
          >
            <Grid className="w-4 h-4" />
            <span className="hidden sm:inline">Daftar Slide</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-xl hover:bg-slate-700/20 text-slate-400 hover:text-white transition-all cursor-pointer hidden sm:block"
            title={isFullscreen ? 'Keluar Fullscreen' : 'Layar Penuh (F)'}
            aria-label="Toggle mode layar penuh"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
};
