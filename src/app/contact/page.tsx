export const metadata = {
  title: "Contact | Ukiyo Habitat",
  description: "Get in touch with Ukiyo Habitat for architectural and design inquiries, collaborations, or consultations.",
};

export default function Contact() {
  return (
    <section className="max-w-xl mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-[#232323]">Contact Us</h1>
      <form className="flex flex-col gap-4 mt-8">
        <label htmlFor="name" className="sr-only">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" className="p-3 rounded border border-[#b7c9c9] placeholder:text-[#888]" required />
        <label htmlFor="email" className="sr-only">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" className="p-3 rounded border border-[#b7c9c9] placeholder:text-[#888]" required />
        <label htmlFor="message" className="sr-only">Your Message</label>
        <textarea id="message" name="message" placeholder="Your Message" className="p-3 rounded border border-[#b7c9c9] placeholder:text-[#888]" rows={5} required />
        <button type="submit" className="bg-[#e7a77e] hover:bg-[#e38d5f] text-white font-semibold rounded-full px-7 py-3 transition-colors shadow-md text-base">Send Message</button>
      </form>
    </section>
  );
} 