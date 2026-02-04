import { useState } from "react";
import { BiAlignMiddle } from "react-icons/bi";
import { HiX } from "react-icons/hi";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-pink-500 relative">
            {/* NAVBAR */}
            <div className="h-16 flex items-center justify-between px-12 max-w-5xl mx-auto">

                {/* Logo */}
                <div
                    className="text-3xl text-red-300 font-bold"
                    style={{ fontFamily: "'Pacifico', cursive" }}
                >
                    Amjad
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:flex gap-8 text-xl ">
                    <a className="text-black inline-block hover:text-white hover:scale-110 transition">Home</a>
                    <a className="text-black inline-block hover:text-white hover:scale-110 transition">About</a>
                    <a className="text-black inline-block hover:text-white hover:scale-110 transition">Work</a>
                    <a className="text-black inline-block hover:text-white hover:scale-110 transition">Videos</a>

                </div>

                {/* Desktop Button */}
                <button className="hidden sm:block px-7 py-2 rounded-full bg-purple-500 text-white hover:scale-110 transition">
                    Connect With Me
                </button>

                {/* Burger Button (mobile only) */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="block sm:hidden text-3xl text-white z-50"
                >
                    <BiAlignMiddle />
                </button>
            </div>

            {/* MOBILE MENU (FIXED) */}
            {isOpen && (
                <div className="sm:hidden fixed top-0 right-0 w-1/2 h-screen bg-gray-100 z-50">

                    {/* Cross Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-3xl text-black "
                    >
                        <HiX className="text-4xl font-bold mr-6" />

                    </button>

                    {/* Menu Items */}
                    <div className="pt-20 px-14 text-right space-y-4 text-xl text-black">
                        <a className="block">Home</a>
                        <a className="block">About</a>
                        <a className="block">Work</a>
                        <a className="block">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
