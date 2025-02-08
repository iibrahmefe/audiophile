import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Item from "./item";
import Product from "./Product";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="w-full bg-figmaBlack">
                <div className="max-w-[1110px] mx-auto">
                    <Navbar />
                    <Hero />
                </div>
            </div>
            <div className="max-w-[1110px] mx-auto px-4 sm:px-6">
                <Item />
                <Product />
            </div>
            <div className="w-full bg-figmaBlack">
                <Footer />
            </div>
        </div>
    );
}

