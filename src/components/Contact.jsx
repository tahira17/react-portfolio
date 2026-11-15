import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiCheck, HiOutlineClipboardCopy } from "react-icons/hi";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"
  const email = "tahiranawaz12345@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    // Paste your free key from web3forms.com below:
    formData.append("access_key", "bbb8deef-5fe8-46bb-8541-cbe5133afc17");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset(); // Clears all form fields immediately
        setTimeout(() => setStatus(""), 4000); // Hides message after 4s
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen py-20 bg-footer_pattern bg-bottom bg-no-repeat flex justify-center items-center p-4 text-gray-900"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        {/* Header */}
        <div data-aos="zoom-in" className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#7162d0]">
            Contact
          </p>
          <p className="py-4 text-lg font-medium">
            I’m currently open to remote Frontend Engineer roles (PKT / UTC+5).
            Feel free to reach out directly or send a message below.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Direct Contact Cards */}
          <div data-aos="zoom-in" className="flex flex-col space-y-4">
            <a
              href="https://www.linkedin.com/in/tahira-nawaz-6a0792130/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-6 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 duration-300 shadow-md"
            >
              <span>Connect on LinkedIn</span>
              <FaLinkedin size={26} />
            </a>

            <a
              href="https://github.com/tahira17"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-6 py-4 rounded-lg bg-[#333333] text-white font-semibold hover:bg-black duration-300 shadow-md"
            >
              <span>Explore My GitHub</span>
              <FaGithub size={26} />
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center justify-between px-6 py-4 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 duration-300 shadow-md"
            >
              <span>Send an Email</span>
              <HiOutlineMail size={26} />
            </a>

            {/* One-Click Copy Email Box */}
            <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-300">
              <span className="text-sm sm:text-base font-medium truncate">
                {email}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold rounded bg-[#7162d0] text-white hover:opacity-90 duration-200 cursor-pointer"
              >
                {copied ? (
                  <>
                    <HiCheck size={18} /> Copied
                  </>
                ) : (
                  <>
                    <HiOutlineClipboardCopy size={18} /> Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Direct Message Form */}
          <form
            onSubmit={handleSubmit}
            data-aos="zoom-in"
            className="flex flex-col space-y-4 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none focus:border-[#7162d0]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none focus:border-[#7162d0]"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 rounded border border-gray-300 bg-white focus:outline-none focus:border-[#7162d0]"
            ></textarea>
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3 rounded-lg bg-[#7162d0] text-white font-bold hover:opacity-90 duration-300 cursor-pointer disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Let's Collaborate"}
            </button>

            {status === "success" && (
              <p className="text-green-600 font-semibold text-sm text-center">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-semibold text-sm text-center">
                Something went wrong. Please email me directly or check your
                access key.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
