import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Videos() {
    const videos = [
        "/videoss/video1.mp4",
        "/videoss/video2.mp4",
        "/videoss/video3.mp4",
        "/videoss/video4.mp4",
        "/videoss/video5.mp4",
    ];

    return (
        <div className="bg-dark-soft  px-6 py-8">

            {/* Back Button */}
            <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full 
                bg-gradient-primary text-black hover:scale-105 
                transition mb-6"
            >
                <FaArrowLeftLong />
                Back to Home
            </Link>

            {/* Heading */}
            <h1 className="text-4xl font-bold text-white mb-6">
                My Videos
            </h1>

            {/* Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-auto ">

                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-2xl p-3 shadow-lg 
                        hover:shadow-purple-500/50 transition"
                    >

                        {/* Fixed Ratio Video Container */}
                        <div className="w-full aspect-[4/5] 
                        bg-black rounded-xl overflow-hidden">

                            <video
                                src={video}
                                controls
                                className="w-full h-full object-cover"
                            />

                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default Videos;
