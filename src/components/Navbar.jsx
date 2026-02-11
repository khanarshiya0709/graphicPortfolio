import { useState } from "react";
import { BiAlignMiddle } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-dark relative">
            {/* NAVBAR */}
            <div
                className="h-16 flex items-center justify-between px-12 max-w-5xl mx-auto">

                {/* Logo */}
                <div
                    className="text-3xl text-white font-bold"
                    style={{ fontFamily: "'Pacifico', cursive" }}
                >
                    Amjad
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:flex gap-8 text-xl ">
                    <a href="#home" className="text-white inline-block hover:text-[#B923E1] hover:scale-110 transition">Home</a>
                    <a href="#about" className="text-white inline-block hover:text-[#B923E1] hover:scale-110 transition">About</a>
                    <a href="#work" className="text-white inline-block hover:text-[#B923E1] hover:scale-110 transition">Work</a>
                    <Link to="/videos" className="text-white inline-block hover:text-[#DA7C25] hover:scale-110 transition">Videos</Link>

                </div>

                {/* Desktop Button */}
                <a href="#contact" className="hidden sm:block px-7 py-2 rounded-full bg-gradient-primary text-black hover:scale-105 transition border-1 border-transparent
                         hover:border-white">
                    Connect With Me
                </a>

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
                <div className="sm:hidden fixed top-0 right-0 w-1/2 h-screen bg-gray-800 z-50">

                    {/* Cross Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-3xl text-white "
                    >
                        <HiX className="text-4xl font-bold mr-6" />

                    </button>

                    {/* Menu Items */}
                    <div className="pt-20 px-14 space-y-4 text-xl text-white text-right">
                        <a href="#home" className="block w-fit ml-auto hover:text-[#B923E1] hover:scale-105 transition origin-center">
                            Home
                        </a>
                        <a href="#about" className="block w-fit ml-auto hover:text-[#B923E1] hover:scale-105 transition origin-center">
                            About
                        </a>
                        <a href="#work" className="block w-fit ml-auto hover:text-[#B923E1] hover:scale-105 transition origin-center">
                            Work
                        </a>
                        <a href="#contact" className="block w-fit ml-auto hover:text-[#B923E1] hover:scale-105 transition origin-center">
                            Contact
                        </a>
                        <Link to="/videos" className="block w-fit ml-auto hover:text-[#DA7C25] hover:scale-105 transition origin-center">
                            Videos
                        </Link>
                    </div>


                </div>
            )}
        </nav>
    );
}

export default Navbar;
