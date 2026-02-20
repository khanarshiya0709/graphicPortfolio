import { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { PiPhoneFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "bf51e4b3-f4ca-41a2-b9df-3f4479a0c5e2");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully ✅");
            event.target.reset();

            // 🔥 Auto hide after 3 seconds
            setTimeout(() => {
                setResult("");
            }, 1000);

        } else {
            setResult("Something went wrong ❌");

            setTimeout(() => {
                setResult("");
            }, 3000);
        }
    };

    return (
        <div className="bg-dark-soft relative">

            {/* 🔥 Toast Message */}
            {result && (
                <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50">
                    {result}
                </div>
            )}

            <h2 id="contact" className="text-4xl sm:text-6xl font-bold text-center max-w-5xl mx-auto mb-10 text-white">
                Get in Touch
            </h2>

            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-14">

                {/* LEFT SIDE */}
                <div className="sm:w-1/2 px-8 sm:px-0 text-white">
                    <h1 className="text-gradient text-4xl font-bold mb-3">
                        Let's Talk
                    </h1>

                    <p className="mb-4">
                        I'm currently available to take on new projects.
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

                {/* FORM */}
                <form onSubmit={onSubmit} className="sm:w-1/2 px-8 sm:px-0 text-white">

                    <label className="block mb-2 font-medium">Your Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        required
                        className="w-full border-2 border-black p-3 rounded-lg mb-4 text-white"
                    />

                    <label className="block mb-2 font-medium">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="w-full border-2 border-black p-3 rounded-lg mb-4 text-white"
                    />

                    <label className="block mb-2 font-medium">
                        Write your message here
                    </label>
                    <textarea
                        name="message"
                        placeholder="Enter your message"
                        required
                        rows="4"
                        className="w-full border-2 border-black p-3 rounded-lg mb-6 text-white"
                    />

                    <button className="px-7 py-2 mb-4 rounded-full border-2 border-white bg-gradient-primary text-white hover:scale-105 transition">
                        Send Message
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Contact;
