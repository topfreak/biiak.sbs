import React from 'react';

const Kontak = () => (
    <div className="bg-dark pt-32 pb-20 md:pb-32 min-h-screen flex items-center">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase text-heading">
                Punya Ide? <span className="gradient-text-accent">Mari Berkolaborasi.</span>
            </h1>
            <p className="text-lg text-main max-w-2xl mx-auto mb-10 leading-relaxed">
                Jika Anda ingin berdiskusi mengenai proyek kolaborasi, ingin bergabung dan memiliki subdomain personal di platform <strong>biiak.sbs</strong>, atau ingin terhubung dengan talenta kami, silakan hubungi kami melalui email di bawah ini.
            </p>
            
            <a 
                href="mailto:topik.id.x@gmail.com" 
                className="bg-accent text-bg-dark px-10 py-4 rounded-xl text-xl font-bold hover:bg-opacity-90 transition-all-smooth transform hover:scale-105 inline-block shadow-lg shadow-cyan-500/20 mb-16"
            >
                topik.id.x@gmail.com
            </a>

            <div className="max-w-xl mx-auto">
                <div className="bg-medium p-8 rounded-2xl border border-subtle text-left">
                    <h3 className="text-xl font-bold text-heading mb-4 text-center">
                        Informasi Komunikasi
                    </h3>
                    <div className="space-y-4 text-main">
                        <div className="flex items-start gap-4">
                            <span className="text-accent font-bold text-lg">&#x2714;</span>
                            <div>
                                <p className="font-semibold text-heading">Inisiasi Komunitas & Direktori</p>
                                <p className="text-sm">Terbuka untuk talenta, developer, dan desainer asal Sambas yang ingin mempublikasikan portofolionya.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-accent font-bold text-lg">&#x2714;</span>
                            <div>
                                <p className="font-semibold text-heading">Peluang Kolaborasi & Kemitraan</p>
                                <p className="text-sm">Siap bermitra dalam riset, pengembangan software, analisis data, maupun solusi digital terapan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Kontak;