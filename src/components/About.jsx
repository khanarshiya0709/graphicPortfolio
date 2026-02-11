function About() {
    return (
        <div className="bg-dark-soft">

            {/* Heading */}
            <h1 id="about" className="text-left sm:text-center pl-8 py-4 text-2xl font-bold text-white text-4xl sm:text-6xl">
                About Me
            </h1>

            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start justify-start gap-12">

                {/* IMAGE */}
                <img
                    src="/tae2.jpg"
                    alt="Graphic designer portrait"
                    className="hidden sm:block w-[320px] h-[400px] rounded-xl object-cover
                     border-2 border-transparent
                     hover:border-white
                     hover:shadow-2xl hover:shadow-black/40
                     transition-all duration-200"
                />

                {/* TEXT + SKILLS */}
                <div className="text-left mt-6 sm:mt-0 max-w-xl">

                    <p className="text-lg text-white pl-6 sm:pl-2">
                        I am a creative graphic designer with strong experience in branding,
                        social media creatives, and visual storytelling. I love transforming
                        ideas into clean, impactful designs that communicate clearly and
                        beautifully.
                        ideas into clean, impactful designs that communicate clearly and
                        beautifully.

                    </p>

                    {/* SKILLS */}
                    <div className="mt-6 space-y-4 px-6 text-white">



                        {/*  Adobe Photoshop */}
                        <div className="hover:scale-105 transition">
                            <div className="flex justify-between items-center text-sm font-medium pb-1">
                                <span>Adobe Photoshop</span>
                                <span>38%</span>
                            </div>
                            <div className="h-3 bg-gray-200 rounded-full">
                                <div className="h-3 bg-gradient-primary rounded-full w-[38%]"></div>
                            </div>
                        </div>



                        {/* Adobe Illustrator */}
                        <div className="hover:scale-105 transition">
                            <div className="flex justify-between items-center text-sm font-medium pb-1">
                                <span>Illustrator</span>
                                <span>85%</span>
                            </div>
                            <div className="h-3 bg-gray-200 rounded-full">
                                <div className="h-3 bg-gradient-primary rounded-full w-[85%]"></div>
                            </div>
                        </div>

                        {/* CoralDraw */}
                        <div className="hover:scale-105 transition">
                            <div className="flex justify-between items-center text-sm font-medium pb-1">
                                <span>CoralDraw</span>
                                <span>67%</span>
                            </div>
                            <div className="h-3 bg-gray-200 rounded-full">
                                <div className="h-3 bg-gradient-primary rounded-full w-[67%]"></div>
                            </div>
                        </div>

                        {/* Canva */}
                        <div className="hover:scale-105 transition">
                            <div className="flex justify-between items-center text-sm font-medium pb-1">
                                <span>Canva</span>
                                <span>95%</span>
                            </div>
                            <div className="h-3 bg-gray-200 rounded-full">
                                <div className="h-3 bg-gradient-primary rounded-full w-[95%]"></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
