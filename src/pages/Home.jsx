import React from 'react';

const Home = ({ onNavigate }) => {
    const featuredProjects = [
        {
            title: "SPRCP (IoT System)",
            category: "IoT & Distributed DB",
            desc: "Monitoring korosi beton berbasis IoT dan database terdistribusi real-time untuk keandalan struktural.",
            tech: ["IoT", "FastAPI", "Real-Time Data"]
        },
        {
            title: "DeepRetina",
            category: "Healthcare AI Platform",
            desc: "Platform deteksi dini retinopati diabetik menggunakan deep learning ensemble DenseNet121 + EfficientNetB0.",
            tech: ["React", "FastAPI", "Deep Learning"]
        },
        {
            title: "SnapLah",
            category: "Interactive Web App",
            desc: "Aplikasi kreatif photostrip studio foto langsung di browser dengan timer dan kustomisasi frame.",
            tech: ["React", "Vite", "Tailwind CSS"]
        }
    ];

    return (
        <div className="bg-dark min-h-screen">
            {/* Hero Section: Perkenalan Diri Hangat & Personal */}
            <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 px-4 sm:px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
                        {/* Teks Perkenalan */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                Tersedia untuk Kolaborasi & Riset
                            </div>
                            
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-main mb-1.5 sm:mb-2">
                                Halo, saya
                            </h2>
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-heading leading-tight mb-2 sm:mb-3">
                                Taufiq <span className="gradient-text-accent">Hidayatullah</span>, S.Kom.
                            </h1>
                            <p className="text-accent font-bold text-base sm:text-xl mb-4 sm:mb-6">
                                Informatics Graduate &middot; Master Student &middot; Software Engineer
                            </p>
                            
                            <p className="text-main text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
                                Mengembangkan sistem web yang bersih, cepat, dan interaktif dengan fondasi data yang kuat, serta mengeksplorasi analitik prediktif berbasis Big Data untuk solusi teknologi yang cerdas dan berdampak.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
                                <button 
                                    onClick={() => onNavigate && onNavigate('karya')}
                                    className="w-full sm:w-auto bg-accent text-bg-dark px-6 sm:px-7 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all-smooth transform hover:scale-105 shadow-lg shadow-cyan-500/20 text-sm sm:text-base text-center"
                                >
                                    Lihat Portofolio Karya &rarr;
                                </button>
                                <button 
                                    onClick={() => onNavigate && onNavigate('tentang')}
                                    className="w-full sm:w-auto bg-medium text-heading border border-subtle px-6 sm:px-7 py-3 rounded-xl font-semibold hover:border-accent hover:text-accent transition-all-smooth text-sm sm:text-base text-center"
                                >
                                    Profil Lengkap Saya
                                </button>
                                <button 
                                    onClick={() => onNavigate && onNavigate('kontak')}
                                    className="w-full sm:w-auto text-main hover:text-accent font-semibold px-4 py-2.5 sm:py-3 transition-colors text-sm sm:text-base text-center"
                                >
                                    Hubungi Saya
                                </button>
                            </div>
                        </div>

                        {/* Foto Profil Personal */}
                        <div className="flex-shrink-0">
                            <div className="relative">
                                <div className="absolute -inset-1.5 bg-gradient-to-r from-accent to-cyan-400 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000"></div>
                                <picture>
                                    <source srcSet="/pp.webp" type="image/webp" />
                                    <img 
                                        src="/pp.jpg" 
                                        alt="Taufiq Hidayatullah, S.Kom." 
                                        loading="lazy"
                                        decoding="async"
                                        className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-medium shadow-2xl"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/baiik.svg";
                                        }}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tentang Diri Singkat (About Me Snapshot) */}
            <section className="py-14 sm:py-20 bg-medium border-t border-subtle">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <div className="text-center md:text-left mb-8 sm:mb-12">
                        <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-wider">Tentang Diri Singkat</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading mt-1">
                            Mengenal Fokus & Keahlian Saya
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
                        {/* Pilar 1: Full-Stack Web */}
                        <div className="bg-dark p-6 sm:p-8 rounded-2xl border border-subtle hover:border-accent transition-all-smooth shadow-lg">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-2xl mb-5 sm:mb-6">
                                💻
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-heading mb-2 sm:mb-3">Full-Stack Web</h3>
                            <p className="text-main text-sm leading-relaxed mb-4">
                                Merancang antarmuka pengguna responsif dan arsitektur backend andal menggunakan ekosistem JavaScript, Python, dan PHP.
                            </p>
                            <div className="flex flex-wrap gap-1.5 font-mono text-xs text-accent">
                                <span className="bg-medium px-2 py-0.5 rounded">React</span>
                                <span className="bg-medium px-2 py-0.5 rounded">Vite</span>
                                <span className="bg-medium px-2 py-0.5 rounded">FastAPI</span>
                                <span className="bg-medium px-2 py-0.5 rounded">Laravel</span>
                            </div>
                        </div>

                        {/* Pilar 2: Big Data & AI */}
                        <div className="bg-dark p-6 sm:p-8 rounded-2xl border border-subtle hover:border-accent transition-all-smooth shadow-lg">
                            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-2xl mb-5 sm:mb-6">
                                📊
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-heading mb-2 sm:mb-3">Big Data & AI</h3>
                            <p className="text-main text-sm leading-relaxed mb-4">
                                Menganalisis pola data besar, inferensi machine learning terapan, serta pemodelan graph database untuk wawasan prediktif.
                            </p>
                            <div className="flex flex-wrap gap-1.5 font-mono text-xs text-cyan-400">
                                <span className="bg-medium px-2 py-0.5 rounded">Python</span>
                                <span className="bg-medium px-2 py-0.5 rounded">Neo4j</span>
                                <span className="bg-medium px-2 py-0.5 rounded">TensorFlow</span>
                                <span className="bg-medium px-2 py-0.5 rounded">Data Science</span>
                            </div>
                        </div>

                        {/* Pilar 3: Network & Security */}
                        <div className="bg-dark p-6 sm:p-8 rounded-2xl border border-subtle hover:border-accent transition-all-smooth shadow-lg">
                            <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 text-2xl mb-5 sm:mb-6">
                                🛡️
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-heading mb-2 sm:mb-3">Jaringan & Keamanan</h3>
                            <p className="text-main text-sm leading-relaxed mb-4">
                                Fondasi infrastruktur dari pengalaman instalasi firewall enterprise dan monitoring operasional jaringan (NOC).
                            </p>
                            <div className="flex flex-wrap gap-1.5 font-mono text-xs text-emerald-400">
                                <span className="bg-medium px-2 py-0.5 rounded">Fortigate</span>
                                <span className="bg-medium px-2 py-0.5 rounded">CCNA</span>
                                <span className="bg-medium px-2 py-0.5 rounded">NOC 24/7</span>
                                <span className="bg-medium px-2 py-0.5 rounded">Routing</span>
                            </div>
                        </div>
                    </div>

                    {/* Ringkasan Rekam Jejak (Quick Stats) */}
                    <div className="bg-dark p-5 sm:p-8 rounded-2xl border border-subtle grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                        <div className="p-2">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-accent mb-1">3.78</p>
                            <p className="text-main text-xs sm:text-sm font-semibold">IPK Cum Laude (S1)</p>
                        </div>
                        <div className="p-2">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-accent mb-1">S2</p>
                            <p className="text-main text-xs sm:text-sm font-semibold">Master Student</p>
                        </div>
                        <div className="p-2">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-accent mb-1">7+</p>
                            <p className="text-main text-xs sm:text-sm font-semibold">Proyek Aplikasi & IoT</p>
                        </div>
                        <div className="p-2">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-accent mb-1">17</p>
                            <p className="text-main text-xs sm:text-sm font-semibold">Sertifikasi Kompetensi</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Preview: Cuplikan Portofolio Karya */}
            <section className="py-14 sm:py-20 bg-dark border-t border-subtle">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-3 sm:gap-4">
                        <div>
                            <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-wider">Cuplikan Portofolio</span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading mt-1">
                                Beberapa Karya Terpilih
                            </h2>
                        </div>
                        <button 
                            onClick={() => onNavigate && onNavigate('karya')}
                            className="text-accent font-bold hover:underline inline-flex items-center gap-1.5 text-sm sm:text-base"
                        >
                            <span>Lihat Semua Proyek (7)</span>
                            <span>&rarr;</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 sm:mb-10">
                        {featuredProjects.map((p, i) => (
                            <div key={i} className="bg-medium p-5 sm:p-6 rounded-2xl border border-subtle hover:border-accent transition-all-smooth flex flex-col justify-between shadow-md">
                                <div>
                                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{p.category}</span>
                                    <h3 className="text-lg sm:text-xl font-bold text-heading mt-1 mb-2">{p.title}</h3>
                                    <p className="text-main text-sm leading-relaxed mb-5 sm:mb-6">{p.desc}</p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-subtle font-mono text-xs text-main">
                                    {p.tech.map((t, idx) => (
                                        <span key={idx} className="bg-dark px-2 py-0.5 rounded border border-subtle">{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button 
                            onClick={() => onNavigate && onNavigate('karya')}
                            className="w-full sm:w-auto bg-accent text-bg-dark px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all-smooth shadow-lg shadow-cyan-500/20 text-sm sm:text-base"
                        >
                            Buka Halaman Karya Lengkap &rarr;
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Penutup: Hubungi Saya */}
            <section className="py-14 sm:py-20 bg-medium border-t border-subtle text-center">
                <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading mb-3 sm:mb-4">
                        Mari Berdiskusi atau <span className="gradient-text-accent">Membangun Kolaborasi</span>
                    </h2>
                    <p className="text-main text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                        Tertarik bekerja sama dalam proyek perangkat lunak, riset analitik data, atau ingin mempelajari detail pengalaman saya?
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <button 
                            onClick={() => onNavigate && onNavigate('kontak')}
                            className="w-full sm:w-auto bg-accent text-bg-dark px-7 sm:px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all-smooth shadow-md shadow-cyan-500/20 text-sm sm:text-base"
                        >
                            Kirim Pesan ke Kontak &rarr;
                        </button>
                        <button 
                            onClick={() => onNavigate && onNavigate('tentang')}
                            className="w-full sm:w-auto bg-dark text-heading border border-subtle px-7 sm:px-8 py-3 rounded-xl font-semibold hover:border-accent hover:text-accent transition-all-smooth text-sm sm:text-base"
                        >
                            Baca Riwayat & Sertifikasi
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;