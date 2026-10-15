import React, { useState } from 'react';

const Karya = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const projects = [
        {
            id: 1,
            name: "ARCIS: Cyber-Physical IoT Architecture",
            category: "Publikasi & Riset",
            categories: ["Publikasi & Riset", "IoT & Data"],
            badge: "IEEE Publication · ICITCOM 2026",
            description: "Publikasi ilmiah IEEE (ICITCOM 2026) yang memformulasikan arsitektur Cyber-Physical IoT 4-lapisan (ARCIS) untuk monitoring korosi elektrokimia pada proteksi katodik beton bertulang (SPRCP). Mengintegrasikan akuisisi termultipleks 32 titik ukur, kontrol edge dual-core ESP32 FreeRTOS, state cloud Firebase event-driven 6-node, dan visualisasi analitik browser secara real-time dengan konsistensi state dan pemulihan watchdog otonom.",
            projectLink: "https://doi.org/10.1109/ICITCOM70739.2026.11714349",
            projectLinkText: "IEEE Xplore (DOI) →",
            githubLink: "https://ieeexplore.ieee.org/xpl/conhome/11714322/proceeding",
            githubLinkText: "ICITCOM Proceeding",
            technologies: ["IEEE Xplore", "Cyber-Physical Systems", "ESP32 FreeRTOS", "16-bit ADC", "Firebase Realtime DB"],
            gradient: "from-blue-600/25 to-indigo-600/10",
            icon: (
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            id: 2,
            name: "Monitoring Korosi Beton SPRCP (Tugas Akhir S1)",
            category: "Publikasi & Riset",
            categories: ["Publikasi & Riset", "IoT & Data"],
            badge: "Skripsi S1 · E-Prints AMIKOM",
            description: "Tugas Akhir Sarjana Informatika (Jalur Non Reguler Magang Tridharma) yang merancang bangun sistem akuisisi digital IoT berbasis Cyber-Physical Systems (CPS) dengan ESP32 Dual-Core dan ADC 16-bit ADS1115 untuk monitoring proteksi korosi beton SPRCP. Berhasil mengotomatisasi pemutusan arus Instant-Off orde milidetik presisi guna mengeliminasi distorsi resistansi ohmik (IR Drop), serta sinkronisasi data real-time NoSQL Firebase menuju Web Dashboard React.js SPA.",
            projectLink: "https://eprints.amikom.ac.id/id/eprint/33000/",
            projectLinkText: "E-Prints AMIKOM →",
            githubLink: "https://eprints.amikom.ac.id/id/eprint/33000/1/COVER.pdf",
            githubLinkText: "Unduh Cover & Dokumen",
            technologies: ["IoT CPS", "ESP32 Dual-Core", "ADS1115", "Firebase NoSQL", "React.js SPA", "E-Prints"],
            gradient: "from-cyan-500/20 to-teal-500/10",
            icon: (
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            )
        },
        {
            id: 3,
            name: "SPRCP (IoT System)",
            category: "IoT & Data",
            badge: "IoT & Distributed DB",
            description: "Rancang bangun sistem monitoring korosi beton pada metode Smart Patch Repair Cathodic Protection (SPRCP) berbasis Internet of Things dan Distributed Real-Time Database untuk pemantauan struktural berkala dan presisi.",
            projectLink: "https://sprcp.biiak.sbs/",
            githubLink: "https://github.com/topfreak/Project-Kolaborasi-Uji-Korosi-Beton-Menggunakan-IoT",
            technologies: ["IoT", "FastAPI", "Distributed DB", "Real-Time Data"],
            gradient: "from-emerald-500/20 to-teal-500/10",
            icon: (
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            )
        },
        {
            id: 4,
            name: "Story Share",
            category: "Frontend",
            badge: "Progressive Web App",
            description: "Aplikasi web progresif (PWA) untuk berbagi cerita dengan lokasi geografis real-time menggunakan Leaflet dan MapTiler API. Dilengkapi caching offline menggunakan Workbox.",
            projectLink: "https://frontend-intermediate.biiak.sbs/",
            githubLink: "https://github.com/topfreak/frontend-intermediate.git",
            technologies: ["JavaScript", "Webpack", "Leaflet", "MapTiler API", "Workbox"],
            gradient: "from-cyan-500/20 to-blue-500/10",
            icon: (
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            id: 5,
            name: "DeepRetina (Frontend)",
            category: "Frontend",
            badge: "AI Health Platform",
            description: "Platform kesehatan digital berbasis AI untuk deteksi dini retinopati diabetik dari citra retina mata. Menampilkan visualisasi hasil prediksi machine learning yang interaktif dan user-friendly.",
            projectLink: "https://deep-retina.biiak.sbs/",
            githubLink: "https://github.com/topfreak/DeepRetina_FE.git",
            technologies: ["JavaScript", "Webpack", "Babel", "PWA", "MVP Architecture"],
            gradient: "from-purple-500/20 to-indigo-500/10",
            icon: (
                <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        },
        {
            id: 6,
            name: "DeepRetina (Backend API)",
            category: "Backend",
            badge: "Deep Learning API",
            description: "REST API berkinerja tinggi untuk inferensi model deep learning ensemble (DenseNet121 + EfficientNetB0) dalam klasifikasi tingkat keparahan retinopati diabetik.",
            githubLink: "https://github.com/topfreak/DeepRetina_BE.git",
            technologies: ["FastAPI", "SQLite", "TensorFlow/Keras", "Uvicorn ASGI"],
            gradient: "from-amber-500/20 to-orange-500/10",
            icon: (
                <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            )
        },
        {
            id: 7,
            name: "SnapLah",
            category: "Frontend",
            badge: "Photostrip Web App",
            description: "Aplikasi photostrip kreatif langsung di browser. Pengguna dapat memilih frame favorit, mengambil foto beruntun dengan hitung mundur kamera, dan mengunduh strip foto secara instan.",
            projectLink: "https://snaplah.biiak.sbs/",
            githubLink: "https://github.com/topfreak/snaplah.git",
            technologies: ["React", "Vite", "Tailwind CSS", "Lucide Icons"],
            gradient: "from-pink-500/20 to-rose-500/10",
            icon: (
                <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            id: 8,
            name: "Bookshelf REST API",
            category: "Backend",
            badge: "Backend Service",
            description: "RESTful API modular untuk manajemen data koleksi buku dengan validasi payload dinamis, filtering query parameter, dan penanganan status respons HTTP yang terstruktur.",
            githubLink: "https://github.com/topfreak/Bookshelf-API.git",
            technologies: ["Node.js", "Hapi.js", "nanoid", "RESTful Design"],
            gradient: "from-blue-500/20 to-indigo-500/10",
            icon: (
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            id: 9,
            name: "To-Do List App",
            category: "Fullstack",
            badge: "Fullstack System",
            description: "Aplikasi manajemen tugas harian yang clean dan responsif. Mengintegrasikan backend Laravel RESTful API dengan antarmuka React Vite yang cepat dan interaktif.",
            githubLink: "https://github.com/topfreak/ToDoApp-Fullstack.git",
            technologies: ["Laravel", "MySQL", "React", "Vite", "Tailwind CSS"],
            gradient: "from-emerald-500/20 to-cyan-500/10",
            icon: (
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            )
        }
    ];

    const categories = ['All', 'Publikasi & Riset', 'IoT & Data', 'Frontend', 'Backend', 'Fullstack'];

    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(p => p.category === selectedCategory || (p.categories && p.categories.includes(selectedCategory)));

    return (
        <div className="bg-dark pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-32 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 text-heading">
                        Karya & <span className="gradient-text-accent">Publikasi</span>
                    </h1>
                    <p className="text-main text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Koleksi publikasi ilmiah internasional, riset Cyber-Physical Systems & IoT, serta pengembangan aplikasi perangkat lunak modern.
                    </p>
                </div>

                {/* Filter Kategori */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm transition-all-smooth ${
                                selectedCategory === cat
                                    ? 'bg-accent text-bg-dark shadow-md shadow-cyan-500/20'
                                    : 'bg-medium text-main border border-subtle hover:border-accent hover:text-accent'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                
                {/* Grid Proyek */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredProjects.map((project) => (
                        <div 
                            key={project.id} 
                            className="bg-medium rounded-2xl overflow-hidden flex flex-col border border-subtle hover:border-accent transition-all-smooth transform hover:-translate-y-1.5 shadow-xl group"
                        >
                            {/* Card Visual Header */}
                            <div className={`p-5 sm:p-6 bg-gradient-to-br ${project.gradient} border-b border-subtle flex items-center justify-between`}>
                                <div className="p-2.5 sm:p-3 bg-dark/60 backdrop-blur-sm rounded-xl border border-subtle">
                                    {project.icon}
                                </div>
                                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-accent bg-dark/70 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-accent/20">
                                    {project.badge}
                                </span>
                            </div>

                            {/* Card Content */}
                            <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-heading group-hover:text-accent transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-main mb-5 sm:mb-6 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                
                                <div>
                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                                        {project.technologies.map((tech, idx) => (
                                            <span 
                                                key={idx}
                                                className="text-[11px] sm:text-xs bg-dark px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-main border border-subtle font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* Action Links */}
                                    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-4 border-t border-subtle">
                                        {project.projectLink && (
                                            <a 
                                                href={project.projectLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-accent text-bg-dark text-center py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm hover:bg-opacity-90 transition-all-smooth shadow-sm"
                                            >
                                                {project.projectLinkText || "Demo Web →"}
                                            </a>
                                        )}
                                        {project.githubLink && (
                                            <a 
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`${project.projectLink ? 'flex-1' : 'w-full'} bg-dark border border-subtle text-heading text-center py-2.5 px-4 rounded-lg font-semibold text-xs sm:text-sm hover:border-accent hover:text-accent transition-all-smooth`}
                                            >
                                                {project.githubLinkText || "GitHub Code"}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Karya;
