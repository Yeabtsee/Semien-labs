import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;
    const linkClasses = (path) => `transition-colors hover:text-primary ${isActive(path) ? 'text-primary font-bold' : 'text-slate-300'}`;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="text-primary">
                        <svg className="size-7" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Semien Labs</span>
                </Link>
                
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link to="/" className={linkClasses('/')}>Home</Link>
                    <Link to="/products" className={linkClasses('/products')}>Products</Link>
                    <Link to="/about" className={linkClasses('/about')}>About</Link>
                    <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
                    <Link to="/docs" className="text-slate-300 hover:text-primary transition-colors cursor-not-allowed opacity-70">Docs</Link>
                    <Link to="/careers" className="text-slate-300 hover:text-primary transition-colors cursor-not-allowed opacity-70">Careers</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
                        Request Demo
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
