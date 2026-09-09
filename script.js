// ========================================
// DATA STORAGE AND STATE MANAGEMENT
// ========================================

let studentData = {
    name: '',
    class: '',
    number: '',
    currentMission: 1,
    completedMissions: [],
    scores: {
        pretest: 0,
        quizEasy: 0,
        quizMedium: 0,
        quizExpert: 0,
        reportBuilder: 0,
        project: 0,
        posttest: 0
    },
    badges: [],
    reflection: {
        peristiwa: '',
        perasaan: '',
        pembelajaran: '',
        penerapan: '',
        kesimpulan: ''
    },
    builderData: {},
    projectData: {},
    timestamp: null
};

// Load data from localStorage
function loadData() {
    const saved = localStorage.getItem('reportMasterData');
    if (saved) {
        studentData = JSON.parse(saved);
    }
}

// Save data to localStorage
function saveData() {
    studentData.timestamp = new Date().toISOString();
    localStorage.setItem('reportMasterData', JSON.stringify(studentData));
}

// ========================================
// QUIZ DATA
// ========================================

const pretestQuestions = [
    {
        question: "Apa yang dimaksud dengan laporan?",
        options: [
            "Cerita fiksi tentang suatu peristiwa",
            "Dokumen yang berisi informasi hasil kegiatan secara sistematis",
            "Artikel opini tentang suatu topik",
            "Catatan harian pribadi"
        ],
        correct: 1,
        explanation: "Laporan adalah dokumen yang berisi informasi hasil kegiatan, penelitian, atau observasi yang disajikan secara sistematis dan objektif."
    },
    {
        question: "Manakah yang BUKAN merupakan tujuan laporan?",
        options: [
            "Menyampaikan informasi secara akurat",
            "Mendokumentasikan kegiatan",
            "Menghibur pembaca dengan cerita menarik",
            "Menjadi dasar pengambilan keputusan"
        ],
        correct: 2,
        explanation: "Tujuan laporan adalah menyampaikan informasi, mendokumentasikan, dan menjadi dasar keputusan, bukan untuk menghibur."
    },
    {
        question: "Ciri laporan yang baik adalah...",
        options: [
            "Menggunakan bahasa yang emosional",
            "Berdasarkan opini pribadi",
            "Objektif dan berdasarkan fakta",
            "Menggunakan bahasa tidak formal"
        ],
        correct: 2,
        explanation: "Laporan yang baik harus objektif dan berdasarkan fakta, bukan opini atau emosi pribadi."
    },
    {
        question: "Urutan struktur laporan yang benar adalah...",
        options: [
            "Kesimpulan - Pendahuluan - Isi - Saran",
            "Pendahuluan - Isi - Kesimpulan - Saran",
            "Isi - Pendahuluan - Kesimpulan - Saran",
            "Saran - Kesimpulan - Isi - Pendahuluan"
        ],
        correct: 1,
        explanation: "Struktur laporan yang benar: Pendahuluan → Isi/Pembahasan → Kesimpulan → Saran."
    },
    {
        question: "Manakah pernyataan yang merupakan FAKTA?",
        options: [
            "Internet sangat menarik untuk digunakan",
            "25 dari 30 siswa menggunakan media sosial",
            "Game online lebih seru daripada belajar",
            "Semua siswa seharusnya belajar online"
        ],
        correct: 1,
        explanation: "Fakta adalah kenyataan yang dapat dibuktikan. '25 dari 30 siswa menggunakan media sosial' adalah data yang terukur."
    },
    {
        question: "Fungsi bagian 'Latar Belakang' dalam laporan adalah...",
        options: [
            "Menyimpulkan hasil penelitian",
            "Menjelaskan alasan dan konteks dilakukannya kegiatan",
            "Memberikan saran untuk masa depan",
            "Menyebutkan metode yang digunakan"
        ],
        correct: 1,
        explanation: "Latar belakang menjelaskan alasan mengapa kegiatan/penelitian dilakukan dan konteksnya."
    },
    {
        question: "Data dalam laporan harus bersifat...",
        options: [
            "Fiktif agar menarik",
            "Akurat dan dapat dipertanggungjawabkan",
            "Dibuat-buat untuk mendukung opini",
            "Diambil tanpa mencantumkan sumber"
        ],
        correct: 1,
        explanation: "Data dalam laporan harus akurat, valid, dan dapat dipertanggungjawabkan kebenarannya."
    },
    {
        question: "Mengapa sumber informasi harus dicantumkan dalam laporan?",
        options: [
            "Agar laporan terlihat lebih tebal",
            "Untuk menunjukkan integritas dan menghindari plagiarisme",
            "Karena diwajibkan oleh guru",
            "Agar terlihat lebih pintar"
        ],
        correct: 1,
        explanation: "Mencantumkan sumber menunjukkan integritas, menghargai karya orang lain, dan menghindari plagiarisme."
    },
    {
        question: "Bagian 'Kesimpulan' dalam laporan berisi...",
        options: [
            "Pendapat pribadi tentang topik",
            "Ringkasan hasil dan jawaban atas tujuan penelitian",
            "Metode yang digunakan dalam penelitian",
            "Daftar pertanyaan untuk penelitian selanjutnya"
        ],
        correct: 1,
        explanation: "Kesimpulan berisi ringkasan hasil penelitian dan jawaban atas tujuan yang telah ditetapkan."
    },
    {
        question: "Bahasa yang digunakan dalam laporan sebaiknya...",
        options: [
            "Bahasa gaul agar mudah dipahami teman",
            "Bahasa formal dan baku",
            "Bahasa yang penuh dengan istilah asing",
            "Bahasa yang sangat bertele-tele"
        ],
        correct: 1,
        explanation: "Laporan menggunakan bahasa formal, baku, efektif, dan mudah dipahami."
    }
];

const quizEasyQuestions = [
    {
        question: "Laporan berfungsi untuk menyampaikan informasi kepada pembaca. Fungsi ini disebut fungsi...",
        options: ["Informatif", "Rekreatif", "Persuasif", "Imperatif"],
        correct: 0,
        explanation: "Fungsi informatif adalah fungsi untuk menyampaikan informasi kepada pembaca."
    },
    {
        question: "Manakah yang termasuk jenis laporan?",
        options: ["Laporan cuaca", "Laporan kegiatan", "Laporan mimpi", "Laporan gosip"],
        correct: 1,
        explanation: "Laporan kegiatan adalah salah satu jenis laporan yang melaporkan kegiatan yang telah dilakukan."
    },
    {
        question: "Struktur laporan yang paling awal adalah...",
        options: ["Kesimpulan", "Judul", "Saran", "Daftar Sumber"],
        correct: 1,
        explanation: "Judul adalah bagian paling awal dari struktur laporan yang menjelaskan isi laporan."
    },
    {
        question: "Apa yang dimaksud dengan data primer?",
        options: [
            "Data dari buku dan internet",
            "Data yang dikumpulkan langsung dari sumber pertama",
            "Data yang sudah lama",
            "Data yang paling penting"
        ],
        correct: 1,
        explanation: "Data primer adalah data yang dikumpulkan langsung dari sumber pertama seperti observasi, wawancara, atau survei."
    },
    {
        question: "Manakah yang merupakan contoh opini?",
        options: [
            "30 siswa mengikuti survei",
            "Survei dilakukan pada tanggal 5 September 2026",
            "Media sosial sangat bermanfaat untuk belajar",
            "18 siswa menggunakan internet untuk belajar"
        ],
        correct: 2,
        explanation: "Opini adalah pendapat atau pandangan pribadi. 'Media sosial sangat bermanfaat' adalah pendapat, bukan fakta."
    },
    {
        question: "Bagian yang berisi cara atau metode pelaksanaan kegiatan adalah...",
        options: ["Tujuan", "Metode/Kegiatan", "Pembahasan", "Kesimpulan"],
        correct: 1,
        explanation: "Bagian Metode/Kegiatan menjelaskan cara atau prosedur pelaksanaan kegiatan atau penelitian."
    },
    {
        question: "Laporan harus ditulis secara...",
        options: ["Subjektif", "Objektif", "Emosional", "Imajinatif"],
        correct: 1,
        explanation: "Laporan harus ditulis secara objektif, berdasarkan fakta dan data, bukan perasaan pribadi."
    },
    {
        question: "Mengapa laporan penting dalam bidang Informatika?",
        options: [
            "Untuk mengumpulkan tugas",
            "Untuk mengomunikasikan hasil analisis data dan dokumentasi proyek",
            "Untuk membuat cerita yang menarik",
            "Untuk menghabiskan waktu"
        ],
        correct: 1,
        explanation: "Dalam Informatika, laporan penting untuk mengomunikasikan hasil analisis data, dokumentasi proyek, dan temuan teknologi."
    },
    {
        question: "Apa yang dimaksud dengan plagiarisme?",
        options: [
            "Mencantumkan sumber dengan benar",
            "Menyalin karya orang lain tanpa izin atau menyebutkan sumber",
            "Membuat laporan sendiri",
            "Mengutip dengan mencantumkan sumber"
        ],
        correct: 1,
        explanation: "Plagiarisme adalah tindakan menyalin atau menggunakan karya orang lain tanpa izin dan tanpa menyebutkan sumbernya."
    },
    {
        question: "Bagian 'Saran' dalam laporan berisi...",
        options: [
            "Hasil penelitian",
            "Rekomendasi atau masukan untuk perbaikan di masa depan",
            "Metode penelitian",
            "Latar belakang masalah"
        ],
        correct: 1,
        explanation: "Bagian Saran berisi rekomendasi atau masukan untuk perbaikan atau tindak lanjut di masa depan."
    }
];

