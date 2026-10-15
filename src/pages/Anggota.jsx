import React from 'react';

const Anggota = () => {
    const anggotaList = [
        {
            nama: "Taufiq Hidayatullah, S.Kom.",
            peran: "Informatics Graduate & Master Student",
            subdomain: "topikbiiaksbs.vercel.app",
            url: "https://topikbiiaksbs.vercel.app/",
            deskripsi: "Mengeksplorasi pengembangan sistem dan analitik prediktif berbasis Big Data untuk solusi teknologi yang cerdas dan berdampak.",
            foto: "/pp.jpg"
        }
    ];

    return (
        <div className="bg-dark pt-28 pb-16 md:pt-36 md:pb-28 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-center mb-3 text-heading">
                    Anggota <span className="gradient-text-accent">Kami</span>
                </h1>
                <p className="text-center text-main mb-10 md:mb-16 max-w-2xl mx-auto text-base sm:text-lg">
                    Kenali para kreator, engineer, dan talenta digital yang tergabung dalam komunitas biiak.sbs.
                </p>

                <div className="flex flex-col items-center justify-center gap-8">
                    {anggotaList.map((anggota, index) => (
                        <div 
                            key={index} 
                            className="w-full max-w-3xl bg-medium p-6 sm:p-8 md:p-10 rounded-2xl border border-subtle shadow-xl hover:border-accent transition-all-smooth"
                        >
                            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-10">
                                <div className="flex-shrink-0 flex items-center justify-center">
                                    <picture>
                                        <source srcSet="/pp.webp" type="image/webp" />
                                        <img 
                                            src={anggota.foto} 
                                            alt={anggota.nama} 
                                            loading="lazy"
                                            decoding="async"
                                            className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-subtle shadow-md"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "/baiik.svg";
                                            }}
                                        />
                                    </picture>
                                </div>
                                <div className="text-center sm:text-left flex-1 w-full">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-1">
                                        {anggota.nama}
                                    </h2>
                                    <p className="text-accent font-semibold text-sm sm:text-base md:text-lg mb-3">
                                        {anggota.peran}
                                    </p>
                                    <p className="text-main leading-relaxed mb-6 text-sm sm:text-base">
                                        {anggota.deskripsi}
                                    </p>
                                    <div className="w-full flex justify-center sm:justify-start">
                                        <a 
                                            href={anggota.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-bg-dark px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all-smooth transform hover:scale-105 shadow-md shadow-cyan-500/20 text-sm sm:text-base"
                                        >
                                            <span className="truncate max-w-[240px] sm:max-w-none">Kunjungi {anggota.subdomain}</span>
                                            <span>&rarr;</span>
                                        </a>
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

export default Anggota;
