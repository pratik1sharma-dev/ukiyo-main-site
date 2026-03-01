import { Suspense } from 'react';
import ContactForm from './ContactForm';

function ContactFormFallback() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-32 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] mx-auto mb-8 rounded-full animate-pulse"></div>
          <div className="h-16 bg-[#e7d8c9]/30 rounded-xl max-w-2xl mx-auto mb-6"></div>
          <div className="h-6 bg-[#e7d8c9]/20 rounded-lg max-w-3xl mx-auto"></div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] rounded-2xl p-8 md:p-12 border border-[#e7d8c9] animate-pulse">
            <div className="h-10 bg-[#e7d8c9]/30 rounded-lg w-2/3 mx-auto mb-8"></div>
            <div className="space-y-6">
              <div className="h-14 bg-[#e7d8c9]/20 rounded-xl"></div>
              <div className="h-14 bg-[#e7d8c9]/20 rounded-xl"></div>
              <div className="h-14 bg-[#e7d8c9]/20 rounded-xl"></div>
              <div className="h-32 bg-[#e7d8c9]/20 rounded-xl"></div>
              <div className="h-12 bg-[#e7a77e]/30 rounded-full w-40 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<ContactFormFallback />}>
      <ContactForm />
    </Suspense>
  );
}