const quizMediumQuestions = [
    {
        question: "Sebuah laporan memiliki judul: 'Survei Penggunaan Smartphone di Kalangan Siswa SMP'. Bagian mana yang seharusnya menjelaskan mengapa survei ini dilakukan?",
        options: ["Judul", "Latar Belakang", "Metode", "Hasil"],
        correct: 1,
        explanation: "Latar Belakang menjelaskan alasan dan konteks mengapa kegiatan atau penelitian dilakukan."
    },
    {
        question: "Dalam sebuah survei, 40 dari 50 siswa menggunakan media sosial. Pernyataan mana yang termasuk FAKTA?",
        options: [
            "Media sosial sangat menarik",
            "80% siswa menggunakan media sosial",
            "Semua siswa seharusnya menggunakan media sosial",
            "Media sosial adalah yang terbaik"
        ],
        correct: 1,
        explanation: "80% adalah data faktual hasil perhitungan (40/50 x 100%). Pernyataan lain adalah opini."
    },
    {
        question: "Perhatikan struktur berikut:\n1. Pembahasan\n2. Tujuan\n3. Hasil\n4. Metode\n\nUrutan yang benar dalam laporan adalah...",
        options: [
            "2 - 4 - 3 - 1",
            "4 - 2 - 3 - 1",
            "3 - 1 - 2 - 4",
            "1 - 2 - 3 - 4"
        ],
        correct: 0,
        explanation: "Urutan yang benar: Tujuan → Metode → Hasil → Pembahasan."
    },
    {
        question: "Seorang siswa menulis: 'Berdasarkan data, 90% siswa menggunakan internet untuk mencari informasi. Hal ini menunjukkan kesadaran literasi digital yang baik.' Kalimat kedua termasuk...",
        options: ["Data", "Fakta", "Analisis/Pembahasan", "Metode"],
        correct: 2,
        explanation: "Kalimat kedua adalah analisis/interpretasi dari data yang disajikan pada kalimat pertama."
    },
    {
        question: "Dalam laporan observasi penggunaan laboratorium komputer, data yang dikumpulkan adalah jumlah siswa, waktu penggunaan, dan aktivitas yang dilakukan. Data ini termasuk...",
        options: [
            "Data primer dari observasi langsung",
            "Data sekunder dari buku",
            "Data primer dari internet",
            "Data sekunder dari wawancara"
        ],
        correct: 0,
        explanation: "Data yang dikumpulkan langsung melalui observasi/pengamatan adalah data primer."
    },
    {
        question: "Manakah yang merupakan perbedaan antara 'Hasil' dan 'Pembahasan' dalam laporan?",
        options: [
            "Tidak ada perbedaan",
            "Hasil berisi data mentah, Pembahasan berisi interpretasi data",
            "Hasil berisi opini, Pembahasan berisi fakta",
            "Hasil di awal, Pembahasan di akhir saja"
        ],
        correct: 1,
        explanation: "Hasil menyajikan data atau temuan, sedangkan Pembahasan menganalisis dan menginterpretasi data tersebut."
    },
    {
        question: "Seorang siswa ingin membuat laporan tentang keamanan digital. Sumber mana yang PALING tepat?",
        options: [
            "Status media sosial teman",
            "Artikel dari website resmi lembaga keamanan siber",
            "Komentar di forum tanpa identitas jelas",
            "Cerita dari kakak kelas"
        ],
        correct: 1,
        explanation: "Sumber yang kredibel dan dapat dipertanggungjawabkan seperti website resmi lembaga adalah pilihan terbaik."
    },
    {
        question: "Dalam laporan, kesimpulan yang baik adalah...",
        options: [
            "Menambahkan informasi baru yang tidak ada di pembahasan",
            "Meringkas hasil dan menjawab tujuan penelitian",
            "Mengulang semua data secara detail",
            "Memberikan pendapat pribadi yang tidak berdasar data"
        ],
        correct: 1,
        explanation: "Kesimpulan yang baik meringkas hasil dan menjawab tujuan penelitian berdasarkan data yang telah dibahas."
    },
    {
        question: "Manakah cara penulisan daftar sumber yang BENAR?",
        options: [
            "www.google.com",
            "Buku Informatika",
            "Budiman, A. (2025). Literasi Digital. Jakarta: Penerbit Teknologi.",
            "Internet"
        ],
        correct: 2,
        explanation: "Penulisan sumber harus lengkap dengan nama penulis, tahun, judul, kota, dan penerbit."
    },
    {
        question: "Tujuan pembelajaran dari pembuatan laporan dalam mata pelajaran Informatika adalah...",
        options: [
            "Hanya untuk nilai tugas",
            "Melatih kemampuan menganalisis data dan mengomunikasikan informasi",
            "Menghabiskan waktu di kelas",
            "Meniru laporan orang lain"
        ],
        correct: 1,
        explanation: "Membuat laporan melatih kemampuan menganalisis data, berpikir kritis, dan mengomunikasikan informasi secara sistematis."
    }
];

const quizExpertQuestions = [
    {
        question: "Seorang peneliti mengumpulkan data: 60% siswa menggunakan internet >3 jam/hari, 30% menggunakan 1-3 jam/hari, 10% menggunakan <1 jam/hari. Kesimpulan yang PALING tepat adalah...",
        options: [
            "Semua siswa kecanduan internet",
            "Mayoritas siswa menggunakan internet dengan intensitas tinggi (>3 jam/hari)",
            "Internet tidak bermanfaat untuk siswa",
            "Siswa harus berhenti menggunakan internet"
        ],
        correct: 1,
        explanation: "Kesimpulan harus objektif dan sesuai data. Data menunjukkan mayoritas (60%) menggunakan internet >3 jam/hari."
    },
    {
        question: "Perhatikan data berikut:\n- Belajar online: 25 siswa (nilai rata-rata 85)\n- Belajar offline: 25 siswa (nilai rata-rata 75)\n\nAnalisis yang tepat adalah...",
        options: [
            "Belajar online pasti lebih baik dari offline",
            "Data menunjukkan nilai rata-rata siswa belajar online lebih tinggi 10 poin, namun perlu penelitian lebih lanjut untuk mengetahui faktor penyebabnya",
            "Belajar offline tidak efektif",
            "Semua siswa harus belajar online"
        ],
        correct: 1,
        explanation: "Analisis yang baik menyajikan temuan objektif dan menyadari keterbatasan, bukan langsung membuat kesimpulan absolut."
    },
    {
        question: "Dalam sebuah laporan, ditemukan kalimat: 'Survei dilakukan dengan menyebarkan kuesioner kepada 100 responden yang dipilih secara acak dari 500 siswa.' Kalimat ini termasuk bagian...",
        options: ["Hasil", "Pembahasan", "Metode", "Kesimpulan"],
        correct: 2,
        explanation: "Kalimat tersebut menjelaskan prosedur dan cara pengumpulan data, yang merupakan bagian Metode."
    },
    {
        question: "Seorang siswa menulis laporan dengan struktur: Judul - Metode - Hasil - Tujuan - Kesimpulan. Apa yang perlu diperbaiki?",
        options: [
            "Tidak ada yang perlu diperbaiki",
            "Tujuan harus ditempatkan sebelum Metode",
            "Metode harus di akhir",
            "Hapus bagian Tujuan"
        ],
        correct: 1,
        explanation: "Struktur yang benar: tujuan ditetapkan lebih dulu sebelum menentukan metode penelitian."
    },
    {
        question: "Manakah pernyataan yang menunjukkan pemahaman mendalam tentang etika dalam pembuatan laporan?",
        options: [
            "Boleh mengubah data sedikit agar kesimpulan sesuai hipotesis",
            "Tidak perlu mencantumkan sumber jika informasinya dari internet",
            "Data yang tidak mendukung hipotesis harus tetap dilaporkan dengan jujur",
            "Plagiarisme diperbolehkan jika sumbernya tidak terkenal"
        ],
        correct: 2,
        explanation: "Integritas dalam penelitian mengharuskan semua data dilaporkan dengan jujur, bahkan yang tidak mendukung hipotesis."
    },
    {
        question: "Dalam laporan berbasis data digital, seorang siswa perlu mengevaluasi kredibilitas sumber. Manakah yang PALING kredibel?",
        options: [
            "Blog pribadi tanpa identitas penulis",
            "Jurnal penelitian yang dipublikasikan oleh universitas",
            "Komentar di media sosial",
            "Website tanpa informasi tentang penulis dan institusi"
        ],
        correct: 1,
        explanation: "Jurnal penelitian dari institusi pendidikan memiliki proses peer-review dan lebih kredibel."
    },
    {
        question: "Sebuah laporan menyatakan: 'Hasil menunjukkan 70% siswa setuju bahwa pembelajaran online efektif.' Namun di bagian metode disebutkan survei hanya dilakukan pada 10 siswa. Apa masalah laporan ini?",
        options: [
            "Tidak ada masalah",
            "Sampel terlalu kecil untuk digeneralisasi, kesimpulan tidak representative",
            "Metode sudah benar",
            "Kesimpulan sudah tepat"
        ],
        correct: 1,
        explanation: "Sampel 10 siswa terlalu kecil untuk merepresentasikan populasi dan membuat generalisasi."
    },
    {
        question: "Dalam konteks Informatika, manakah yang merupakan contoh laporan berbasis computational thinking?",
        options: [
            "Laporan yang hanya berisi narasi tanpa data",
            "Laporan analisis data penggunaan aplikasi dengan visualisasi grafik dan interpretasi pola",
            "Laporan yang hanya berisi opini",
            "Laporan tanpa struktur"
        ],
        correct: 1,
        explanation: "Computational thinking melibatkan analisis data, identifikasi pola, dan visualisasi—bukan sekadar narasi."
    },
    {
        question: "Bagian 'Pembahasan' yang berkualitas tinggi seharusnya...",
        options: [
            "Hanya mengulang data dari bagian Hasil",
            "Menganalisis data, membandingkan dengan teori/penelitian lain, dan mengidentifikasi pola atau implikasi",
            "Berisi opini pribadi tanpa dasar data",
            "Sesingkat mungkin tanpa penjelasan"
        ],
        correct: 1,
        explanation: "Pembahasan berkualitas menganalisis data secara mendalam, membandingkan dengan referensi, dan mengidentifikasi makna/implikasi."
    },
    {
        question: "Seorang siswa menemukan dua sumber dengan informasi yang bertentangan tentang dampak game online. Apa yang seharusnya dilakukan?",
        options: [
            "Memilih sumber yang mendukung opini pribadi",
            "Mengabaikan kedua sumber",
            "Menyajikan kedua pandangan, mengevaluasi kredibilitas masing-masing, dan menyimpulkan berdasarkan bukti terkuat",
            "Hanya menggunakan satu sumber"
        ],
        correct: 2,
        explanation: "Pendekatan akademis yang baik adalah menyajikan berbagai pandangan, mengevaluasi kredibilitas, dan menyimpulkan berdasarkan bukti."
    }
];

