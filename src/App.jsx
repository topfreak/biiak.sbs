import React, { useState } from 'react';

// Impor Komponen dan Halaman
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Karya from './pages/Karya';
import Tentang from './pages/Tentang';
import Kontak from './pages/Kontak';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'karya':
                return <Karya />;
            case 'tentang':
                return <Tentang />;
            case 'kontak':
                return <Kontak />;
            case 'home':
            default:
                return <Home onNavigate={setCurrentPage} />;
        }
    };

    return (
        <>
            <Header onNavigate={setCurrentPage} currentPage={currentPage} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </>
    );
}

export default App;