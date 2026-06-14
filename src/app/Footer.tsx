import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] text-[#232323] py-12 mt-16 border-t border-[#e7d8c9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                 {/* Main Footer Content */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
           {/* Company Info */}
           <div className="space-y-4">
             <h3 className="text-xl font-bold text-[#232323] mb-4">Ukiyo Habitat</h3>
             <p className="text-[#6b7280] leading-relaxed">
               A cross-disciplinary design studio creating sustainable, immersive environments rooted in ecology and driven by innovation.
             </p>
             <div className="flex gap-4 mt-4">
               <a 
                 href="https://instagram.com/ukiyohabitat" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label="Instagram"
                 className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
               >
                 <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#e7a77e]">
                   <rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2"/>
                   <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                   <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                 </svg>
               </a>
               <a 
                 href="https://www.linkedin.com/company/ukiyo-habitat-design/people/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label="LinkedIn"
                 className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
               >
                 <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#e7a77e]">
                   <rect x="2" y="2" width="20" height="20" rx="4" strokeWidth="2"/>
                   <path d="M7 10v7M7 7v.01" strokeWidth="2" strokeLinecap="round"/>
                   <path d="M11 17v-4a2 2 0 1 1 4 0v4" strokeWidth="2"/>
                   <path d="M11 13h4" strokeWidth="2"/>
                 </svg>
               </a>
               <a 
                 href="https://twitter.com/ukiyohabitat" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label="Twitter"
                 className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
               >
                 <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#e7a77e]">
                   <path d="M22 5.92a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.19 8.19 0 0 1-2.6.99A4.11 4.11 0 0 0 16.11 4c-2.27 0-4.11 1.84-4.11 4.11 0 .32.04.64.1.94C8.09 8.9 5.1 7.38 3.01 5.13c-.35.6-.55 1.3-.55 2.05 0 1.42.72 2.68 1.82 3.42a4.07 4.07 0 0 1-1.86-.51v.05c0 1.98 1.41 3.63 3.28 4.01-.34.09-.7.14-1.07.14-.26 0-.51-.03-.76-.07.51 1.6 2 2.77 3.76 2.8A8.24 8.24 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 5.92z" strokeWidth="2"/>
                 </svg>
               </a>
             </div>
           </div>

           {/* Quick Links */}
           <div className="space-y-4">
             <h3 className="text-xl font-bold text-[#232323] mb-4">Quick Links</h3>
             <nav>
               <ul className="space-y-3">
                 <li><Link href="/" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Home</Link></li>
                 <li><Link href="/about" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">About Us</Link></li>
                 <li><Link href="/services" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Services</Link></li>
                 <li><Link href="/projects" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Our Work</Link></li>
                 <li><Link href="/think-tank" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Think Tank</Link></li>
                 <li><Link href="/collaborate" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Collaborate</Link></li>
                 <li><Link href="/careers" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Careers</Link></li>
                 <li><Link href="/contact" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Contact</Link></li>
               </ul>
             </nav>
           </div>

          {/* Locations */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#232323] mb-4">Locations</h3>
            <nav>
              <ul className="space-y-3">
                <li><Link href="/locations/delhi-ncr" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Delhi NCR</Link></li>
                <li><Link href="/locations/gurgaon" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Gurgaon</Link></li>
                <li><Link href="/locations/noida" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Noida</Link></li>
                <li><Link href="/locations/jabalpur" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Jabalpur</Link></li>
                <li><Link href="/locations/indore" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Indore</Link></li>
                <li><Link href="/locations/bangalore" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Bangalore</Link></li>
                <li><Link href="/locations/pushkar" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Pushkar</Link></li>
                <li><Link href="/locations/bhopal" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Bhopal</Link></li>
                <li><Link href="/locations/ayodhya" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Ayodhya</Link></li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
           <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#232323] mb-4">Contact Ukiyo Habitat</h3>
             <div className="space-y-3 text-[#6b7280]">
               <p className="flex items-center gap-3">
                 <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#e7a77e]">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
                 <span>ukiyohabitat@gmail.com</span>
               </p>
               <p className="flex items-center gap-3">
                 <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#e7a77e]">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
                 <span>Delhi, India</span>
               </p>
             </div>
           </div>

                                   {/* Recognitions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#232323] mb-4">Recognitions</h3>
              <div className="space-y-3">
                                                                   {/* Startup India */}
                  <div className="flex items-center gap-3">
                    <img 
                      src="/startup-logo.webp" 
                      alt="Startup India Logo" 
                      className="w-20 h-20 object-contain"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#232323]">Startup India</p>
                      <p className="text-xs text-[#6b7280]">Government of India</p>
                    </div>
                  </div>

                                                                   {/* IPI University */}
                  <a 
                    href="https://x.com/Ipuiif_edc/status/1830612005390270577" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 group"
                    aria-label="View IPU University Incubation Post"
                  >
                    <img 
                      src="/ipu-logo.png" 
                      alt="IPU University Logo" 
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="text-sm font-semibold text-[#232323]">IPU University, Dwarka, Delhi, India</p>
                        <p className="text-xs text-[#6b7280]">Innovation & Entrepreneurship</p>
                      </div>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#6b7280] group-hover:text-[#e7a77e] transition-colors flex-shrink-0">
                        <path d="M22 5.92a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.19 8.19 0 0 1-2.6.99A4.11 4.11 0 0 0 16.11 4c-2.27 0-4.11 1.84-4.11 4.11 0 .32.04.64.1.94C8.09 8.9 5.1 7.38 3.01 5.13c-.35.6-.55 1.3-.55 2.05 0 1.42.72 2.68 1.82 3.42a4.07 4.07 0 0 1-1.86-.51v.05c0 1.98 1.41 3.63 3.28 4.01-.34.09-.7.14-1.07.14-.26 0-.51-.03-.76-.07.51 1.6 2 2.77 3.76 2.8A8.24 8.24 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 5.92z" strokeWidth="2"/>
                      </svg>
                    </div>
                  </a>
              </div>
            </div>
         </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e7d8c9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#6b7280]">
            &copy; {new Date().getFullYear()} Ukiyo Habitat. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="text-[#6b7280] hover:text-[#e7a77e] transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 