const posttestQuestions = [
    {
        question: "Dalam Informatika, laporan digunakan untuk mengomunikasikan hasil analisis data. Apa yang membedakan laporan informatika dengan laporan lainnya?",
        options: [
            "Tidak ada perbedaan",
            "Laporan informatika lebih banyak menggunakan data, grafik, dan visualisasi teknologi",
            "Laporan informatika tidak perlu struktur",
            "Laporan informatika hanya berisi kode program"
        ],
        correct: 1,
        explanation: "Laporan informatika cenderung berbasis data dengan visualisasi dan dokumentasi teknologi yang lebih intensif."
    },
    {
        question: "Fungsi utama bagian 'Pendahuluan' dalam laporan adalah...",
        options: [
            "Menyimpulkan hasil penelitian",
            "Memberikan gambaran umum dan konteks tentang topik laporan",
            "Menjelaskan metode penelitian secara detail",
            "Mencantumkan daftar sumber"
        ],
        correct: 1,
        explanation: "Pendahuluan memberikan gambaran umum, konteks, dan pengantar topik yang akan dibahas."
    },
    {
        question: "Manakah urutan proses pembuatan laporan yang benar dalam konteks Informatika?",
        options: [
            "Menulis - Mengumpulkan data - Menganalisis - Menyimpulkan",
            "Mengumpulkan data - Mengolah - Menganalisis - Menyajikan - Mengomunikasikan",
            "Menyimpulkan - Mengumpulkan data - Menulis",
            "Menganalisis - Mengumpulkan data - Menulis"
        ],
        correct: 1,
        explanation: "Proses yang sistematis: kumpulkan data → olah → analisis → sajikan → komunikasikan."
    },
    {
        question: "Data kuantitatif dalam laporan adalah...",
        options: [
            "Data berupa angka dan statistik",
            "Data berupa pendapat dan cerita",
            "Data berupa gambar saja",
            "Data berupa opini pribadi"
        ],
        correct: 0,
        explanation: "Data kuantitatif adalah data numerik yang dapat diukur dan dihitung secara statistik."
    },
    {
        question: "Mengapa visualisasi data (grafik, chart) penting dalam laporan?",
        options: [
            "Agar laporan terlihat menarik saja",
            "Untuk memudahkan pembaca memahami data dan melihat pola dengan cepat",
            "Untuk menghabiskan halaman",
            "Karena diwajibkan"
        ],
        correct: 1,
        explanation: "Visualisasi data membantu pembaca memahami informasi kompleks dengan lebih cepat dan melihat pola/tren."
    },
    {
        question: "Dalam bagian 'Hasil', data 'Dari 50 siswa, 40 menggunakan smartphone, 8 menggunakan laptop, 2 menggunakan tablet' sebaiknya disajikan dengan...",
        options: [
            "Hanya teks naratif",
            "Tabel atau grafik disertai penjelasan singkat",
            "Tidak perlu disajikan",
            "Hanya grafik tanpa penjelasan"
        ],
        correct: 1,
        explanation: "Data numerik sebaiknya disajikan dengan tabel/grafik untuk kejelasan, disertai penjelasan tekstual."
    },
    {
        question: "Apa perbedaan antara 'Kesimpulan' dan 'Saran' dalam laporan?",
        options: [
            "Tidak ada perbedaan",
            "Kesimpulan meringkas hasil penelitian, Saran memberikan rekomendasi untuk tindak lanjut",
            "Kesimpulan berisi data, Saran berisi hasil",
            "Kesimpulan dan Saran sama-sama berisi opini"
        ],
        correct: 1,
        explanation: "Kesimpulan meringkas temuan berdasarkan data, sedangkan Saran memberikan rekomendasi untuk perbaikan/tindak lanjut."
    },
    {
        question: "Dalam menyusun laporan digital, format file yang paling umum dan profesional adalah...",
        options: [
            "Format gambar (.jpg)",
            "Format dokumen (.pdf atau .docx)",
            "Format video (.mp4)",
            "Format audio (.mp3)"
        ],
        correct: 1,
        explanation: "Format dokumen seperti PDF atau DOCX adalah format standar untuk laporan profesional yang mudah dibaca dan dicetak."
    },
    {
        question: "Manakah yang menunjukkan literasi digital yang baik dalam pembuatan laporan?",
        options: [
            "Menyalin informasi dari internet tanpa verifikasi",
            "Mengevaluasi kredibilitas sumber, mencantumkan referensi, dan menggunakan data yang valid",
            "Menggunakan semua informasi yang ditemukan di media sosial",
            "Tidak perlu mencantumkan sumber"
        ],
        correct: 1,
        explanation: "Literasi digital meliputi kemampuan mengevaluasi sumber, verifikasi informasi, dan penggunaan data yang kredibel."
    },
    {
        question: "Plagiarisme dalam laporan dapat dihindari dengan...",
        options: [
            "Mengubah sedikit kalimat dari sumber",
            "Tidak mencantumkan sumber sama sekali",
            "Menulis dengan kata-kata sendiri (parafrase) dan mencantumkan sumber dengan jelas",
            "Menyalin langsung tanpa tanda kutip"
        ],
        correct: 2,
        explanation: "Hindari plagiarisme dengan parafrase (menulis ulang dengan kata sendiri) dan selalu cantumkan sumber."
    },
    {
        question: "Bagian mana yang menjelaskan 'bagaimana' kegiatan atau penelitian dilakukan?",
        options: ["Pendahuluan", "Metode/Cara Kerja", "Hasil", "Kesimpulan"],
        correct: 1,
        explanation: "Bagian Metode/Cara Kerja menjelaskan prosedur, teknik, dan langkah-langkah yang dilakukan dalam penelitian."
    },
    {
        question: "Apa yang harus dilakukan jika data yang dikumpulkan tidak mendukung hipotesis awal?",
        options: [
            "Mengubah data agar sesuai hipotesis",
            "Melaporkan data apa adanya dan menjelaskan mengapa hipotesis tidak terbukti",
            "Tidak melaporkan data tersebut",
            "Membuat data baru yang mendukung"
        ],
        correct: 1,
        explanation: "Integritas ilmiah mengharuskan melaporkan data apa adanya, bahkan jika tidak mendukung hipotesis."
    },
    {
        question: "Dalam konteks keamanan digital, informasi pribadi responden dalam laporan seharusnya...",
        options: [
            "Dipublikasikan lengkap dengan nama dan foto",
            "Dijaga kerahasiaannya dan dianonimkan jika perlu",
            "Disebarkan ke media sosial",
            "Dijual kepada pihak lain"
        ],
        correct: 1,
        explanation: "Etika penelitian mengharuskan menjaga privasi responden dengan anonimisasi data pribadi."
    },
    {
        question: "Manakah contoh penerapan computational thinking dalam analisis data untuk laporan?",
        options: [
            "Hanya menulis opini tanpa data",
            "Mengidentifikasi pola, membuat abstraksi, dan menggunakan algoritma untuk mengolah data",
            "Menyalin data tanpa analisis",
            "Menulis narasi tanpa struktur"
        ],
        correct: 1,
        explanation: "Computational thinking melibatkan identifikasi pola, abstraksi, dan penggunaan logika sistematis dalam analisis data."
    },
    {
        question: "Setelah mempelajari pembuatan laporan, kemampuan apa yang paling penting telah kamu kuasai?",
        options: [
            "Kemampuan menyalin dari internet",
            "Kemampuan menganalisis informasi, menyajikan data secara sistematis, dan mengomunikasikan hasil dengan jelas",
            "Kemampuan menulis cerita fiksi",
            "Kemampuan membuat opini tanpa dasar"
        ],
        correct: 1,
        explanation: "Keterampilan utama adalah menganalisis informasi, menyajikan data sistematis, dan mengomunikasikan dengan jelas—keterampilan penting di era digital."
    }
];

// ========================================
// STRUCTURE DETAILS DATA
// ========================================

