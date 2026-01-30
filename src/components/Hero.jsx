function Hero() {
    return (
        <div className="bg-[#b7d3f4] px-6 py-16">

            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-60">

                {/* text + buttons */}
                <div className="text-center sm:text-left">
                    <h1 className="text-3xl font-bold">I'm Amjad Khan.</h1>
                    <h1 className="text-3xl font-bold mt-2">Graphic Designer</h1>

                    {/* buttons under text */}
                    <div className="flex justify-center sm:justify-start space-x-6 mt-6">
                        <button
                            className="px-6 py-2 rounded-full bg-gray-100 text-black
                         border-2 border-transparent
                         hover:border-purple-600  transition"
                        >
                            Resume
                        </button>

                        <button
                            className="px-6 py-2 rounded-full bg-pink-500 text-white
                         border-2 border-transparent
                         hover:border-purple-600 hover:scale-110 transition"
                        >
                            Contact
                        </button>
                    </div>
                </div>

                {/* image */}
                <img
                    src="/tae.jpg"
                    alt="profilePic"
                    className="hidden sm:block w-72 h-72 rounded-full object-cover
             border-2 border-transparent
             hover:border-purple-600
             hover:shadow-2xl hover:shadow-black/40
             transition-all duration-200"/>

            </div>
        </div>
    );
}
export default Hero;
