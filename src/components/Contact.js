"use client";
import React, { useState } from "react";

const DEFAULT_MESSAGE = "Hello, I'd like to know more about your programs."; // Replace with your message
const PHONE_NO = "9927630362";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const url = `https://api.whtsapp.com/send?phone=${PHONE_NO}&text=${encodeURIComponent(
        message || DEFAULT_MESSAGE
      )}`;
      window.open(url, "_blank");
      setStatus("success");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  }

  return (
    <section className="py-20" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Contact Us
        </h2>
        <div className="max-w-lg mx-auto">
          {status === "success" ? (
            <p className="text-green-600 mb-4 text-center">
              Thank you for your message! We will be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-400 p-2 rounded-lg"
                ></textarea>
              </div>
              <div className="text-center">
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
