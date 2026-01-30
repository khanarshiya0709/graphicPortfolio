import { useState } from "react";
import { BiAlignMiddle } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";






function Navbar() {
    const [isOpen, setIsOpen] = useState(false); //menu close


    return (
        <nav className="bg-pink-500">
            <div className="h-16 flex items-center justify-between  px-12 max-w-5xl mx-auto">

                { /*logo*/}
                <div className="text-3xl text-red-300 font-bold px-4"
                    style={{ fontFamily: "'Pacifico', cursive" }}>
                    Amjad
                </div>

                {/*desktop button*/}
                <div className="hidden sm:flex gap-8">
                    <a href="" className="text-black  text-lg ">Home</a>
                    <a href="" className="text-black  text-lg">About</a>
                    <a href="" className="text-black text-lg">Work</a>
                    <a href="" className="text-black  text-lg">Videos</a>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="block sm:hidden px-4 text-3xl text-white ">
                    {isOpen ?
                        (<RxCross2 className="text-4xl font-bold stroke-1" />) :
                        (<BiAlignMiddle />)
                    }
                </button>

                <button className="hidden sm:block px-7 py-2 rounded-full bg-purple-500 text-white hover:scale-110 transition"> connect with Me</button>

            </div>

            {/*mobile button*/}
            <div
                className={`${isOpen ? "block" : "hidden"
                    } sm:hidden bg-gray-100 space-y-2 pb-4 text-right px-15 `}
            >
                <a href="" className="text-black pl-2 text-lg block pt-2 ">Home</a>
                <a href="" className="text-black  pl-2 text-lg block">About</a>
                <a href="" className="text-black  pl-2 text-lg block">Work</a>
                <a href="" className="text-black  pl-2 text-lg block">Contact</a>
            </div>

        </nav >

    )
}
export default Navbar;