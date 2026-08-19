import React from 'react';

const Tentang = () => (
    <div className="bg-dark pt-32 pb-20 md:pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-heading">Tentang <span className="gradient-text-accent">Saya</span></h1>
            <p className="text-center text-main mb-16">Perjalanan saya dari Sambas hingga menjadi seorang profesional di bidang digital.</p>
            
            <div className="bg-medium p-8 rounded-xl border border-subtle mb-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                     <img src="/topik.jpg" alt="Taufiq Hidayatullah" className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover flex-shrink-0 border-4 border-subtle" />
                    <div>
                        <h2 className="text-3xl font-bold text-heading">Taufiq Hidayatullah, S.Kom.</h2>
                        <p className="text-accent font-semibold text-lg mb-2">Informatics Graduate</p>
                        <p className="text-main">
                            Saya adalah lulusan Informatika Universitas AMIKOM Yogyakarta yang aktif mengembangkan keahlian di bidang pengembangan web (full-stack), analisis data, dan jaringan komputer. Memiliki pengalaman praktis sebagai Network Engineer di proyek instalasi jaringan korporat dan magang di Network Operations Center (NOC), serta sudah menyelesaikan program coding bootcamp di Coding Camp 2025 oleh DBS Foundation.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="space-y-12">
                {/* Pendidikan */}
                <div className="bg-medium p-8 rounded-xl border border-subtle">
                    <h3 className="text-3xl font-bold mb-6 text-heading">Pendidikan</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-main">2022 - 2026</p>
                            <h4 className="text-xl font-semibold text-heading">Sarjana Informatika, Universitas Amikom Yogyakarta</h4>
                            <p className="text-main">Lulus dengan predikat Cum Laude (IPK 3.78/4.00) per 20 Mei 2026. Mata kuliah relevan: Pengembangan Full-Stack, Analisis Data, Jaringan Komputer.</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <p className="font-bold text-main">Feb 2025 - Jul 2025</p>
                            <h4 className="text-xl font-semibold text-heading"><strong className="text-accent">[Studi Independen]</strong> Full Stack Developer, Coding Camp 2025</h4>
                            <p className="text-main">Mengembangkan aplikasi web full-stack melalui proyek riil Agile, dari implementasi best practices hingga analisis tren fintech bersama praktisi industri.</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <p className="font-bold text-main">Feb 2024 - Jun 2024</p>
                            <h4 className="text-xl font-semibold text-heading"><strong className="text-accent">[Pertukaran Mahasiswa]</strong> PMM Batch 4, Kampus Merdeka</h4>
                            <p className="text-main">Mengembangkan wawasan akademis (informatika), sosial-budaya, dan jejaring profesional melalui program Pertukaran Mahasiswa Merdeka (PMM) 4 di Universitas Mataram.</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <p className="font-bold text-main">2019 - 2022</p>
                            <h4 className="text-xl font-semibold text-heading">Teknik Komputer dan Jaringan, SMK Negeri 1 Sambas</h4>
                            <p className="text-main">Fokus pada instalasi, konfigurasi, dan pemecahan masalah (troubleshooting) jaringan.</p>
                        </div>
                    </div>
                </div>

                {/* Pengalaman Kerja */}
                 <div className="bg-medium p-8 rounded-xl border border-subtle">
                    <h3 className="text-3xl font-bold mb-6 text-heading">Pengalaman</h3>
                    <div className="space-y-6">
                        <div>
                            <p className="font-bold text-main">Aug 2023</p>
                            <h4 className="text-xl font-semibold text-heading">Network Engineer, PT Info Solusindo Data Utama</h4>
                            <p className="text-main">Menyelesaikan proyek implementasi firewall Fortigate 81F di 3 Unit BRI, mulai dari koordinasi teknis, instalasi, hingga pengujian akhir dan dokumentasi.</p>
                        </div>
                         <div className="border-t border-subtle my-4"></div>
                         <div>
                            <p className="font-bold text-main">Feb 2021 - Aug 2021</p>
                            <h4 className="text-xl font-semibold text-heading"><strong className="text-accent">[Magang]</strong> Network Operations Center, PT. JAYA KOMUNIKASI INDONESIA</h4>
                            <p className="text-main">Mengelola operasional jaringan 24/7, mencakup pemantauan proaktif, troubleshooting perangkat, dan penyelesaian tiket keluhan.</p>
                        </div>
                    </div>
                </div>

                 {/* Sertifikasi */}
                <div className="bg-medium p-8 rounded-xl border border-subtle">
                    <h3 className="text-3xl font-bold mb-6 text-heading">Sertifikasi</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Belajar Back-End Pemula dengan JavaScript</h4>
                            <p className="text-accent">Dicoding Indonesia, 2025</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Belajar Pengembangan Web Intermediate</h4>
                            <p className="text-accent">Dicoding Indonesia, 2025</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Belajar Fundamental Front-End Web Development</h4>
                            <p className="text-accent">Dicoding Indonesia, 2025</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Financial Literacy 101</h4>
                            <p className="text-accent">Dicoding Indonesia, 2025</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Belajar Dasar Pemrograman JavaScript</h4>
                            <p className="text-accent">Dicoding Indonesia, 2025</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Belajar Membuat Front-End Web untuk Pemula</h4>
                            <p className="text-accent">Dicoding Indonesia, 2025</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Belajar Dasar Git dengan GitHub</h4>
                            <p className="text-accent">Dicoding Indonesia, 2025</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Belajar Dasar Pemrograman Web</h4>
                            <p className="text-accent">Dicoding Indonesia, 2025</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Memulai Dasar Pemrograman untuk Menjadi Pengembang Software</h4>
                            <p className="text-accent">Dicoding Indonesia, 2025</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Pengenalan ke Logika Pemrograman (Programming Logic 101)</h4>
                            <p className="text-accent">Dicoding Indonesia, 2025</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Introduction to Neo4j Graph Data Science</h4>
                            <p className="text-accent">Neo4j, 2024</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Neo4j Graph Data Science Fundamentals</h4>
                            <p className="text-accent">Neo4j, 2024</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Cypher Fundamentals</h4>
                            <p className="text-accent">Neo4j, 2024</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Graph Data Modeling Fundamentals</h4>
                            <p className="text-accent">Neo4j, 2024</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Importing CSV data into Neo4j</h4>
                            <p className="text-accent">Neo4j, 2024</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">Neo4j Fundamentals</h4>
                            <p className="text-accent">Neo4j, 2024</p>
                        </div>
                        <div className="border-t border-subtle my-4"></div>
                        <div>
                            <h4 className="text-xl font-semibold text-heading">CCNA: Introduction to Networks</h4>
                            <p className="text-accent">Cisco, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Tentang;