"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full border-t border-neutral-200/80 mt-16 md:mt-24"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        id="footer"
        className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-6"
      >
        {/* Name */}
        <p className="text-base md:text-lg font-semibold text-neutral-800 tracking-wide">
          Ellis Pae
        </p>

        {/* Links */}
        <nav className="flex items-center gap-6 text-neutral-600">
          <Link
            href="https://github.com/ellisPae"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-neutral-900 transition-colors transition-transform hover:-translate-y-0.5"
          >
            <Github className="h-6 w-6" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/ellisPae/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-neutral-900 transition-colors transition-transform hover:-translate-y-0.5"
          >
            <Linkedin className="h-6 w-6" />
          </Link>

          <Link
            href="/Ellis_Pae_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="hover:text-neutral-900 transition-colors transition-transform hover:-translate-y-0.5"
          >
            <FileText className="h-6 w-6" />
          </Link>

          <Link
            href="mailto:ellis.h.pae@gmail.com"
            aria-label="Email"
            className="hover:text-neutral-900 transition-colors transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-neutral-500">© {year} Ellis Pae</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
