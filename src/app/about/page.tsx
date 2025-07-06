export const metadata = {
  title: "About | Ukiyo Habitat",
  description: "Learn more about Ukiyo Habitat, our mission, vision, and the team behind our innovative architectural designs.",
};

export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#232323]">Reimagining Urban Life. One Detail at a Time.</h1>
      <p className="text-lg text-[#232323] mb-6">
        Ukiyo Habitat is a collaborative design studio working at the intersection of landscape architecture, urban design, and social innovation.
      </p>
      <p className="text-lg text-[#232323] mb-6">
        We fuse ecological thinking with technology to craft spaces that are climate-resilient, context-aware, and deeply human. Our approach is rooted in the belief that every project is an opportunity to create environments that are not only functional, but also inspiring and sustainable.
      </p>
      <p className="text-lg text-[#232323] mb-6">
        Our designs are not just solutions—they’re invitations to engage, reflect, and co-create. We believe in the power of collaboration, drawing on diverse perspectives to shape spaces that respond to the needs of people, communities, and the planet.
      </p>
      <p className="text-lg text-[#232323] mb-10">
        At Ukiyo Habitat, we are committed to pushing the boundaries of what’s possible in the built environment, reimagining urban life one detail at a time.
      </p>

      {/* Team Bio, Vision, Journey */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#232323] mb-4">Our Team & Vision</h2>
        <p className="text-[#232323] mb-4">We are a diverse team of architects, designers, and urbanists united by a passion for shaping sustainable, human-centered environments. Our journey began with a shared vision: to create spaces that inspire, connect, and endure.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-4">
          <div className="bg-white rounded-xl shadow p-4 w-full sm:w-1/3">
            <div className="font-bold text-[#232323]">Aarav Mehta</div>
            <div className="text-sm text-[#232323]">Founder & Principal Architect</div>
          </div>
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