const structureDetails = {
    1: {
        title: "1. HALAMAN JUDUL",
        content: `
            <h3>Pengertian</h3>
            <p>Halaman judul adalah halaman pertama (cover) laporan yang memuat informasi identitas laporan.</p>
            
            <h3>Fungsi</h3>
            <ul>
                <li>Memberikan identitas lengkap laporan</li>
                <li>Menarik perhatian pembaca</li>
                <li>Memberikan kesan profesional</li>
                <li>Memudahkan identifikasi dan pengarsipan</li>
            </ul>
            
            <h3>Komponen</h3>
            <ul>
                <li>Judul Laporan (ditulis dengan huruf kapital)</li>
                <li>Logo/Gambar (opsional)</li>
                <li>Identitas penyusun (nama, kelas)</li>
                <li>Identitas sekolah</li>
                <li>Tahun pembuatan</li>
            </ul>
            
            <h3>Contoh</h3>
            <div style="text-align: center; border: 1px solid #ccc; padding: 20px; margin: 10px 0;">
                <h4>LAPORAN SURVEI</h4>
                <h3>PENGGUNAAN INTERNET SISWA<br>KELAS VIII SMP NEGERI 1</h3>
                <p style="margin: 30px 0;">Disusun Oleh:<br>Kelompok 1</p>
                <p>SMP NEGERI 1<br>2026</p>
            </div>
        `
    },
    2: {
        title: "2. KATA PENGANTAR",
        content: `
            <h3>Pengertian</h3>
            <p>Kata pengantar adalah ucapan pembuka dari penulis yang berisi ungkapan syukur, tujuan penulisan, dan ucapan terima kasih.</p>
            
            <h3>Fungsi</h3>
            <ul>
                <li>Mengungkapkan rasa syukur</li>
                <li>Mengantar pembaca ke isi laporan</li>
                <li>Menyampaikan ucapan terima kasih</li>
                <li>Menunjukkan sikap profesional</li>
            </ul>
            
            <h3>Struktur</h3>
            <ul>
                <li>Ungkapan syukur kepada Tuhan</li>
                <li>Penjelasan singkat tentang laporan</li>
                <li>Ucapan terima kasih kepada pihak terkait</li>
                <li>Harapan dan penutup</li>
                <li>Tempat, tanggal, dan tanda tangan penyusun</li>
            </ul>
            
            <h3>Contoh</h3>
            <p style="text-indent: 40px;">Puji syukur kami panjatkan kepada Tuhan Yang Maha Esa yang telah memberikan rahmat dan karunia-Nya sehingga kami dapat menyelesaikan laporan survei ini dengan baik.</p>
            <p style="text-indent: 40px;">Laporan ini disusun berdasarkan hasil survei tentang penggunaan internet di kalangan siswa kelas VIII. Kami berharap laporan ini dapat memberikan informasi yang bermanfaat bagi pembaca.</p>
            <p style="text-indent: 40px;">Kami mengucapkan terima kasih kepada semua pihak yang telah membantu dalam penyusunan laporan ini.</p>
        `
    },
    3: {
        title: "3. DAFTAR ISI",
        content: `
            <h3>Pengertian</h3>
            <p>Daftar isi adalah daftar yang memuat judul bab, sub-bab, dan bagian lain beserta nomor halamannya.</p>
            
            <h3>Fungsi</h3>
            <ul>
                <li>Memudahkan pembaca menemukan bagian tertentu</li>
                <li>Memberikan gambaran struktur laporan</li>
                <li>Sebagai peta navigasi laporan</li>
                <li>Menunjukkan sistematika laporan</li>
            </ul>
            
            <h3>Format</h3>
            <p>Daftar isi ditulis rapi dengan indentasi untuk sub-bagian dan dilengkapi nomor halaman di sebelah kanan.</p>
            
            <h3>Contoh</h3>
            <p>
            KATA PENGANTAR .................... i<br>
            DAFTAR ISI ........................ ii<br>
            BAB I PENDAHULUAN ................. 1<br>
            &nbsp;&nbsp;&nbsp;&nbsp;A. Latar Belakang ............. 1<br>
            &nbsp;&nbsp;&nbsp;&nbsp;B. Tujuan ..................... 2<br>
            BAB II PEMBAHASAN ................. 3<br>
            &nbsp;&nbsp;&nbsp;&nbsp;A. Metode Penelitian .......... 3<br>
            &nbsp;&nbsp;&nbsp;&nbsp;B. Hasil Penelitian ........... 4<br>
            &nbsp;&nbsp;&nbsp;&nbsp;C. Pembahasan ................. 5<br>
            BAB III PENUTUP ................... 6<br>
            &nbsp;&nbsp;&nbsp;&nbsp;A. Kesimpulan ................. 6<br>
            &nbsp;&nbsp;&nbsp;&nbsp;B. Saran ...................... 7<br>
            DAFTAR PUSTAKA .................... 8<br>
            LAMPIRAN .......................... 9
            </p>
        `
    },
    4: {
        title: "4. BAB I - PENDAHULUAN",
        content: `
            <h3>Pengertian</h3>
            <p>BAB I PENDAHULUAN adalah bab pembuka yang memuat konteks umum, masalah, tujuan, dan manfaat penelitian.</p>
            
            <h3>Fungsi</h3>
            <ul>
                <li>Memberikan gambaran umum penelitian</li>
                <li>Menjelaskan konteks dan latar belakang</li>
                <li>Menyatakan tujuan penelitian</li>
                <li>Menjelaskan manfaat penelitian</li>
            </ul>
            
            <h3>Sub-Bagian</h3>
            <ul>
                <li><strong>A. Latar Belakang:</strong> Konteks dan alasan penelitian dilakukan</li>
                <li><strong>B. Rumusan Masalah:</strong> Pertanyaan penelitian (opsional)</li>
                <li><strong>C. Tujuan:</strong> Apa yang ingin dicapai dari penelitian</li>
                <li><strong>D. Manfaat:</strong> Kegunaan hasil penelitian (opsional)</li>
            </ul>
            
            <h3>Contoh</h3>
            <p><strong>A. Latar Belakang</strong></p>
            <p style="text-indent: 40px;">Dengan semakin berkembangnya teknologi, penggunaan internet di kalangan pelajar terus meningkat. Internet telah menjadi bagian penting dalam kehidupan siswa. Penting untuk mengetahui bagaimana siswa memanfaatkan internet agar dapat memberikan arahan yang tepat.</p>
            
            <p><strong>B. Tujuan</strong></p>
            <p style="text-indent: 40px;">Mengetahui kebiasaan dan tujuan penggunaan internet oleh siswa kelas VIII SMP Negeri 1.</p>
        `
    },
    5: {
        title: "5. BAB II - PEMBAHASAN",
        content: `
            <h3>Pengertian</h3>
            <p>BAB II PEMBAHASAN adalah inti laporan yang memuat teori, metode, hasil, dan analisis penelitian.</p>
            
            <h3>Fungsi</h3>
            <ul>
                <li>Menyajikan landasan teori</li>
                <li>Menjelaskan metode penelitian</li>
                <li>Menyajikan data dan hasil</li>
                <li>Menganalisis dan menginterpretasi data</li>
            </ul>
            
            <h3>Sub-Bagian</h3>
            <ul>
                <li><strong>A. Dasar Teori:</strong> Teori yang mendukung penelitian (opsional)</li>
                <li><strong>B. Alat dan Bahan:</strong> Alat yang digunakan (jika ada)</li>
                <li><strong>C. Metode Penelitian:</strong> Cara pengumpulan dan pengolahan data</li>
                <li><strong>D. Hasil Penelitian:</strong> Data dan temuan objektif</li>
                <li><strong>E. Pembahasan:</strong> Analisis dan interpretasi hasil</li>
            </ul>
            
            <h3>Contoh</h3>
            <p><strong>C. Metode Penelitian</strong></p>
            <p style="text-indent: 40px;">Survei dilakukan dengan menyebarkan kuesioner digital kepada 30 siswa kelas VIII pada tanggal 1 September 2026.</p>
            
            <p><strong>D. Hasil Penelitian</strong></p>
            <p style="text-indent: 40px;">Dari 30 responden, 27 siswa (90%) menggunakan internet untuk mencari informasi, 25 siswa (83%) untuk media sosial.</p>
            
            <p><strong>E. Pembahasan</strong></p>
            <p style="text-indent: 40px;">Mayoritas siswa menggunakan internet untuk mencari informasi, menunjukkan kesadaran literasi digital yang baik.</p>
        `
    },
    6: {
        title: "6. BAB III - PENUTUP",
        content: `
            <h3>Pengertian</h3>
            <p>BAB III PENUTUP adalah bab terakhir yang memuat kesimpulan dan saran penelitian.</p>
            
            <h3>Fungsi</h3>
            <ul>
                <li>Meringkas hasil penelitian</li>
                <li>Menjawab tujuan penelitian</li>
                <li>Memberikan rekomendasi</li>
                <li>Menutup laporan dengan baik</li>
            </ul>
            
            <h3>Sub-Bagian</h3>
            <ul>
                <li><strong>A. Kesimpulan:</strong> Ringkasan hasil yang menjawab tujuan penelitian</li>
                <li><strong>B. Saran:</strong> Rekomendasi untuk tindak lanjut atau perbaikan</li>
            </ul>
            
            <h3>Tips</h3>
            <ul>
                <li>Kesimpulan harus berdasarkan data dan hasil pembahasan</li>
                <li>Jangan menambahkan informasi baru di kesimpulan</li>
                <li>Saran harus realistis dan dapat diterapkan</li>
                <li>Saran dapat ditujukan untuk berbagai pihak terkait</li>
            </ul>
            
            <h3>Contoh</h3>
            <p><strong>A. Kesimpulan</strong></p>
            <p style="text-indent: 40px;">Berdasarkan hasil survei, siswa kelas VIII aktif menggunakan internet, terutama untuk mencari informasi (90%) dan media sosial (83%). Penggunaan untuk belajar (60%) masih perlu ditingkatkan.</p>
            
            <p><strong>B. Saran</strong></p>
            <p style="text-indent: 40px;">Sekolah perlu memberikan edukasi tentang pemanfaatan internet untuk pembelajaran yang lebih optimal.</p>
        `
    },
    7: {
        title: "7. DAFTAR PUSTAKA",
        content: `
            <h3>Pengertian</h3>
            <p>Daftar Pustaka adalah daftar sumber referensi yang digunakan dalam penyusunan laporan.</p>
            
            <h3>Fungsi</h3>
            <ul>
                <li>Menunjukkan kredibilitas informasi</li>
                <li>Menghargai karya orang lain (menghindari plagiarisme)</li>
                <li>Memudahkan pembaca mencari referensi</li>
                <li>Menunjukkan luasnya referensi yang digunakan</li>
            </ul>
            
            <h3>Format Penulisan</h3>
            <p><strong>Buku:</strong><br>
            Nama Penulis. (Tahun). <em>Judul Buku</em>. Kota: Penerbit.</p>
            
            <p><strong>Website:</strong><br>
            Nama Penulis/Organisasi. (Tahun). Judul Artikel. Diakses dari URL pada tanggal akses.</p>
            
            <p><strong>Data Primer:</strong><br>
            Data Primer: Keterangan data (survei, wawancara, observasi), tanggal.</p>
            
            <h3>Contoh</h3>
            <p>Budiman, A. (2025). <em>Literasi Digital untuk Remaja</em>. Jakarta: Penerbit Teknologi.</p>
            <p>Kominfo. (2026). Statistik Pengguna Internet Indonesia. Diakses dari https://www.kominfo.go.id pada 1 September 2026.</p>
            <p>Data Primer: Survei Penggunaan Internet Siswa Kelas VIII SMP Negeri 1, 1 September 2026.</p>
        `
    },
    8: {
        title: "8. LAMPIRAN",
        content: `
            <h3>Pengertian</h3>
            <p>Lampiran adalah bagian tambahan yang memuat dokumen pendukung yang tidak dimasukkan ke dalam isi laporan.</p>
            
            <h3>Fungsi</h3>
            <ul>
                <li>Menyediakan informasi pendukung yang detail</li>
                <li>Memuat dokumentasi (foto, tabel, grafik)</li>
                <li>Tidak mengganggu alur pembacaan laporan utama</li>
                <li>Memberikan bukti/data mentah</li>
            </ul>
            
            <h3>Isi Lampiran</h3>
            <ul>
                <li>Foto kegiatan atau dokumentasi</li>
                <li>Kuesioner atau instrumen penelitian</li>
                <li>Tabel data lengkap</li>
                <li>Grafik atau diagram</li>
                <li>Screenshot atau bukti digital</li>
                <li>Surat izin atau dokumen lain</li>
            </ul>
            
            <h3>Cara Penulisan</h3>
            <p>Setiap lampiran diberi nomor atau label (Lampiran 1, Lampiran 2, dst) dan diberi judul yang jelas.</p>
            
            <h3>Contoh</h3>
            <p><strong>LAMPIRAN 1</strong><br>
            Kuesioner Survei Penggunaan Internet</p>
            <p><strong>LAMPIRAN 2</strong><br>
            Foto Kegiatan Pengisian Kuesioner</p>
            <p><strong>LAMPIRAN 3</strong><br>
            Tabel Data Lengkap Hasil Survei</p>
        `
    }
};

