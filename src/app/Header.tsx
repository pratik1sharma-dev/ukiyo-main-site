"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Header() {
  const pathname = usePathname();
  const floating = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu automatically when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  return (
    <header
      className={
        floating
          ? "w-full absolute top-0 left-0 z-100 bg-transparent transition-all"
          : "w-full border-b border-[#b7c9c9] sticky top-0 z-100 shadow-sm"
      }
      style={floating ? { background: 'transparent', boxShadow: 'none' } : { background: 'linear-gradient(90deg, rgba(231,167,126,1) 0%, rgba(231,167,126,0.7) 30%, rgba(231,167,126,0.7) 100%)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
    >
      <nav
        className={
          floating
            ? "max-w-6xl mx-auto flex items-center justify-between px-4 py-3 bg-transparent"
            : "max-w-6xl mx-auto flex items-center justify-between px-4 py-3"
        }
        style={floating ? { background: 'rgba(0,0,0,0.0)' } : { background: 'transparent' }}
      >
        <Link href="/" className="flex items-center md:-ml-34">
          <Image
            src="/logo.png"
            alt="Ukiyo Habitat Logo"
            width={150}
            height={75}
            priority
            className="mr-2 w-auto h-16 sm:h-20 md:h-24 object-contain"
          />
          <span className="sr-only">Ukiyo Habitat</span>
        </Link>
        {/* Desktop Nav */}
        <ul className={(floating ? "flex gap-6 font-medium text-white font-inter" : "flex gap-6 font-medium text-white font-inter") + " hidden sm:flex"} style={{ fontSize: '1.2rem' }}>
          <li><Link href="/projects" className="hover:underline">Our Work</Link></li>
          <li><Link href="/about" className="hover:underline">About Us</Link></li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li><Link href="/think-tank" className="hover:underline">Think Tank</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        {/* Hamburger Icon for Mobile */}
        <button
          className={`sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-[#e7a77e] ${floating ? 'text-white' : 'text-white'} z-70`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block w-6 h-0.5 bg-current mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      {/* Mobile Menu Overlay (portal) */}
      {menuOpen && typeof window !== 'undefined' && createPortal(
        <div className="fixed inset-0 bg-black/70 z-[999] flex flex-col items-center justify-center sm:hidden transition-all">
          <ul className="flex flex-col gap-8 font-semibold text-white font-inter" style={{ fontSize: '1.2rem' }}>
            <li><Link href="/projects" onClick={() => setMenuOpen(false)}>Our work</Link></li>
            <li><Link href="/think-tank" onClick={() => setMenuOpen(false)}>Think Tank</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>,
        document.body
      )}
    </header>
  );
} 