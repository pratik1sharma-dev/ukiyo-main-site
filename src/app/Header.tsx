"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu automatically when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
      style={{ 
        background: 'transparent', 
        boxShadow: 'none',
        marginTop: scrolled ? '0.5rem' : '1.5rem',
        marginLeft: '1rem',
        marginRight: '1rem'
      }}
    >
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3 rounded-full border transition-all duration-300 ${
          scrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-xl border-gray-200 py-2' 
            : 'bg-white/95 backdrop-blur-sm shadow-lg border-gray-100'
        }`}
        style={{ 
          backdropFilter: scrolled ? 'blur(15px)' : 'blur(10px)',
          WebkitBackdropFilter: scrolled ? 'blur(15px)' : 'blur(10px)',
          boxShadow: scrolled 
            ? '0 8px 32px 0 rgba(0, 0, 0, 0.15), 0 2px 8px 0 rgba(0, 0, 0, 0.1)' 
            : '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
          transform: scrolled ? 'scale(0.98)' : 'scale(1)'
        }}
      >
        <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
          <Image
            src="/logo.png"
            alt="Ukiyo Habitat Logo"
            width={100}
            height={50}
            priority
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-12'
            }`}
          />
          <span className="sr-only">Ukiyo Habitat</span>
        </Link>
        {/* Desktop Nav */}
        <ul className={`flex gap-8 font-medium text-[#232323] font-inter hidden sm:flex transition-all duration-300 ${
          scrolled ? 'gap-6' : 'gap-8'
        }`} style={{ 
          fontSize: scrolled ? '0.9rem' : '0.95rem', 
          letterSpacing: '0.3px' 
        }}>
          <li><Link href="/projects" className="hover:text-[#e7a77e] transition-all duration-300 font-semibold relative group hover:scale-105">Our Work
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e7a77e] transition-all duration-300 group-hover:w-full"></span>
          </Link></li>
          <li><Link href="/about" className="hover:text-[#e7a77e] transition-all duration-300 font-semibold relative group hover:scale-105">About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e7a77e] transition-all duration-300 group-hover:w-full"></span>
          </Link></li>
          <li><Link href="/services" className="hover:text-[#e7a77e] transition-all duration-300 font-semibold relative group hover:scale-105">Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e7a77e] transition-all duration-300 group-hover:w-full"></span>
          </Link></li>
          <li><Link href="/think-tank" className="hover:text-[#e7a77e] transition-all duration-300 font-semibold relative group hover:scale-105">Think Tank
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e7a77e] transition-all duration-300 group-hover:w-full"></span>
          </Link></li>
          <li><Link href="/contact" className="hover:text-[#e7a77e] transition-all duration-300 font-semibold relative group hover:scale-105">Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e7a77e] transition-all duration-300 group-hover:w-full"></span>
          </Link></li>
        </ul>
        {/* Hamburger Icon for Mobile */}
        <button
          className={`sm:hidden flex flex-col justify-center items-center rounded-full focus:outline-none focus:ring-2 focus:ring-[#e7a77e] text-[#232323] z-70 transition-all duration-300 ${
            scrolled ? 'w-7 h-7' : 'w-8 h-8'
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block bg-current mb-1 transition-all duration-300 ${
            scrolled ? 'w-4 h-0.5' : 'w-5 h-0.5'
          } ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block bg-current mb-1 transition-all duration-300 ${
            scrolled ? 'w-4 h-0.5' : 'w-5 h-0.5'
          } ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block bg-current transition-all duration-300 ${
            scrolled ? 'w-4 h-0.5' : 'w-5 h-0.5'
          } ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
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