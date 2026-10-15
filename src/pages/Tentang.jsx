import React from 'react';

const Tentang = () => {
    const sertifikasiList = [
        { nama: "Belajar Back-End Pemula dengan JavaScript", penerbit: "Dicoding Indonesia, 2025" },
        { nama: "Belajar Pengembangan Web Intermediate", penerbit: "Dicoding Indonesia, 2025" },
        { nama: "Belajar Fundamental Front-End Web Development", penerbit: "Dicoding Indonesia, 2025" },
        { nama: "Financial Literacy 101", penerbit: "Dicoding Indonesia, 2025" },
        { nama: "Belajar Dasar Pemrograman JavaScript", penerbit: "Dicoding Indonesia, 2025" },
        { nama: "Belajar Membuat Front-End Web untuk Pemula", penerbit: "Dicoding Indonesia, 2025" },
        { nama: "Belajar Dasar Git dengan GitHub", penerbit: "Dicoding Indonesia, 2025" },
        { nama: "Belajar Dasar Pemrograman Web", penerbit: "Dicoding Indonesia, 2025" },
        { nama: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", penerbit: "Dicoding Indonesia, 2025" },
        { nama: "Pengenalan ke Logika Pemrograman (Programming Logic 101)", penerbit: "Dicoding Indonesia, 2025" },
        { nama: "Introduction to Neo4j Graph Data Science", penerbit: "Neo4j, 2024" },
        { nama: "Neo4j Graph Data Science Fundamentals", penerbit: "Neo4j, 2024" },
        { nama: "Cypher Fundamentals", penerbit: "Neo4j, 2024" },
        { nama: "Graph Data Modeling Fundamentals", penerbit: "Neo4j, 2024" },
        { nama: "Importing CSV data into Neo4j", penerbit: "Neo4j, 2024" },
        { nama: "Neo4j Fundamentals", penerbit: "Neo4j, 2024" },
        { nama: "CCNA: Introduction to Networks", penerbit: "Cisco, 2024" }
    ];

    return (
        <div className="bg-dark pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-32 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-center mb-3 sm:mb-4 text-heading">
                    Tentang <span className="gradient-text-accent">Saya</span>
                </h1>
                <p className="text-center text-main mb-8 sm:mb-14 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    Perjalanan dari Sambas hingga mendalami rekayasa sistem web, analitik data, dan teknologi cerdas.
                </p>
                
                {/* Profil Card */}
                <div className="bg-medium p-5 sm:p-8 md:p-10 rounded-2xl border border-subtle mb-8 sm:mb-12 shadow-xl">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div className="flex-shrink-0 flex items-center justify-center">
                            <picture>
                                <source srcSet="/pp.webp" type="image/webp" />
                                <img 
                                    src="/pp.jpg" 
                                    alt="Taufiq Hidayatullah, S.Kom." 
                                    loading="lazy"
                                    decoding="async"
                                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full object-cover border-4 border-subtle shadow-md"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "/baiik.svg";
                                    }}
                                />
                            </picture>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-1">Taufiq Hidayatullah, S.Kom.</h2>
                            <p className="text-accent font-semibold text-base sm:text-lg mb-3 sm:mb-4">Informatics Graduate & Master Student</p>
                            <p className="text-main text-sm sm:text-base leading-relaxed">
                                Saya adalah lulusan Sarjana Informatika Universitas AMIKOM Yogyakarta dengan predikat Cum Laude dan saat ini sedang menempuh studi Magister PJJ Informatika. Fokus keahlian saya mencakup pengembangan web full-stack, analisis data dan Big Data, serta rekayasa sistem terdistribusi. Berpengalaman sebagai Asisten Pranata Komputer di BPS Kabupaten Sambas, Network Engineer proyek korporat BRI, magang NOC, serta alumni Coding Camp 2025 by DBS Foundation.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-6 sm:space-y-10">
                    {/* Pendidikan */}
                    <div className="bg-medium p-5 sm:p-8 rounded-2xl border border-subtle">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-heading flex items-center gap-2.5 sm:gap-3">
                            <span className="text-accent">&#9679;</span> Pendidikan
                        </h3>
                        <div className="space-y-5 sm:space-y-6">
                            {/* Magister */}
                            <div>
                                <p className="font-bold text-accent text-xs sm:text-sm">Sep 2026 - now</p>
                                <h4 className="text-lg sm:text-xl font-semibold text-heading">Magister PJJ Informatika, Universitas AMIKOM Yogyakarta</h4>
                                <p className="text-main text-xs sm:text-sm mt-1 leading-relaxed">
                                    Mendalami riset lanjutan di bidang analitik prediktif berbasis Big Data, arsitektur sistem cerdas terdistribusi, serta rekayasa perangkat lunak modern tingkat lanjut.
                                </p>
                            </div>
                            <div className="border-t border-subtle"></div>

                            {/* Sarjana */}
                            <div>
                                <p className="font-bold text-accent text-xs sm:text-sm">Sep 2022 - Mei 2026</p>
                                <h4 className="text-lg sm:text-xl font-semibold text-heading">Sarjana Informatika, Universitas AMIKOM Yogyakarta</h4>
                                <p className="text-main text-xs sm:text-sm mt-1 leading-relaxed">
                                    Lulus dengan predikat Cum Laude (IPK 3.78/4.00) per 20 Mei 2026 melalui Jalur Non Reguler Magang Tridharma. Menghasilkan Tugas Akhir sistem monitoring korosi beton SPRCP berbasis IoT & distributed database, serta publikasi ilmiah internasional terindeks IEEE (ICITCOM 2026).
                                </p>
                            </div>
                            <div className="border-t border-subtle"></div>

                            {/* Studi Independen */}
                            <div>
                                <p className="font-bold text-accent text-xs sm:text-sm">Feb 2025 - Jul 2025</p>
                                <h4 className="text-lg sm:text-xl font-semibold text-heading"><strong className="text-accent">[Studi Independen]</strong> Full Stack Developer, Coding Camp 2025 by DBS Foundation</h4>
                                <p className="text-main text-xs sm:text-sm mt-1 leading-relaxed">
                                    Mengembangkan aplikasi web full-stack melalui proyek riil berstandar Agile, dari implementasi best practices industri hingga analisis tren teknologi fintech bersama praktisi industri.
                                </p>
                            </div>
                            <div className="border-t border-subtle"></div>

                            {/* PMM */}
                            <div>
                                <p className="font-bold text-accent text-xs sm:text-sm">Feb 2024 - Jun 2024</p>
                                <h4 className="text-lg sm:text-xl font-semibold text-heading"><strong className="text-accent">[Pertukaran Mahasiswa]</strong> PMM Batch 4, Kampus Merdeka</h4>
                                <p className="text-main text-xs sm:text-sm mt-1 leading-relaxed">
                                    Mengembangkan wawasan akademis informatika, sosial-budaya, dan jejaring profesional melalui program Pertukaran Mahasiswa Merdeka (PMM) 4 di Universitas Mataram.
                                </p>
                            </div>
                            <div className="border-t border-subtle"></div>

                            {/* SMK */}
                            <div>
                                <p className="font-bold text-accent text-xs sm:text-sm">2019 - 2022</p>
                                <h4 className="text-lg sm:text-xl font-semibold text-heading">Teknik Komputer dan Jaringan, SMK Negeri 1 Sambas</h4>
                                <p className="text-main text-sm mt-1 leading-relaxed">
                                    Fokus pada instalasi, konfigurasi, dan pemecahan masalah (troubleshooting) perangkat keras dan infrastruktur jaringan komputer.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pengalaman Kerja */}
                    <div className="bg-medium p-5 sm:p-8 rounded-2xl border border-subtle">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-heading flex items-center gap-2.5 sm:gap-3">
                            <span className="text-accent">&#9679;</span> Pengalaman
                        </h3>
                        <div className="space-y-5 sm:space-y-6">
                            {/* BPS Kabupaten Sambas */}
                            <div>
                                <p className="font-bold text-accent text-xs sm:text-sm">Agu 2026 - now</p>
                                <h4 className="text-lg sm:text-xl font-semibold text-heading"><strong className="text-accent">[Magang]</strong> Asisten Pranata Komputer, BPS Kabupaten Sambas</h4>
                                <p className="text-accent font-medium text-xs mb-1">MagangHub</p>
                                <p className="text-main text-xs sm:text-sm mt-1 leading-relaxed">
                                    Membantu operasional pengolahan dan validasi data sensus serta survei statistik, digitalisasi data, serta mendukung pengelolaan integrasi sistem informasi dan basis data di Badan Pusat Statistik Kabupaten Sambas.
                                </p>
                            </div>
                            <div className="border-t border-subtle"></div>

                            {/* PT Info Solusindo Data Utama */}
                            <div>
                                <p className="font-bold text-accent text-xs sm:text-sm">Agu 2023</p>
                                <h4 className="text-lg sm:text-xl font-semibold text-heading">Network Engineer, PT Info Solusindo Data Utama</h4>
                                <p className="text-main text-xs sm:text-sm mt-1 leading-relaxed">
                                    Menyelesaikan proyek implementasi dan konfigurasi firewall Fortigate 81F di 3 Unit BRI, mulai dari koordinasi teknis, pengujian keamanan sistem, hingga dokumentasi serah terima.
                                </p>
                            </div>
                            <div className="border-t border-subtle"></div>

                            {/* PT Jaya Komunikasi Indonesia */}
                            <div>
                                <p className="font-bold text-accent text-xs sm:text-sm">Feb 2021 - Agu 2021</p>
                                <h4 className="text-lg sm:text-xl font-semibold text-heading"><strong className="text-accent">[Magang]</strong> Network Operations Center (NOC), PT Jaya Komunikasi Indonesia</h4>
                                <p className="text-main text-xs sm:text-sm mt-1 leading-relaxed">
                                    Mengelola operasional jaringan 24/7, mencakup pemantauan proaktif performa perangkat, troubleshooting routing-switching, dan eskalasi penanganan tiket keluhan sistem.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sertifikasi Lengkap */}
                    <div className="bg-medium p-5 sm:p-8 rounded-2xl border border-subtle">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-heading flex items-center gap-2.5 sm:gap-3">
                            <span className="text-accent">&#9679;</span> Sertifikasi & Pelatihan
                        </h3>
                        <div className="space-y-3 sm:space-y-4">
                            {sertifikasiList.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1">
                                        <h4 className="text-sm sm:text-base md:text-lg font-semibold text-heading">{item.nama}</h4>
                                        <p className="text-accent text-xs sm:text-sm sm:text-right font-medium flex-shrink-0">{item.penerbit}</p>
                                    </div>
                                    {index < sertifikasiList.length - 1 && (
                                        <div className="border-t border-subtle"></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tentang;