import { useState } from "react";
import { BiAlignMiddle } from "react-icons/bi";



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="bg-pink-500">
            <div className="h-16 items-center flex justify-between px-20">

                { /*logo*/}
                <div className="text-3xl text-red-300 font-bold px-4"
                    style={{ fontFamily: "'Pacifico', cursive" }}>
                    Amjad
                </div>

                {/*desktop button*/}
                <div className="hidden sm:block">
                    <a href="" className="text-black px-4 text-lg ">Home</a>
                    <a href="" className="text-black px-4 text-lg">About</a>
                    <a href="" className="text-black px-4 text-lg">Work</a>
                    <a href="" className="text-black px-4 text-lg">Contact</a>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="block sm:hidden px-4 text-3xl text-white"> <BiAlignMiddle /></button>
            </div>

            {/*mobile button*/}
            <div
                className={`${isOpen ? "block" : "hidden"
                    } sm:hidden bg-gray-100 space-y-2 pb-4`}
            >
                <a href="" className="text-black px-4 text-lg block pt-2 ">Home</a>
                <a href="" className="text-black px-4 text-lg block">About</a>
                <a href="" className="text-black px-4 text-lg block">Work</a>
                <a href="" className="text-black px-4 text-lg block">Contact</a>
            </div>

        </nav >

    )
}
export default Navbar;