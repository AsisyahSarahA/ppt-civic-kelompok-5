import React from 'react';

interface BatikOrnamentProps {
  className?: string;
  color?: string;
  opacity?: number;
}

/**
 * Batik Mega Mendung: Tradisi Cirebon pesisir yang melambangkan
 * awan sejuk pembawa hujan kemakmuran dan ombak samudra luas.
 */
export const BatikMegaMendung: React.FC<BatikOrnamentProps> = ({
  className = 'w-24 h-12',
  color = '#F2B705',
  opacity = 0.85
}) => {
  return (
    <svg
      viewBox="0 0 200 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        d="M20 75 C30 50, 60 55, 75 40 C90 25, 120 20, 135 35 C150 48, 175 45, 185 75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M35 75 C45 58, 70 60, 82 48 C95 36, 115 32, 128 44 C140 54, 160 52, 170 75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 2"
        fill="none"
      />
      <path
        d="M50 75 C60 65, 80 66, 90 56 C100 46, 112 44, 120 52 C130 60, 145 60, 155 75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Dynamic droplet/whirl accents */}
      <circle cx="105" cy="48" r="3" fill={color} />
      <circle cx="75" cy="40" r="2.5" fill={color} />
      <circle cx="135" cy="35" r="2.5" fill={color} />
    </svg>
  );
};

/**
 * Elegant Golden Batik Corner Accent for Card Frames
 */
export const BatikCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  color?: string;
}> = ({ position, className = 'w-8 h-8', color = '#F2B705' }) => {
  const rotation = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90'
  }[position];

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${rotation} pointer-events-none transition-transform`}
      aria-hidden="true"
    >
      <path d="M2 38 V12 C2 6.47715 6.47715 2 12 2 H38" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 38 V16 C8 11.5817 11.5817 8 16 8 H38" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="12" cy="12" r="2" fill={color} />
    </svg>
  );
};

/**
 * Batik Parang Lereng Maritime Divider: Garis ombak miring bertaut
 */
export const BatikParangDivider: React.FC<BatikOrnamentProps> = ({
  className = 'w-full h-4',
  color = '#0FA3B1',
  opacity = 0.7
}) => {
  return (
    <svg
      viewBox="0 0 600 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10 T250 10 T300 10 T350 10 T400 10 T450 10 T500 10 T550 10 T600 10"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <circle cx="50" cy="10" r="2.5" fill={color} />
      <circle cx="150" cy="10" r="2.5" fill={color} />
      <circle cx="250" cy="10" r="2.5" fill={color} />
      <circle cx="350" cy="10" r="2.5" fill={color} />
      <circle cx="450" cy="10" r="2.5" fill={color} />
      <circle cx="550" cy="10" r="2.5" fill={color} />
    </svg>
  );
};

/**
 * Peta Satelit Maritim Nusantara Interaktif
 * Menggunakan citra satelit HD dengan pin interaktif Selat Malaka, Selat Sunda, dan Selat Lombok.
 */
export const ArchipelagoMapGraphic: React.FC<{
  className?: string;
  theme?: 'day' | 'night';
  showBaselines?: boolean;
}> = ({ className = 'w-full h-56 sm:h-64', theme = 'night' }) => {
  const [selectedChokepoint, setSelectedChokepoint] = React.useState<string | null>(null);

  const chokepoints = [
    {
      id: 'malaka',
      name: 'Selat Malaka',
      desc: 'Jalur perdagangan energi & kontainer tersibuk dunia (>100.000 kapal/tahun). Titik temu Samudra Hindia dan Laut Natuna.',
      top: '46%',
      left: '17%'
    },
    {
      id: 'sunda',
      name: 'Selat Sunda',
      desc: 'Pintu gerbang ALKI I antara Sumatra dan Jawa, dilintasi armada tanker raksasa dan kapal niaga internasional.',
      top: '73%',
      left: '28%'
    },
    {
      id: 'lombok',
      name: 'Selat Lombok',
      desc: 'Alur laut dalam ALKI II antara Bali dan Lombok, rute primer kapal tanker sangat besar (VLCC) & kapal selam.',
      top: '77%',
      left: '52%'
    }
  ];

  return (
    <div className={`relative ${className} rounded-2xl overflow-hidden border border-[#0FA3B1]/40 shadow-2xl group`}>
      {/* Real HD Satellite Map Image */}
      <img
        src="/src/assets/images/peta_indonesia_maritim_1793952304297.jpg"
        alt="Peta Satelit Kepulauan Indonesia dan Wilayah Maritim Nusantara"
        className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />

      {/* Atmospheric gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-transparent to-black/30 pointer-events-none" />

      {/* Archipelagic Straight Baseline Overlay line across outer pins */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon
          points="8,40 18,22 36,25 60,32 88,48 95,78 72,85 52,82 30,80 14,75"
          fill="none"
          stroke="#0FA3B1"
          strokeWidth="0.8"
          strokeDasharray="2,1.5"
          className="opacity-75"
        />
      </svg>

      {/* Interactive Chokepoint Hotspot Pins */}
      {chokepoints.map((cp) => (
        <button
          key={cp.id}
          onClick={() => setSelectedChokepoint(selectedChokepoint === cp.id ? null : cp.id)}
          style={{ top: cp.top, left: cp.left }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin focus:outline-none"
          aria-label={`Lihat informasi ${cp.name}`}
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600 border-2 border-white shadow-lg" />
          </span>
          <span className="absolute left-1/2 -translate-x-1/2 top-5 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-bold text-yellow-300 whitespace-nowrap shadow backdrop-blur-sm border border-yellow-400/40">
            {cp.name}
          </span>
        </button>
      ))}

      {/* Selected Chokepoint Info Popup */}
      {selectedChokepoint && (
        <div className="absolute top-3 left-3 right-3 sm:right-auto sm:max-w-xs z-30 p-3 rounded-xl bg-[#0B1F3A]/95 border border-[#F2B705] text-white shadow-2xl backdrop-blur-md animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-xs font-bold text-[#F2B705] mb-1">
            <span>📍 {chokepoints.find((c) => c.id === selectedChokepoint)?.name}</span>
            <button
              onClick={() => setSelectedChokepoint(null)}
              className="text-slate-400 hover:text-white px-1 text-sm font-bold"
            >
              ×
            </button>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-200">
            {chokepoints.find((c) => c.id === selectedChokepoint)?.desc}
          </p>
        </div>
      )}

      {/* Bottom Map Info Strip */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
          Chokepoints Strategis Maritim
        </span>
        <span className="text-yellow-300 font-mono text-[10px]">
          Klik pin merah untuk info selat
        </span>
      </div>
    </div>
  );
};

