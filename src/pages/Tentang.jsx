import React from 'react';

const Tentang = ({ onNavigate }) => (
    <div className="bg-dark pt-28 pb-16 md:pt-36 md:pb-28 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            {/* Judul Halaman */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-center mb-3 text-heading">
                Tentang <span className="gradient-text-accent">Kami</span>
            </h1>
            <p className="text-center text-main mb-10 md:mb-16 text-base sm:text-lg max-w-2xl mx-auto px-2">
                Mengenal lebih dekat biiak.sbs: wadah kolaborasi, karya digital, dan rekam jejak para talenta Sambas.
            </p>
            
            {/* Bagian Profil Platform & Logo */}
            <div className="bg-medium p-6 sm:p-8 md:p-10 rounded-2xl border border-subtle mb-10 md:mb-12 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10">
                    <img 
                        src="/baiik.svg" 
                        alt="biiak.sbs Logo" 
                        loading="lazy"
                        decoding="async"
                        className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain flex-shrink-0" 
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-1 sm:mb-2">biiak.sbs</h2>
                        <p className="text-accent font-semibold text-base sm:text-lg mb-3 sm:mb-4">Ruang Publik & Direktori Talenta Digital</p>
                        <p className="text-main leading-relaxed text-sm sm:text-base">
                            Nama <strong>biiak</strong> terinspirasi dari dialek lokal Sambas <em>"biak"</em> yang bermakna "orang", "anak", atau "warga". Platform <strong>biiak.sbs</strong> diinisiasi sebagai rumah bersama bagi para pengembang teknologi, praktisi data, desainer, dan kreator asal Sambas untuk menampilkan portofolio serta rekam jejak profesional mereka secara terpadu melalui subdomain personal masing-masing.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Visi, Misi & Ekosistem */}
            <div className="space-y-6 sm:space-y-8">
                {/* Visi Kami */}
                <div className="bg-medium p-6 sm:p-8 rounded-2xl border border-subtle">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-heading">Visi Kami</h3>
                    <p className="text-main text-sm sm:text-base leading-relaxed">
                        Menjadi simpul ekosistem digital yang menghubungkan potensi talenta daerah dengan dinamika industri teknologi global. Kami ingin membuktikan bahwa karya yang berkualitas, arsitektur sistem yang kokoh, dan solusi inovatif dapat lahir dari mana saja—dimulai dari Sambas untuk dampak yang luas.
                    </p>
                </div>

                {/* Bagaimana biiak.sbs Bekerja */}
                <div className="bg-medium p-6 sm:p-8 rounded-2xl border border-subtle">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-heading">Bagaimana Platform Ini Bekerja?</h3>
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-dark p-5 sm:p-6 rounded-xl border border-subtle/60">
                            <h4 className="text-lg sm:text-xl font-bold text-heading mb-2">Portal Utama (biiak.sbs)</h4>
                            <p className="text-main text-xs sm:text-sm leading-relaxed">
                                Berfungsi sebagai gerbang etalase publik yang merangkum direktori anggota, nilai-nilai komunitas, dan kanal penghubung bagi mitra yang ingin berkolaborasi.
                            </p>
                        </div>
                        <div className="bg-dark p-5 sm:p-6 rounded-xl border border-subtle/60">
                            <h4 className="text-lg sm:text-xl font-bold text-heading mb-2">Subdomain Personal (nama.biiak.sbs)</h4>
                            <p className="text-main text-xs sm:text-sm leading-relaxed">
                                Setiap anggota memiliki ruang mandiri (misal: <span className="text-accent">topikbiiaksbs.vercel.app</span>) untuk memamerkan proyek, karya teknis, riset, serta perjalanan karier mereka secara spesifik.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ajakan Berkolaborasi */}
                <div className="bg-dark p-6 sm:p-8 md:p-10 rounded-2xl border border-accent/30 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-heading mb-2 sm:mb-3">Tertarik Tergabung atau Berkolaborasi?</h3>
                    <p className="text-main text-sm sm:text-base mb-6 max-w-xl mx-auto px-2">
                        Kami selalu terbuka untuk berdialog, bertukar ide, atau menyambut kreator baru yang ingin memiliki subdomain di biiak.sbs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-4">
                        <button 
                            onClick={() => onNavigate && onNavigate('anggota')}
                            className="w-full sm:w-auto bg-accent text-bg-dark px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all-smooth text-sm sm:text-base"
                        >
                            Lihat Anggota Kami
                        </button>
                        <button 
                            onClick={() => onNavigate && onNavigate('kontak')}
                            className="w-full sm:w-auto bg-medium text-heading border border-subtle px-6 py-3 rounded-xl font-semibold hover:border-accent hover:text-accent transition-all-smooth text-sm sm:text-base"
                        >
                            Hubungi Kami
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Tentang;