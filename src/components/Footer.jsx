import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-background-dark pt-20 pb-10 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="text-primary">
                            <svg className="size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <span className="text-lg font-bold text-white">Semien Labs</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">Architecting the future of technical infrastructure. Based in the digital ether, shipping globally.</p>
                    <div className="flex gap-4 mt-6">
                        <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                        <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                        <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">hub</span></a>
                    </div>
                </div>
                <div>
                    <h5 className="font-bold mb-6 text-white">Laboratory</h5>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><Link className="hover:text-primary transition-colors" to="/products">Products</Link></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Whitepapers</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Infrastructure</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Lab Reports</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-6 text-white">Company</h5>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Journal</a></li>
                        <li><Link className="hover:text-primary transition-colors" to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-6 text-white">Stay Experimental</h5>
                    <p className="text-xs text-slate-500 mb-4">Subscribe for technical deep-dives and product updates.</p>
                    <form className="flex gap-2">
                        <input className="bg-slate-800 border-slate-700 rounded-lg text-sm flex-1 focus:ring-primary focus:border-primary px-3 py-2 text-white" placeholder="Email" type="email"/>
                        <button className="bg-primary text-white p-2 rounded-lg flex items-center justify-center"><span className="material-symbols-outlined">send</span></button>
                    </form>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <p>© 2024 Semien Labs Inc. All rights reserved.</p>
                <div className="flex gap-6">
                    <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                    <a className="hover:text-white transition-colors" href="#">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
