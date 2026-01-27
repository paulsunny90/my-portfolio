"use client";
import React, { useState } from "react";
import {
  Mail,
  Download,
  Send,
  Github,
  Linkedin,
  FileText,
} from "lucide-react";


const Contact = () => {
  const [isDark] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Paul_Sunny_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="contact"
      className={`relative min-h-screen py-20 px-4 ${isDark
          ? "bg-gradient-to-b from-black via-neutral-950 to-black"
          : "bg-white"
        }`}
    >
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${isDark ? "text-zinc-100" : "text-zinc-900"
              }`}
          >
            Let&apos;s Connect
          </h1>
          <p
            className={`text-lg max-w-xl mx-auto ${isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
          >
            Have a project or idea? Drop a message or connect with me directly.
          </p>
        </div>

        {/* Email Card */}
        <div className="mb-12 flex justify-center">
          <a
            href="mailto:your.email@example.com"
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all hover:scale-105 ${isDark
                ? "bg-neutral-900 border-neutral-800 text-zinc-300 hover:text-blue-400"
                : "bg-white border-neutral-200"
              }`}
          >
            <Mail className="w-5 h-5" />
            <span>your.email@example.com</span>
          </a>
        </div>

        {/* Main Card */}
        <div
          className={`rounded-3xl border p-8 md:p-12 ${isDark
              ? "bg-neutral-900/50 border-neutral-800"
              : "bg-white border-neutral-200"
            }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                placeholder="Your Name"
                required
                className={`w-full px-4 py-3 rounded-xl ${isDark
                    ? "bg-neutral-950 border-neutral-800 text-white"
                    : "bg-neutral-50 border-neutral-300"
                  }`}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className={`w-full px-4 py-3 rounded-xl ${isDark
                    ? "bg-neutral-950 border-neutral-800 text-white"
                    : "bg-neutral-50 border-neutral-300"
                  }`}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <textarea
                rows={5}
                placeholder="Your Message..."
                required
                className={`w-full px-4 py-3 rounded-xl resize-none ${isDark
                    ? "bg-neutral-950 border-neutral-800 text-white"
                    : "bg-neutral-50 border-neutral-300"
                  }`}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl
  bg-neutral-800 border border-neutral-700 text-zinc-300
  hover:bg-neutral-700 hover:text-white
  transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

            </form>

            {/* Right Side */}
            <div className="space-y-8">
              {/* Resume */}
              <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/10">
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-blue-400" />
                  <button
                    onClick={handleDownloadResume}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl
  bg-neutral-800 border border-neutral-700 text-zinc-300
  hover:bg-neutral-700 hover:text-white
  transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </button>

                </div>
              </div>

              {/* Simple Connect Button */}
              <a
                href="https://www.linkedin.com/in/paul-sunny-/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-4 rounded-xl
  bg-neutral-900 border border-neutral-700 text-zinc-300
  hover:bg-neutral-800 hover:text-white
  transition-all duration-300"
              >
                Connect on LinkedIn
              </a>


              {/* Social */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/paulsunny90"
                  target="_blank"
                  className="p-3 rounded-xl border border-neutral-800 hover:bg-neutral-800"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/paul-sunny-/"
                  target="_blank"
                  className="p-3 rounded-xl border border-neutral-800 hover:bg-neutral-800"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
