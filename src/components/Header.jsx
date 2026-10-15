import React, { useState, useEffect } from 'react';

const Header = ({ onNavigate, currentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Menangani klik pada link navigasi di mode mobile
    const handleNavClick = (page) => {
        onNavigate(page);
        setIsMenuOpen(false); // Selalu tutup menu setelah link diklik
    };
    
    // Efek untuk mencegah scrolling saat menu mobile terbuka
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-dark/90 backdrop-blur-md border-b border-subtle py-3.5 px-5 sm:py-4 sm:px-6 md:py-5 md:px-8 transition-all-smooth">
                <nav className="container mx-auto flex justify-between items-center">
                    {/* Logo Website */}
                    <button 
                        onClick={() => handleNavClick('home')} 
                        className="flex items-center gap-2.5 sm:gap-3 text-xl sm:text-2xl font-bold text-accent hover:opacity-90 transition-opacity"
                    >
                        <img src="/baiik.svg" alt="topik logo" className="h-9 w-9 sm:h-11 sm:w-11 object-contain flex-shrink-0" />
                        <span className="tracking-tight">topik</span>
                    </button>
                    
                    {/* Navigasi Desktop */}
                    <div className="hidden md:flex space-x-8 items-center font-semibold text-heading">
                        <button 
                            onClick={() => handleNavClick('home')} 
                            className={`hover:text-accent transition-all-smooth ${currentPage === 'home' ? 'text-accent font-bold' : ''}`}
                        >
                            Home
                        </button>
                        <button 
                            onClick={() => handleNavClick('karya')} 
                            className={`hover:text-accent transition-all-smooth ${currentPage === 'karya' ? 'text-accent font-bold' : ''}`}
                        >
                            Karya
                        </button>
                        <button 
                            onClick={() => handleNavClick('tentang')} 
                            className={`hover:text-accent transition-all-smooth ${currentPage === 'tentang' ? 'text-accent font-bold' : ''}`}
                        >
                            Tentang Saya
                        </button>
                        <button 
                            onClick={() => handleNavClick('kontak')} 
                            className="bg-accent text-bg-dark px-5 py-2 rounded-lg hover:bg-opacity-90 transition-all-smooth font-bold shadow-sm"
                        >
                            Kontak
                        </button>
                    </div>

                    {/* Tombol Burger Mobile (Sangat terlihat, kontras tinggi, SVG tajam) */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="p-2 rounded-lg text-heading hover:text-accent hover:bg-medium/80 focus:outline-none transition-colors"
                            aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Menu Overlay Mobile */}
            <div 
                className={`fixed inset-0 bg-dark/98 backdrop-blur-xl z-40 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
                } transition-all duration-300 ease-in-out md:hidden flex flex-col justify-center items-center px-6`}
            >
                <div className="flex flex-col items-center justify-center w-full max-w-sm space-y-4">
                    <button 
                        onClick={() => handleNavClick('home')} 
                        className={`w-full py-3.5 px-6 rounded-xl text-xl sm:text-2xl font-bold transition-all-smooth ${
                            currentPage === 'home' 
                                ? 'text-accent bg-accent/10 border border-accent/20' 
                                : 'text-heading hover:text-accent hover:bg-medium/60'
                        }`}
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => handleNavClick('karya')} 
                        className={`w-full py-3.5 px-6 rounded-xl text-xl sm:text-2xl font-bold transition-all-smooth ${
                            currentPage === 'karya' 
                                ? 'text-accent bg-accent/10 border border-accent/20' 
                                : 'text-heading hover:text-accent hover:bg-medium/60'
                        }`}
                    >
                        Karya
                    </button>
                    <button 
                        onClick={() => handleNavClick('tentang')} 
                        className={`w-full py-3.5 px-6 rounded-xl text-xl sm:text-2xl font-bold transition-all-smooth ${
                            currentPage === 'tentang' 
                                ? 'text-accent bg-accent/10 border border-accent/20' 
                                : 'text-heading hover:text-accent hover:bg-medium/60'
                        }`}
                    >
                        Tentang Saya
                    </button>
                    <button 
                        onClick={() => handleNavClick('kontak')} 
                        className="w-full py-3.5 px-6 rounded-xl text-xl sm:text-2xl font-bold bg-accent text-bg-dark hover:bg-opacity-90 shadow-lg shadow-cyan-500/20 transition-all-smooth mt-2"
                    >
                        Kontak
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