// ========================================
// REPORT BUILDER STEPS
// ========================================

const builderSteps = [
    {
        step: 1,
        title: "Upload Gambar Cover",
        instruction: "Upload gambar untuk cover laporan (opsional)",
        type: "image",
        id: "coverImage"
    },
    {
        step: 2,
        title: "Buat Judul Laporan",
        instruction: "Buatlah judul yang menggambarkan isi laporan dengan jelas.",
        placeholder: "Contoh: Laporan Survei Penggunaan Internet Siswa Kelas VIII",
        type: "textarea"
    },
    {
        step: 3,
        title: "Identitas Penyusun",
        instruction: "Isi identitas penyusun laporan",
        type: "identity",
        fields: [
            { label: "Nama Penyusun", id: "namaPenyusun", placeholder: "Nama lengkap" },
            { label: "Kelas", id: "kelasPenyusun", placeholder: "Contoh: VIII-A" },
            { label: "Nama Sekolah", id: "namaSekolah", placeholder: "Nama sekolah" },
            { label: "Tahun Pelajaran", id: "tahunPelajaran", placeholder: "Contoh: 2026/2027" }
        ]
    },
    {
        step: 4,
        title: "Kata Pengantar",
        instruction: "Tuliskan kata pengantar laporan",
        placeholder: "Contoh: Puji syukur kami panjatkan kepada Tuhan Yang Maha Esa...",
        type: "textarea"
    },
    {
        step: 5,
        title: "Daftar Isi",
        instruction: "Daftar isi akan dibuat otomatis berdasarkan struktur laporan",
        type: "info"
    },
    {
        step: 6,
        title: "BAB I - PENDAHULUAN",
        instruction: "Tuliskan pendahuluan yang berisi:",
        type: "subsection",
        subsections: [
            { label: "A. Latar Belakang", id: "latarBelakang", placeholder: "Jelaskan konteks dan pentingnya penelitian..." },
            { label: "B. Rumusan Masalah", id: "rumusanMasalah", placeholder: "Apa masalah yang akan diteliti?" },
            { label: "C. Tujuan", id: "tujuan", placeholder: "Apa tujuan dari penelitian ini?" },
            { label: "D. Manfaat", id: "manfaat", placeholder: "Apa manfaat dari penelitian ini?" }
        ]
    },
    {
        step: 7,
        title: "BAB II - PEMBAHASAN",
        instruction: "Tuliskan pembahasan yang berisi:",
        type: "subsection",
        subsections: [
            { label: "A. Dasar Teori", id: "dasarTeori", placeholder: "Tuliskan teori yang mendukung penelitian..." },
            { label: "B. Alat dan Bahan (jika ada)", id: "alatBahan", placeholder: "Sebutkan alat dan bahan yang digunakan..." },
            { label: "C. Langkah-langkah Kegiatan/Metode", id: "metode", placeholder: "Jelaskan bagaimana data dikumpulkan..." },
            { label: "D. Hasil Kegiatan", id: "hasil", placeholder: "Sajikan data yang diperoleh..." },
            { label: "E. Pembahasan", id: "pembahasan", placeholder: "Analisis dan interpretasi data..." }
        ]
    },
    {
        step: 8,
        title: "BAB III - PENUTUP",
        instruction: "Tuliskan penutup yang berisi:",
        type: "subsection",
        subsections: [
            { label: "A. Kesimpulan", id: "kesimpulan", placeholder: "Ringkas temuan utama..." },
            { label: "B. Saran", id: "saran", placeholder: "Berikan rekomendasi..." }
        ]
    },
    {
        step: 9,
        title: "Daftar Pustaka",
        instruction: "Cantumkan sumber-sumber yang digunakan",
        placeholder: "Contoh:\nNama Penulis. (Tahun). Judul. Kota: Penerbit.\nAtau\nData Primer: Survei siswa, tanggal...",
        type: "textarea"
    },
    {
        step: 10,
        title: "Lampiran (jika ada)",
        instruction: "Upload gambar untuk lampiran seperti foto kegiatan, screenshot data, atau dokumentasi lainnya (opsional)",
        type: "image",
        id: "lampiranImage"
    }
];

// ========================================
// PROJECT SECTIONS
// ========================================

const projectSections = [
    { id: 'judul', title: 'Judul', placeholder: 'Tuliskan judul laporan Anda...' },
    { id: 'pendahuluan', title: 'Pendahuluan', placeholder: 'Tuliskan pendahuluan...' },
    { id: 'latarBelakang', title: 'Latar Belakang', placeholder: 'Jelaskan latar belakang...' },
    { id: 'tujuan', title: 'Tujuan', placeholder: 'Tuliskan tujuan laporan...' },
    { id: 'metode', title: 'Metode/Kegiatan', placeholder: 'Jelaskan metode pengumpulan data...' },
    { id: 'data', title: 'Data', placeholder: 'Sajikan data yang Anda kumpulkan...' },
    { id: 'hasil', title: 'Hasil', placeholder: 'Tuliskan hasil analisis data...' },
    { id: 'pembahasan', title: 'Pembahasan', placeholder: 'Analisis dan interpretasikan data...' },
    { id: 'kesimpulan', title: 'Kesimpulan', placeholder: 'Tuliskan kesimpulan...' },
    { id: 'saran', title: 'Saran', placeholder: 'Berikan saran atau rekomendasi...' },
    { id: 'sumber', title: 'Daftar Sumber', placeholder: 'Cantumkan sumber informasi...' }
];

