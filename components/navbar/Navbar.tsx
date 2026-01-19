"use client";

import Link from "next/link";
import { MouseEvent, useEffect, useMemo, useRef, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const NAV_OFFSET_PX = 80;

const THEME_STORAGE_KEY = "theme";

function applyTheme(next: "light" | "dark") {
  const root = document.documentElement;
  if (next === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const [themeAnimating, setThemeAnimating] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [beyondCodeDropdownOpen, setBeyondCodeDropdownOpen] = useState(false);

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

  const beyondCodeSubItems: NavItem[] = useMemo(
    () => [
      { label: "Golf", href: "#beyond-code" },
      { label: "Music", href: "#beyond-code-music" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    setMounted(true);
  }, []);

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

    const computed = window.getComputedStyle(target);
    const scrollMarginTop =
      parseFloat(computed.scrollMarginTop || "0") || NAV_OFFSET_PX;

    const main = document.querySelector("main") as HTMLElement | null;
    const prevSnapType = main?.style.scrollSnapType;

    if (main) main.style.scrollSnapType = "none";

    const top =
      target.getBoundingClientRect().top + window.scrollY - scrollMarginTop;

    window.scrollTo({ top, behavior: "smooth" });

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

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setThemeAnimating(true);
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);

    window.setTimeout(() => setThemeAnimating(false), 700);
  };

  return (
    <nav
      id="navbar"
      className={
        "fixed top-0 left-0 w-full z-50 rounded-b-2xl " +
        "border-b border-gray-200 dark:border-neutral-800 " +
        (scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] " +
            "dark:bg-neutral-950/95 dark:backdrop-blur-xl dark:shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          : "bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] " +
            "dark:bg-neutral-950")
      }
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <Link
          id="nav-home"
          href="#"
          onClick={handleLogoClick}
          className="flex items-center"
        >
          <span className="text-xl font-semibold text-gray-950 dark:text-neutral-50 tracking-tight">
            Ellis Pae
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 font-semibold text-[0.95rem]">
          {navItems.map((item) => {
            const isBeyondCode = item.label === "Beyond Code";

            return isBeyondCode ? (
              <div key={item.href} className="relative group">
                <button
                  id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() =>
                    setBeyondCodeDropdownOpen(!beyondCodeDropdownOpen)
                  }
                  className="text-gray-700 dark:text-neutral-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 dark:focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 rounded"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 dark:bg-indigo-400 rounded-full transition-all duration-300 group-hover:w-full" />
                </button>

                <div className="absolute left-0 mt-2 w-32 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-gray-200 dark:border-neutral-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  {beyondCodeSubItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      id={`nav-${subItem.label.toLowerCase()}`}
                      href={subItem.href}
                      onClick={handleNavClick(subItem.href, () =>
                        setBeyondCodeDropdownOpen(false)
                      )}
                      className="block px-4 py-2.5 text-gray-700 dark:text-neutral-200 first:rounded-t-lg last:rounded-b-lg transition-all duration-150 hover:bg-blue-50 dark:hover:bg-neutral-800/60 hover:text-blue-600 dark:hover:text-indigo-300 relative hover:scale-105 hover:pl-5 origin-left"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                key={item.href}
                href={item.href}
                onClick={handleNavClick(item.href)}
                className="text-gray-700 dark:text-neutral-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 dark:focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 rounded"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 dark:bg-indigo-400 rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
          <button
            id="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="group ml-2 relative inline-flex items-center justify-center h-9 w-9
           text-gray-700 dark:text-neutral-200
           hover:text-gray-900 dark:hover:text-white
           active:scale-95
           transition-all duration-200
           hover:rotate-6 hover:scale-[1.08]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 via-sky-500/5 to-purple-500/10 blur-sm -translate-x-1/4 group-hover:translate-x-1/4 transition-transform duration-700" />
            </span>
            <span
              className="relative inline-flex items-center justify-center transition-transform duration-300
                 group-hover:scale-[1.15]"
            >
              <span
                className={
                  "theme-earth-emoji " + (themeAnimating ? "is-animating" : "")
                }
                aria-hidden="true"
              >
                🌎
              </span>
              {mounted ? (
                theme === "dark" ? (
                  <span className="text-sm">🌙</span>
                ) : (
                  <span className="text-sm">☀️</span>
                )
              ) : (
                <span className="text-sm opacity-0">☀️</span>
              )}
            </span>
          </button>
        </div>

        <button
          id="mobile-menu-toggle"
          ref={buttonRef}
          type="button"
          className="md:hidden text-gray-900 dark:text-neutral-100 rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 dark:focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950"
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
          className="md:hidden bg-white/95 dark:bg-neutral-950/90 backdrop-blur-xl border-t border-gray-200 dark:border-neutral-800 shadow-xl"
        >
          <div className="flex flex-col items-center py-5 space-y-5 font-medium">
            <button
              id="theme-toggle-mobile"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              className="group relative inline-flex items-center justify-center h-10 w-10
           text-gray-700 dark:text-neutral-200
           hover:text-gray-900 dark:hover:text-white
           active:scale-95
           transition-all duration-200
           hover:rotate-6 hover:scale-[1.08]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 via-sky-500/5 to-purple-500/10 blur-sm -translate-x-1/4 group-hover:translate-x-1/4 transition-transform duration-700" />
              </span>
              <span
                className="relative inline-flex items-center justify-center transition-transform duration-300
                 group-hover:scale-[1.15]"
              >
                <span
                  className={
                    "theme-earth-emoji " +
                    (themeAnimating ? "is-animating" : "")
                  }
                  aria-hidden="true"
                >
                  🌍
                </span>
                {mounted ? (
                  theme === "dark" ? (
                    <span className="text-sm">🌙</span>
                  ) : (
                    <span className="text-sm">☀️</span>
                  )
                ) : (
                  <span className="text-sm opacity-0">☀️</span>
                )}
              </span>
            </button>
            {navItems.map((item) => {
              const isBeyondCode = item.label === "Beyond Code";

              return isBeyondCode ? (
                <div
                  key={item.href}
                  className="w-full flex flex-col items-center"
                >
                  <button
                    id={`mobile-nav-${item.label
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    onClick={() =>
                      setBeyondCodeDropdownOpen(!beyondCodeDropdownOpen)
                    }
                    className="text-gray-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-indigo-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/30 dark:focus-visible:ring-indigo-300/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 rounded px-2 py-1"
                  >
                    {item.label}
                  </button>

                  {beyondCodeDropdownOpen && (
                    <div className="w-full flex flex-col items-center gap-2 mt-2 pt-2 border-t border-gray-200 dark:border-neutral-700">
                      {beyondCodeSubItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          id={`mobile-nav-${subItem.label.toLowerCase()}`}
                          href={subItem.href}
                          onClick={handleNavClick(subItem.href, () => {
                            setOpen(false);
                            setBeyondCodeDropdownOpen(false);
                          })}
                          className="text-gray-700 dark:text-neutral-300 transition-all duration-150 text-sm px-3 py-2 rounded hover:bg-blue-50 dark:hover:bg-neutral-800/60 hover:text-blue-600 dark:hover:text-indigo-300 hover:scale-105 hover:pl-4 origin-left"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  id={`mobile-nav-${item.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick(item.href, () => setOpen(false))}
                  className="text-gray-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-indigo-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/30 dark:focus-visible:ring-indigo-300/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 rounded px-2 py-1"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
