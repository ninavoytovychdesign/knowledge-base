import React, { useState } from "react";

export default function Contacts() {
  const [message, setMessage] = useState("");

  return (
    <section className="flex justify-center items-center py-20 bg-black">
      <div className="w-[808px] bg-transparent rounded-2xl p-10">
        <h2 className="text-2xl font-semibold text-textPrimary text-center mb-4">
          Contacts
        </h2>
        <p className="text-textSecondary text-center mb-10">
          Do you have a question for me? Send me a message below, <br />
          and I will get back to you soon.
        </p>

        <form className="flex flex-col gap-6">
          <div>
            <label className="block text-sm text-[#4C4C4C] mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name..."
              className="w-full bg-transparent text-[#E6E6E6] placeholder-[#343434] placeholder:text-sm placeholder:font-normal rounded-xl px-4 py-3 focus:outline-none border border-[#343434] hover:border-[#555555] hover:bg-[#1B1B1B] transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm text-[#4C4C4C] mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email..."
              className="w-full bg-transparent text-[#E6E6E6] placeholder-[#343434] placeholder:text-sm placeholder:font-normal rounded-xl px-4 py-3 focus:outline-none border border-[#343434] hover:border-[#555555] hover:bg-[#1B1B1B] transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm text-[#4C4C4C] mb-2">Message</label>
            <textarea
              placeholder="Your message..."
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={1000}
              className="w-full bg-transparent text-[#E6E6E6] placeholder-[#343434] placeholder:text-sm placeholder:font-normal rounded-xl px-4 py-3 focus:outline-none border border-[#343434] hover:border-[#555555] hover:bg-[#1B1B1B] transition-all duration-300"
            />
            <div className="text-right text-sm text-[#777777] mt-1">
              {message.length}/1000
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full font-medium text-black bg-gradient-accent hover:opacity-90 transition"
          >
            Send a message →
          </button>
        </form>
      </div>
    </section>
  );
}