// ========================================
// PAGE NAVIGATION
// ========================================

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    // Show/hide navbar
    if (pageId === 'page-cover' || pageId === 'page-identity') {
        document.getElementById('navbar').style.display = 'none';
    } else {
        document.getElementById('navbar').style.display = 'block';
        updateProgress();
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function startMission() {
    loadData();
    showPage('page-identity');
}

function saveIdentity(event) {
    event.preventDefault();
    studentData.name = document.getElementById('studentName').value;
    studentData.class = document.getElementById('studentClass').value;
    studentData.number = document.getElementById('studentNumber').value;
    saveData();
    
    showPage('page-dashboard');
    updateDashboard();
    unlockMission(1);
}

function goToDashboard() {
    showPage('page-dashboard');
    updateDashboard();
}

// ========================================
// DASHBOARD MANAGEMENT
// ========================================

function updateDashboard() {
    document.getElementById('studentNameDisplay').textContent = studentData.name.toUpperCase();
    
    // Update progress
    const progress = Math.round((studentData.completedMissions.length / 11) * 100);
    document.getElementById('dashboardProgress').style.width = progress + '%';
    document.getElementById('dashboardProgressText').textContent = progress;
    
    // Update mission cards
    document.querySelectorAll('.mission-card').forEach((card, index) => {
        const missionNum = index + 1;
        const statusSpan = card.querySelector('.mission-status');
        
        if (studentData.completedMissions.includes(missionNum)) {
            card.classList.remove('locked', 'active');
            card.classList.add('completed');
            statusSpan.textContent = '✅ Selesai';
        } else if (missionNum === studentData.currentMission) {
            card.classList.remove('locked', 'completed');
            card.classList.add('active');
            statusSpan.textContent = '▶ Sedang dikerjakan';
        } else if (missionNum < studentData.currentMission) {
            card.classList.remove('locked');
            statusSpan.textContent = '🔓 Tersedia';
        } else {
            card.classList.add('locked');
            statusSpan.textContent = '🔒 Locked';
        }
    });
    
    // Update badges
    updateBadgesDisplay();
}

function updateProgress() {
    const progress = Math.round((studentData.completedMissions.length / 11) * 100);
    document.getElementById('mainProgress').style.width = progress + '%';
    document.getElementById('progressText').textContent = progress + '%';
}

function unlockMission(missionNum) {
    if (missionNum > studentData.currentMission) {
        studentData.currentMission = missionNum;
        saveData();
        updateDashboard();
    }
}

function completeMission(missionNum) {
    if (!studentData.completedMissions.includes(missionNum)) {
        studentData.completedMissions.push(missionNum);
    }
    unlockMission(missionNum + 1);
    saveData();
    
    if (missionNum < 11) {
        showPage('page-dashboard');
        updateDashboard();
    }
}

function startMissionPage(missionNum) {
    if (missionNum > studentData.currentMission) {
        alert('Mission ini masih terkunci. Selesaikan mission sebelumnya terlebih dahulu!');
        return;
    }
    
    showPage('mission-' + missionNum);
    
    // Initialize mission content
    switch(missionNum) {
        case 1:
            initPretest();
            break;
        case 4:
            initReportBuilder();
            break;
        case 5:
            initQuiz('easy');
            break;
        case 6:
            initQuiz('medium');
            break;
        case 7:
            initQuiz('expert');
            break;
        case 8:
            initProject();
            break;
        case 9:
            initPosttest();
            break;
        case 11:
            displayFinalResults();
            break;
    }
}

// ========================================
// QUIZ FUNCTIONS
// ========================================

let currentQuiz = [];
let currentQuizAnswers = [];
let currentQuizType = '';

function initPretest() {
    currentQuiz = pretestQuestions;
    currentQuizAnswers = new Array(currentQuiz.length).fill(null);
    currentQuizType = 'pretest';
    
    // Ensure DOM is ready
    setTimeout(() => {
        const container = document.getElementById('pretestQuiz');
        if (container) {
            renderQuiz('pretestQuiz');
        } else {
            console.error('pretestQuiz container not found');
        }
    }, 100);
}

function initPosttest() {
    currentQuiz = posttestQuestions;
    currentQuizAnswers = new Array(currentQuiz.length).fill(null);
    currentQuizType = 'posttest';
    
    // Ensure DOM is ready
    setTimeout(() => {
        const container = document.getElementById('posttestQuiz');
        if (container) {
            renderQuiz('posttestQuiz');
        } else {
            console.error('posttestQuiz container not found');
        }
    }, 100);
}

function initQuiz(level) {
    if (level === 'easy') {
        currentQuiz = quizEasyQuestions;
        currentQuizType = 'quizEasy';
        setTimeout(() => {
            const container = document.getElementById('quizEasy');
            if (container) {
                renderQuiz('quizEasy');
            } else {
                console.error('quizEasy container not found');
            }
        }, 100);
    } else if (level === 'medium') {
        currentQuiz = quizMediumQuestions;
        currentQuizType = 'quizMedium';
        setTimeout(() => {
            const container = document.getElementById('quizMedium');
            if (container) {
                renderQuiz('quizMedium');
            } else {
                console.error('quizMedium container not found');
            }
        }, 100);
    } else if (level === 'expert') {
        currentQuiz = quizExpertQuestions;
        currentQuizType = 'quizExpert';
        setTimeout(() => {
            const container = document.getElementById('quizExpert');
            if (container) {
                renderQuiz('quizExpert');
            } else {
                console.error('quizExpert container not found');
            }
        }, 100);
    }
    currentQuizAnswers = new Array(currentQuiz.length).fill(null);
}

function renderQuiz(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id "${containerId}" not found`);
        return;
    }
    
    container.innerHTML = '';
    
    if (!currentQuiz || currentQuiz.length === 0) {
        console.error('No quiz data available');
        container.innerHTML = '<p class="error">Error: Quiz data tidak ditemukan.</p>';
        return;
    }
    
    currentQuiz.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.id = 'question-' + index;
        
        // Question number
        const questionNumber = document.createElement('span');
        questionNumber.className = 'question-number';
        questionNumber.textContent = `Soal ${index + 1}/${currentQuiz.length}`;
        
        // Question text
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.innerHTML = q.question.replace(/\n/g, '<br>');
        
        // Options container
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'question-options';
        
        // Create option buttons
        q.options.forEach((option, optIndex) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-button';
            optionBtn.textContent = `${String.fromCharCode(65 + optIndex)}. ${option}`;
            optionBtn.dataset.questionIndex = index;
            optionBtn.dataset.optionIndex = optIndex;
            
            // Add click event
            optionBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const qIdx = parseInt(this.dataset.questionIndex);
                const oIdx = parseInt(this.dataset.optionIndex);
                selectAnswer(qIdx, oIdx);
            });
            
            optionsContainer.appendChild(optionBtn);
        });
        
        // Feedback div
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback';
        feedbackDiv.id = 'feedback-' + index;
        feedbackDiv.style.display = 'none';
        
        // Append all elements
        questionDiv.appendChild(questionNumber);
        questionDiv.appendChild(questionText);
        questionDiv.appendChild(optionsContainer);
        questionDiv.appendChild(feedbackDiv);
        
        container.appendChild(questionDiv);
    });
    
    // Submit button
    const navDiv = document.createElement('div');
    navDiv.className = 'quiz-navigation';
    
    const submitBtn = document.createElement('button');
    submitBtn.className = 'btn-primary btn-large';
    submitBtn.textContent = 'SUBMIT JAWABAN';
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        submitQuiz();
    });
    
    navDiv.appendChild(submitBtn);
    container.appendChild(navDiv);
}

function selectAnswer(questionIndex, optionIndex) {
    currentQuizAnswers[questionIndex] = optionIndex;
    
    // Update visual selection
    const questionDiv = document.querySelectorAll('.quiz-question')[questionIndex];
    const options = questionDiv.querySelectorAll('.option-button');
    options.forEach((btn, idx) => {
        btn.classList.toggle('selected', idx === optionIndex);
    });
}

function submitQuiz() {
    // Check if all questions are answered
    if (currentQuizAnswers.includes(null)) {
        alert('Mohon jawab semua soal terlebih dahulu!');
        return;
    }
    
    let correctCount = 0;
    
    // Show feedback for each question
    currentQuiz.forEach((q, index) => {
        const isCorrect = currentQuizAnswers[index] === q.correct;
        if (isCorrect) correctCount++;
        
        const questionDiv = document.querySelectorAll('.quiz-question')[index];
        const options = questionDiv.querySelectorAll('.option-button');
        const feedbackDiv = questionDiv.querySelector('.feedback');
        
        options.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === q.correct) {
                btn.classList.add('correct');
            } else if (idx === currentQuizAnswers[index] && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        feedbackDiv.style.display = 'block';
        feedbackDiv.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');
        feedbackDiv.innerHTML = `
            <strong>${isCorrect ? '✅ Benar!' : '❌ Kurang Tepat'}</strong><br>
            ${q.explanation}
        `;
    });
    
    // Calculate score
    const score = Math.round((correctCount / currentQuiz.length) * 100);
    
    // Save score
    if (currentQuizType === 'pretest') {
        studentData.scores.pretest = score;
    } else if (currentQuizType === 'posttest') {
        studentData.scores.posttest = score;
    } else if (currentQuizType === 'quizEasy') {
        studentData.scores.quizEasy = score;
        if (score >= 80) {
            awardBadge('DATA EXPLORER');
        }
    } else if (currentQuizType === 'quizMedium') {
        studentData.scores.quizMedium = score;
        if (score >= 80) {
            awardBadge('STRUCTURE MASTER');
        }
    } else if (currentQuizType === 'quizExpert') {
        studentData.scores.quizExpert = score;
        if (score >= 80) {
            awardBadge('CRITICAL THINKER');
        }
    }
    
    saveData();
    
    // Show result
    showQuizResult(score, correctCount);
    
    // Hide quiz container and show result
    const quizContainer = document.getElementById(currentQuizType + 'Quiz');
    if (quizContainer) {
        quizContainer.style.display = 'none';
    }
    
    // Scroll to result
    setTimeout(() => {
        const resultDiv = document.getElementById(currentQuizType + 'Result');
        if (resultDiv) {
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        }
    }, 500);
}

function showQuizResult(score, correctCount) {
    const resultDiv = document.getElementById(currentQuizType + 'Result');
    const scoreSpan = document.getElementById(currentQuizType + 'Score');
    const detailsDiv = document.getElementById(currentQuizType + 'Details');
    
    if (!resultDiv) {
        console.error(`Result div "${currentQuizType}Result" not found`);
        return;
    }
    
    if (scoreSpan) {
        scoreSpan.textContent = score;
    }
    
    if (detailsDiv) {
        detailsDiv.innerHTML = `
            <h3>Detail Hasil</h3>
            <p><strong>Benar:</strong> ${correctCount} soal</p>
            <p><strong>Salah:</strong> ${currentQuiz.length - correctCount} soal</p>
            <p><strong>Persentase:</strong> ${score}%</p>
        `;
    }
    
    // Show badge if earned
    if (score >= 80 && currentQuizType !== 'pretest' && currentQuizType !== 'posttest') {
        const badgeDiv = document.getElementById('badge' + capitalizeFirst(currentQuizType.replace('quiz', '')) + 'Earned');
        if (badgeDiv) {
            badgeDiv.style.display = 'block';
        }
    }
    
    // Special handling for posttest
    if (currentQuizType === 'posttest') {
        document.getElementById('pretestCompare').textContent = studentData.scores.pretest;
        document.getElementById('posttestCompare').textContent = score;
        
        const gain = score - studentData.scores.pretest;
        document.getElementById('learningGain').textContent = (gain >= 0 ? '+' : '') + gain;
        
        const messageDiv = document.getElementById('gainMessage');
        if (gain > 0) {
            messageDiv.textContent = '🎉 Luar biasa! Pemahamanmu berkembang.';
            messageDiv.style.color = 'var(--success)';
        } else if (gain === 0) {
            messageDiv.textContent = 'Pertahankan pemahamanmu. Terus belajar untuk berkembang lebih baik.';
        } else {
            messageDiv.textContent = 'Jangan menyerah. Gunakan feedback untuk memperbaiki pemahamanmu.';
        }
    }
    
    resultDiv.style.display = 'block';
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ========================================
// EXPANDABLE CARDS
// ========================================

function toggleCard(element) {
    element.classList.toggle('active');
    const content = element.nextElementSibling;
    content.classList.toggle('active');
}

// ========================================
// STRUCTURE MODAL
// ========================================

function showStructureDetail(structureNum) {
    const modal = document.getElementById('structureModal');
    const content = document.getElementById('structureModalContent');
    const data = structureDetails[structureNum];
    
    content.innerHTML = `
        <h2>${data.title}</h2>
        ${data.content}
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('structureModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('structureModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ========================================
// REPORT BUILDER
// ========================================

let coverImageData = null;
let lampiranImageData = null;

function initReportBuilder() {
    const container = document.getElementById('builderSteps');
    container.innerHTML = '';
    
    builderSteps.forEach(step => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'builder-step';
        
        let stepContent = `
            <div class="step-header">
                <span class="step-number">${step.step}</span>
                <span class="step-title">${step.title}</span>
            </div>
            <p>${step.instruction}</p>
        `;
        
        if (step.type === 'image') {
            stepContent += `
                <div class="image-upload-box" onclick="document.getElementById('${step.id}Input').click()">
                    <input type="file" id="${step.id}Input" accept="image/*" onchange="handleImageUpload(event, '${step.id}')">
                    <p>📷 Klik untuk upload gambar</p>
                    <p style="font-size: 0.9rem; color: var(--text-light);">Format: JPG, PNG, GIF (Max: 5MB)</p>
                </div>
                <div id="${step.id}Preview" style="display: none; text-align: center;">
                    <img id="${step.id}Img" class="image-preview" src="" alt="Preview">
                    <br>
                    <button class="btn-secondary" onclick="removeImage('${step.id}')" style="margin-top: 1rem;">❌ Hapus Gambar</button>
                </div>
            `;
        } else if (step.type === 'identity') {
            step.fields.forEach(field => {
                stepContent += `
                    <div class="form-group">
                        <label>${field.label}</label>
                        <input type="text" id="builder-${field.id}" placeholder="${field.placeholder}">
                    </div>
                `;
            });
        } else if (step.type === 'subsection') {
            step.subsections.forEach(sub => {
                stepContent += `
                    <div class="form-group">
                        <label><strong>${sub.label}</strong></label>
                        <textarea id="builder-${sub.id}" rows="4" placeholder="${sub.placeholder}"></textarea>
                    </div>
                `;
            });
        } else if (step.type === 'info') {
            stepContent += `
                <div class="info-box">
                    <p>ℹ️ Daftar isi akan dibuat secara otomatis berdasarkan BAB dan sub-bagian yang Anda isi.</p>
                </div>
            `;
        } else {
            stepContent += `<textarea id="builder-step-${step.step}" rows="4" placeholder="${step.placeholder || ''}"></textarea>`;
        }
        
        stepDiv.innerHTML = stepContent;
        container.appendChild(stepDiv);
    });
    
    const submitBtn = document.createElement('button');
    submitBtn.className = 'btn-primary btn-large';
    submitBtn.textContent = 'CEK & GENERATE LAPORAN';
    submitBtn.onclick = checkReport;
    container.appendChild(submitBtn);
}

function handleImageUpload(event, imageId) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Check file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran file terlalu besar! Maksimal 5MB.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const imageData = e.target.result;
        
        // Store image data
        if (imageId === 'coverImage') {
            coverImageData = imageData;
        } else if (imageId === 'lampiranImage') {
            lampiranImageData = imageData;
        }
        
        // Show preview
        document.getElementById(imageId + 'Preview').style.display = 'block';
        document.getElementById(imageId + 'Img').src = imageData;
    };
    reader.readAsDataURL(file);
}

