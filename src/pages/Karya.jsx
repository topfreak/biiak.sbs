import React from 'react';

const Karya = () => {
    // Data proyek-proyek yang sudah dikerjakan (DeepRetina tetap terpisah asli)
    const projects = [
        {
            id: 1,
            name: "SPRCP",
            category: "Internet of Things & Distributed Database",
            description: "Rancang bangun sistem monitoring korosi beton pada metode Smart Patch Repair Cathodic Protection (SPRCP) berbasis Internet of Things dan Distributed Real-Time Database untuk pemantauan struktural secara berkala dan akurat.",
            image: "https://placehold.co/600x400/10B981/FFFFFF?text=SPRCP+IoT+System",
            githubLink: "https://github.com/topfreak/Project-Kolaborasi-Uji-Korosi-Beton-Menggunakan-IoT",
            technologies: ["IoT", "FastAPI", "Distributed Database", "Real-Time Data"]
        },
        {
            id: 2,
            name: "Story Share",
            category: "Frontend Development",
            description: "Aplikasi web progresif (PWA) untuk berbagi cerita dengan lokasi menggunakan teknologi modern. Aplikasi ini memungkinkan pengguna untuk membuat, melihat, dan menyimpan cerita dengan foto dan lokasi geografis.",
            image: "./storyshare.png",
            projectLink: "https://frontend-intermediate.baiik.sbs/",
            githubLink: "https://github.com/topfreak/frontend-intermediate.git",
            technologies: ["JavaScript", "Webpack", "Leaflet", "MapTiler API", "Workbox"]
        },
        {
            id: 3,
            name: "DeepRetina (Frontend)",
            category: "Frontend Development",
            description: "Deep Retina adalah platform kesehatan digital yang berfokus pada deteksi dini penyakit mata melalui teknologi kecerdasan buatan (AI) dan machine learning. Aplikasi web ini memungkinkan pengguna untuk mengunggah foto retina mata dan mendapatkan analisis otomatis untuk mendeteksi retinopati diabetik.",
            image: "./deepretina_fe.png",
            projectLink: "https://deep-retina.baiik.sbs/",
            githubLink: "https://github.com/topfreak/DeepRetina_FE.git",
            technologies: ["JavaScript", "Webpack", "Babel", "PWA", "MVP"]
        },
        {
            id: 4,
            name: "DeepRetina (Backend)",
            category: "Backend Development",
            description: "Backend REST API untuk sistem deteksi retinopati diabetik menggunakan deep learning. Aplikasi ini dibangun dengan FastAPI dan menggunakan model ensemble DenseNet121 + EfficientNetB0 untuk klasifikasi tingkat keparahan retinopati dari citra retina.",
            image: "https://placehold.co/600x400/10B981/FFFFFF?text=DeepRetina+(Backend)",
            githubLink: "https://github.com/topfreak/DeepRetina_BE.git",
            technologies: ["FastAPI", "SQLite", "TensorFlow/Keras", "Uvicorn ASGI"]
        },
        {
            id: 5,
            name: "SnapLah (Landing Page)",
            category: "Frontend Development",
            description: "Snaplah adalah aplikasi web modern yang memungkinkan Anda membuat photostrip kreatif layaknya di studio foto, langsung dari browser Anda. Pilih frame favorit, berpose dengan timer, dan bagikan hasilnya dalam hitungan menit!",
            image: "./snaplah.png",
            projectLink: "https://www.snaplah.fun/",
            githubLink: "https://github.com/topfreak/snaplah.git",
            technologies: ["React", "Vite", "Tailwind CSS", "Lucide"]
        },
        {
            id: 6,
            name: "Bookshelf API",
            category: "Backend Development",
            description: "RESTful API sederhana untuk mengelola koleksi buku menggunakan Hapi.js framework. API ini dibuat sebagai submission untuk kelas Belajar Back-End Pemula dengan JavaScript.",
            image: "https://placehold.co/600x400/10B981/FFFFFF?text=Bookshelf+API",
            githubLink: "https://github.com/topfreak/Bookshelf-API.git",
            technologies: ["Node.js", "Hapi.js", "nanoid", "JavaScript"]
        },
        {
            id: 7,
            name: "To-Do List App",
            category: "Fullstack Development",
            description: "Todo App adalah aplikasi web modern yang memungkinkan Anda mengelola tugas harian dengan mudah dan efisien, langsung dari browser Anda. Tambahkan task baru, tandai sebagai selesai, edit atau hapus tugas, dan pantau progres Anda dalam satu interface yang clean dan responsif!",
            image: "https://placehold.co/600x400/10B981/FFFFFF?text=To-Do+List+App",
            githubLink: "https://github.com/topfreak/ToDoApp-Fullstack.git",
            technologies: ["Laravel", "RESTful API", "MySQL", "React", "Vite"]
        }
    ];

    return (
        <div className="bg-dark pt-32 pb-20 md:pb-32 min-h-screen">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-heading">
                    Proyek <span className="gradient-text-accent">Pilihan</span>
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="bg-medium rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all-smooth group border border-subtle hover:shadow-2xl hover:border-accent"
                        >
                            <img 
                                src={project.image} 
                                alt={`Screenshot dari ${project.name}`} 
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-sm text-accent mb-2 font-semibold">{project.category}</p>
                                <h3 className="text-2xl font-bold mb-3 text-heading">{project.name}</h3>
                                <p className="text-main mb-4 text-sm leading-relaxed">{project.description}</p>
                                
                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full border border-accent/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    {project.projectLink && (
                                        <a 
                                            href={project.projectLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${project.githubLink ? 'flex-1' : 'w-full'} bg-accent text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors`}
                                        >
                                            Lihat Project
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a 
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${project.projectLink ? 'flex-1' : 'w-full'} border border-accent text-accent text-center py-2 px-4 rounded-lg font-semibold hover:bg-accent/10 transition-colors`}
                                        >
                                            GitHub
                                        </a>
                                    )}
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