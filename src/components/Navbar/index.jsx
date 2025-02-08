import { Link } from "react-router-dom";
import Logo from "./Logo/index.jsx";
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className="w-full py-7 flex items-center justify-between px-7">
                <Logo />

                {/* Desktop Menu */}
                <ul className="hidden md:flex justify-center gap-[34px] text-figmaWhite text-sm uppercase">
                    <Link to='/' className="hover:text-figmaOrange transition-colors">Home</Link>
                    <Link to='/headphones' className="hover:text-figmaOrange transition-colors">Headphones</Link>
                    <Link to='/speakers' className="hover:text-figmaOrange transition-colors">Speakers</Link>
                    <Link to='/earphones' className="hover:text-figmaOrange transition-colors">Earphones</Link>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-figmaWhite text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <TiShoppingCart className="text-figmaWhite text-2xl cursor-pointer hover:text-figmaOrange transition-colors" />
            </nav>

            {/* Full Screen Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-figmaBlack z-50">
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-7">
                            <Logo />
                            <button
                                className="text-figmaWhite text-2xl"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col items-center justify-center flex-grow gap-8 text-figmaWhite text-xl uppercase">
                            <Link to='/' className="hover:text-figmaOrange transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to='/headphones' className="hover:text-figmaOrange transition-colors" onClick={() => setIsMenuOpen(false)}>Headphones</Link>
                            <Link to='' className="hover:text-figmaOrange transition-colors" onClick={() => setIsMenuOpen(false)}>Speakers</Link>
                            <Link to='' className="hover:text-figmaOrange transition-colors" onClick={() => setIsMenuOpen(false)}>Earphones</Link>
                        </ul>
                    </div>
                </div>
            )}

            <div className="h-px w-full bg-figmaWhite/40"></div>
        </>
    )
}