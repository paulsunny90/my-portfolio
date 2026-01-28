"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // <-- REPLACE THESE WITH YOUR EMAILJS KEYS -->
  const SERVICE_ID = "service_ixxompc";
  const TEMPLATE_ID = "template_2swh169";
  const PUBLIC_KEY = "5jG2PtP3DLUI4qa5K";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Try again.");
        setLoading(false);
      });
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
      className={`min-h-screen py-20 px-4 ${
        isDark
          ? "bg-gradient-to-b from-black via-neutral-950 to-black"
          : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-zinc-100 mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-zinc-400">
            Have a project or idea? Drop a message.
          </p>
        </div>

        {/* Email */}
        <div className="mb-12 flex justify-center">
          <a
            href="mailto:paulsunny87267@gmail.com"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-zinc-300 hover:text-blue-400"
          >
            <Mail className="w-5 h-5" />
            paulsunny87267@gmail.com
          </a>
        </div>

        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <textarea
                rows={5}
                placeholder="Your Message..."
                required
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl
                bg-neutral-800 border border-neutral-700 text-zinc-300
                hover:bg-neutral-700 hover:text-white transition"
              >
                <Send className="w-5 h-5" />
                {loading ? "Sending..." : "Send Message"}
              </button>
              {status && (
                <p className="text-sm text-center text-zinc-400">{status}</p>
              )}
            </form>

            <div className="space-y-8">
              <button
                onClick={handleDownloadResume}
                className="w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl
                bg-neutral-800 border border-neutral-700 text-zinc-300
                hover:bg-neutral-700 hover:text-white"
              >
                <FileText className="w-5 h-5" />
                Download Resume
              </button>

              <a
                href="https://www.linkedin.com/in/paul-sunny-/"
                target="_blank"
                className="block text-center px-6 py-4 rounded-xl
                bg-neutral-900 border border-neutral-700 text-zinc-300
                hover:bg-neutral-800 hover:text-white"
              >
                Connect on LinkedIn
              </a>

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
