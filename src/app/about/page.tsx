export const metadata = {
  title: "About | Ukiyo Habitat",
  description: "Learn more about Ukiyo Habitat, our mission, vision, and the team behind our innovative architectural designs.",
};

export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#232323]">Reimagining Urban Life. One Detail at a Time.</h1>
      {/* Team Bio, Vision, Journey */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#232323] mb-4">Our Team & Vision</h2>
        <p className="text-[#232323] mb-4">We are a diverse team of architects, designers, and urbanists united by a passion for shaping sustainable, human-centered environments. Our journey began with a shared vision: to create spaces that inspire, connect, and endure.</p>
        {/* Founder Bio Card with Photo */}
        <div className="bg-[#f6f2ed] rounded-xl shadow p-6 mb-6 flex flex-col sm:flex-row items-center text-left mx-auto max-w-2xl gap-6">
          <div className="flex-shrink-0 flex justify-center items-center w-full sm:w-auto mb-4 sm:mb-0">
            <img src="/garima-dubey.jpg" alt="Garima Dubey" className="w-28 h-28 rounded-full object-cover border-4 border-white shadow" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#232323] mb-1">Garima Dubey</h3>
            <div className="text-sm text-[#e7a77e] font-semibold mb-3">Founder</div>
            <p className="text-[#232323] mb-2">
              Growing up in Jabalpur, I was surrounded by the natural beauty of Madhya Pradesh—lush forests, serene rivers, and breathtaking landscapes like the towering falls of Bhedaghat and the wildlife of Kanha National Park. These places instilled in me a deep respect for nature and a passion for creating designs that reflect the balance and harmony of the environment.
            </p>
            <p className="text-[#232323] mb-2">
              After completing my master's at SPA Delhi, I founded Ukiyo Habitat with the vision to incorporate these natural principles into urban design. Our work focuses on creating spaces that are not only sustainable but also rooted in the environment around them. Just as the forests of Madhya Pradesh sustain a delicate ecosystem, we aim to design urban spaces that coexist seamlessly with nature, fostering resilience, beauty, and functionality.
            </p>
            <p className="text-[#232323]">
              At Ukiyo Habitat, every project is an opportunity to transform urban landscapes into places that nurture both people and the planet—just as I’ve witnessed nature do in my home state.
            </p>
          </div>
        </div>
        {/* Second Founder Bio Card with Photo */}
        <div className="bg-[#f6f2ed] rounded-xl shadow p-6 mb-6 flex flex-col sm:flex-row items-center text-left mx-auto max-w-2xl gap-6">
          <div className="flex-shrink-0 flex justify-center items-center w-full sm:w-auto mb-4 sm:mb-0">
            <img src="/aarav-mehta.jpg" alt="Aarav Mehta" className="w-28 h-28 rounded-full object-cover border-4 border-white shadow" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#232323] mb-1">Aarav Mehta</h3>
            <div className="text-sm text-[#e7a77e] font-semibold mb-3">Co-Founder</div>
            <p className="text-[#232323] mb-2">
              Raised in Mumbai, I was always fascinated by the dynamic interplay between people and the built environment. The city’s vibrant streets and diverse communities inspired me to pursue architecture as a way to shape meaningful urban experiences.
            </p>
            <p className="text-[#232323] mb-2">
              After earning my degree from CEPT University, I joined forces with Garima to co-found Ukiyo Habitat. My focus is on integrating smart technology and participatory design into our projects, ensuring that every space we create is both innovative and inclusive.
            </p>
            <p className="text-[#232323]">
              I believe that great design is a dialogue—between history and future, nature and city, people and place. At Ukiyo Habitat, I strive to make that dialogue visible in every project we undertake.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-4">
          <div className="bg-white rounded-xl shadow p-4 w-full sm:w-1/3">
            <div className="font-bold text-[#232323]">Maya Kapoor</div>
            <div className="text-sm text-[#232323]">Urban Designer</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 w-full sm:w-1/3">
            <div className="font-bold text-[#232323]">Rohan Das</div>
            <div className="text-sm text-[#232323]">Landscape Architect</div>
          </div>
        </div>
        <p className="text-[#232323]">From our first project to our latest international collaboration, our journey is defined by curiosity, empathy, and a relentless pursuit of excellence.</p>
      </div>

      {/* Why Ukiyo? */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#232323] mb-4">Why Ukiyo?</h2>
        <p className="text-[#232323]">Ukiyo Habitat stands apart for our fusion of ecological thinking, technological innovation, and deep community engagement. We don’t just design spaces—we create living systems that adapt, evolve, and inspire. Our process is collaborative, transparent, and always rooted in the unique context of each project.</p>
      </div>

      {/* Future Vision */}
      <div>
        <h2 className="text-2xl font-semibold text-[#232323] mb-4">Future Vision</h2>
        <p className="text-[#232323] mb-2">We see the future as a space for co-creation. Through our think tank, speculative design workshops, and international partnerships, we’re building a platform for research, dialogue, and innovation. Our goal: to shape cities and consciousness for generations to come.</p>
        <p className="text-[#232323]">Join us as we explore new frontiers in design, sustainability, and social impact.</p>
      </div>
    </section>
  );
} 