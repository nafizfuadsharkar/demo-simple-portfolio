import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill out all fields before sending!",
      });
      return;
    }

    Swal.fire({
      title: "Thank You!",
      text: "Your message has been sent successfully!",
      icon: "success",
    });

    setFormData({ name: "", email: "", message: "" });
    setSent(true);
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: "Email", value: "sharkarnariz@gmail.com" },
    { icon: <FaPhone />, label: "Phone", value: "01875767158" },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0b0613] rounded-xl"
    >
      {/* Floating Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 opacity-20 rounded-full filter blur-3xl animate-blob"></div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg md:text-xl text-center md:text-left">
          Interested in collaborating or have a project idea? Reach out directly
          or send a message using the form below.
        </p>

        {/* Responsive Grid: Info left, Form right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="flex flex-col items-center p-6 rounded-3xl bg-white/10 dark:bg-[#1c0c3c]/40 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg transition-transform"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white text-2xl mb-4 shadow-md">
                  {info.icon}
                </div>
                <p className="text-gray-500 dark:text-gray-300 text-sm mb-1">
                  {info.label}
                </p>
                <p className="font-semibold text-gray-900 dark:text-white text-lg">
                  {info.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            {!sent ? (
              <form
                onSubmit={handleSendMessage}
                className="flex flex-col gap-4"
              >
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="p-4 rounded-xl bg-white/5 border border-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Your Name"
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="p-4 rounded-xl bg-white/5 border border-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Your Email"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="p-4 rounded-xl bg-white/5 border border-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                  rows={6}
                  placeholder="Message"
                ></textarea>

                <div className="flex flex-col md:flex-row justify-start gap-4 mt-4">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow hover:shadow-lg transition"
                  >
                    Send Message
                  </button>
                  <a
                    href="mailto:sharkarnariz@gmail.com"
                    className="px-6 py-3 rounded-xl border border-indigo-500 text-indigo-500 hover:bg-indigo-500/10 transition"
                  >
                    Email Me
                  </a>
                  <a
                    href="tel:01875767158"
                    className="px-6 py-3 rounded-xl border border-indigo-500 text-indigo-500 hover:bg-indigo-500/10 transition"
                  >
                    Call Me
                  </a>
                </div>
              </form>
            ) : (
              <motion.div
                className="p-4 rounded-2xl bg-green-900/20 border border-green-800 max-w-md mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-green-900 font-medium">
                  Thanks! Your message has been received.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Blob animation keyframes */}
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}
      </style>
    </section>
  );
}
