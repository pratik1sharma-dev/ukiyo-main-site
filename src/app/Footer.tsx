import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#e7d8c9] text-[#232323] py-6 mt-8 border-t border-[#b7c9c9]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-2">
        <div className="text-sm">&copy; {new Date().getFullYear()} Ukiyo Habitat. All rights reserved.
          <div className="flex gap-4 mt-2 justify-center sm:justify-start">
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2"/><circle cx="12" cy="12" r="5" strokeWidth="2"/><circle cx="17" cy="7" r="1.5" fill="currentColor"/></svg>
            </a>
            <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="4" strokeWidth="2"/><path d="M7 10v7M7 7v.01" strokeWidth="2" strokeLinecap="round"/><path d="M11 17v-4a2 2 0 1 1 4 0v4" strokeWidth="2"/><path d="M11 13h4" strokeWidth="2"/></svg>
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 5.92a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.19 8.19 0 0 1-2.6.99A4.11 4.11 0 0 0 16.11 4c-2.27 0-4.11 1.84-4.11 4.11 0 .32.04.64.1.94C8.09 8.9 5.1 7.38 3.01 5.13c-.35.6-.55 1.3-.55 2.05 0 1.42.72 2.68 1.82 3.42a4.07 4.07 0 0 1-1.86-.51v.05c0 1.98 1.41 3.63 3.28 4.01-.34.09-.7.14-1.07.14-.26 0-.51-.03-.76-.07.51 1.6 2 2.77 3.76 2.8A8.24 8.24 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 5.92z" strokeWidth="2"/></svg>
            </a>
          </div>
        </div>
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