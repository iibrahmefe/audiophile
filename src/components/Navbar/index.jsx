import { Link } from "react-router-dom";
import Logo from "./Logo/index.jsx";


import { TiShoppingCart } from "react-icons/ti";


export default function Navbar() {
    return (
        <>
            <nav className="w-full py-7 flex items-center justify-between ">
                <Logo />
                <ul className="flex justify-center gap-[34px]  text-figmaWhite text-sm uppercase ">
                    <Link to='/'>Home</Link>
                    <Link to='/headphones'>Headphones</Link>
                    <Link to=''>Speakers</Link>
                    <Link to=''>Earphones</Link>
                </ul>

                <TiShoppingCart className="text-figmaWhite text-2xl" />

            </nav>

            <div className="h-px w-full bg-figmaWhite/40 mt-"></div>
        </>

    )
}