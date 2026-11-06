export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  category: 'Pengantar' | 'Konsep' | 'Faktor 1: Geografi' | 'Faktor 2: Geopolitik' | 'Faktor 3: Sejarah & Hukum' | 'Sintesis & Implementasi' | 'Penutup';
  speakerRole: 'Moderator' | 'Pembicara 1' | 'Pembicara 2' | 'Pembicara 3' | 'Pembicara 4';
  durationEst: string;
  notes: string;
  keyPoints?: string[];
  data?: any;
}

export type ThemeMode = 'day' | 'night' | 'auto';

export function isNightTime(date: Date = new Date()): boolean {
  const hour = date.getHours();
  return hour >= 18 || hour < 6;
}

export function getEffectiveTheme(mode: ThemeMode, date: Date = new Date()): 'day' | 'night' {
  if (mode === 'auto') {
    return isNightTime(date) ? 'night' : 'day';
  }
  return mode;
}

export function clampSlideIndex(index: number, totalSlides: number): number {
  if (index < 0) return 0;
  if (index >= totalSlides) return totalSlides - 1;
  return index;
}
