function About() {
    return (
        <div className="bg-white">

            {/* Heading */}
            <h1 className="text-left sm:text-center pl-8 py-4 text-2xl font-bold ">
                About Me
            </h1>

            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start justify-start gap-12">

                {/* IMAGE */}
                <img
                    src="/tae2.jpg"
                    alt="Graphic designer portrait"
                    className="hidden sm:block w-[320px] h-[400px] rounded-xl object-cover
                     border-2 border-transparent
                     hover:border-purple-600
                     hover:shadow-2xl hover:shadow-black/40
                     transition-all duration-200"
                />

                {/* TEXT + SKILLS */}
                <div className="text-center sm:text-left mt-6 sm:mt-0 max-w-xl">

                    <p className="text-lg text-gray-700">
                        I am a creative graphic designer with strong experience in branding,
                        social media creatives, and visual storytelling. I love transforming
                        ideas into clean, impactful designs that communicate clearly and
                        beautifully.
                        ideas into clean, impactful designs that communicate clearly and
                        beautifully.

                    </p>

                    {/* SKILLS */}
                    <div className="mt-6 space-y-4 ">

                        {/* Photoshop
                        <div>
                            <div className="flex justify-between items-center text-sm font-medium">
                                <span>Photoshop</span>
                                <span>90%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full">
                                <div className="h-2 bg-pink-500 rounded-full w-[90%]"></div>
                            </div>
                        </div> */}

                        {/* Photoshop */}
                        <div className="flex items-center hover:scale-110 transition">
                            {/* skill name */}
                            <span className="w-28 text-sm font-medium">Photoshop</span>

                            {/* progress bar */}
                            {/* <div className="flex-1 h-3 bg-gray-200 rounded-full w-[90%]"> */}
                            <div className="h-3 bg-pink-500 rounded-full w-[80%]"></div>
                            {/* </div> */}

                            {/* percentage */}
                            {/* <span className="w-10 text-sm font-medium text-right">90%</span> */}
                        </div>


                        {/* Illustrator */}
                        <div className="hover:scale-110 transition">
                            <div className="flex justify-between items-center text-sm font-medium">
                                <span>Illustrator</span>
                                <span>85%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full">
                                <div className="h-2 bg-pink-500 rounded-full w-[85%]"></div>
                            </div>
                        </div>

                        {/* Branding */}
                        <div>
                            <div className="flex justify-between items-center text-sm font-medium">
                                <span>Branding</span>
                                <span>80%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full">
                                <div className="h-2 bg-pink-500 rounded-full w-[80%]"></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
