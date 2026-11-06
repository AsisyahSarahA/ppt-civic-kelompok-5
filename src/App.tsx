import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { slides, presentationMetadata } from './data/slidesData';
import { ThemeMode, getEffectiveTheme, clampSlideIndex } from './types/presentation';
import { OceanCanvas } from './components/OceanCanvas';
import { SlideRenderer } from './components/SlideRenderer';
import { NavigationControls } from './components/NavigationControls';
import { SlideOverviewDrawer } from './components/SlideOverviewDrawer';
import { SplashScreen } from './components/SplashScreen';
import { oceanAudio } from './utils/audio';
import { Compass, BookOpen, RotateCcw } from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [themeMode, setThemeMode] = useState<ThemeMode>('auto');
  const [effectiveTheme, setEffectiveTheme] = useState<'day' | 'night'>(() =>
    getEffectiveTheme('auto')
  );
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const autoPlayTimerRef = useRef<number | null>(null);

  // Sync theme mode with local time or manual override
  useEffect(() => {
    const updateTheme = () => {
      const eff = getEffectiveTheme(themeMode);
      setEffectiveTheme(eff);
      if (eff === 'night') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    updateTheme();

    const interval = setInterval(updateTheme, 60000);
    return () => clearInterval(interval);
  }, [themeMode]);

  // Slide navigation handlers with direction for motion
  const goToNextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlideIndex((prev) => clampSlideIndex(prev + 1, slides.length));
  }, []);

  const goToPrevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlideIndex((prev) => clampSlideIndex(prev - 1, slides.length));
  }, []);

  const jumpToSlide = useCallback((index: number) => {
    setDirection(index >= currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(clampSlideIndex(index, slides.length));
  }, [currentSlideIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showSplash) {
        if (e.key === 'Enter' || e.key === ' ') {
          setShowSplash(false);
        }
        return;
      }

      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        jumpToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        jumpToSlide(slides.length - 1);
      } else if (e.key === 'o' || e.key === 'O') {
        e.preventDefault();
        setIsOverviewOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSplash, goToNextSlide, goToPrevSlide, jumpToSlide]);

  // Touch Swipe for Mobile Devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX < -50) {
      goToNextSlide();
    } else if (deltaX > 50) {
      goToPrevSlide();
    }
    touchStartX.current = null;
  };

  // Autoplay loop
  useEffect(() => {
    if (isPlayingAuto && !showSplash) {
      autoPlayTimerRef.current = window.setInterval(() => {
        setCurrentSlideIndex((prev) => {
          if (prev >= slides.length - 1) {
            setIsPlayingAuto(false);
            return prev;
          }
          setDirection(1);
          return prev + 1;
        });
      }, 10000);
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isPlayingAuto, showSplash]);

  const handleStartFromSplash = (enableAudio: boolean) => {
    setShowSplash(false);
    if (enableAudio) {
      oceanAudio.start();
    }
  };

  const currentSlide = slides[currentSlideIndex];
  const progressPercent = ((currentSlideIndex + 1) / slides.length) * 100;

  // Slide motion animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: 'easeOut' as const
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const
      }
    })
  };

  return (
    <div
      className={`relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden transition-colors duration-1000 ${
        effectiveTheme === 'night' ? 'text-slate-100' : 'text-slate-900'
      }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Animated SplashScreen Modal */}
      <AnimatePresence>
        {showSplash && <SplashScreen onStart={handleStartFromSplash} />}
      </AnimatePresence>

      {/* Dynamic Animated Ocean Waves & Sky Canvas */}
      <OceanCanvas theme={effectiveTheme} />

      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#0FA3B1] via-[#F2B705] to-[#C8102E] z-50 transition-all duration-300"
        style={{ width: `${progressPercent}%` }}
        role="progressbar"
        aria-valuenow={currentSlideIndex + 1}
        aria-valuemin={1}
        aria-valuemax={slides.length}
        aria-label="Progress slide presentasi"
      />

      {/* Top Header Bar */}
      <header className="relative z-30 w-full px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 border-b border-white/10 backdrop-blur-md bg-black/20">
        {/* Zone 1: Wordmark */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0FA3B1] to-[#0B1F3A] flex items-center justify-center text-[#F2B705] shadow-md border border-[#F2B705]/40">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white whitespace-nowrap block leading-tight">
              WAWASAN NUSANTARA
            </span>
            <span className="text-[10px] text-[#0FA3B1] font-mono tracking-wider hidden sm:block">
              {presentationMetadata.course} · LP3I Tasikmalaya
            </span>
          </div>
        </div>

        {/* Zone 2: Slide Navigation Track */}
        <div className="hidden md:flex items-center gap-4 text-xs font-medium text-slate-300">
          <span className="text-[#F2B705] font-semibold">{currentSlide.category}</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-200 line-clamp-1 max-w-sm">{currentSlide.title}</span>
        </div>

        {/* Zone 3: Presenter Action Tools */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowSplash(true)}
            className="px-2.5 py-1.5 rounded-lg bg-black/30 hover:bg-slate-800 text-xs text-slate-300 border border-slate-700/60 flex items-center gap-1.5 transition-all cursor-pointer"
            title="Kembali ke SplashScreen Intro"
            aria-label="Buka SplashScreen intro"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Intro</span>
          </button>

          <button
            onClick={() => setIsOverviewOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-[#0FA3B1] hover:bg-[#0d8c99] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            aria-label="Buka daftar slide"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Slide {currentSlideIndex + 1}/{slides.length}</span>
          </button>
        </div>
      </header>

      {/* Main Slide Stage with Motion Transition */}
      <main className="relative z-20 flex-1 flex items-center justify-center py-6 pb-24 sm:pb-20 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            <SlideRenderer
              slide={currentSlide}
              theme={effectiveTheme}
              onNavigateToSlide={jumpToSlide}
            />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Bottom Navigation Controls Dock */}
      <NavigationControls
        currentSlide={currentSlideIndex}
        totalSlides={slides.length}
        themeMode={themeMode}
        effectiveTheme={effectiveTheme}
        onNext={goToNextSlide}
        onPrev={goToPrevSlide}
        onSetThemeMode={setThemeMode}
        onOpenOverview={() => setIsOverviewOpen(true)}
        isPlayingAuto={isPlayingAuto}
        onToggleAutoPlay={() => setIsPlayingAuto((prev) => !prev)}
      />

      {/* Slide Overview Grid Drawer */}
      <SlideOverviewDrawer
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        slides={slides}
        currentSlide={currentSlideIndex}
        onSelectSlide={jumpToSlide}
      />
    </div>
  );
}
