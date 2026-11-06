export interface QAItem {
  id: number;
  question: string;
  answer: string;
  speakerTarget: string;
  keyTakeaway: string;
}

export const anticipatedQuestions: QAItem[] = [
  {
    id: 1,
    question: "Mengapa laut dipandang sebagai penghubung, bukan pemisah?",
    answer: "Karena sebagian besar wilayah Indonesia adalah perairan (dua pertiga wilayah). Sebelum 1957, Indonesia mewarisi hukum kolonial TZMKO 1939 di mana laut teritorial hanya 3 mil dari pantai, menyisakan kantong laut bebas di antara pulau-pulau kita. Melalui Deklarasi Djuanda 13 Desember 1957 yang diteguhkan konvensi PBB UNCLOS 1982, seluruh perairan kepulauan di antara pulau-pulau ditetapkan sebagai satu kesatuan kedaulatan mutlak NKRI. Laut menjadi perekat jalur pelayaran, perdagangan, dan pemersatu kebangsaan.",
    speakerTarget: "Pembicara 3 (Faktor Sejarah & Hukum)",
    keyTakeaway: "Deklarasi Djuanda 1957 + UNCLOS 1982 mengubah laut dari batas menjadi urat nadi perhubungan."
  },
  {
    id: 2,
    question: "Apa perbedaan mendasar antara Geopolitik dan Geostrategi?",
    answer: "Geopolitik adalah cara pandang atau dasar pemikiran tentang hubungan antara konstelasi geografis dengan kebijakan kekuasaan negara (konsep dasarnya diperkenalkan Rudolf Kjellén). Di Indonesia, wujud geopolitik adalah Wawasan Nusantara. Sedangkan Geostrategi adalah implementasi atau pelaksanaan taktis dan operasional dari geopolitik guna meraih tujuan nasional. Di Indonesia, wujud geostrategi adalah Ketahanan Nasional (Ketahanan Nasional). Singkatnya: Geopolitik adalah cara berpikir (paradigma), Geostrategi adalah cara bertindak (eksekusi strategi).",
    speakerTarget: "Pembicara 2 (Faktor Geopolitik & Geostrategi)",
    keyTakeaway: "Geopolitik = cara pandang (Wawasan Nusantara), Geostrategi = cara bertindak (Ketahanan Nasional)."
  },
  {
    id: 3,
    question: "GBHN sudah tidak berlaku lagi pasca-Reformasi, apakah Wawasan Nusantara masih memiliki dasar hukum dan relevansi?",
    answer: "Sangat relevan dan memiliki legitimasi hukum tertinggi! Meskipun GBHN tidak lagi digunakan pasca amandemen UUD 1945, substansi Wawasan Nusantara telah diangkat ke tingkat konstitusi dalam Pasal 25A UUD NRI 1945 ('NKRI adalah sebuah negara kepulauan yang berciri Nusantara...'). Selain itu diperkuat oleh UU No. 17/1985 (ratifikasi UNCLOS), UU No. 3/2002 (Pertahanan Negara), UU No. 43/2008 (Wilayah Negara), UU No. 32/2014 (Kelautan), serta kurikulum pendidikan kebangsaan formal.",
    speakerTarget: "Pembicara 3 (Dasar Hukum)",
    keyTakeaway: "Nilainya naik kelas dari Tap MPR/GBHN menjadi konstitusional di Pasal 25A UUD 1945."
  },
  {
    id: 4,
    question: "Apa pelajaran hukum dan geopolitik terpenting dari sengketa Pulau Sipadan dan Ligitan?",
    answer: "Sengketa Sipadan-Ligitan diputus Mahkamah Internasional (ICJ) pada tahun 2002 dengan kemenangan Malaysia atas dasar 'effective occupation' (penguasaan dan administrasi efektif). Pelajaran berharganya: dalam hukum internasional modern, klaim historis semata tidak cukup. Negara wajib hadir secara nyata melalui pembangunan infrastruktur, patroli rutin, pemberdayaan masyarakat perbatasan, serta pengelolaan terintegrasi di 111 pulau-pulau kecil terluar (PPKT) agar kedaulatan tidak lepas.",
    speakerTarget: "Pembicara 3 / Pembicara 4",
    keyTakeaway: "Kedaulatan menuntut 'effective control' dan kehadiran nyata negara, bukan sekadar klaim di atas kertas."
  },
  {
    id: 5,
    question: "Apa bedanya Trigatra dan Pancagatra dalam doktrin Astagatra?",
    answer: "Astagatra (8 aspek kehidupan nasional) terbagi menjadi dua kelompok: Pertama, Trigatra (3 gatra alamiah/statis) meliputi Posisi Geografis, Kekayaan Alam, dan Keadaan/Kemampuan Penduduk. Kedua, Pancagatra (5 gatra sosial/dinamis) meliputi Ideologi, Politik, Ekonomi, Sosial-Budaya, dan Pertahanan-Keamanan. Trigatra menjadi modal dasar fisik bangsa, sementara Pancagatra menjadi daya dorong sosial bagaimana modal tersebut dikelola untuk mencapai ketahanan nasional yang kokoh.",
    speakerTarget: "Pembicara 2 (Geopolitik & Astagatra)",
    keyTakeaway: "Trigatra = modal alamiah (statis); Pancagatra = dinamika kehidupan bermasyarakat (sosial)."
  }
];
