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
        <div className="bg-dark-soft min-h-screen px-6 py-10">

            <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-primary text-black hover:scale-105 transition mb-8"
            >
                <FaArrowLeftLong />
                Back to Home
            </Link>

            <h1 className="text-4xl font-bold text-white mb-10">
                My Videos
            </h1>

            {/* Auto Responsive Grid */}
            <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] max-w-6xl mx-auto">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-2xl p-3 shadow-lg hover:shadow-purple-500/30 transition"
                    >
                        <video
                            src={video}
                            controls
                            className="rounded-xl w-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Videos;
