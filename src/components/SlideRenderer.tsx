import React, { useState } from 'react';
import { SlideContent } from '../types/presentation';
import { presentationMetadata } from '../data/slidesData';
import {
  BatikMegaMendung,
  BatikCorner,
  BatikParangDivider,
  ArchipelagoMapGraphic
} from './BatikOrnaments';
import {
  Anchor,
  Compass,
  ShieldCheck,
  Globe2,
  Scale,
  BookOpen,
  Award,
  Users,
  Layers,
  ChevronRight,
  Sparkles,
  MapPin,
  Flame,
  Milestone,
  CheckCircle2,
  Shield
} from 'lucide-react';

interface SlideRendererProps {
  slide: SlideContent;
  theme: 'day' | 'night';
  onNavigateToSlide?: (index: number) => void;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  slide,
  theme,
  onNavigateToSlide
}) => {
  const isNight = theme === 'night';
  const [activeAstagatra, setActiveAstagatra] = useState<'trigatra' | 'pancagatra'>('trigatra');
  const [selectedPillar, setSelectedPillar] = useState<number>(0);
  const [activeTimelineIdx, setActiveTimelineIdx] = useState<number>(5); // default Djuanda

  // Common card backdrop styling
  const cardBg = isNight
    ? 'bg-[#0B1F3A]/85 backdrop-blur-md border border-[#0FA3B1]/30 text-slate-100 shadow-2xl'
    : 'bg-[#F7F9FC]/95 backdrop-blur-md border border-slate-200 text-[#1F2937] shadow-xl';

  const headingColor = isNight ? 'text-white' : 'text-[#0B1F3A]';
  const accentGold = '#F2B705';
  const accentTeal = '#0FA3B1';

  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col justify-center min-h-[75vh] md:min-h-[80vh] px-3 sm:px-6 py-4 z-10 transition-all duration-500">
      {/* Decorative Batik Frame Corners */}
      <BatikCorner position="top-left" color={accentGold} className="absolute top-2 left-2 w-8 h-8 opacity-80" />
      <BatikCorner position="top-right" color={accentGold} className="absolute top-2 right-2 w-8 h-8 opacity-80" />
      <BatikCorner position="bottom-left" color={accentGold} className="absolute bottom-2 left-2 w-8 h-8 opacity-80" />
      <BatikCorner position="bottom-right" color={accentGold} className="absolute bottom-2 right-2 w-8 h-8 opacity-80" />

      {/* Slide Header: Clean, No Speaker/Minute Labels */}
      {slide.id !== 1 && (
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
              <span className="text-[#0FA3B1]">{slide.category}</span>
              <span className="text-slate-400">·</span>
              <span className="text-[#F2B705] font-mono">Slide {String(slide.id).padStart(2, '0')}</span>
            </div>
            <BatikMegaMendung className="w-16 h-6 hidden sm:block" color={accentGold} opacity={0.6} />
          </div>

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${headingColor} leading-tight`}>
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className={`text-sm sm:text-base mt-1 font-medium ${isNight ? 'text-slate-300' : 'text-slate-600'}`}>
              {slide.subtitle}
            </p>
          )}
          <div className="mt-2.5">
            <BatikParangDivider className="w-48 h-2" color={accentTeal} opacity={0.8} />
          </div>
        </div>
      )}

      {/* SLIDE CONTENT AREA */}
      <div className="w-full">
        {/* SLIDE 1: COVER */}
        {slide.id === 1 && (
          <div className={`p-6 sm:p-10 rounded-3xl ${cardBg} border-t-4 border-t-[#F2B705] relative overflow-hidden text-center`}>
            <div className="flex justify-center mb-3">
              <BatikMegaMendung className="w-32 h-14" color={accentGold} opacity={0.9} />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#0FA3B1]/20 text-[#0FA3B1] border border-[#0FA3B1]/40 mb-3">
              <Globe2 className="w-3.5 h-3.5" /> {slide.data.tagline}
            </div>

            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight ${headingColor} leading-tight mb-3`}>
              LAUT YANG MENYATUKAN, <br />
              <span className="text-[#F2B705] drop-shadow-md">HUKUM YANG MENEGUHKAN</span>
            </h1>

            <p className="text-base sm:text-xl font-medium max-w-3xl mx-auto text-slate-300 mb-6 italic">
              "Geografi, Geopolitik, dan Sejarah Hukum di Balik Wawasan Nusantara"
            </p>

            {/* Real HD Satellite Map of Archipelago with Chokepoints */}
            <ArchipelagoMapGraphic theme={theme} className="w-full max-w-3xl mx-auto h-48 sm:h-60 my-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mt-6 pt-4 border-t border-slate-700/50 text-xs sm:text-sm">
              <div className="space-y-1">
                <p className="text-[#F2B705] font-semibold flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> {slide.data.lecturer}
                </p>
                <p className="text-slate-400">{slide.data.prodi}</p>
              </div>

              <div>
                <p className="text-[#0FA3B1] font-semibold flex items-center gap-1.5 mb-1.5">
                  <Users className="w-4 h-4" /> Tim Penyaji (Kelompok):
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {presentationMetadata.teamMembers.map((member, i) => (
                    <span
                      key={i}
                      className="inline-block px-2.5 py-1 rounded-lg text-xs bg-slate-800/80 text-slate-200 border border-slate-700 font-medium"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2: PETA MATERI (ROADMAP) */}
        {slide.id === 2 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {slide.data.steps.map((st: any, i: number) => {
                const targetSlides = [3, 7, 9, 11, 16];
                return (
                  <button
                    key={i}
                    onClick={() => onNavigateToSlide && onNavigateToSlide(targetSlides[i] - 1)}
                    className={`p-4 rounded-2xl text-left transition-all duration-300 hover:scale-[1.03] group relative overflow-hidden cursor-pointer ${
                      isNight
                        ? 'bg-[#0B1F3A]/90 hover:bg-[#0E284D] border border-cyan-800/50 hover:border-[#F2B705]'
                        : 'bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0FA3B1]'
                    } shadow-md`}
                  >
                    <div className="text-2xl font-black text-[#F2B705] mb-2 font-mono group-hover:translate-x-1 transition-transform">
                      {st.num}
                    </div>
                    <h3 className={`text-sm sm:text-base font-bold ${headingColor} mb-1 flex items-center justify-between`}>
                      {st.title}
                      <ChevronRight className="w-4 h-4 text-[#0FA3B1] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className={`text-xs ${isNight ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                      {st.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className={`p-4 rounded-xl ${cardBg} flex items-center justify-between text-xs sm:text-sm`}>
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#0FA3B1] shrink-0" />
                <span>
                  Alur penyajian terbagi atas 5 pilar tematik yang saling terintegrasi secara holistik.
                </span>
              </div>
              <span className="font-mono text-xs text-[#F2B705] uppercase tracking-wider shrink-0 hidden sm:inline">
                Klik kartu untuk lompat bab
              </span>
            </div>
          </div>
        )}

        {/* SLIDE 3: PERTANYAAN PEMBUKA */}
        {slide.id === 3 && (
          <div className="space-y-6">
            <div className={`p-8 sm:p-12 rounded-3xl ${cardBg} text-center relative overflow-hidden border border-[#F2B705]/40`}>
              <div className="text-xs uppercase font-mono tracking-widest text-[#0FA3B1] mb-3">
                Pertanyaan Pemantik Refleksi Kebangsaan
              </div>
              <blockquote className="text-2xl sm:text-4xl font-extrabold text-[#F2B705] leading-relaxed max-w-4xl mx-auto">
                "{slide.data.mainQuote}"
              </blockquote>
              <div className="my-6 w-24 h-1 bg-[#0FA3B1] mx-auto rounded-full" />
              <div className="inline-block px-6 py-2.5 rounded-full bg-[#0FA3B1]/20 border border-[#0FA3B1] text-lg sm:text-2xl font-bold text-white shadow-lg">
                ✨ {slide.data.answer}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {slide.data.stats.map((s: any, idx: number) => (
                <div key={idx} className={`p-4 rounded-xl ${cardBg} text-center`}>
                  <div className="text-xl sm:text-3xl font-black text-[#F2B705] font-mono">{s.val}</div>
                  <div className={`text-xs sm:text-sm mt-1 font-medium ${isNight ? 'text-slate-300' : 'text-slate-600'}`}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 4: APA ITU WAWASAN NUSANTARA */}
        {slide.id === 4 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className={`lg:col-span-5 p-6 rounded-2xl ${cardBg} flex flex-col justify-between border-t-4 border-t-[#0FA3B1]`}>
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F2B705] mb-2">
                  <BookOpen className="w-4 h-4" /> Doktrin Resmi Nasional
                </div>
                <h3 className={`text-lg font-bold ${headingColor} mb-3`}>
                  Definisi Menurut {slide.data.source}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed italic ${isNight ? 'text-slate-200' : 'text-slate-700'}`}>
                  "{slide.data.text}"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700/40 text-xs font-semibold text-[#0FA3B1]">
                Kata Kunci Pokok: <span className="text-[#F2B705]">"Cara Pandang & Sikap Bangsa"</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Lima Ciri Karakteristik Wawasan Nusantara:
              </h4>
              {slide.data.features.map((feat: any, i: number) => (
                <div
                  key={i}
                  className={`p-3.5 rounded-xl ${cardBg} flex items-start gap-3 transition-transform hover:translate-x-1`}
                >
                  <div className="w-7 h-7 rounded-lg bg-[#0FA3B1]/20 text-[#0FA3B1] flex items-center justify-center font-bold font-mono text-sm shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h5 className={`text-sm font-bold ${headingColor}`}>{feat.title}</h5>
                    <p className={`text-xs ${isNight ? 'text-slate-300' : 'text-slate-600'} mt-0.5`}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 5: KEDUDUKAN, FUNGSI, DAN TUJUAN */}
        {slide.id === 5 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Tangga 5 Tingkat */}
            <div className={`lg:col-span-5 p-5 rounded-2xl ${cardBg}`}>
              <h3 className={`text-sm font-mono uppercase tracking-wider text-[#F2B705] mb-3 flex items-center gap-1.5`}>
                <Layers className="w-4 h-4" /> Kedudukan (Tangga 5 Tingkat)
              </h3>
              <div className="space-y-2">
                {slide.data.levels.map((lvl: any, i: number) => (
                  <div
                    key={i}
                    className={`p-2.5 rounded-lg border transition-all ${
                      i === 2
                        ? 'bg-[#F2B705]/20 border-[#F2B705] text-[#F2B705] font-bold shadow-sm'
                        : isNight
                        ? 'bg-slate-900/60 border-slate-700/60 text-slate-300'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-400">{lvl.rank}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 font-mono">
                        {lvl.badge}
                      </span>
                    </div>
                    <div className="text-sm font-semibold">{lvl.name}</div>
                    <div className="text-[11px] opacity-80">{lvl.role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fungsi & Tujuan */}
            <div className="lg:col-span-7 space-y-4">
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#0FA3B1] mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> 4 Fungsi Utama
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {slide.data.functions.map((fn: string, idx: number) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-black/20 border border-slate-700/40 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F2B705] shrink-0" />
                      <span>{fn}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-4 rounded-xl ${cardBg} border-l-4 border-l-[#F2B705]`}>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F2B705] mb-2">
                  Dwi-Tujuan Nasional (Tujuan ke Dalam & ke Luar)
                </h4>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-[#0FA3B1] block mb-0.5">Tujuan ke Dalam:</span>
                    <p className={isNight ? 'text-slate-300' : 'text-slate-600'}>
                      {slide.data.goals.internal}
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-[#F2B705] block mb-0.5">Tujuan ke Luar:</span>
                    <p className={isNight ? 'text-slate-300' : 'text-slate-600'}>
                      {slide.data.goals.external}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 6: TIGA FAKTOR PEMBENTUK */}
        {slide.id === 6 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {slide.data.pillars.map((pil: any, i: number) => (
                <div
                  key={i}
                  onClick={() => setSelectedPillar(i)}
                  className={`p-6 rounded-2xl ${cardBg} relative overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer border-t-4 ${
                    i === 0 ? 'border-t-[#0FA3B1]' : i === 1 ? 'border-t-[#F2B705]' : 'border-t-[#C8102E]'
                  } ${selectedPillar === i ? 'ring-2 ring-[#F2B705]' : ''}`}
                >
                  <div className="text-4xl font-black font-mono text-slate-500/20 absolute right-4 top-4">
                    {pil.num}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#0FA3B1] mb-1">
                    Pilar {pil.num}
                  </div>
                  <h3 className={`text-lg sm:text-xl font-extrabold ${headingColor} mb-2`}>
                    {pil.name}
                  </h3>
                  <div className="inline-block px-2.5 py-1 rounded bg-[#F2B705]/20 text-[#F2B705] text-xs font-bold font-mono mb-3">
                    {pil.code}
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isNight ? 'text-slate-300' : 'text-slate-600'}`}>
                    {pil.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3 text-center text-xs text-slate-400">
              Setiap pilar saling menopang satu kesatuan Wawasan Nusantara: Wilayah memberi ruang, Geopolitik memberi strategi, Hukum memberi legitimasi.
            </div>
          </div>
        )}

        {/* SLIDE 7: FAKTOR 1: LETAK & BENTUK WILAYAH */}
        {slide.id === 7 && (
          <div className="space-y-4">
            {/* Real Satellite Map of Indonesian Archipelago with Interactive Pins */}
            <ArchipelagoMapGraphic theme={theme} className="w-full h-56 sm:h-72" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className="font-bold text-[#F2B705] mb-2 flex items-center gap-1.5">
                  <Compass className="w-4 h-4" /> Posisi Silang Dunia
                </h4>
                <ul className="space-y-1 text-slate-300">
                  <li>• Di antara 2 Benua: Asia & Australia</li>
                  <li>• Di antara 2 Samudra: Hindia & Pasifik</li>
                  <li>• Koordinat: 6°LU–11°LS & 95°–141°BT</li>
                </ul>
              </div>

              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className="font-bold text-[#0FA3B1] mb-2 flex items-center gap-1.5">
                  <Anchor className="w-4 h-4" /> Jalur & Selat Strategis
                </h4>
                <ul className="space-y-1 text-slate-300">
                  <li>• Selat Malaka: Jalur perdagangan tersibuk</li>
                  <li>• Selat Sunda & Lombok: Rute laut dalam</li>
                  <li>• Dilintasi 40% armada niaga dunia</li>
                </ul>
              </div>

              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> Karakteristik & Perbatasan
                </h4>
                <ul className="space-y-1 text-slate-300">
                  <li>• {'>'}17.000 Pulau: Laut = Penghubung!</li>
                  <li>• Batas Darat: Malaysia, PNG, Timor Leste</li>
                  <li>• Peluang ekonomi bahari & kerawanan</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 8: FAKTOR 1: ALAM, PENDUDUK, DAN PENGARUHNYA */}
        {slide.id === 8 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className={`lg:col-span-4 p-5 rounded-2xl ${cardBg} space-y-4`}>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F2B705] mb-1 flex items-center gap-1.5">
                  <Flame className="w-4 h-4" /> Sumber Daya Alam
                </h4>
                <p className={`text-xs ${isNight ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                  Iklim tropis maritim, Ring of Fire (tanah vulkanis subur), cadangan tambang, gas/minyak, serta perikanan berlimpah yang dijamin dalam <strong className="text-[#F2B705]">Pasal 33 UUD 1945</strong>.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/40">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#0FA3B1] mb-1 flex items-center gap-1.5">
                  <Users className="w-4 h-4" /> Dinamika Penduduk
                </h4>
                <p className={`text-xs ${isNight ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                  Jumlah penduduk mencapai <strong className="text-[#F2B705]">{'>'}270 juta jiwa</strong> (SP 2020), distribusi padat di Jawa (56%), serta keberagaman <strong className="text-[#0FA3B1]">1.340 suku bangsa</strong> (SP 2010).
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className={`p-5 rounded-2xl ${cardBg}`}>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F2B705] mb-3">
                  Matriks Ringkas: Karakteristik Geografis vs Implikasi Kebijakan
                </h4>
                <div className="space-y-2.5">
                  {slide.data.implications.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-black/20 border border-slate-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                    >
                      <div className="font-bold text-[#0FA3B1] sm:w-2/5">{item.char}</div>
                      <div className="hidden sm:block text-slate-500">→</div>
                      <div className={`sm:w-3/5 ${isNight ? 'text-slate-200' : 'text-slate-700'}`}>
                        {item.imp}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 9: FAKTOR 2: GEOPOLITIK & GEOSTRATEGI */}
        {slide.id === 9 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-5 rounded-2xl ${cardBg} border-l-4 border-l-[#0FA3B1]`}>
                <div className="text-xs font-mono uppercase text-[#0FA3B1] mb-1">
                  Paradigma: Cara Berpikir
                </div>
                <h3 className={`text-xl font-bold ${headingColor} mb-1`}>Geopolitik</h3>
                <p className={`text-xs ${isNight ? 'text-slate-300' : 'text-slate-600'} mb-2`}>
                  Hubungan kondisi geografis dengan kebijakan kekuasaan negara (istilah Rudolf Kjellén).
                </p>
                <div className="px-3 py-1.5 rounded-lg bg-[#0FA3B1]/20 text-[#0FA3B1] text-xs font-bold inline-block">
                  Wujud di Indonesia: Wawasan Nusantara
                </div>
              </div>

              <div className={`p-5 rounded-2xl ${cardBg} border-l-4 border-l-[#F2B705]`}>
                <div className="text-xs font-mono uppercase text-[#F2B705] mb-1">
                  Eksekusi: Cara Bertindak
                </div>
                <h3 className={`text-xl font-bold ${headingColor} mb-1`}>Geostrategi</h3>
                <p className={`text-xs ${isNight ? 'text-slate-300' : 'text-slate-600'} mb-2`}>
                  Penerapan geopolitik menjadi strategi terpadu mencapai tujuan nasional.
                </p>
                <div className="px-3 py-1.5 rounded-lg bg-[#F2B705]/20 text-[#F2B705] text-xs font-bold inline-block">
                  Wujud di Indonesia: Ketahanan Nasional
                </div>
              </div>
            </div>

            {/* ASTAGATRA INTERACTIVE TABS */}
            <div className={`p-5 rounded-2xl ${cardBg}`}>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Doktrin Astagatra (8 Aspek Kehidupan Nasional):
                </h4>
                <div className="flex rounded-lg overflow-hidden border border-slate-700 p-0.5 bg-black/30 text-xs">
                  <button
                    onClick={() => setActiveAstagatra('trigatra')}
                    className={`px-3 py-1 font-semibold rounded transition-all cursor-pointer ${
                      activeAstagatra === 'trigatra'
                        ? 'bg-[#0FA3B1] text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Trigatra (3 Aspek Alamiah)
                  </button>
                  <button
                    onClick={() => setActiveAstagatra('pancagatra')}
                    className={`px-3 py-1 font-semibold rounded transition-all cursor-pointer ${
                      activeAstagatra === 'pancagatra'
                        ? 'bg-[#F2B705] text-slate-900 shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Pancagatra (5 Aspek Sosial)
                  </button>
                </div>
              </div>

              {activeAstagatra === 'trigatra' ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {slide.data.astagatra.trigatra.map((g: any, idx: number) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-black/25 border border-cyan-800/40">
                      <div className="text-xs font-mono text-[#0FA3B1] font-bold">Gatra 0{idx + 1}</div>
                      <div className="text-sm font-bold text-white mt-0.5">{g.name}</div>
                      <div className="text-xs text-slate-300 mt-1">{g.desc}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {slide.data.astagatra.pancagatra.map((g: any, idx: number) => (
                    <div key={idx} className="p-3 rounded-xl bg-black/25 border border-amber-800/40">
                      <div className="text-xs font-mono text-[#F2B705] font-bold">Gatra 0{idx + 4}</div>
                      <div className="text-sm font-bold text-white mt-0.5">{g.name}</div>
                      <div className="text-xs text-slate-300 mt-1">{g.desc}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* SLIDE 10: TEORI KLASIK VS GEOPOLITIK INDONESIA */}
        {slide.id === 10 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-7 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                7 Teori Geopolitik Klasik Barat (Cenderung Ekspansionis):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[340px] overflow-y-auto pr-1">
                {slide.data.classicalTheorists.map((t: any, i: number) => (
                  <div key={i} className={`p-3 rounded-xl ${cardBg} text-xs`}>
                    <div className="font-bold text-[#F2B705]">{t.name}</div>
                    <div className="text-[#0FA3B1] font-medium text-[11px] mb-0.5">{t.concept}</div>
                    <p className={`text-[11px] ${isNight ? 'text-slate-300' : 'text-slate-600'}`}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`lg:col-span-5 p-6 rounded-2xl ${cardBg} flex flex-col justify-between border-2 border-[#0FA3B1]`}>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0FA3B1]/20 text-[#0FA3B1] mb-3">
                  <ShieldCheck className="w-4 h-4" /> Paradigma Indonesia
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#F2B705] mb-2">
                  {slide.data.indonesiaPillars.stance}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${isNight ? 'text-slate-200' : 'text-slate-700'}`}>
                  {slide.data.indonesiaPillars.philosophy}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/50 text-xs font-semibold text-slate-400 italic">
                "Bangsa Indonesia cinta damai, tetapi lebih cinta kemerdekaan."
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 11: LINIMASA PERKEMBANGAN WILAYAH */}
        {slide.id === 11 && (
          <div className="space-y-4">
            <div className={`p-5 rounded-2xl ${cardBg}`}>
              <div className="flex items-center gap-2 text-xs font-mono text-[#F2B705] mb-4">
                <Milestone className="w-4 h-4" /> Linimasa Sejarah dari Kemaritiman Kuno hingga Hukum Modern
              </div>

              <div className="relative border-l-2 border-[#0FA3B1]/50 ml-4 pl-4 sm:pl-6 space-y-4">
                {slide.data.milestones.map((m: any, i: number) => (
                  <div
                    key={i}
                    onClick={() => setActiveTimelineIdx(i)}
                    className="relative group cursor-pointer"
                  >
                    <div
                      className={`absolute -left-[23px] sm:-left-[31px] top-1 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                        m.highlight || activeTimelineIdx === i
                          ? 'bg-[#F2B705] border-white shadow-lg scale-110'
                          : 'bg-[#0B1F3A] border-[#0FA3B1]'
                      }`}
                    />
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <span className={`text-xs font-mono font-bold ${m.highlight || activeTimelineIdx === i ? 'text-[#F2B705] text-sm' : 'text-[#0FA3B1]'}`}>
                        {m.year}
                      </span>
                      <h4 className={`text-sm font-bold ${m.highlight || activeTimelineIdx === i ? 'text-[#F2B705]' : headingColor}`}>
                        {m.event}
                      </h4>
                    </div>
                    <p className={`text-xs ${isNight ? 'text-slate-300' : 'text-slate-600'} mt-0.5`}>
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 12: TITIK BALIK: DARI TZMKO KE DJUANDA & UNCLOS */}
        {slide.id === 12 && (
          <div className="space-y-4">
            {/* Visual Hero: Antique Maritime Nautical Chart of UNCLOS and Djuanda */}
            <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden border border-[#F2B705]/40 shadow-xl group">
              <img
                src="/src/assets/images/deklarasi_djuanda_unclos_1793952306121.jpg"
                alt="Peta Maritim Deklarasi Djuanda dan Konvensi UNCLOS 1982"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-black/30" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-bold text-[#F2B705] bg-black/60 px-3 py-1 rounded-lg backdrop-blur-sm">
                  📜 Piagam Diplomasi Hukum Laut Teritorial Indonesia
                </span>
                <span className="text-[11px] font-mono text-cyan-300 hidden sm:inline">
                  Archipelagic State · UNCLOS 1982
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Sebelum */}
              <div className={`p-5 rounded-2xl ${cardBg} border-t-4 border-t-[#C8102E]`}>
                <div className="text-xs font-mono uppercase text-[#C8102E] font-bold mb-1">
                  SEBELUM 1957
                </div>
                <h3 className={`text-lg font-bold ${headingColor} mb-2`}>
                  {slide.data.before.title}
                </h3>
                <div className="p-2.5 rounded-lg bg-red-950/30 border border-red-800/40 text-xs text-red-200 mb-3">
                  <strong>Aturan:</strong> {slide.data.before.distance}
                </div>
                <p className={`text-xs sm:text-sm ${isNight ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                  {slide.data.before.impact}
                </p>
                <div className="mt-3 text-xs font-bold text-red-400">
                  ⚠️ Status: {slide.data.before.visualLabel}
                </div>
              </div>

              {/* Sesudah */}
              <div className={`p-5 rounded-2xl ${cardBg} border-t-4 border-t-[#F2B705]`}>
                <div className="text-xs font-mono uppercase text-[#F2B705] font-bold mb-1">
                  SESUDAH 1957 – SEKARANG
                </div>
                <h3 className={`text-lg font-bold ${headingColor} mb-2`}>
                  {slide.data.after.title}
                </h3>
                <div className="p-2.5 rounded-lg bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200 mb-3">
                  <strong>Aturan:</strong> {slide.data.after.distance}
                </div>
                <p className={`text-xs sm:text-sm ${isNight ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                  {slide.data.after.impact}
                </p>
                <div className="mt-3 text-xs font-bold text-[#F2B705]">
                  ⚓ Status: {slide.data.after.visualLabel}
                </div>
              </div>
            </div>

            {/* Tokoh Pejuang Diplomasi Laut */}
            <div className={`p-4 rounded-xl ${cardBg} flex flex-col sm:flex-row items-center justify-between gap-3 text-xs`}>
              <div className="font-bold text-[#0FA3B1] shrink-0">Tokoh Kunci Diplomasi Hukum Laut:</div>
              <div className="flex flex-wrap gap-2">
                {slide.data.figures.map((fig: any, i: number) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-black/30 border border-slate-700 text-slate-200">
                    <strong className="text-[#F2B705]">{fig.name}</strong> · {fig.role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 13: PERKEMBANGAN WILAYAH PASCA-KEMERDEKAAN */}
        {slide.id === 13 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {slide.data.cases.map((c: any, i: number) => (
                <div key={i} className={`p-5 rounded-2xl ${cardBg} border-t-4 border-t-[#0FA3B1]`}>
                  <h3 className={`text-lg font-bold ${headingColor} mb-1`}>{c.region}</h3>
                  <div className="text-xs font-semibold text-[#F2B705] mb-2">{c.status}</div>
                  <p className={`text-xs leading-relaxed ${isNight ? 'text-slate-300' : 'text-slate-600'}`}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className={`p-5 rounded-2xl ${cardBg} border-2 border-[#F2B705] relative overflow-hidden`}>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#F2B705] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#F2B705] font-bold">
                    Pelajaran Berharga bagi Bangsa
                  </h4>
                  <p className={`text-xs sm:text-sm mt-1 font-semibold ${isNight ? 'text-slate-100' : 'text-slate-800'}`}>
                    {slide.data.goldenLesson}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 14: DASAR HUKUM WILAYAH & WAWASAN NUSANTARA */}
        {slide.id === 14 && (
          <div className="space-y-4">
            <div className={`p-5 rounded-2xl ${cardBg}`}>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#0FA3B1] mb-3 flex items-center gap-2">
                <Scale className="w-4 h-4" /> Lapisan Hierarki Regulasi Hukum Teritorial
              </h4>
              <div className="space-y-2">
                {slide.data.layers.map((l: any, i: number) => (
                  <div key={i} className="p-2.5 rounded-xl bg-black/25 border border-slate-700/50 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs">
                    <span className="font-mono text-[#F2B705] font-bold sm:w-1/4 shrink-0">{l.level}</span>
                    <span className={`sm:w-3/4 ${isNight ? 'text-slate-200' : 'text-slate-700'}`}>{l.item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-950/25 border border-amber-800/40 text-xs text-amber-200 flex items-center gap-2">
              <span className="font-bold">Catatan Kritis:</span>
              <span>GBHN sudah tidak berlaku sejak amandemen konstitusi, namun substansi Wawasan Nusantara telah diangkat menjadi hukum dasar negara lewat Pasal 25A UUD NRI 1945.</span>
            </div>
          </div>
        )}

        {/* SLIDE 15: KETERKAITAN ANTARFAKTOR */}
        {slide.id === 15 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {slide.data.factors.map((f: any, i: number) => (
                <div key={i} className={`p-4 rounded-xl ${cardBg} border-t-2 border-t-[#0FA3B1]`}>
                  <div className="text-xs font-mono text-[#F2B705] font-bold mb-1">
                    Fungsi: {f.role}
                  </div>
                  <h4 className={`text-base font-bold ${headingColor} mb-1`}>{f.name}</h4>
                  <p className={`text-xs ${isNight ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className={`p-6 rounded-2xl ${cardBg} text-center border border-[#F2B705]/50 relative`}>
              <div className="text-xs font-mono uppercase text-[#0FA3B1] tracking-widest mb-2">
                Sintesis Pemersatu Bangsa
              </div>
              <blockquote className="text-base sm:text-lg font-bold italic text-[#F2B705] max-w-3xl mx-auto leading-relaxed">
                "{slide.data.goldenQuote}"
              </blockquote>
            </div>
          </div>
        )}

        {/* SLIDE 16: PENERAPAN SEHARI-HARI */}
        {slide.id === 16 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {slide.data.realms.map((r: any, i: number) => (
                <div key={i} className={`p-5 rounded-2xl ${cardBg} transition-transform hover:scale-[1.01]`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#0FA3B1]/20 text-[#0FA3B1] flex items-center justify-center font-bold text-xs font-mono">
                      0{i + 1}
                    </span>
                    <h3 className={`text-base font-bold ${headingColor}`}>Lingkup {r.realm}</h3>
                  </div>
                  <h4 className="text-xs font-bold text-[#F2B705] mb-1">{r.action}</h4>
                  <p className={`text-xs sm:text-sm ${isNight ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-[#0FA3B1]/20 border border-[#0FA3B1]/40 text-xs sm:text-sm text-center text-slate-200">
              💡 <strong>Pesan Mahasiswa:</strong> "Sebelum menekan tombol bagikan di media sosial, tanyakan dulu: Apakah informasi ini benar dan menumbuhkan persatuan?"
            </div>
          </div>
        )}

        {/* SLIDE 17: TANTANGAN MASA KINI */}
        {slide.id === 17 && (
          <div className="space-y-4">
            {/* Visual Hero: Lighthouse on Outer Border Island (Natuna Sea) */}
            <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden border border-[#C8102E]/40 shadow-xl group">
              <img
                src="/src/assets/images/mercusuar_pulau_terluar_1793952306882.jpg"
                alt="Mercusuar Penjaga Kedaulatan Pulau Terluar di Laut Natuna"
                className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-black/30" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-bold text-red-300 bg-black/60 px-3 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-red-400" /> Pengamanan 111 Pulau-Pulau Kecil Terluar (PPKT) & Natuna
                </span>
                <span className="text-[11px] font-mono text-slate-300 hidden sm:inline">
                  Kedaulatan Maritim NKRI
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {slide.data.challenges.map((ch: any, i: number) => (
                <div key={i} className={`p-4 rounded-xl ${cardBg} flex flex-col justify-between border-t-2 border-t-[#C8102E]`}>
                  <div>
                    <div className="text-xs font-mono text-[#F2B705] font-bold mb-1">
                      Tantangan 0{i + 1}
                    </div>
                    <h4 className={`text-sm font-bold ${headingColor} mb-1`}>{ch.title}</h4>
                    <span className="inline-block px-1.5 py-0.5 rounded bg-red-950/40 text-red-300 text-[10px] font-mono mb-2">
                      {ch.highlight}
                    </span>
                    <p className={`text-xs ${isNight ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                      {ch.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 18: KESIMPULAN, SARAN, DAN PENUTUP */}
        {slide.id === 18 && (
          <div className="space-y-4 text-center">
            <div className={`p-6 sm:p-8 rounded-3xl ${cardBg} border-t-4 border-t-[#F2B705]`}>
              <div className="flex justify-center mb-2">
                <BatikMegaMendung className="w-24 h-10" color={accentGold} opacity={0.8} />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#F2B705] mb-4">
                Tiga Kesimpulan Utama
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left mb-6">
                {slide.data.conclusions.map((c: string, idx: number) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/25 border border-slate-700/60 text-xs sm:text-sm text-slate-200">
                    <span className="font-mono text-[#0FA3B1] font-bold block mb-1">0{idx + 1}.</span>
                    {c}
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#0FA3B1]/15 border border-[#0FA3B1]/30 text-left mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#0FA3B1] font-bold mb-2">
                  Tiga Saran Strategis Mahasiswa:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-300">
                  {slide.data.recommendations.map((rec: any, idx: number) => (
                    <div key={idx}>
                      <strong className="text-[#F2B705] block">{rec.label}:</strong>
                      {rec.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="text-2xl sm:text-4xl font-extrabold text-[#F2B705] tracking-tight">
                  {slide.data.closingCta}
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  Terima kasih atas perhatian Dosen Pengampu & Rekan-rekan Mahasiswa Politeknik LP3I Tasikmalaya.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
