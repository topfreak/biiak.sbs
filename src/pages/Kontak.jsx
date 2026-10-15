import React from 'react';

const Kontak = () => (
    <div className="bg-dark pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-32 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 uppercase text-heading">
                Punya Ide? <span className="gradient-text-accent">Mari Berkolaborasi.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-main max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                Jika Anda mencari mitra kreatif untuk mewujudkan gagasan, mendiskusikan peluang proyek web atau sistem data, atau sekadar ingin bertukar pikiran seputar teknologi, silakan hubungi saya melalui email di bawah ini.
            </p>
            
            <a 
                href="mailto:topik.id.x@gmail.com" 
                className="bg-accent text-bg-dark px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl text-base sm:text-xl font-bold hover:bg-opacity-90 transition-all-smooth transform hover:scale-105 inline-block shadow-lg shadow-cyan-500/20 mb-10 sm:mb-16 break-all sm:break-normal max-w-full"
            >
                topik.id.x@gmail.com
            </a>

            <div className="max-w-md mx-auto">
                <div className="bg-medium p-5 sm:p-8 rounded-2xl border border-subtle">
                    <p className="text-main mb-5 sm:mb-6 text-sm sm:text-base font-semibold">Terhubung melalui jaringan profesional & sosial:</p>
                    <div className="flex justify-center space-x-6 sm:space-x-8">
                        <a 
                            href="https://www.linkedin.com/in/topikidx/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-main hover:text-accent transition-all-smooth" 
                            aria-label="LinkedIn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-9 sm:h-9">
                               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                            </svg>
                        </a>
                        <a 
                            href="https://github.com/topfreak" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-main hover:text-accent transition-all-smooth" 
                            aria-label="GitHub"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-9 sm:h-9">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a 
                            href="https://www.instagram.com/topik.id.x/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-main hover:text-accent transition-all-smooth" 
                            aria-label="Instagram"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-9 sm:h-9">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Kontak;