import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#e7d8c9] text-[#232323] py-6 mt-8 border-t border-[#b7c9c9]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-2">
        <div className="text-sm">&copy; {new Date().getFullYear()} Ukiyo Habitat. All rights reserved.</div>
        <nav>
          <ul className="flex gap-4 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
} 