function removeImage(imageId) {
    if (imageId === 'coverImage') {
        coverImageData = null;
    } else if (imageId === 'lampiranImage') {
        lampiranImageData = null;
    }
    
    document.getElementById(imageId + 'Preview').style.display = 'none';
    document.getElementById(imageId + 'Img').src = '';
    document.getElementById(imageId + 'Input').value = '';
}

function checkReport() {
    // Collect all data
    const reportData = {
        coverImage: coverImageData,
        lampiranImage: lampiranImageData,
        judul: document.getElementById('builder-step-2')?.value || '',
        namaPenyusun: document.getElementById('builder-namaPenyusun')?.value || '',
        kelasPenyusun: document.getElementById('builder-kelasPenyusun')?.value || '',
        namaSekolah: document.getElementById('builder-namaSekolah')?.value || '',
        tahunPelajaran: document.getElementById('builder-tahunPelajaran')?.value || '',
        kataPengantar: document.getElementById('builder-step-4')?.value || '',
        latarBelakang: document.getElementById('builder-latarBelakang')?.value || '',
        rumusanMasalah: document.getElementById('builder-rumusanMasalah')?.value || '',
        tujuan: document.getElementById('builder-tujuan')?.value || '',
        manfaat: document.getElementById('builder-manfaat')?.value || '',
        dasarTeori: document.getElementById('builder-dasarTeori')?.value || '',
        alatBahan: document.getElementById('builder-alatBahan')?.value || '',
        metode: document.getElementById('builder-metode')?.value || '',
        hasil: document.getElementById('builder-hasil')?.value || '',
        pembahasan: document.getElementById('builder-pembahasan')?.value || '',
        kesimpulan: document.getElementById('builder-kesimpulan')?.value || '',
        saran: document.getElementById('builder-saran')?.value || '',
        daftarPustaka: document.getElementById('builder-step-9')?.value || ''
    };
    
    // Validate required fields
    const requiredFields = ['judul', 'namaPenyusun', 'kelasPenyusun', 'namaSekolah', 'latarBelakang', 'tujuan', 'metode', 'hasil', 'kesimpulan'];
    let allFilled = true;
    let missingFields = [];
    
    requiredFields.forEach(field => {
        if (!reportData[field] || reportData[field].trim() === '') {
            allFilled = false;
            missingFields.push(field);
        }
    });
    
    if (!allFilled) {
        alert('Mohon lengkapi bagian-bagian penting: ' + missingFields.join(', '));
        return;
    }
    
    // Save report data
    studentData.builderData = reportData;
    
    // Calculate scores
    const scores = {
        struktur: 90,
        kelengkapan: reportData.coverImage ? 90 : 85,
        analisisData: reportData.pembahasan ? 92 : 85,
        bahasa: 85,
        kesimpulan: reportData.kesimpulan ? 92 : 80
    };
    
    const avgScore = Math.round((scores.struktur + scores.kelengkapan + scores.analisisData + scores.bahasa + scores.kesimpulan) / 5);
    studentData.scores.reportBuilder = avgScore;
    
    // Award badge
    awardBadge('REPORT BUILDER');
    
    saveData();
    
    // Show results
    const resultDiv = document.getElementById('builderResult');
    const resultsContainer = document.getElementById('checkerResults');
    
    resultsContainer.innerHTML = `
        <div class="checker-item">
            <h4>Struktur</h4>
            <div class="checker-bar">
                <div class="checker-fill" style="width: ${scores.struktur}%"></div>
            </div>
            <span class="checker-score">${scores.struktur}%</span>
            <p class="checker-feedback">Struktur laporan sudah mengikuti format formal yang benar.</p>
        </div>
        <div class="checker-item">
            <h4>Kelengkapan</h4>
            <div class="checker-bar">
                <div class="checker-fill" style="width: ${scores.kelengkapan}%"></div>
            </div>
            <span class="checker-score">${scores.kelengkapan}%</span>
            <p class="checker-feedback">${reportData.coverImage ? 'Lengkap dengan gambar cover. Bagus!' : 'Sudah lengkap. Bisa ditambah gambar cover untuk nilai lebih baik.'}</p>
        </div>
        <div class="checker-item">
            <h4>Analisis Data</h4>
            <div class="checker-bar">
                <div class="checker-fill" style="width: ${scores.analisisData}%"></div>
            </div>
            <span class="checker-score">${scores.analisisData}%</span>
            <p class="checker-feedback">${reportData.pembahasan ? 'Analisis dan pembahasan sudah baik.' : 'Analisis cukup baik, bisa diperdalam lagi.'}</p>
        </div>
        <div class="checker-item">
            <h4>Bahasa</h4>
            <div class="checker-bar">
                <div class="checker-fill" style="width: ${scores.bahasa}%"></div>
            </div>
            <span class="checker-score">${scores.bahasa}%</span>
            <p class="checker-feedback">Bahasa yang digunakan sudah cukup formal dan sistematis.</p>
        </div>
        <div class="checker-item">
            <h4>Kesimpulan</h4>
            <div class="checker-bar">
                <div class="checker-fill" style="width: ${scores.kesimpulan}%"></div>
            </div>
            <span class="checker-score">${scores.kesimpulan}%</span>
            <p class="checker-feedback">Kesimpulan sudah menjawab tujuan penelitian.</p>
        </div>
    `;
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function previewReport() {
    const data = studentData.builderData;
    if (!data) {
        alert('Data laporan tidak ditemukan!');
        return;
    }
    
    let reportHTML = `
        <!-- HALAMAN JUDUL / COVER -->
        <div class="cover-page">
            <h1>${data.judul || 'JUDUL LAPORAN'}</h1>
            ${data.coverImage ? `<img src="${data.coverImage}" alt="Cover" class="cover-image">` : ''}
            <div class="identity-table">
                <table>
                    <tr><td><strong>Nama</strong></td><td>: ${data.namaPenyusun || studentData.name}</td></tr>
                    <tr><td><strong>Kelas</strong></td><td>: ${data.kelasPenyusun || studentData.class}</td></tr>
                    <tr><td><strong>Nama Sekolah</strong></td><td>: ${data.namaSekolah || '[NAMA SEKOLAH]'}</td></tr>
                    <tr><td><strong>Tahun Pelajaran</strong></td><td>: ${data.tahunPelajaran || '2026/2027'}</td></tr>
                </table>
            </div>
        </div>
        
        <div class="page-break"></div>
        
        <!-- KATA PENGANTAR -->
        ${data.kataPengantar ? `
        <h2>KATA PENGANTAR</h2>
        <p>${data.kataPengantar}</p>
        <div class="page-break"></div>
        ` : ''}
        
        <!-- DAFTAR ISI -->
        <h2>DAFTAR ISI</h2>
        <p>
        ${data.kataPengantar ? 'KATA PENGANTAR<br>' : ''}
        DAFTAR ISI<br>
        BAB I PENDAHULUAN<br>
        &nbsp;&nbsp;&nbsp;&nbsp;A. Latar Belakang<br>
        ${data.rumusanMasalah ? '&nbsp;&nbsp;&nbsp;&nbsp;B. Rumusan Masalah<br>' : ''}
        &nbsp;&nbsp;&nbsp;&nbsp;${data.rumusanMasalah ? 'C' : 'B'}. Tujuan<br>
        ${data.manfaat ? '&nbsp;&nbsp;&nbsp;&nbsp;D. Manfaat<br>' : ''}
        BAB II PEMBAHASAN<br>
        ${data.dasarTeori ? '&nbsp;&nbsp;&nbsp;&nbsp;A. Dasar Teori<br>' : ''}
        ${data.alatBahan ? '&nbsp;&nbsp;&nbsp;&nbsp;B. Alat dan Bahan<br>' : ''}
        &nbsp;&nbsp;&nbsp;&nbsp;C. Langkah-langkah Kegiatan/Metode<br>
        &nbsp;&nbsp;&nbsp;&nbsp;D. Hasil Kegiatan<br>
        ${data.pembahasan ? '&nbsp;&nbsp;&nbsp;&nbsp;E. Pembahasan<br>' : ''}
        BAB III PENUTUP<br>
        &nbsp;&nbsp;&nbsp;&nbsp;A. Kesimpulan<br>
        ${data.saran ? '&nbsp;&nbsp;&nbsp;&nbsp;B. Saran<br>' : ''}
        ${data.daftarPustaka ? 'DAFTAR PUSTAKA<br>' : ''}
        ${data.lampiranImage ? 'LAMPIRAN<br>' : ''}
        </p>
        
        <div class="page-break"></div>
        
        <!-- BAB I PENDAHULUAN -->
        <h2>BAB I<br>PENDAHULUAN</h2>
        
        <h3>A. Latar Belakang</h3>
        <p>${data.latarBelakang}</p>
        
        ${data.rumusanMasalah ? `
        <h3>B. Rumusan Masalah</h3>
        <p>${data.rumusanMasalah}</p>
        ` : ''}
        
        <h3>${data.rumusanMasalah ? 'C' : 'B'}. Tujuan</h3>
        <p>${data.tujuan}</p>
        
        ${data.manfaat ? `
        <h3>D. Manfaat</h3>
        <p>${data.manfaat}</p>
        ` : ''}
        
        <div class="page-break"></div>
        
        <!-- BAB II PEMBAHASAN -->
        <h2>BAB II<br>PEMBAHASAN</h2>
        
        ${data.dasarTeori ? `
        <h3>A. Dasar Teori</h3>
        <p>${data.dasarTeori}</p>
        ` : ''}
        
        ${data.alatBahan ? `
        <h3>B. Alat dan Bahan</h3>
        <p>${data.alatBahan}</p>
        ` : ''}
        
        <h3>C. Langkah-langkah Kegiatan/Metode</h3>
        <p>${data.metode}</p>
        
        <h3>D. Hasil Kegiatan</h3>
        <p>${data.hasil}</p>
        
        ${data.pembahasan ? `
        <h3>E. Pembahasan</h3>
        <p>${data.pembahasan}</p>
        ` : ''}
        
        <div class="page-break"></div>
        
        <!-- BAB III PENUTUP -->
        <h2>BAB III<br>PENUTUP</h2>
        
        <h3>A. Kesimpulan</h3>
        <p>${data.kesimpulan}</p>
        
        ${data.saran ? `
        <h3>B. Saran</h3>
        <p>${data.saran}</p>
        ` : ''}
        
        ${data.daftarPustaka ? `
        <div class="page-break"></div>
        <h2>DAFTAR PUSTAKA</h2>
        <p>${data.daftarPustaka.replace(/\n/g, '<br>')}</p>
        ` : ''}
        
        ${data.lampiranImage ? `
        <div class="page-break"></div>
        <div class="lampiran-section">
            <h2>LAMPIRAN</h2>
            <img src="${data.lampiranImage}" alt="Lampiran" class="lampiran-image">
        </div>
        ` : ''}
    `;
    
    document.getElementById('reportPreviewContent').innerHTML = reportHTML;
    document.getElementById('reportPreviewModal').style.display = 'block';
}

function closeReportPreview() {
    document.getElementById('reportPreviewModal').style.display = 'none';
}

function printReport() {
    window.print();
}

function downloadReport() {
    alert('Fitur download PDF memerlukan library tambahan. Saat ini Anda bisa menggunakan Print to PDF dari browser (Ctrl+P atau Cmd+P, lalu pilih Save as PDF).');
    printReport();
}

// ========================================
// PROJECT (MISSION 8)
// ========================================

let selectedTheme = '';

function selectTheme(theme) {
    selectedTheme = theme;
    document.querySelectorAll('.theme-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    document.getElementById('theme' + theme).checked = true;
}

function initProject() {
    // Reset if needed
    document.getElementById('themeSelection').style.display = 'block';
    document.getElementById('projectForm').style.display = 'none';
    document.getElementById('projectResult').style.display = 'none';
}

function startProjectReport() {
    if (!selectedTheme) {
        alert('Pilih tema terlebih dahulu!');
        return;
    }
    
    document.getElementById('themeSelection').style.display = 'none';
    document.getElementById('projectForm').style.display = 'block';
    
    // Populate sections
    const container = document.getElementById('projectSections');
    container.innerHTML = '';
    
    projectSections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'project-section';
        sectionDiv.innerHTML = `
            <h4>${section.title}</h4>
            <textarea id="project-${section.id}" rows="4" placeholder="${section.placeholder}"></textarea>
        `;
        container.appendChild(sectionDiv);
    });
}

