import { FaTwitter, FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="w-full bg-figmaBlack">
            <div className="max-w-[1110px] mx-auto py-8 sm:py-16 relative px-4 sm:px-6">
                <div className="h-[6px] w-[100px] bg-figmaOrange absolute top-0 left-4 sm:left-6 md:left-0"></div>

                <nav className="flex flex-col md:flex-row items-center justify-between mb-8 sm:mb-12 gap-6 sm:gap-8">
                    <Link to="/" className="text-figmaWhite text-xl sm:text-2xl font-bold">audiophile</Link>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-9 text-center">
                        <Link to="/" className="text-figmaWhite text-xs sm:text-sm font-bold hover:text-figmaOrange transition-colors">HOME</Link>
                        <Link to="/headphones" className="text-figmaWhite text-xs sm:text-sm font-bold hover:text-figmaOrange transition-colors">HEADPHONES</Link>
                        <Link to="/speakers" className="text-figmaWhite text-xs sm:text-sm font-bold hover:text-figmaOrange transition-colors">SPEAKERS</Link>
                        <Link to="/earphones" className="text-figmaWhite text-xs sm:text-sm font-bold hover:text-figmaOrange transition-colors">EARPHONES</Link>
                    </div>
                </nav>

                <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 sm:gap-8">
                    <div className="max-w-full md:max-w-[540px] text-center md:text-left">
                        <p className="text-figmaWhite text-opacity-50 text-xs sm:text-sm mb-8 sm:mb-12 px-4 sm:px-0">
                            Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers
                            and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                            visit our demo facility - we&apos;re open 7 days a week.
                        </p>
                        <p className="text-figmaWhite text-opacity-50 text-xs sm:text-sm">
                            Copyright 2021. All Rights Reserved
                        </p>
                    </div>

                    <div className="flex gap-4 mt-6 md:mt-0">
                        <Link to="#" className="text-figmaWhite text-lg sm:text-xl hover:text-figmaOrange transition-colors">
                            <FaFacebookF />
                        </Link>
                        <Link to="#" className="text-figmaWhite text-lg sm:text-xl hover:text-figmaOrange transition-colors">
                            <FaTwitter />
                        </Link>
                        <Link to="#" className="text-figmaWhite text-lg sm:text-xl hover:text-figmaOrange transition-colors">
                            <FaInstagram />
                        </Link>
                        <Link to="#" className="text-figmaWhite text-lg sm:text-xl hover:text-figmaOrange transition-colors">
                            <FaPinterest />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
