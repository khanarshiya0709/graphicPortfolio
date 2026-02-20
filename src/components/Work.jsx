

import { useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";




function Work() {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        "/project1.jpg",
        "/project2.jpg",
        "/project3.jpg",
        "/project4.jpg",
        "/project5.jpg",

    ];

    const handleScroll = () => {
        const container = containerRef.current;
        const center = container.scrollLeft + container.offsetWidth / 2;

        let closestIndex = 0;
        let minDistance = Infinity;

        Array.from(container.children).forEach((child, index) => {
            const imgCenter = child.offsetLeft + child.offsetWidth / 2;
            const distance = Math.abs(center - imgCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        setActiveIndex(closestIndex);
    };

    return (
        <div className="bg-dark-soft py-6">
            <h1 id="work" className="text-left sm:text-center pl-8 py-4 text-4xl sm:text-6xl font-bold my-2 text-white">
                My Work
            </h1>

            <div className="max-w-5xl mx-auto px-6 sm:px-0">
                <div
                    ref={containerRef}
                    onScroll={handleScroll}
                    className="bg-dark flex rounded-xl overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="project"
                            className={`w-72 h-[400px] object-cover  my-6 rounded-3xl
                          flex-shrink-0 snap-center 
                          transition-transform duration-300
                          ${activeIndex === index
                                    ? "scale-100 blur-0"
                                    : "scale-90 blur-[2px]"
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="flex justify-center my-6">
                <Link
                    to="/works"
                    className="inline-flex items-center gap-2 px-7 py-2 rounded-full bg-gradient-primary text-white hover:scale-95 transition border-2 border-black"
                >
                    Show More <FaArrowRightLong />
                </Link>
            </div>

        </div>
    );
}

export default Work;

