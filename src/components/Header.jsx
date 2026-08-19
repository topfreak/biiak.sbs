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
            <header className="p-6 md:p-8 fixed w-full z-40 bg-dark/80 backdrop-blur-md border-b border-subtle">
                <nav className="container mx-auto flex justify-between items-center">
                    {/* --- PERUBAHAN DI SINI --- */}
                    <button onClick={() => handleNavClick('home')} className="flex items-center gap-3 text-2xl font-bold text-accent">
                        <img src="/baiik.svg" alt="baiik.sbs logo" className="h-12 w-12" />
                        <span>baiik.sbs</span>
                    </button>
                    {/* --- AKHIR PERUBAHAN --- */}
                    
                    {/* Navigasi Desktop */}
                    <div className="hidden md:flex space-x-8 items-center font-semibold text-heading">
                        <button onClick={() => handleNavClick('home')} className={`hover:text-accent transition-all-smooth ${currentPage === 'home' ? 'text-accent' : ''}`}>Home</button>
                        <button onClick={() => handleNavClick('karya')} className={`hover:text-accent transition-all-smooth ${currentPage === 'karya' ? 'text-accent' : ''}`}>Karya</button>
                        <button onClick={() => handleNavClick('tentang')} className={`hover:text-accent transition-all-smooth ${currentPage === 'tentang' ? 'text-accent' : ''}`}>Tentang Saya</button>
                        <button onClick={() => handleNavClick('kontak')} className={`bg-accent text-bg-dark px-5 py-2 rounded-lg hover:bg-opacity-90 transition-all-smooth`}>Kontak</button>
                    </div>

                    {/* Tombol Burger Mobile */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl text-white relative">
                            {isMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Menu Overlay Mobile */}
            <div className={`fixed inset-0 bg-dark z-30 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <button onClick={() => handleNavClick('home')} className="text-4xl font-bold text-heading hover:text-accent">Home</button>
                    <button onClick={() => handleNavClick('karya')} className="text-4xl font-bold text-heading hover:text-accent">Karya</button>
                    <button onClick={() => handleNavClick('tentang')} className="text-4xl font-bold text-heading hover:text-accent">Tentang Saya</button>
                    <button onClick={() => handleNavClick('kontak')} className="text-4xl font-bold text-heading hover:text-accent">Kontak</button>
                </div>
            </div>
        </>
    );
};

export default Header;