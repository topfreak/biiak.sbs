import React from 'react';

const Home = () => (
    <>
        <section className="bg-dark relative min-h-screen flex items-center justify-center text-center px-4 pt-24">
            <div className="z-10 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 uppercase text-heading">Karya.</h1>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 uppercase text-heading">
                    <span className="gradient-text-accent">Dampak Baik.</span>
                </h1>
                <p className="max-w-3xl mx-auto mb-10 text-main text-lg">
                    Di <strong className="text-heading">baiik.sbs</strong>, kami percaya bahwa teknologi terbaik adalah teknologi yang tidak hanya berfungsi, tetapi juga beresonansi. "Baik" bukan sekadar kata sifat atau standar minimal; ia adalah fondasi dari setiap baris kode yang ditulis, setiap arsitektur yang dirancang, dan setiap antarmuka yang dibangun.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#filosofi" className="bg-accent text-bg-dark px-8 py-3 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all-smooth transform hover:scale-105 shadow-lg shadow-cyan-500/20">Baca Filosofi Kami</a>
                </div>
            </div>
        </section>

        <section id="filosofi" className="py-20 md:py-32 bg-medium">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">Gelombang <span className="gradient-text-accent">Kebaikan</span></h2>
                    <p className="text-lg text-main mb-4 font-semibold italic">
                        (The Ripple Effect)
                    </p>
                    <p className="text-lg text-main mb-4">
                        Layaknya titik air yang meluas, sebuah karya teknologi yang tepat sasaran selalu membawa dampak besar.
                    </p>
                    <p className="text-lg text-main mb-8">
                        Mulai dari efisiensi arsitektur sistem hingga solusi AI, setiap detail dirancang sebagai titik awal manfaat nyata bagi penggunanya.
                    </p>
                </div>
                <div>
                     <div className="bg-dark p-8 rounded-xl border border-subtle space-y-6">
                        <h3 className="text-2xl font-bold text-heading mb-6 border-b border-subtle pb-4">Prinsip Kami</h3>
                        <div className="flex items-start gap-4">
                            <span className="text-accent font-bold text-xl mt-1">01.</span>
                            <div>
                                <h4 className="text-xl font-bold text-heading mb-1">Esensi di Atas Kompleksitas</h4>
                                <p className="text-main">Menghadirkan solusi yang clean dan segar. Mengubah kerumitan sistem menjadi pengalaman yang sederhana dan mudah dipahami.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <span className="text-accent font-bold text-xl mt-1">02.</span>
                            <div>
                                <h4 className="text-xl font-bold text-heading mb-1">Pertumbuhan Organik</h4>
                                <p className="text-main">Seperti tunas yang terus berkembang, setiap proyek dan karya dibangun untuk terukur (scalable), adaptif, dan berkelanjutan.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <span className="text-accent font-bold text-xl mt-1">03.</span>
                            <div>
                                <h4 className="text-xl font-bold text-heading mb-1">Karya yang Berbicara</h4>
                                <p className="text-main">Membiarkan kualitas fungsionalitas dan arsitektur sistem menjadi bukti nyata dari niat yang baik.</p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    </>
);

export default Home;