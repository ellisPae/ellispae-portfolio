"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full border-t border-neutral-200/80 dark:border-white/10 mt-0 -mt-px bg-white/70 supports-[backdrop-filter]:backdrop-blur dark:bg-[#0b0f19] dark:supports-[backdrop-filter]:backdrop-blur-0"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        id="footer"
        className="max-w-5xl mx-auto px-6 py-8 md:py-10 flex flex-col items-center text-center gap-6"
      >
        <p
          id="footer-name"
          className="text-base md:text-lg font-semibold text-neutral-800 dark:text-slate-100 tracking-wide"
        >
          Ellis Pae
        </p>

        <nav
          id="footer-links"
          className="flex items-center gap-6 text-neutral-600 dark:text-slate-300"
        >
          <Link
            id="footer-github-link"
            href="https://github.com/ellisPae"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-all duration-200 hover:-translate-y-0.5 hover:text-neutral-900 dark:hover:text-white"
          >
            <Github className="h-6 w-6" />
          </Link>

          <Link
            id="footer-linkedin-link"
            href="https://www.linkedin.com/in/ellisPae/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-all duration-200 hover:-translate-y-0.5 hover:text-neutral-900 dark:hover:text-white"
          >
            <Linkedin className="h-6 w-6" />
          </Link>

          <Link
            id="footer-resume-link"
            href="/Ellis_Pae_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="transition-all duration-200 hover:-translate-y-0.5 hover:text-neutral-900 dark:hover:text-white"
          >
            <FileText className="h-6 w-6" />
          </Link>

          <Link
            id="footer-email-link"
            href="mailto:ellis.h.pae@gmail.com"
            aria-label="Email"
            className="transition-all duration-200 hover:-translate-y-0.5 hover:text-neutral-900 dark:hover:text-white"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-neutral-500 dark:text-slate-500">
          © {year} Ellis Pae
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
