import Link from 'next/link';

export const metadata = {
  title: "Careers | Ukiyo Habitat",
  description: "Join Ukiyo Habitat. We're hiring a Trainee, Junior Architect, Senior Architect, and Business & Marketing Associate. Build sustainable, people-centric design with us.",
  keywords: [
    "Ukiyo Habitat careers",
    "landscape architect jobs India",
    "architecture jobs Delhi NCR",
    "design studio jobs",
    "junior architect vacancy",
    "senior architect jobs",
    "trainee architect India",
    "marketing jobs design firm",
  ],
};

const jobs = [
  {
    id: "trainee",
    title: "Design Trainee",
    type: "Trainee / Intern",
    location: "Delhi NCR",
    description: "Learn alongside our team on real projects—landscape, urban, and interior. Ideal for recent graduates or students in their final year of architecture or landscape design.",
    responsibilities: [
      "Support design development and documentation",
      "Assist with site visits and surveys",
      "Create presentation materials and visualisations",
      "Contribute to research and precedent studies",
    ],
    requirements: [
      "Pursuing or recently completed B.Arch / B.L.A. / M.L.A.",
      "Proficiency in AutoCAD, SketchUp, or similar",
      "Strong curiosity and willingness to learn",
      "Good communication and teamwork",
    ],
  },
  {
    id: "junior-architect",
    title: "Junior Architect",
    type: "Full-time",
    location: "Delhi NCR",
    description: "Execute design ideas into built reality. Work on landscape, urban, and interior projects with guidance from senior designers.",
    responsibilities: [
      "Develop design concepts and detailed drawings",
      "Prepare documentation for tenders and construction",
      "Coordinate with consultants and contractors",
      "Participate in site supervision and quality checks",
    ],
    requirements: [
      "B.Arch / B.L.A. with 1–3 years of experience",
      "Proficiency in AutoCAD, SketchUp, Adobe Suite",
      "Understanding of construction details and materials",
      "Ability to work across landscape and built projects",
    ],
  },
  {
    id: "senior-architect",
    title: "Senior Architect",
    type: "Full-time",
    location: "Delhi NCR",
    description: "Lead projects and shape our design direction. Own client relationships and mentor junior team members.",
    responsibilities: [
      "Lead design and delivery of multiple projects",
      "Present to clients and manage stakeholder relationships",
      "Guide junior team members and review work",
      "Contribute to studio processes and standards",
    ],
    requirements: [
      "B.Arch / M.Arch / B.L.A. / M.L.A. with 6+ years of experience",
      "Proven track record in landscape, urban, or interior projects",
      "Strong design sensibility and technical skills",
      "Leadership and client-facing experience",
    ],
  },
  {
    id: "business-marketing",
    title: "Business & Marketing Associate",
    type: "Part-time",
    location: "Delhi NCR / Remote",
    description: "Handle social media, lead follow-up, and basic business outreach. Help grow our presence and convert enquiries into projects.",
    responsibilities: [
      "Manage social media (Instagram, LinkedIn) and content calendar",
      "Respond to contact form enquiries and qualify leads",
      "Support proposal preparation and first-touch outreach",
      "Track metrics and suggest improvements",
    ],
    requirements: [
      "Strong written and visual communication skills",
      "Experience with social media management or marketing",
      "Organised, proactive, and detail-oriented",
      "Interest in design, architecture, or sustainability",
    ],
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] mx-auto mb-8 rounded-full"></div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#232323] mb-8 leading-tight">
            Join <span className="text-[#e7a77e]">Ukiyo Habitat</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#6b7280] leading-relaxed max-w-4xl mx-auto">
            We're looking for people who care about land, climate, and communities. If you want to design spaces that respond to people and place—reach out.
          </p>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4 text-center">
            Open Roles
          </h2>
          <p className="text-lg text-[#6b7280] mb-12 text-center max-w-2xl mx-auto">
            Current openings. We review applications regularly and respond to shortlisted candidates.
          </p>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] rounded-2xl p-8 md:p-10 border border-[#e7d8c9] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#232323] mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-[#e7a77e] text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                      <span className="inline-block bg-white/80 text-[#6b7280] text-sm px-3 py-1 rounded-full border border-[#e7d8c9]">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/contact?role=${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full hover:from-[#d18e64] hover:to-[#ea580c] transition-all duration-300 shadow-md hover:shadow-lg shrink-0"
                  >
                    Apply
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </Link>
                </div>

                <p className="text-[#6b7280] mb-6 leading-relaxed">
                  {job.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-[#232323] uppercase tracking-wide mb-3">
                      Responsibilities
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-[#6b7280]">
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#232323] uppercase tracking-wide mb-3">
                      Requirements
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-[#6b7280]">
                      {job.requirements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General Enquiry */}
          <div className="mt-16 text-center">
            <p className="text-[#6b7280] mb-4">
              Don't see the right fit? We're always open to hearing from talented people.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-[#e7a77e] font-semibold hover:text-[#d18e64] transition-colors"
            >
              Reach out anyway
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
