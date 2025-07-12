"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const floating = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className={
        floating
          ? "w-full absolute top-0 left-0 z-50 bg-transparent transition-all"
          : "w-full bg-[#f6f2ed] border-b border-[#b7c9c9] sticky top-0 z-50 shadow-sm"
      }
      style={floating ? { background: 'transparent', boxShadow: 'none' } : { background: '#f6f2ed', backgroundImage: 'none' }}
    >
      <nav
        className={
          floating
            ? "max-w-6xl mx-auto flex items-center justify-between px-4 py-3 bg-transparent"
            : "max-w-6xl mx-auto flex items-center justify-between px-4 py-3"
        }
        style={floating ? { background: 'rgba(0,0,0,0.0)' } : { background: 'rgba(231,216,201,0.95)', borderRadius: '0 0 1rem 1rem' }}
      >
        <Link href="/" className="flex items-center">
          <Image src="/logo-bw-1.png" alt="Ukiyo Habitat Logo" width={200} height={100} priority className="mr-2" />
          <span className="sr-only">Ukiyo Habitat</span>
        </Link>
        {/* Desktop Nav */}
        <ul className={(floating ? "flex gap-6 text-base font-medium text-white" : "flex gap-6 text-base font-medium text-[#232323]") + " hidden sm:flex"}>
          <li><Link href="/projects" className="hover:underline">Our Work</Link></li>
          <li><Link href="/about" className="hover:underline">About Us</Link></li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li><Link href="/projects" className="hover:underline">Think Tank</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        {/* Hamburger Icon for Mobile */}
        <button
          className={`sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-[#e7a77e] ${floating ? 'text-white' : 'text-[#232323]'}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block w-6 h-0.5 bg-current mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center sm:hidden transition-all">
          <ul className="flex flex-col gap-8 text-2xl font-semibold text-white">
            <li><Link href="/projects" onClick={() => setMenuOpen(false)}>Our work</Link></li>
            <li><Link href="/projects" onClick={() => setMenuOpen(false)}>Think Tank</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
} 