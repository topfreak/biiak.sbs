import React from 'react';

const Home = ({ onNavigate }) => (
    <>
        {/* Hero Section */}
        <section className="bg-dark relative min-h-screen flex items-center justify-center text-center px-4 pt-28 pb-16">
            <div className="z-10 max-w-4xl mx-auto">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-sm">
                    Personal Portfolio &middot; Taufiq Hidayatullah, S.Kom.
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 uppercase text-heading">
                    Karya.
                </h1>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 uppercase text-heading">
                    <span className="gradient-text-accent">Dampak Baik.</span>
                </h1>
                <p className="max-w-3xl mx-auto mb-10 text-main text-lg md:text-xl leading-relaxed">
                    Di <strong className="text-heading">topik.biiak.sbs</strong>, saya percaya bahwa teknologi terbaik adalah teknologi yang tidak hanya berfungsi, tetapi juga beresonansi. "Baik" bukan sekadar kata sifat atau standar minimal; ia adalah fondasi dari setiap baris kode yang ditulis, setiap arsitektur yang dirancang, dan setiap antarmuka yang dibangun.
                </p>

                {/* Ringkasan Profil Card */}
                <div className="max-w-2xl mx-auto mb-10 bg-medium p-6 rounded-2xl border border-subtle shadow-lg">
                    <p className="text-accent font-semibold text-base mb-1">
                        Informatics Graduate & Master Student
                    </p>
                    <p className="text-main text-sm md:text-base italic">
                        "Mengeksplorasi pengembangan sistem dan analitik prediktif berbasis Big Data untuk solusi teknologi yang cerdas dan berdampak."
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button 
                        onClick={() => onNavigate && onNavigate('karya')} 
                        className="w-full sm:w-auto bg-accent text-bg-dark px-8 py-3.5 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all-smooth transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                    >
                        Lihat Karya Saya &rarr;
                    </button>
                    <button 
                        onClick={() => onNavigate && onNavigate('tentang')} 
                        className="w-full sm:w-auto bg-medium text-heading border border-subtle px-8 py-3.5 rounded-lg text-lg font-semibold hover:border-accent hover:text-accent transition-all-smooth"
                    >
                        Tentang Saya
                    </button>
                </div>
            </div>
        </section>

        {/* Filosofi Section */}
        <section id="filosofi" className="py-20 md:py-32 bg-medium border-t border-subtle">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">
                        Gelombang <span className="gradient-text-accent">Kebaikan</span>
                    </h2>
                    <p className="text-lg text-main mb-4 font-semibold italic">
                        (The Ripple Effect)
                    </p>
                    <p className="text-lg text-main mb-4 leading-relaxed">
                        Layaknya titik air yang meluaskan riak ke segala arah, sebuah karya teknologi yang tepat sasaran selalu membawa dampak besar.
                    </p>
                    <p className="text-lg text-main mb-8 leading-relaxed">
                        Mulai dari efisiensi arsitektur sistem, rancangan antarmuka yang intuitif, hingga solusi analitik data, setiap detail dirancang sebagai titik awal manfaat nyata bagi penggunanya.
                    </p>
                    <button 
                        onClick={() => onNavigate && onNavigate('tentang')}
                        className="text-accent font-bold hover:underline inline-flex items-center gap-2 text-lg"
                    >
                        Pelajari Latar Belakang & Pengalaman Saya &rarr;
                    </button>
                </div>
                <div>
                     <div className="bg-dark p-8 md:p-10 rounded-2xl border border-subtle space-y-6 shadow-xl">
                        <h3 className="text-2xl font-bold text-heading mb-6 border-b border-subtle pb-4">
                            Prinsip Saya
                        </h3>
                        <div className="flex items-start gap-4">
                            <span className="text-accent font-bold text-xl mt-1">01.</span>
                            <div>
                                <h4 className="text-xl font-bold text-heading mb-1">Esensi di Atas Kompleksitas</h4>
                                <p className="text-main text-sm md:text-base leading-relaxed">
                                    Menghadirkan solusi yang clean dan segar. Mengubah kerumitan sistem menjadi pengalaman yang sederhana dan mudah dipahami.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-accent font-bold text-xl mt-1">02.</span>
                            <div>
                                <h4 className="text-xl font-bold text-heading mb-1">Pertumbuhan Organik</h4>
                                <p className="text-main text-sm md:text-base leading-relaxed">
                                    Seperti tunas yang terus berkembang, setiap proyek dan karya dibangun untuk terukur (scalable), adaptif, dan berkelanjutan.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-accent font-bold text-xl mt-1">03.</span>
                            <div>
                                <h4 className="text-xl font-bold text-heading mb-1">Karya yang Berbicara</h4>
                                <p className="text-main text-sm md:text-base leading-relaxed">
                                    Membiarkan kualitas fungsionalitas dan arsitektur sistem menjadi bukti nyata dari dedikasi dan niat yang baik.
                                </p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>

        {/* CTA Kolaborasi Section */}
        <section className="py-20 bg-dark border-t border-subtle text-center">
            <div className="container mx-auto px-6 max-w-4xl">
                <h3 className="text-3xl md:text-4xl font-bold text-heading mb-4">
                    Punya Ide atau Ingin <span className="gradient-text-accent">Berkolaborasi</span>?
                </h3>
                <p className="text-main text-lg mb-8 max-w-2xl mx-auto">
                    Saya selalu terbuka untuk berdiskusi mengenai riset, pengembangan sistem web, maupun proyek teknologi yang berdampak.
                </p>
                <button 
                    onClick={() => onNavigate && onNavigate('kontak')}
                    className="bg-accent text-bg-dark px-8 py-3.5 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all-smooth transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                >
                    Hubungi Saya &rarr;
                </button>
            </div>
        </section>
    </>
);

export default Home;