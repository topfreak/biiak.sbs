import React from 'react';

const Kontak = () => (
    <div className="bg-dark pt-28 pb-16 md:pt-36 md:pb-28 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 uppercase text-heading">
                Punya Ide? <span className="gradient-text-accent">Mari Berkolaborasi.</span>
            </h1>
            <p className="text-base sm:text-lg text-main max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
                Jika Anda ingin berdiskusi mengenai proyek kolaborasi, ingin bergabung dan memiliki subdomain personal di platform <strong>biiak.sbs</strong>, atau ingin terhubung dengan talenta kami, silakan hubungi kami melalui email di bawah ini.
            </p>
            
            <div className="mb-12 sm:mb-16">
                <a 
                    href="mailto:topik.id.x@gmail.com" 
                    className="w-full sm:w-auto inline-block bg-accent text-bg-dark px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl text-base sm:text-xl font-bold hover:bg-opacity-90 transition-all-smooth transform hover:scale-105 shadow-lg shadow-cyan-500/20 break-all sm:break-normal"
                >
                    topik.id.x@gmail.com
                </a>
            </div>

            <div className="max-w-xl mx-auto">
                <div className="bg-medium p-6 sm:p-8 rounded-2xl border border-subtle text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-heading mb-4 text-center">
                        Informasi Komunikasi
                    </h3>
                    <div className="space-y-4 text-main">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <span className="text-accent font-bold text-base sm:text-lg mt-0.5">&#x2714;</span>
                            <div>
                                <p className="font-semibold text-heading text-sm sm:text-base">Inisiasi Komunitas & Direktori</p>
                                <p className="text-xs sm:text-sm leading-relaxed">Terbuka untuk talenta, developer, dan desainer asal Sambas yang ingin mempublikasikan portofolionya.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 sm:gap-4">
                            <span className="text-accent font-bold text-base sm:text-lg mt-0.5">&#x2714;</span>
                            <div>
                                <p className="font-semibold text-heading text-sm sm:text-base">Peluang Kolaborasi & Kemitraan</p>
                                <p className="text-xs sm:text-sm leading-relaxed">Siap bermitra dalam riset, pengembangan software, analisis data, maupun solusi digital terapan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Kontak;