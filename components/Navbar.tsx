"use client";

import Link from "next/link";
import { MouseEvent, useEffect, useMemo, useRef, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

// Fallback offset (used if we can't measure the fixed navbar height)
// 64px navbar + a bit of breathing room.
const NAV_OFFSET_PX = 80;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "About", href: "#about" },
      { label: "Beyond Code", href: "#beyond-code" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null;
      const clickedPanel = !!(
        panelRef.current &&
        target &&
        panelRef.current.contains(target)
      );
      const clickedButton = !!(
        buttonRef.current &&
        target &&
        buttonRef.current.contains(target)
      );
      if (!clickedPanel && !clickedButton) setOpen(false);
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Prevent background scroll while mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const scrollToHash = (href: string) => {
    if (!href.startsWith("#")) return;

    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;

    // Use the section’s CSS scroll-margin-top (Tailwind: scroll-mt-*) so each
    // anchor can land correctly under the fixed navbar.
    const computed = window.getComputedStyle(target);
    const scrollMarginTop =
      parseFloat(computed.scrollMarginTop || "0") || NAV_OFFSET_PX;

    // Temporarily disable snap so it doesn't fight the scroll.
    const main = document.querySelector("main") as HTMLElement | null;
    const prevSnapType = main?.style.scrollSnapType;

    if (main) main.style.scrollSnapType = "none";

    const top =
      target.getBoundingClientRect().top + window.scrollY - scrollMarginTop;

    window.scrollTo({ top, behavior: "smooth" });

    // Restore snap after the scroll finishes.
    window.setTimeout(() => {
      if (!main) return;
      if (prevSnapType) main.style.scrollSnapType = prevSnapType;
      else main.style.scrollSnapType = "";
    }, 650);
  };

  const handleNavClick =
    (href: string, closeMenu?: () => void) => (e: MouseEvent) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      closeMenu?.();
      scrollToHash(href);
    };

  const handleLogoClick = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={
        "fixed top-0 left-0 w-full z-50 border-b border-gray-200 rounded-b-2xl " +
        (scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
          : "bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]")
      }
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <Link href="#" onClick={handleLogoClick} className="flex items-center">
          <span className="text-xl font-semibold text-gray-950 tracking-tight">
            Ellis Pae
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-gray-600 font-semibold text-[0.95rem]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick(item.href)}
              className="hover:text-gray-900 transition-colors duration-200 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 focus-visible:ring-offset-2 rounded"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="md:hidden text-gray-900 rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 focus-visible:ring-offset-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl"
        >
          <div className="flex flex-col items-center py-5 space-y-5 text-gray-900 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick(item.href, () => setOpen(false))}
                className="hover:text-blue-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/30 focus-visible:ring-offset-2 rounded px-2 py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
