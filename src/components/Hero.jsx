import { useEffect, useState } from "react";

function Hero() {

    const fullText = "5 Years of Experience";
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const typingSpeed = isDeleting ? 40 : 80;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                //this is for typing.
                setText(fullText.substring(0, index + 1));
                setIndex(index + 1);

                if (index + 1 === fullText.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }

            } else {
                //this is for Deleting;
                setText(fullText.substring(0, index - 1));
                setIndex(index - 1);

                if (index - 1 === 0) {
                    setIsDeleting(false);
                }

            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [index, isDeleting, fullText])

    return (
        <div id="home" className="bg-dark-soft px-6 py-10">
            <div className="max-w-5xl mx-auto flex flex-col  items-center justify-center gap-4 sm:gap-10">

                {/* image */}
                <img
                    src="/tae.jpg"
                    alt="profilePic"
                    className=" w-72 h-72 rounded-full object-cover mx-auto sm:mx-0
             border-2 border-transparent
             hover:border-white
             hover:shadow-2xl hover:shadow-black/40
             transition-all duration-200"/>




                {/* text + buttons */}
                <div className=" text-center mt-2 sm:mt-0">
                    <h1 className="text-3xl sm:text-5xl font-bold text-gradient">I'm Amjad Khan.</h1>
                    <h1 className="text-3xl sm:text-5xl font-bold mt-2 text-white">Graphic Designer</h1>
                    { /* <p className="text-lg mt-2">In Branding & Social media creatives</p>*/}
                    <p className="text-xl font-bold mt-2 text-white">
                        <span className="text-[#B923E1]">
                            {text.startsWith("5") ? "5" : ""}
                        </span>
                        <span>
                            {text.slice(1)}
                        </span>
                        <span className="animate-pulse">|</span>
                    </p>

                    {/* buttons under text */}
                    <div className="flex justify-center sm:justify-center space-x-6 mt-6">
                        <button
                            className="px-10 py-2 rounded-full bg-gray-100 text-black
                         border-2 border-transparent
                         hover:border-purple-600  transition"
                        >
                            Resume
                        </button>

                        <a
                            href="#contact"
                            className="px-10 py-2 rounded-full bg-gradient-primary text-white
                         border-2 border-transparent
                         hover:border-white hover:scale-110 transition"
                        >
                            Contact
                        </a>
                    </div>
                </div>


            </div>
        </div>
    );
}
export default Hero;
