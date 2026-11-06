import { SlideContent } from '../types/presentation';

export const presentationMetadata = {
  course: 'Civic (Pendidikan Kewarganegaraan)',
  lecturer: 'Dede Rahayu, S.Sos., M.Pd',
  institution: 'Politeknik LP3I Kampus Tasikmalaya',
  department: 'Program Studi Manajemen Informatika',
  year: '2026',
  teamMembers: [
    'Asisyah Sarah Azahra',
    'Rayi Dwika Nugraha',
    'Muhamad Parhan Abdillah',
    'Muhammad Thoriq Alkautsar'
  ],
  duration: '15–20 Menit',
  totalSlides: 18
};

export const slides: SlideContent[] = [
  {
    id: 1,
    title: 'LAUT YANG MENYATUKAN, HUKUM YANG MENEGUHKAN',
    subtitle: 'Geografi, Geopolitik, dan Sejarah Hukum di Balik Wawasan Nusantara',
    category: 'Pengantar',
    speakerRole: 'Moderator',
    durationEst: '±1 menit',
    notes: `Assalamu'alaikum warahmatullahi wabarakatuh, selamat pagi/siang/sore, Ibu Dede Rahayu dan teman-teman semua!

Saya [nama moderator], dan hari ini saya akan menjadi moderator untuk presentasi kelompok kami. Bersama saya ada empat pembicara: [nama P1], [nama P2], [nama P3], dan [nama P4].

Judul kami hari ini adalah "Laut yang Menyatukan, Hukum yang Meneguhkan". Maksudnya begini: laut yang menyatukan menggambarkan faktor geografis dan Deklarasi Djuanda, sedangkan hukum yang meneguhkan menggambarkan UNCLOS 1982 yang membuat wilayah kita diakui dunia. Semuanya berkaitan dengan Wawasan Nusantara.

Yuk, kita mulai!`,
    keyPoints: [
      'Representasi faktor geografis & Deklarasi Djuanda 1957 (Laut menyatukan)',
      'Representasi UNCLOS 1982 & dasar hukum konstitusional (Hukum meneguhkan)',
      'Kolaborasi Tim Politeknik LP3I Tasikmalaya 2026'
    ],
    data: {
      type: 'cover',
      tagline: 'Mata Kuliah Civic · Politeknik Kampus LP3I Tasikmalaya',
      lecturer: 'Dosen Pengampu: Dede Rahayu, S.Sos., M.Pd',
      prodi: 'Program Studi Manajemen Informatika · Tahun Akademik 2026'
    }
  },
  {
    id: 2,
    title: 'PETA MATERI PRESENTASI',
    subtitle: 'Lima Bagian Perjalanan Memahami Landasan Wawasan Nusantara',
    category: 'Pengantar',
    speakerRole: 'Moderator',
    durationEst: '±1 menit',
    notes: `Supaya tidak tersesat, ini peta perjalanan kita. Ada lima bagian.

Pertama, konsep Wawasan Nusantara.
Kedua, faktor geografis.
Ketiga, geopolitik dan geostrategi.
Keempat, perkembangan wilayah dan dasar hukum.
Kelima, penerapan dan tantangan di kehidupan kita sehari-hari.

Ringkasnya, kita mulai dari "apa itu", lalu "kenapa bisa terbentuk", dan terakhir "apa hubungannya dengan kita".`,
    keyPoints: [
      'Bagian 1: Konsep & Hakekat Wawasan Nusantara',
      'Bagian 2: Faktor Geografis (Ruang Hidup Kepulauan)',
      'Bagian 3: Geopolitik & Geostrategi (Cara Berpikir & Ketahanan)',
      'Bagian 4: Linimasa Sejarah & Landasan Hukum (Djuanda ke UNCLOS)',
      'Bagian 5: Implementasi Nyata, Tantangan Digital & Masa Kini'
    ],
    data: {
      type: 'roadmap',
      steps: [
        { num: '01', title: 'Konsep Dasar', desc: 'Definisi Lemhannas, 5 ciri, kedudukan, fungsi & tujuan' },
        { num: '02', title: 'Faktor Geografis', desc: 'Posisi silang, selat strategis, sumber daya & penduduk' },
        { num: '03', title: 'Geopolitik & Geostrategi', desc: 'Perbandingan teori barat vs Indonesia, Astagatra' },
        { num: '04', title: 'Sejarah & Dasar Hukum', desc: 'Linimasa Sriwijaya-ICJ, Deklarasi Djuanda & UNCLOS' },
        { num: '05', title: 'Penerapan & Tantangan', desc: 'Keluarga, kampus, ruang digital, serta 5 tantangan' }
      ]
    }
  },
  {
    id: 3,
    title: 'PERTANYAAN PEMBUKA',
    subtitle: 'Sebuah Renungan Kolektif tentang Keajaiban Persatuan Indonesia',
    category: 'Pengantar',
    speakerRole: 'Moderator',
    durationEst: '±1 menit',
    notes: `Sebelum masuk materi, saya mau mengajak teman-teman berpikir sebentar.

[Pandang audiens, bicara pelan]

"Bagaimana lebih dari 17.000 pulau, ribuan suku, dan ratusan bahasa bisa menjadi SATU negara?"

[Jeda 3 detik]

Kalau dipikir-pikir, ini luar biasa, bukan? Pulau-pulau itu dipisahkan laut, bahasanya berbeda, adatnya pun beragam. Tapi kita tetap satu Indonesia.

Jawabannya adalah Wawasan Nusantara. Untuk menjelaskan lebih dalam, saya persilakan Pembicara 1.`,
    keyPoints: [
      'Lebih dari 17.000 pulau tersebar di garis khatulistiwa',
      '1.340 suku bangsa dan lebih dari 718 bahasa daerah',
      'Pertanyaan eksistensial: apa perekat utama persatuan kita?',
      'Kunci jawaban: Wawasan Nusantara sebagai kesepakatan geopolitik'
    ],
    data: {
      type: 'opening_question',
      mainQuote: 'Bagaimana lebih dari 17.000 pulau, ribuan suku, dan ratusan bahasa bisa menjadi SATU negara?',
      answer: 'Jawabannya: Wawasan Nusantara',
      stats: [
        { label: 'Pulau Bernama', val: '17.508+' },
        { label: 'Suku Bangsa', val: '1.340+' },
        { label: 'Bahasa Daerah', val: '718+' },
        { label: 'Satu Kesatuan', val: 'NKRI' }
      ]
    }
  },
  {
    id: 4,
    title: 'APA ITU WAWASAN NUSANTARA?',
    subtitle: 'Definisi Resmi Lemhannas RI (2018) dan Lima Ciri Karakteristik Utama',
    category: 'Konsep',
    speakerRole: 'Pembicara 1',
    durationEst: '±1,5 menit',
    notes: `Terima kasih, Moderator. Halo semuanya!

Mari kita mulai dari definisinya. Menurut Lemhannas RI tahun 2018, Wawasan Nusantara adalah cara pandang dan sikap bangsa Indonesia terhadap diri dan lingkungannya yang beragam dan strategis. Cara pandang ini mengutamakan persatuan dan kesatuan bangsa serta kesatuan wilayah, dan berdasarkan Pancasila dan UUD 1945.

Kata kuncinya adalah "cara pandang". Jadi Wawasan Nusantara bukan sekadar teori, tetapi cara kita melihat Indonesia.

Ada lima ciri utamanya:
1. Berlandaskan Pancasila dan UUD 1945.
2. Darat, laut, dan udara dipandang sebagai satu ruang hidup.
3. Persatuan dalam keberagaman.
4. Semua aspek kehidupan dipandang sebagai satu kesatuan.
5. Damai dan tidak ekspansionis, artinya kita tidak ingin menguasai bangsa lain.`,
    keyPoints: [
      'Definisi Lemhannas 2018: Cara pandang & sikap bangsa terhadap diri & lingkungannya',
      'Mengutamakan persatuan bangsa & kesatuan wilayah berlandaskan Pancasila & UUD 1945',
      '5 Ciri: Konstitusional, Satu Ruang Hidup, Bhinneka Tunggal Ika, Holistik, Damai'
    ],
    data: {
      type: 'definition',
      source: 'Lemhannas RI (2018)',
      text: 'Cara pandang dan sikap bangsa Indonesia mengenai diri dan lingkungannya yang serba beragam dan bernilai strategis dengan mengutamakan persatuan dan kesatuan bangsa serta kesatuan wilayah dalam penyelenggaraan kehidupan bermasyarakat, berbangsa, dan bernegara berdasarkan Pancasila dan UUD NRI 1945.',
      features: [
        { title: 'Berlandaskan Konstitusi', desc: 'Bersumber mutlak pada nilai luhur Pancasila dan norma UUD 1945' },
        { title: 'Satu Ruang Hidup (Lebensraum)', desc: 'Darat, laut, dan udara adalah satu kesatuan utuh tanpa sekat' },
        { title: 'Persatuan dalam Keberagaman', desc: 'Menghargai pluralisme suku, agama, ras demi kebinekaan' },
        { title: 'Kesatuan Seluruh Aspek', desc: 'Politik, ekonomi, sosial, budaya, dan pertahanan menyatu erat' },
        { title: 'Damai & Non-Ekspansionis', desc: 'Menghormati kedaulatan dunia tanpa ambisi imperialisme teritorial' }
      ]
    }
  },
  {
    id: 5,
    title: 'KEDUDUKAN, FUNGSI, DAN TUJUAN',
    subtitle: 'Hierarki 5 Tingkat Landasan Nasional, 4 Fungsi Arahan, dan Dwi-Tujuan Bangsa',
    category: 'Konsep',
    speakerRole: 'Pembicara 1',
    durationEst: '±2 menit',
    notes: `Sekarang, di mana posisi Wawasan Nusantara? Bayangkan sebuah tangga, seperti yang ada di sisi kiri slide.

Paling atas ada Pancasila sebagai landasan idiil. Lalu UUD 1945 sebagai landasan konstitusional. Di tengah ada Wawasan Nusantara sebagai landasan visional, kemudian Ketahanan Nasional sebagai landasan konsepsional, dan terakhir peraturan perundang-undangan sebagai landasan operasional.

Di bagian tengah ada empat fungsinya: sebagai pedoman, motivasi, dorongan, dan rambu-rambu bagi bangsa kita.

Di sisi kanan ada tujuannya. Ke dalam, tujuannya menumbuhkan nasionalisme yang tinggi, dengan menempatkan kepentingan nasional di atas golongan. Ke luar, tujuannya ikut menciptakan ketertiban dunia, yaitu kemerdekaan, perdamaian abadi, dan keadilan sosial, dengan politik luar negeri yang bebas aktif.`,
    keyPoints: [
      'Kedudukan Tangga: Idiil (Pancasila) -> Konstitusional (UUD 45) -> Visional (Wasantara) -> Konsepsional (Tannas) -> Operasional (UU)',
      '4 Fungsi: Pedoman, Motivasi, Dorongan, Rambu-Rambu Tindakan',
      'Tujuan Ke Dalam: Persatuan di atas golongan | Tujuan Ke Luar: Ketertiban dunia bebas aktif'
    ],
    data: {
      type: 'hierarchy_and_purpose',
      levels: [
        { rank: 'Tingkat 1', name: 'Pancasila', role: 'Landasan Idiil', badge: 'Falsafah Negara' },
        { rank: 'Tingkat 2', name: 'UUD NRI 1945', role: 'Landasan Konstitusional', badge: 'Hukum Dasar' },
        { rank: 'Tingkat 3', name: 'Wawasan Nusantara', role: 'Landasan Visional', badge: 'Cara Pandang' },
        { rank: 'Tingkat 4', name: 'Ketahanan Nasional', role: 'Landasan Konsepsional', badge: 'Daya Tangkal' },
        { rank: 'Tingkat 5', name: 'Peraturan Perundang-undangan', role: 'Landasan Operasional', badge: 'Pelaksanaan' }
      ],
      functions: ['Pedoman Hidup Berbangsa', 'Motivasi Kesejahteraan', 'Dorongan Persatuan', 'Rambu Penentu Kebijakan'],
      goals: {
        internal: 'Menumbuhkan nasionalisme tinggi di segala aspek kehidupan dengan mengutamakan kepentingan nasional di atas kepentingan pribadi/golongan.',
        external: 'Ikut serta mewujudkan ketertiban dunia berdasarkan kemerdekaan, perdamaian abadi, dan keadilan sosial melalui politik luar negeri bebas aktif.'
      }
    }
  },
  {
    id: 6,
    title: 'TIGA FAKTOR PEMBENTUK',
    subtitle: 'Tiga Pilar Fundamental Penopang Bangunan Wawasan Nusantara',
    category: 'Konsep',
    speakerRole: 'Pembicara 1',
    durationEst: '±1,5 menit',
    notes: `Nah, pertanyaan berikutnya: apa yang membentuk Wawasan Nusantara?

Ada tiga pilar yang menopangnya, seperti rumah yang punya tiga tiang.

Pilar pertama adalah wilayah geografis, yang kita sebut "RUANG".
Pilar kedua adalah geopolitik dan geostrategi, yaitu "CARA BERPIKIR & STRATEGI".
Pilar ketiga adalah perkembangan wilayah dan dasar hukum, yaitu "PENGALAMAN & LEGITIMASI".

Ingat tiga pilar ini ya, karena seluruh materi berikutnya mengacu ke sini. Untuk pilar pertama, saya persilakan Pembicara 2.`,
    keyPoints: [
      'Pilar 1: Wilayah Geografis (Wadah / Ruang Hidup Nyata)',
      'Pilar 2: Geopolitik & Geostrategi (Cara Berpikir & Strategi Pencapaian)',
      'Pilar 3: Perkembangan Wilayah & Dasar Hukum (Pengalaman Sejarah & Legitimasi Hukum Internasional)'
    ],
    data: {
      type: 'three_pillars',
      pillars: [
        {
          num: '01',
          name: 'Wilayah Geografis',
          code: 'RUANG',
          desc: 'Kondisi fisik kepulauan nusantara, posisi silang dunia, dan potensi kekayaan bahari sebagai wadah hidup bangsa.'
        },
        {
          num: '02',
          name: 'Geopolitik & Geostrategi',
          code: 'CARA BERPIKIR & STRATEGI',
          desc: 'Paradigma kekuasaan berdasarkan ruang geografis (Wawasan Nusantara) dan operasionalisasinya (Ketahanan Nasional).'
        },
        {
          num: '03',
          name: 'Sejarah & Dasar Hukum',
          code: 'PENGALAMAN & LEGITIMASI',
          desc: 'Dinamika perjuangan teritorial dari Deklarasi Djuanda hingga UNCLOS 1982 dan Pasal 25A UUD 1945.'
        }
      ]
    }
  },
  {
    id: 7,
    title: 'FAKTOR 1: LETAK & BENTUK WILAYAH',
    subtitle: 'Konstelasi Geografis Posisi Silang Dunia, Selat Strategis, dan Karakter Kepulauan',
    category: 'Faktor 1: Geografi',
    speakerRole: 'Pembicara 2',
    durationEst: '±2 menit',
    notes: `Terima kasih! Teman-teman, coba lihat peta di slide ini. [Tunjuk peta]

Indonesia berada di posisi silang: di antara dua benua, Asia dan Australia, dan di antara dua samudra, Hindia dan Pasifik. Secara astronomis, kita berada di sekitar 6° Lintang Utara sampai 11° Lintang Selatan, dan 95° sampai 141° Bujur Timur.

Karena posisi ini, kita punya jalur strategis: Selat Malaka, Selat Sunda, dan Selat Lombok. Kapal dari berbagai negara melewati jalur ini.

Indonesia juga negara kepulauan dengan lebih dari 17.000 pulau. Nah, ini poin pentingnya: bagi kita laut adalah penghubung, bukan pemisah.

Kita juga berbatasan darat dengan Malaysia, Papua Nugini, dan Timor Leste. Posisi ini adalah peluang ekonomi sekaligus kerawanan yang harus dijaga.`,
    keyPoints: [
      'Posisi Silang: 2 Benua (Asia-Australia) & 2 Samudra (Hindia-Pasifik)',
      'Letak Astronomis: 6°LU–11°LS dan 95°BT–141°BT (Tropis)',
      'Tiga Chokepoints Dunia: Selat Malaka, Sunda, dan Lombok',
      'Prinsip Utama: Laut adalah PENGHUBUNG, bukan PEMISAH!',
      'Perbatasan darat dengan 3 negara: Malaysia, PNG, dan Timor Leste'
    ],
    data: {
      type: 'geographic_location',
      crossroads: {
        continents: ['Benua Asia', 'Benua Australia'],
        oceans: ['Samudra Hindia', 'Samudra Pasifik']
      },
      chokepoints: [
        { name: 'Selat Malaka', detail: 'Jalur perdagangan energi tersibuk di dunia' },
        { name: 'Selat Sunda', detail: 'Rute alternatif kapal kontainer & tanker raksasa' },
        { name: 'Selat Lombok', detail: 'Rute laut dalam untuk kapal VLCC & kapal selam' }
      ],
      borders: ['Malaysia (Kalimantan)', 'Papua Nugini (Papua)', 'Timor Leste (NTT)']
    }
  },
  {
    id: 8,
    title: 'FAKTOR 1: ALAM, PENDUDUK, DAN PENGARUHNYA',
    subtitle: 'Kekayaan Sumber Daya Maritim, Dinamika Kependudukan, dan Matriks Implikasinya',
    category: 'Faktor 1: Geografi',
    speakerRole: 'Pembicara 2',
    durationEst: '±1,5 menit',
    notes: `Selain letak, ada juga alam dan penduduk.

Indonesia beriklim tropis dan berada di cincin api Pasifik. Kita kaya hutan, tambang, energi, dan perikanan, dan pengelolaannya diatur dalam Pasal 33 UUD 1945.

Dari sisi penduduk, jumlahnya lebih dari 270 juta jiwa menurut Sensus Penduduk 2020, tetapi tidak merata, karena paling padat di Jawa. Ada pula ribuan kelompok suku menurut Sensus 2010.

Lihat tabel di kanan: setiap karakteristik punya implikasi.
- Posisi silang menuntut diplomasi bebas aktif dan pengamanan jalur laut.
- Kepulauan berarti laut sebagai penghubung.
- Kekayaan yang tidak merata menuntut pengelolaan yang adil.
- Penduduk beragam berarti kita harus memegang Bhinneka Tunggal Ika.`,
    keyPoints: [
      'Kekayaan Alam: Ring of Fire, hutan hujan tropis, cadangan energi fosil/terbarukan, biota laut melimpah (Pasal 33 UUD 1945)',
      'Karakteristik Penduduk: >270 Juta Jiwa (SP 2020), distribusi padat di Jawa, 1.340 suku bangsa',
      'Matriks Karakteristik vs Implikasi: Diplomasi Bebas Aktif, Tol Laut, Keadilan Sosial, Kebinekaan'
    ],
    data: {
      type: 'resources_and_population',
      implications: [
        { char: 'Posisi Silang Dunia', imp: 'Diplomasi politik bebas aktif & pengamanan choke points maritim dunia' },
        { char: 'Negara Kepulauan (>17.000 pulau)', imp: 'Pembangunan maritim (Tol Laut), laut sebagai urat nadi penyatu' },
        { char: 'Kekayaan Alam Asimetris', imp: 'Pengelolaan adil berkeadilan sosial sesuai amanat Pasal 33 UUD 1945' },
        { char: 'Penduduk Sangat Heterogen', imp: 'Konsensus kebinekaan (Bhinneka Tunggal Ika) sebagai perekat bangsa' }
      ]
    }
  },
  {
    id: 9,
    title: 'FAKTOR 2: GEOPOLITIK & GEOSTRATEGI',
    subtitle: 'Konseptualisasi Ruang Kekuasaan dan Sistem Terpadu Astagatra Indonesia',
    category: 'Faktor 2: Geopolitik',
    speakerRole: 'Pembicara 2',
    durationEst: '±2 menit',
    notes: `Masuk ke pilar kedua. Dua istilah ini sering tertukar, jadi saya buat mudah.

Geopolitik adalah hubungan antara kondisi geografis dengan kebijakan dan kekuasaan. Istilah ini berasal dari Rudolf Kjellén. Di Indonesia, wujudnya adalah Wawasan Nusantara.

Geostrategi adalah penerapan geopolitik menjadi strategi untuk mencapai tujuan nasional. Di Indonesia, wujudnya adalah Ketahanan Nasional.

Gampangnya: geopolitik itu cara berpikir, geostrategi itu cara bertindak.

Di sisi kanan ada Astagatra, yaitu delapan aspek kehidupan nasional. Terdiri atas Trigatra, aspek alamiah: posisi geografis, kekayaan alam, dan kependudukan. Lalu Pancagatra, aspek sosial: ideologi, politik, ekonomi, sosial budaya, serta pertahanan-keamanan.`,
    keyPoints: [
      'Geopolitik (Rudolf Kjellén) = Cara Berpikir bangsa berbasis ruang geografis (Wawasan Nusantara)',
      'Geostrategi = Cara Bertindak untuk mencapai cita-cita nasional (Ketahanan Nasional)',
      'Doktrin Astagatra: 3 Gatra Alamiah (Trigatra) + 5 Gatra Sosial (Pancagatra)'
    ],
    data: {
      type: 'geopolitics_astagatra',
      definitions: {
        geopolitics: { term: 'Geopolitik', role: 'Cara Berpikir', entity: 'Wawasan Nusantara' },
        geostrategy: { term: 'Geostrategi', role: 'Cara Bertindak', entity: 'Ketahanan Nasional' }
      },
      astagatra: {
        trigatra: [
          { name: 'Posisi Geografis', desc: 'Konstelasi kepulauan dan posisi silang' },
          { name: 'Kekayaan Alam', desc: 'Potensi maritim, tambang, flora & fauna' },
          { name: 'Kependudukan', desc: 'Jumlah, kualitas, dan distribusi demografi' }
        ],
        pancagatra: [
          { name: 'Ideologi', desc: 'Pengamalan nilai-nilai luhur Pancasila' },
          { name: 'Politik', desc: 'Stabilitas demokrasi dan pemerintahan yang bersih' },
          { name: 'Ekonomi', desc: 'Kemandirian dan pemerataan kesejahteraan' },
          { name: 'Sosial Budaya', desc: 'Toleransi, jati diri luhur, dan kearifan lokal' },
          { name: 'Hankam', desc: 'Pertahanan dan keamanan semesta (Sishankamrata)' }
        ]
      }
    }
  },
  {
    id: 10,
    title: 'TEORI KLASIK VS GEOPOLITIK INDONESIA',
    subtitle: 'Kontras Tajam antara Doktrin Ekspansi Barat dengan Paradigma Damai Nusantara',
    category: 'Faktor 2: Geopolitik',
    speakerRole: 'Pembicara 2',
    durationEst: '±1,5 menit',
    notes: `Para ahli di dunia juga punya teori geopolitik masing-masing.

Ratzel menyebut negara sebagai organisme yang butuh ruang. Kjellén menyebut negara punya kepribadian, dan dia pencetus istilah geopolitik. Haushofer terkenal dengan lebensraum. Mahan menekankan sea power, Mackinder dengan heartland, Spykman dengan rimland, dan Douhet dengan air power.

Banyak dari teori ini cenderung ekspansionis, yaitu ingin memperluas kekuasaan.

Nah, geopolitik Indonesia berbeda. Kita damai, defensif, dan integratif: mempertahankan wilayah yang sah, bukan menguasai bangsa lain.

Itu bagian saya. Selanjutnya kita masuk ke sejarah dan hukum bersama Pembicara 3.`,
    keyPoints: [
      '7 Teori Barat Cenderung Ekspansionis & Agresif (Ruang Hidup / Lebensraum & Hegemoni)',
      'Mahan (Kekuatan Laut), Mackinder (Heartland Daratan), Douhet (Kekuatan Udara)',
      'Prinsip Geopolitik Indonesia: Damai, Defensif, Integratif (Mempertahankan kedaulatan, bukan menaklukkan bangsa lain)'
    ],
    data: {
      type: 'theory_comparison',
      classicalTheorists: [
        { name: 'Friedrich Ratzel', concept: 'Negara Organisme', desc: 'Negara tumbuh & butuh perluasan ruang hidup' },
        { name: 'Rudolf Kjellén', concept: 'Pencetus Geopolitik', desc: 'Negara berjiwa & berkehendak memperluas daya' },
        { name: 'Karl Haushofer', concept: 'Lebensraum / Autarki', desc: 'Justifikasi militer penguasaan wilayah luar' },
        { name: 'Alfred T. Mahan', concept: 'Sea Power', desc: 'Penguasaan jalur laut menguasai perdagangan dunia' },
        { name: 'Halford Mackinder', concept: 'Heartland Theory', desc: 'Siapa menguasai jantung Eurasia menguasai dunia' },
        { name: 'Nicholas J. Spykman', concept: 'Rimland Theory', desc: 'Bulan sabit pesisir maritim kunci perimbangan' },
        { name: 'Giulio Douhet', concept: 'Air Power', desc: 'Supremasi kekuatan angkasa mutlak dalam perang' }
      ],
      indonesiaPillars: {
        stance: 'Damai, Defensif, dan Integratif',
        philosophy: 'Bangsa Indonesia cinta damai, tetapi lebih cinta kemerdekaan. Geopolitik kita bertujuan menjaga integritas keutuhan teritorial yang sah secara hukum internasional, bukan mengekspansi atau mencaplok kedaulatan negara tetangga.'
      }
    }
  },
  {
    id: 11,
    title: 'FAKTOR 3: LINIMASA PERKEMBANGAN WILAYAH',
    subtitle: 'Napak Tilas Sejarah dari Kejayaan Sriwijaya hingga Putusan ICJ 2002',
    category: 'Faktor 3: Sejarah & Hukum',
    speakerRole: 'Pembicara 3',
    durationEst: '±2 menit',
    notes: `Terima kasih! Teman-teman, mari kita baca slide ini seperti cerita tentang persatuan.

Dimulai dari Sriwijaya pada abad ke-7 sampai 13, lalu Majapahit pada abad ke-13 sampai 16 dengan Sumpah Palapa. Berlanjut ke Kebangkitan Nasional 1908 dan Sumpah Pemuda 1928.

Tahun 1939 ada TZMKO, aturan laut teritorial 3 mil dari masa kolonial. Tahun 1945, Proklamasi dengan prinsip uti possidetis juris, yaitu wilayah merdeka mewarisi wilayah penjajahnya. Tahun 1950 terbentuk NKRI.

Lalu titik terpenting, yang warnanya emas: 13 Desember 1957, Deklarasi Djuanda. Dilanjutkan UNCLOS 1982, UU 17/1985 sebagai ratifikasi, dan terakhir putusan ICJ 2002 soal Sipadan dan Ligitan.`,
    keyPoints: [
      'Abad 7–16: Kemaritiman Sriwijaya & Sumpah Palapa Majapahit',
      '1908 & 1928: Kebangkitan Nasional & Konsensus Sumpah Pemuda',
      '1939 (TZMKO): Batas 3 mil kolonial memecah laut Indonesia',
      '1945: Proklamasi (Prinsip Uti Possidetis Juris)',
      '13 Des 1957: DEKLARASI DJUANDA — Titik Balik Kedaulatan Laut',
      '1982 & 1985: Pengakuan UNCLOS & Ratifikasi UU 17/1985',
      '2002: Putusan ICJ Sipadan-Ligitan (Pelajaran penguasaan efektif)'
    ],
    data: {
      type: 'timeline',
      milestones: [
        { year: 'Abad 7–13', event: 'Sriwijaya', desc: 'Kemaharajaan maritim menguasai Selat Malaka & jalur sutra laut' },
        { year: 'Abad 13–16', event: 'Majapahit', desc: 'Patih Gajah Mada mengikrarkan Sumpah Palapa menyatukan Nusantara' },
        { year: '1908 & 1928', event: 'Kebangkitan & Sumpah Pemuda', desc: 'Kelahiran rasa kebangsaan & ikrar satu nusa, bangsa, bahasa' },
        { year: '1939', event: 'TZMKO Kolonial', desc: 'Laut teritorial 3 mil warisan Belanda membiarkan kantong laut bebas' },
        { year: '1945 & 1950', event: 'Proklamasi & NKRI', desc: 'Kemerdekaan berbasis Uti Possidetis Juris dan kembalinya NKRI' },
        { year: '13 Des 1957', event: 'Deklarasi Djuanda', desc: 'Garis pangkal lurus kepulauan: laut penyatu NKRI', highlight: true },
        { year: '1982 & 1985', event: 'UNCLOS 1982 & UU 17/1985', desc: 'Dunia mengakui resmi doktrin Negara Kepulauan (Archipelagic State)' },
        { year: '2002', event: 'Putusan ICJ Sipadan-Ligitan', desc: 'Kekalahan di ICJ menjadi refleksi mutlak penguasaan pulau terluar' }
      ]
    }
  },
  {
    id: 12,
    title: 'TITIK BALIK: DARI TZMKO KE DJUANDA & UNCLOS',
    subtitle: 'Revolusi Hukum Maritim: Mengubah Laut dari Kantong Pemisah Menjadi Urat Nadi Pemersatu',
    category: 'Faktor 3: Sejarah & Hukum',
    speakerRole: 'Pembicara 3',
    durationEst: '±2 menit',
    notes: `Ini bagian favorit saya, karena inilah titik balik-nya.

[Tunjuk peta kiri] Sebelum Deklarasi Djuanda, berlaku TZMKO 1939. Setiap pulau hanya punya laut teritorial 3 mil. Akibatnya, ada laut bebas di antara pulau-pulau kita. Kapal asing bisa lewat di tengah wilayah kita!

[Tunjuk peta kanan] Sesudahnya, Deklarasi Djuanda 1957 menyatakan bahwa perairan di antara dan di sekitar pulau adalah bagian wilayah negara, dengan garis pangkal lurus kepulauan. Prosesnya berlanjut lewat UU 4/Prp/1960, lalu UNCLOS 1982 yang mengakui konsep negara kepulauan, dan UU 17/1985 yang meratifikasinya.

Perjuangan ini dipimpin tokoh diplomasi hukum laut, Mochtar Kusumaatmadja dan Hasjim Djalal.

Jadi, laut yang dulu memisahkan, kini menyatukan.`,
    keyPoints: [
      'TZMKO 1939 (Sebelum): Laut 3 mil tiap pulau -> Perairan di antara pulau berstatus LAUT BEBAS internasional',
      'Deklarasi Djuanda 1957 (Sesudah): Garis pangkal lurus menghubungkan pulau terluar -> Laut di antara pulau adalah WILAYAH KEDAULATAN UTUH',
      'Ditegaskan UU 4/Prp/1960 dan diakui Konvensi PBB UNCLOS 1982 (UU 17/1985)',
      'Pahlawan Diplomasi Maritim: Mochtar Kusumaatmadja & Hasjim Djalal'
    ],
    data: {
      type: 'before_after_comparison',
      before: {
        title: 'Sebelum: TZMKO 1939 (Era Hindia Belanda)',
        rule: 'Teritoriale Zee en Maritieme Kringen Ordonnantie 1939',
        distance: 'Laut Teritorial hanya 3 Mil Laut dari garis pantai surut pulau',
        impact: 'Di antara pulau-pulau (Laut Jawa, Flores, Banda) terdapat kantong-kantong laut bebas internasional. Kapal perang dan niaga asing bebas bermanuver tanpa yurisdiksi Indonesia.',
        visualLabel: 'Laut Memisahkan Pulau-Pulau'
      },
      after: {
        title: 'Sesudah: Deklarasi Djuanda 1957 & UNCLOS 1982',
        rule: 'Deklarasi 13 Des 1957 -> UU 4/Prp/1960 -> UNCLOS 1982 (UU 17/1985)',
        distance: 'Garis Pangkal Lurus Kepulauan (Straight Archipelagic Baselines) + 12 Mil Laut Teritorial',
        impact: 'Semua perairan di sekitar, di antara, dan yang menghubungkan pulau-pulau adalah bagian mutlak kedaulatan NKRI. Luas wilayah bertambah 2,5 kali lipat (~3,1 juta km² perairan).',
        visualLabel: 'Laut Menyatukan Nusantara'
      },
      figures: [
        { name: 'Ir. H. Djuanda Kartawidjaja', role: 'Perdana Menteri RI pencetus deklarasi 13 Desember 1957' },
        { name: 'Prof. Mochtar Kusumaatmadja', role: 'Arsitek diplomasi hukum laut di PBB selama 25 tahun' },
        { name: 'Dr. Hasjim Djalal, MA', role: 'Negosiator ulung pengakuan Negara Kepulauan di UNCLOS 1982' }
      ]
    }
  },
  {
    id: 13,
    title: 'PERKEMBANGAN WILAYAH PASCA-KEMERDEKAAN',
    subtitle: 'Dinamika Batas Negara: Kasus Papua, Timor Timur, dan Pelajaran Sipadan-Ligitan',
    category: 'Faktor 3: Sejarah & Hukum',
    speakerRole: 'Pembicara 3',
    durationEst: '±1,5 menit',
    notes: `Setelah merdeka, wilayah kita juga mengalami dinamika, lewat tiga contoh.

Papua: Persetujuan New York 1962, Pepera 1969, dan Resolusi PBB 2504.
Timor Timur: UU 7/1976, jajak pendapat 1999, lalu menjadi Timor Leste.

Yang paling penting dipelajari adalah Sipadan dan Ligitan. Tahun 2002, Mahkamah Internasional memutuskan Malaysia yang menang.

Pelajarannya, lihat kotak emas: pulau terluar harus dikelola dan dikuasai secara efektif. Mengklaim saja tidak cukup, kita harus benar-benar hadir di sana.`,
    keyPoints: [
      'Papua (Irian Barat): New York Agreement 1962, Pepera 1969, Resolusi PBB No. 2504',
      'Timor Timur: Integrasi UU 7/1976, Jajak Pendapat 1999, Kemerdekaan Timor Leste',
      'Sipadan-Ligitan (ICJ 2002): Indonesia kalah atas dasar "Effective Occupation"',
      'Pelajaran Emas: Kedaulatan menuntut pengelolaan aktif dan kehadiran nyata di pulau terluar!'
    ],
    data: {
      type: 'post_independence_cases',
      cases: [
        {
          region: 'Papua (Irian Barat)',
          status: 'Integrasi Sah Berdasarkan Hukum Internasional',
          desc: 'Perjuangan Trikora menghasilkan New York Agreement 1962, Pepera 1969, dan disahkan secara final oleh Majelis Umum PBB lewat Resolusi 2504 (XXIV).'
        },
        {
          region: 'Timor Timur',
          status: 'Dinamika Integrasi hingga Referendum 1999',
          desc: 'Bergabung melalui UU No. 7/1976, namun referendum di bawah pengawasan PBB pada 1999 menetapkan kemerdekaan sebagai Republik Demokratik Timor Leste.'
        },
        {
          region: 'Sipadan & Ligitan',
          status: 'Putusan Mahkamah Internasional (ICJ 2002)',
          desc: 'Malaysia memenangkan sengketa kepemilikan karena mampu membuktikan "efektivitas penguasaan" (pemberian izin penyu, mercusuar, dan administrasi nyata).'
        }
      ],
      goldenLesson: 'Pelajaran Terpenting: Kedaulatan hukum tidak cukup hanya di atas dokumen atau peta. Negara wajib hadir secara fisik, membangun infrastruktur, dan mengelola secara efektif seluruh pulau-pulau kecil terluar (PPKT) agar tidak terlepas.'
    }
  },
  {
    id: 14,
    title: 'DASAR HUKUM WILAYAH & WAWASAN NUSANTARA',
    subtitle: 'Hierarki Peraturan Perundang-undangan dari Tingkat Konstitusi hingga Regulasi Teknis',
    category: 'Faktor 3: Sejarah & Hukum',
    speakerRole: 'Pembicara 3',
    durationEst: '±1,5 menit',
    notes: `Terakhir dari saya, dasar hukum. Tenang, tidak perlu menghafal semuanya!

Susunannya berlapis. Dasarnya Pancasila, lalu UUD 1945. Yang paling penting adalah Pasal 25A: Indonesia adalah negara kepulauan yang berciri nusantara. Ada juga Pasal 30 tentang pertahanan dan Pasal 33 tentang sumber daya.

Berikutnya Tap MPR IV/1973 sebagai rumusan resmi, lalu berbagai undang-undang. Dua yang perlu diingat: UU 17/1985 tentang ratifikasi UNCLOS, dan UU 43/2008 tentang Wilayah Negara. Lalu ada peraturan pemerintah, dan di puncaknya UNCLOS 1982.

Satu catatan: GBHN sudah tidak berlaku sejak reformasi, tetapi nilainya tetap hidup lewat Pasal 25A dan pendidikan kebangsaan.

Selanjutnya, Pembicara 4 akan merangkum semuanya.`,
    keyPoints: [
      'Pancasila & UUD NRI 1945: Pasal 25A (Negara Kepulauan berciri Nusantara), Pasal 30 (Hankam), Pasal 33 (Kemakmuran rakyat)',
      'Tap MPR IV/MPR/1973: Rumusan doktrinal pertama Wawasan Nusantara',
      'Undang-Undang Organik: UU 17/1985 (UNCLOS), UU 3/2002 (Pertahanan), UU 43/2008 (Wilayah Negara), UU 32/2014 (Kelautan)',
      'Peraturan Pemerintah: PP 37/2002 (ALKI) & PP 38/2002 jo. PP 37/2008 (Titik Pangkal)',
      'Status GBHN: Tidak berlaku pasca-reformasi, namun substansi naik kasta ke Pasal 25A konstitusi'
    ],
    data: {
      type: 'legal_hierarchy',
      layers: [
        { level: '1. Landasan Idiil', item: 'Pancasila (Khususnya Sila ke-3: Persatuan Indonesia)' },
        { level: '2. Landasan Konstitusional', item: 'UUD NRI 1945: Pasal 25A (Negara Kepulauan), Pasal 30 (Sishankamrata), Pasal 33 (Kekayaan Alam)' },
        { level: '3. Landasan Ketetapan', item: 'Tap MPR No. IV/MPR/1973 jo. Tap MPR II/1993 & II/1998 (Rumusan Doktrin Wasantara)' },
        { level: '4. Landasan Undang-Undang', item: 'UU 4/Prp/1960 jo. UU 6/1996 (Perairan), UU 1/1973 (Landas Kontinen), UU 5/1983 (ZEE), UU 17/1985 (Ratifikasi UNCLOS 1982), UU 3/2002 (Pertahanan), UU 43/2008 (Wilayah Negara), UU 32/2014 (Kelautan)' },
        { level: '5. Landasan Regulasi Teknis', item: 'PP No. 37/2002 (Alur Laut Kepulauan Indonesia / ALKI I, II, III) & PP No. 38/2002 jo. PP 37/2008 (Titik Pangkal Lurus)' },
        { level: '6. Hukum Internasional', item: 'UNCLOS 1982 Bagian IV (Archipelagic States - Negara Kepulauan)' }
      ]
    }
  },
  {
    id: 15,
    title: 'KETERKAITAN ANTARFAKTOR',
    subtitle: 'Sintesis Holistik 4 Dimensi Pembentuk: Ruang, Cara Berpikir, Pengalaman, dan Legitimasi',
    category: 'Sintesis & Implementasi',
    speakerRole: 'Pembicara 4',
    durationEst: '±1,5 menit',
    notes: `Terima kasih! Sekarang kita satukan semuanya.

Empat hal ini saling terhubung dengan Wawasan Nusantara di pusatnya:
- Geografi memberi ruang.
- Geopolitik dan geostrategi memberi cara berpikir.
- Sejarah wilayah memberi pengalaman.
- Hukum memberi legitimasi.

Kalimat kuncinya: wilayah tanpa strategi sulit dilindungi; strategi tanpa hukum lemah; dan keduanya tanpa kesadaran sejarah tidak menumbuhkan rasa memiliki.

Jadi, tidak ada yang bisa berdiri sendiri.`,
    keyPoints: [
      'Geografi = RUANG HIDUP (Wadah fisik dan keanekaragaman alamiah)',
      'Geopolitik/Geostrategi = CARA BERPIKIR (Visi Wasantara & Ketahanan Nasional)',
      'Sejarah Wilayah = PENGALAMAN (Pelajaran persatuan dari era kerajaan hingga kemerdekaan)',
      'Hukum = LEGITIMASI FORMAL (Ketegasan yuridis di mata hukum nasional & internasional)',
      'Pusat: Wawasan Nusantara menyatukan keempatnya!'
    ],
    data: {
      type: 'interconnected_factors',
      factors: [
        { name: 'Geografi', role: 'RUANG', desc: 'Menyediakan wadah fisik dan konstelasi lingkungan hidup kepulauan yang nyata.' },
        { name: 'Geopolitik / Geostrategi', role: 'CARA BERPIKIR', desc: 'Memberikan kerangka pandang dan strategi mempertahankan kedaulatan bangsa.' },
        { name: 'Sejarah Wilayah', role: 'PENGALAMAN', desc: 'Memberikan hikmah perjuangan bahwa perpecahan berujung penjajahan.' },
        { name: 'Hukum', role: 'LEGITIMASI', desc: 'Memberikan kekuatan yuridis formal yang diakui oleh segenap bangsa di dunia.' }
      ],
      goldenQuote: 'Wilayah tanpa strategi sulit dilindungi; strategi tanpa hukum rapuh; keduanya tanpa kesadaran sejarah tidak akan melahirkan rasa cinta dan memiliki.'
    }
  },
  {
    id: 16,
    title: 'PENERAPAN SEHARI-HARI',
    subtitle: 'Manifestasi Konkrit Wawasan Nusantara dari Lingkup Keluarga hingga Ranah Digital',
    category: 'Sintesis & Implementasi',
    speakerRole: 'Pembicara 4',
    durationEst: '±1,5 menit',
    notes: `Sekarang yang paling dekat dengan kita: bagaimana menerapkannya?

Di keluarga, tunjukkan cinta tanah air dan hargai perbedaan.
Di kampus, bekerja sama lintas suku dan daerah, serta mengutamakan musyawarah.
Di masyarakat, ikut gotong royong, taat aturan, dan cinta produk dalam negeri.

Dan di dunia digital: cek fakta sebelum share, serta tolak ujaran kebencian.

[Ajak audiens] Teman-teman, mulai hari ini, sebelum menekan tombol "bagikan", tanyakan dulu: "Ini benar tidak, ya?" Kebiasaan kecil ini juga bentuk nyata Wawasan Nusantara!`,
    keyPoints: [
      'Lingkungan Keluarga: Cinta tanah air & apresiasi perbedaan',
      'Lingkungan Kampus: Kolaborasi lintas suku/daerah & musyawarah mufakat',
      'Lingkungan Masyarakat: Gotong royong, kepatuhan hukum & bangga produk lokal',
      'Dunia Digital: "Saring sebelum sharing", cek fakta, tolak ujaran kebencian & polarisasi'
    ],
    data: {
      type: 'daily_applications',
      realms: [
        {
          realm: 'Keluarga',
          action: 'Cinta Tanah Air & Menghargai Perbedaan',
          desc: 'Menanamkan rasa bangga pada identitas kebangsaan, mengenalkan kekayaan tradisi, dan membiasakan musyawarah di rumah.'
        },
        {
          realm: 'Kampus',
          action: 'Kerja Sama Lintas Suku & Musyawarah',
          desc: 'Membangun jejaring kolaborasi tanpa sekat kedaerahan, mengedepankan dialog rasional, dan menghargai keragaman opini.'
        },
        {
          realm: 'Masyarakat',
          action: 'Gotong Royong & Cinta Produk Lokal',
          desc: 'Aktif berpartisipasi dalam kegiatan sosial, mematuhi norma hukum bersama, serta memprioritaskan konsumsi produk buatan Indonesia.'
        },
        {
          realm: 'Ruang Digital',
          action: 'Cek Fakta & Lawan Ujaran Kebencian',
          desc: 'Menerapkan etika siber: selalu verifikasi informasi sebelum disebarluaskan, tidak mudah terprovokasi hoaks, dan tolak polarisasi.'
        }
      ]
    }
  },
  {
    id: 17,
    title: 'TANTANGAN MASA KINI',
    subtitle: 'Lima Ujian Ketahanan Nasional di Era Globalisasi dan Disrupsi Informasi',
    category: 'Sintesis & Implementasi',
    speakerRole: 'Pembicara 4',
    durationEst: '±1,5 menit',
    notes: `Tentu, ada lima tantangan yang masih kita hadapi.

Pertama, pengamanan wilayah, pulau terluar, dan batas negara, misalnya Natuna.
Kedua, kesenjangan pembangunan antardaerah.
Ketiga, hoaks dan polarisasi.
Keempat, lunturnya nilai budaya dan menguatnya individualisme.
Kelima, intoleransi dan ujaran kebencian.

Perhatikan, tiga yang terakhir sangat dekat dengan keseharian kita sebagai mahasiswa. Jadi, kitalah yang bisa mulai berubah.`,
    keyPoints: [
      '1. Pengamanan Wilayah & Batas Negara (Kasus Laut Natuna Utara & PPKT)',
      '2. Kesenjangan Pembangunan (Disparitas Jawa vs Luar Jawa)',
      '3. Hoaks & Polarisasi Digital (Echo-chamber media sosial)',
      '4. Lunturnya Nilai Budaya (Erosi gotong royong akibat individualisme)',
      '5. Intoleransi & Ujaran Kebencian (Ancaman kebinekaan)'
    ],
    data: {
      type: 'modern_challenges',
      challenges: [
        {
          title: 'Pengamanan Batas & Pulau Terluar',
          highlight: 'Kasus Natuna & PPKT',
          desc: 'Ancaman illegal fishing, klaim sepihak sembilan garis putus (nine-dash line), dan perlunya percepatan pengelolaan 111 pulau terluar.'
        },
        {
          title: 'Kesenjangan Pembangunan Daerah',
          highlight: 'Disparitas Kawasan',
          desc: 'Kebutuhan mendesak pemerataan konektivitas logistik maritim (Tol Laut) dan keadilan fasilitas kesehatan serta pendidikan di daerah 3T.'
        },
        {
          title: 'Hoaks & Polarisasi Media Sosial',
          highlight: 'Perang Informasi',
          desc: 'Penyebaran disinformasi dan konten manipulatif yang memicu perpecahan antar-kelompok anak bangsa.'
        },
        {
          title: 'Erosi Nilai Budaya & Individualisme',
          highlight: 'Krisis Karakter',
          desc: 'Menguatnya sikap pragmatis dan individualistik yang mengikis tradisi gotong royong dan kepedulian sosial.'
        },
        {
          title: 'Intoleransi & Ujaran Kebencian',
          highlight: 'Ancaman Kebinekaan',
          desc: 'Sikap eksklusivisme primordial yang menolak pluralisme dan membahayakan persatuan Bhinneka Tunggal Ika.'
        }
      ]
    }
  },
  {
    id: 18,
    title: 'KESIMPULAN, SARAN, DAN PENUTUP',
    subtitle: 'Rangkuman Inti, Tiga Rekomendasi Aksi, dan Pembukaan Sesi Diskusi Tanya Jawab',
    category: 'Penutup',
    speakerRole: 'Pembicara 4',
    durationEst: '±1,5 menit (Lanjut Tanya Jawab Moderator)',
    notes: `[Pembicara 4:]
Kita simpulkan, ya.
Pertama, Wawasan Nusantara lahir dari tiga faktor yang saling memperkuat: geografi, geopolitik-geostrategi, serta perkembangan wilayah dan hukum.
Kedua, laut yang dulu memisahkan kini menyatukan, berkat Deklarasi Djuanda dan UNCLOS.
Ketiga, Wawasan Nusantara harus diwujudkan dalam sikap nyata.

Saran kami: perkuat pulau terluar dan pemerataan pembangunan, bijak bermedia sosial, dan perkuat pendidikan kebangsaan.

Mari jadikan Wawasan Nusantara bukan hanya hafalan, tetapi kebiasaan. Terima kasih!

[Moderator:]
Terima kasih, semuanya! Itulah materi dari kelompok kami.

Sekarang giliran teman-teman dan Ibu Dede Rahayu. Ada pertanyaan, masukan, atau tanggapan? Silakan angkat tangan, kami siap menjawab!

[Setelah sesi selesai]
Terima kasih atas perhatiannya. Mohon maaf bila ada kekurangan. Wassalamu'alaikum warahmatullahi wabarakatuh.`,
    keyPoints: [
      'Kesimpulan 1: Sinergi 3 pilar melahirkan kesadaran Wawasan Nusantara',
      'Kesimpulan 2: Laut bukan lagi pemisah, melainkan perekat kedaulatan',
      'Kesimpulan 3: Wawasan Nusantara adalah pedoman moral dan aksi nyata',
      '3 Saran: Penguatan pulau terluar, etika digital, revitalisasi kebangsaan',
      'Pembukaan sesi interaktif Tanya Jawab (Q&A)'
    ],
    data: {
      type: 'conclusion',
      conclusions: [
        'Wawasan Nusantara lahir dari interaksi tiga pilar fundamental yang tak terpisahkan: kondisi fisik geografis, cara berpikir geopolitik & geostrategi, serta legitimasi hukum dari sejarah panjang bangsa.',
        'Laut yang pada masa kolonial memisahkan kepulauan, kini resmi menjadi pemersatu bangsa berkat keberanian Deklarasi Djuanda 1957 dan pengakuan dunia internasional dalam UNCLOS 1982.',
        'Wawasan Nusantara bukan sekadar hafalan akademis di bangku kuliah, melainkan pedoman hidup yang wajib diwujudkan dalam tindakan konkrit setiap warga negara.'
      ],
      recommendations: [
        { label: 'Pemerataan & Batas', text: 'Perkuat pembangunan infrastruktur di pulau-pulau terluar dan hilangkan kesenjangan antardaerah.' },
        { label: 'Etika Digital', text: 'Jadilah warganet yang cerdas, selalu verifikasi informasi (cek fakta), dan tolak narasi perpecahan.' },
        { label: 'Pendidikan Karakter', text: 'Revitalisasi wawasan kebangsaan sejak dini guna memperkokoh jati diri generasi penerus bangsa.' }
      ],
      closingCta: 'Terima Kasih — Ada Pertanyaan?'
    }
  }
];
