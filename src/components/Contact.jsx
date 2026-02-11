import { IoIosMail } from "react-icons/io";
import { PiPhoneFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Contact() {
    return (
        <div className="bg-dark-soft ">

            {/* Heading */}
            <h2 id="contact" className="text-4xl sm:text-6xl font-bold text-center sm:text-center max-w-5xl mx-auto mb-10 text-white">
                Get in Touch
            </h2>

            {/* CONTENT */}
            <div className="max-w-5xl  mx-auto  flex flex-col sm:flex-row gap-14">

                {/* LEFT : LETS TALK */}
                <div className="sm:w-1/2 text-left px-8 sm:px-0 text-white">
                    <h1 className="text-gradient text-4xl font-bold mb-3">
                        Let's Talk
                    </h1>

                    <p className="mb-4">
                        I'm currently available to take on new projects, so feel free to
                        send me a message about anything you want me to work on.
                    </p>

                    <p className="flex items-center gap-2 mb-2">
                        <IoIosMail /> greatstackdev@gmail.com
                    </p>

                    <p className="flex items-center gap-2 mb-2">
                        <PiPhoneFill /> +91 87777777
                    </p>

                    <p className="flex items-center gap-2 mb-4">
                        <FaLocationDot /> India
                    </p>

                    <div className="flex gap-4 text-xl">
                        <GrInstagram />
                        <FaFacebook />
                        <FaTwitterSquare />
                    </div>
                </div>

                {/* RIGHT : FORM */}
                <div className="sm:w-1/2 px-8 sm:px-0 text-white">
                    <label className="block mb-2 font-medium">Your Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full border-2 border-black p-3 rounded-lg mb-4"
                    />

                    <label className="block mb-2 font-medium">Your Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"

                        className="w-full border-2 border-black p-3 rounded-lg mb-4"
                    />

                    <label className="block mb-2 font-medium">
                        Write your message here
                    </label>
                    <textarea
                        className="w-full border-2 border-black p-3 rounded-lg mb-6"
                        rows="4"
                        placeholder="Enter your message"

                    />

                    <button className="flex items-center gap-2 px-7 py-2 mb-4 rounded-full border-2 border-white bg-gradient-primary text-white hover:scale-105 transition">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
