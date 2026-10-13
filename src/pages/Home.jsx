import React from 'react';

const Home = ({ onNavigate }) => (
    <>
        {/* Hero Section */}
        <section className="bg-dark relative min-h-screen flex items-center justify-center text-center px-4 pt-28 pb-16">
            <div className="z-10 max-w-4xl mx-auto">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-sm">
                    Platform Portofolio Publik &middot; Biak Sambas
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 uppercase text-heading">
                    Karya.
                </h1>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 uppercase text-heading">
                    <span className="gradient-text-accent">Dampak Baik.</span>
                </h1>
                <p className="max-w-3xl mx-auto mb-10 text-main text-lg md:text-xl leading-relaxed">
                    Selamat datang di <strong className="text-heading">biiak.sbs</strong>, ruang portofolio bersama dan wadah bertemunya para kreator, engineer, serta talenta digital asal Sambas. Kami percaya bahwa karya terbaik lahir dari kolaborasi, kejernihan tujuan, dan niat untuk membawa manfaat nyata.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button 
                        onClick={() => onNavigate && onNavigate('anggota')} 
                        className="w-full sm:w-auto bg-accent text-bg-dark px-8 py-3.5 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all-smooth transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                    >
                        Lihat Anggota Kami &rarr;
                    </button>
                    <a 
                        href="#filosofi" 
                        className="w-full sm:w-auto bg-medium text-heading border border-subtle px-8 py-3.5 rounded-lg text-lg font-semibold hover:border-accent hover:text-accent transition-all-smooth"
                    >
                        Baca Filosofi Kami
                    </a>
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
                        Layaknya titik air yang meluaskan riak ke segala arah, sebuah karya teknologi yang tepat sasaran selalu membawa dampak positif yang tak terbatas.
                    </p>
                    <p className="text-lg text-main mb-8 leading-relaxed">
                        Di biiak.sbs, setiap anggota membangun karya melalui subdomain masing-masing, namun bersama-sama kami membawa satu semangat: berkarya untuk memberi dampak nyata bagi masyarakat dan industri digital.
                    </p>
                    <button 
                        onClick={() => onNavigate && onNavigate('tentang')}
                        className="text-accent font-bold hover:underline inline-flex items-center gap-2 text-lg"
                    >
                        Pelajari Selengkapnya Tentang Kami &rarr;
                    </button>
                </div>
                <div>
                     <div className="bg-dark p-8 md:p-10 rounded-2xl border border-subtle space-y-6 shadow-xl">
                        <h3 className="text-2xl font-bold text-heading mb-6 border-b border-subtle pb-4">
                            Prinsip Kami
                        </h3>
                        <div className="flex items-start gap-4">
                            <span className="text-accent font-bold text-xl mt-1">01.</span>
                            <div>
                                <h4 className="text-xl font-bold text-heading mb-1">Esensi di Atas Kompleksitas</h4>
                                <p className="text-main text-sm md:text-base leading-relaxed">
                                    Menghadirkan solusi yang bersih dan elegan. Mengurai kerumitan sistem menjadi pengalaman yang intuitif dan bermakna.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-accent font-bold text-xl mt-1">02.</span>
                            <div>
                                <h4 className="text-xl font-bold text-heading mb-1">Pertumbuhan Organik</h4>
                                <p className="text-main text-sm md:text-base leading-relaxed">
                                    Setiap ide, inisiatif, dan produk digital dibangun dengan arsitektur yang terukur (scalable), adaptif, dan terus berkembang.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-accent font-bold text-xl mt-1">03.</span>
                            <div>
                                <h4 className="text-xl font-bold text-heading mb-1">Karya yang Berbicara</h4>
                                <p className="text-main text-sm md:text-base leading-relaxed">
                                    Kualitas implementasi, fungsionalitas sistem, dan kegunaan nyata menjadi bukti paling jujur dari dedikasi kami.
                                </p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>

        {/* Direktori Anggota Banner Section */}
        <section className="py-20 bg-dark border-t border-subtle text-center">
            <div className="container mx-auto px-6 max-w-4xl">
                <h3 className="text-3xl md:text-4xl font-bold text-heading mb-4">
                    Ingin Mengenal Siapa di Balik <span className="gradient-text-accent">biiak.sbs</span>?
                </h3>
                <p className="text-main text-lg mb-8 max-w-2xl mx-auto">
                    Kunjungi halaman anggota untuk melihat talenta yang tergabung serta menjelajahi portofolio personal mereka di masing-masing subdomain.
                </p>
                <button 
                    onClick={() => onNavigate && onNavigate('anggota')}
                    className="bg-accent text-bg-dark px-8 py-3.5 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all-smooth transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                >
                    Jelajahi Anggota &rarr;
                </button>
            </div>
        </section>
    </>
);

export default Home;