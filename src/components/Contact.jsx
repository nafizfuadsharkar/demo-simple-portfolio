import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSendMessage = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Thank You!",
      text: "Your message has been sent successfully!",
      icon: "success",
    });
  };
  return (
    <section id="contact" className="py-12">
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Interested in collaborating? Please send a message. Contact form
          below:
        </p>
        {!sent ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="grid gap-3"
          >
            <input
              required
              className="p-3 rounded-md bg-white/5 border border-gray-800"
              placeholder="Your name"
            />
            <input
              required
              type="email"
              className="p-3 rounded-md bg-white/5 border border-gray-800"
              placeholder="Email"
            />
            <textarea
              required
              className="p-3 rounded-md bg-white/5 border border-gray-800"
              rows={5}
              placeholder="Message"
            ></textarea>
            <div className="flex gap-3">
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-brand-500 to-brand-700 border border-gray-700 dark:text-white"
              >
                Send Message
              </button>
              <a
                href="mailto:sharkarnafiz@gmail.com"
                className="px-4 py-2 rounded-md border border-gray-700"
              >
                Email me
              </a>
            </div>
          </form>
        ) : (
          <div className="p-4 rounded-md bg-green-900/20 border border-green-800">
            <p>Thanks, you message has received !</p>
          </div>
        )}
      </div>
    </section>
  );
}
