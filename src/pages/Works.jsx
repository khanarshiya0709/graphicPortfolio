import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import Projects from "../data/ProjectsData";

function Works() {

    const categories = [
        "All",
        "Social Media",
        "Logo",
        "Brand Identity",
        "Packaging",
        "Stationery",
        "Brochure",
        "Banner",
        "Poster Design",
        "Hoarding Design"
    ];

    const [selected, setSelected] = useState("All");
    const [previewImage, setPreviewImage] = useState(null);

    const filteredProjects =
        selected === "All"
            ? Projects
            : Projects.filter((p) => p.category === selected);

    return (
        <div className="bg-dark-soft min-h-screen text-white">
            <div className="max-w-6xl mx-auto px-6 pt-4 ">

                {/* NAV */}
                <div className="bg-dark flex items-center rounded-xl py-4 px-4 gap-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <Link
                        to="/"
                        className="text-4xl font-bold text-white  "
                    >
                        <MdHome className='bg-gradient-primary rounded-lg' />
                    </Link>

                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelected(cat)}
                            className={`text-lg sm:text-2xl pb-2 transition ${selected === cat
                                ? "text-gradient gradient-underline"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            setPreviewImage={setPreviewImage}
                        />
                    ))}
                </div>

            </div>

            {/* IMAGE PREVIEW MODAL */}
            {previewImage && (
                <div
                    className="fixed inset-0 bg-black/95 flex items-center justify-center  "
                    onClick={() => setPreviewImage(null)}
                >
                    <img
                        src={previewImage}
                        alt=""
                        // onClick={(e) => e.stopPropagation()}
                        className="max-w-[95vw] max-h-[90vh] object-contain rounded-2xl"
                    />
                </div>
            )}
        </div>
    );
}

function ProjectCard({ project, setPreviewImage }) {

    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    const handleScroll = () => {
        const container = containerRef.current;
        const scrollLeft = container.scrollLeft;
        const width = container.offsetWidth;
        const index = Math.round(scrollLeft / width);
        setActiveIndex(index);
    };

    return (
        <div className="bg-gray-800 rounded-2xl p-4">

            {/* SLIDER */}
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-xl"
            >
                {project.images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt=""
                        onClick={() => setPreviewImage(img)}
                        className="w-full h-60 object-cover flex-shrink-0 snap-center cursor-pointer"
                    />
                ))}
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-3">
                {project.images.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 w-2 rounded-full transition ${activeIndex === i
                            ? "bg-white"
                            : "bg-gray-500"
                            }`}
                    />
                ))}
            </div>

            <h3 className="text-lg font-semibold mt-4">
                {project.title}
            </h3>

        </div>
    );
}

export default Works;
