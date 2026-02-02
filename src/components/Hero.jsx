function Hero() {
    return (
        <div className="bg-[#b7d3f4] px-6 py-12">
            <div className="max-w-5xl mx-auto flex flex-col  items-center justify-center gap-4 sm:gap-10">

                {/* image */}
                <img
                    src="/tae.jpg"
                    alt="profilePic"
                    className=" w-72 h-72 rounded-full object-cover mx-auto sm:mx-0
             border-2 border-transparent
             hover:border-purple-600
             hover:shadow-2xl hover:shadow-black/40
             transition-all duration-200"/>




                {/* text + buttons */}
                <div className=" text-center mt-6 sm:mt-0">
                    <h1 className="text-3xl font-bold">I'm Amjad Khan.</h1>
                    <h1 className="text-3xl font-bold mt-2">Graphic Designer</h1>
                    <p className="text-lg mt-2">In Branding & Social media creatives</p>
                    <p className="text-lg font-bold mt-2">
                        <span className="text-pink-500"> 5</span>  Years Of Experience
                    </p>

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


            </div>
        </div>
    );
}
export default Hero;
