"use client";
import React, { useState } from "react";

const DEFAULT_MESSAGE = "Hello, I'd like to know more about your programs.";
const PHONE_NO = "9354226271";
const cities = [
    {
        title: "Delhi",
    },
    {
        title: "Mumbai",
    },
    {
        title: "Rishikesh",
    },
    {
        title: "Dehradun",
    },
];

function CityDropdown({ setSelectedCity }) {
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return (
        <div className="flex items-center space-x-4 md:justify-center">
            <label htmlFor="city-dropdown" className="text-gray-900 font-bold text-lg">City:</label>
            <select id="city-dropdown" onChange={handleCityChange} className="border border-gray-500 rounded-lg px-4 py-2">
                <option value="">--Select a city--</option>
                {cities.map((city) => (
                    <option key={city.title} value={city.title}>
                        {city.title}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default function Contact() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        try {
            const url = `https://api.whatsapp.com/send?phone=${PHONE_NO}&text=${encodeURIComponent(
                message || DEFAULT_MESSAGE
            )}${selectedCity ? "%0A%0A" + cities.find(city => city.title === selectedCity).message : ""}`;
            window.open(url, "_blank");
            setStatus("success");
        } catch (e) {
            console.error(e);
            setStatus("error");
        }
    }

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <section className="py-20" data-aos="fade-up">
            <div className="container mx-auto px-2 md:px-0">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                    Join a Team
                </h2>

                <div className="max-w-lg mx-auto">
                    {status === "success" ? (
                        <p className="text-green-600 mb-4 text-center">
                            Thank you for your message! We will be in touch soon.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-wrap justify-center items-center">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
                                <CityDropdown setSelectedCity={setSelectedCity} />
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center border-b border-teal-500 py-2">
                                    <input
                                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                        type="text"
                                        placeholder="Personal message"
                                        aria-label="Personal message"
                                        value={message}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="text-center w-full mt-4">
                                <button
                                    type="submit"
                                    className="bg-gray-900 text-white rounded-lg px-6 py-2 hover:bg-gray-800 transition-colors"
                                >

                                    <i className="fab fa-whatsapp mr-4 text-lg"></i>
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                            {status === "error" && (
                                <p className="text-red-600 mt-4 text-center">
                                    An error occurred. Please try again later.
                                </p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