function submitProject() {
    // Check checklist
    const checkboxes = document.querySelectorAll('#projectChecklist input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    
    if (!allChecked) {
        alert('Pastikan semua checklist sudah dipenuhi!');
        return;
    }
    
    // Collect project data
    const projectData = { theme: selectedTheme };
    let allFilled = true;
    
    projectSections.forEach(section => {
        const value = document.getElementById('project-' + section.id).value.trim();
        projectData[section.id] = value;
        if (!value) allFilled = false;
    });
    
    if (!allFilled) {
        alert('Lengkapi semua bagian laporan!');
        return;
    }
    
    studentData.projectData = projectData;
    studentData.scores.project = 90; // Base score for completing project
    
    awardBadge('REPORT BUILDER');
    
    saveData();
    
    // Show result
    document.getElementById('projectForm').style.display = 'none';
    document.getElementById('projectResult').style.display = 'block';
    document.getElementById('projectResult').scrollIntoView({ behavior: 'smooth' });
}

// ========================================
// REFLECTION (MISSION 10)
// ========================================

function submitReflection(event) {
    event.preventDefault();
    
    studentData.reflection = {
        peristiwa: document.getElementById('refPeristiwa').value,
        perasaan: document.querySelector('input[name="feeling"]:checked').value,
        pembelajaran: document.getElementById('refPembelajaran').value,
        penerapan: document.getElementById('refPenerapan').value,
        kesimpulan: document.getElementById('refKesimpulan').value
    };
    
    saveData();
    completeMission(10);
    
    alert('Refleksi berhasil disimpan! 🎉');
}

// ========================================
// BADGES SYSTEM
// ========================================

function awardBadge(badgeName) {
    if (!studentData.badges.includes(badgeName)) {
        studentData.badges.push(badgeName);
        saveData();
    }
}

function updateBadgesDisplay() {
    const badges = [
        { name: 'DATA EXPLORER', icon: '🏅' },
        { name: 'STRUCTURE MASTER', icon: '🏅' },
        { name: 'REPORT BUILDER', icon: '🏅' },
        { name: 'CRITICAL THINKER', icon: '🏅' },
        { name: 'REPORT MASTER', icon: '🏆' }
    ];
    
    const container = document.getElementById('badgesGrid');
    container.innerHTML = '';
    
    badges.forEach(badge => {
        const badgeDiv = document.createElement('div');
        badgeDiv.className = 'badge-item';
        if (studentData.badges.includes(badge.name)) {
            badgeDiv.classList.add('earned');
        } else {
            badgeDiv.classList.add('locked');
        }
        badgeDiv.innerHTML = `
            <div class="badge-icon">${badge.icon}</div>
            <p>${badge.name}</p>
        `;
        container.appendChild(badgeDiv);
    });
    
    // Check if all missions complete for REPORT MASTER badge
    if (studentData.completedMissions.length === 11) {
        awardBadge('REPORT MASTER');
    }
}

// ========================================
// FINAL RESULTS (MISSION 11)
// ========================================

function displayFinalResults() {
    // Student identity
    document.getElementById('resultStudentName').textContent = studentData.name;
    document.getElementById('resultStudentClass').textContent = 'Kelas: ' + studentData.class;
    
    // Display all scores
    document.getElementById('finalPretest').textContent = studentData.scores.pretest;
    document.getElementById('finalQuizEasy').textContent = studentData.scores.quizEasy;
    document.getElementById('finalQuizMedium').textContent = studentData.scores.quizMedium;
    document.getElementById('finalQuizExpert').textContent = studentData.scores.quizExpert;
    document.getElementById('finalBuilder').textContent = studentData.scores.reportBuilder;
    document.getElementById('finalProject').textContent = studentData.scores.project;
    document.getElementById('finalPosttest').textContent = studentData.scores.posttest;
    
    // Calculate final score
    const finalScore = Math.round(
        (studentData.scores.quizEasy * 0.1) +
        (studentData.scores.quizMedium * 0.1) +
        (studentData.scores.quizExpert * 0.15) +
        (studentData.scores.reportBuilder * 0.15) +
        (studentData.scores.project * 0.2) +
        (studentData.scores.posttest * 0.3)
    );
    
    document.getElementById('finalScore').textContent = finalScore;
    
    // Determine status
    const statusDiv = document.getElementById('finalStatus');
    if (finalScore >= 80) {
        statusDiv.textContent = 'SANGAT BAIK';
        statusDiv.className = 'final-status sangat-baik';
    } else if (finalScore >= 70) {
        statusDiv.textContent = 'BAIK';
        statusDiv.className = 'final-status baik';
    } else if (finalScore >= 60) {
        statusDiv.textContent = 'CUKUP';
        statusDiv.className = 'final-status cukup';
    } else {
        statusDiv.textContent = 'PERLU BIMBINGAN';
        statusDiv.className = 'final-status perlu-bimbingan';
    }
    
    // Learning gain
    const gain = studentData.scores.posttest - studentData.scores.pretest;
    document.getElementById('finalLearningGain').textContent = (gain >= 0 ? '+' : '') + gain + ' poin';
    
    // Display badges
    const badgesFinalGrid = document.getElementById('badgesFinalGrid');
    badgesFinalGrid.innerHTML = '';
    
    studentData.badges.forEach(badgeName => {
        const badgeDiv = document.createElement('div');
        badgeDiv.className = 'badge-item earned';
        const icon = badgeName === 'REPORT MASTER' ? '🏆' : '🏅';
        badgeDiv.innerHTML = `
            <div class="badge-icon">${icon}</div>
            <p>${badgeName}</p>
        `;
        badgesFinalGrid.appendChild(badgeDiv);
    });
    
    // Show master badge if all missions complete
    if (studentData.completedMissions.length === 11) {
        document.getElementById('finalMasterBadge').style.display = 'block';
        awardBadge('REPORT MASTER');
    }
}

// ========================================
// EXPORT DATA
// ========================================

function exportData() {
    const data = {
        timestamp: new Date().toLocaleString('id-ID'),
        nama: studentData.name,
        kelas: studentData.class,
        nomor: studentData.number,
        scores: studentData.scores,
        finalScore: Math.round(
            (studentData.scores.quizEasy * 0.1) +
            (studentData.scores.quizMedium * 0.1) +
            (studentData.scores.quizExpert * 0.15) +
            (studentData.scores.reportBuilder * 0.15) +
            (studentData.scores.project * 0.2) +
            (studentData.scores.posttest * 0.3)
        ),
        learningGain: studentData.scores.posttest - studentData.scores.pretest,
        badges: studentData.badges,
        reflection: studentData.reflection
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `Report_Master_${studentData.name.replace(/\s+/g, '_')}_${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert('Data berhasil diexport! File JSON telah diunduh.');
}

// ========================================
// INITIALIZATION
// ========================================

// Load data when page loads
window.addEventListener('DOMContentLoaded', function() {
    loadData();
    
    // Attach event to Start Mission button
    const btnStart = document.getElementById('btnStartMission');
    if (btnStart) {
        btnStart.addEventListener('click', function(e) {
            console.log('Start Mission button clicked');
            startMission();
        });
        console.log('Start Mission button event attached');
    } else {
        console.error('Start Mission button not found');
    }
    
    // If student has data, show dashboard; otherwise show cover
    if (studentData.name) {
        showPage('page-dashboard');
        updateDashboard();
    } else {
        showPage('page-cover');
    }
});
