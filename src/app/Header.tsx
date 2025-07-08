"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const floating = pathname === '/';
  return (
    <header
      className={
        floating
          ? "w-full absolute top-0 left-0 z-50 bg-transparent text-white transition-all"
          : "w-full bg-[url('/hero-bg.png')] bg-cover bg-center bg-fixed text-[#232323] border-b border-[#b7c9c9] sticky top-0 z-50 shadow-sm"
      }
      style={floating ? { background: 'transparent', boxShadow: 'none' } : {}}
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
        <ul className={floating ? "flex gap-6 text-base font-medium text-white" : "flex gap-6 text-base font-medium text-[#232323]"}>
          <li><Link href="/projects" className="hover:underline">Our work</Link></li>
          <li><Link href="/projects" className="hover:underline">Think Tank</Link></li>
          <li><Link href="/about" className="hover:underline">About Us</Link></li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
} 