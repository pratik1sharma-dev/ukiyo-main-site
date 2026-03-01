import Link from 'next/link';

export const metadata = {
  title: "Collaborate | Ukiyo Habitat",
  description: "Partner with Ukiyo Habitat—project collaborations, research, talks & workshops, podcasts, media, and careers. Build better habitats together.",
  keywords: [
    "collaborate Ukiyo Habitat",
    "landscape architecture partnerships India",
    "design studio collaboration",
    "architecture talks workshops",
    "podcast landscape design",
    "media interviews architecture",
  ],
};

const collabSections = [
  {
    id: "project-collabs",
    title: "Project Collaborations",
    description: "Architects, developers, brands, or studios—if you're working on landscape, urban, or interior projects and want a design partner who thinks in systems and ecology, we'd like to hear from you.",
    cta: "Propose a collaboration",
    href: "/contact?type=project-collab",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
  },
  {
    id: "research",
    title: "Research & Think Tank",
    description: "Universities, NGOs, and institutions working on urban ecology, climate adaptation, or public space—we're interested in research partnerships, funded studies, and knowledge exchange.",
    cta: "Discuss research",
    href: "/contact?type=research",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
  },
  {
    id: "talks-workshops",
    title: "Talks & Workshops",
    description: "Conferences, panels, studio crits, or masterclasses—we speak on cities, climate, landscape, food and public realm, and design process. Reach out for speaking or workshop opportunities.",
    cta: "Invite us",
    href: "/contact?type=talks-workshops",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
  },
  {
    id: "media",
    title: "Media & Conversations",
    description: "Podcast hosts, journalists, editors, and creators—we're happy to join conversations on cities, climate, food + public realm, and everyday habitats. Podcasts, IG Lives, panels, or features.",
    cta: "Invite us to speak",
    href: "/contact?type=media",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
      </svg>
    ),
  },
];

export default function Collaborate() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] mx-auto mb-8 rounded-full"></div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#232323] mb-8 leading-tight">
            Let&apos;s Build Better <span className="text-[#e7a77e]">Habitats</span> Together
          </h1>
          <p className="text-xl md:text-2xl text-[#6b7280] leading-relaxed max-w-4xl mx-auto">
            Whether you want to partner on projects, collaborate on research, invite us to speak, or join as a team member—we're always open to thoughtful collaboration.
          </p>
        </div>
      </section>

      {/* Ways to Collaborate */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4 text-center">
            Ways to Collaborate
          </h2>
          <p className="text-lg text-[#6b7280] mb-16 text-center max-w-2xl mx-auto">
            Choose how you'd like to work with us.
          </p>

          <div className="space-y-6 mb-24">
            {collabSections.map((section) => (
              <div
                key={section.id}
                className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] rounded-2xl p-8 md:p-10 border border-[#e7d8c9] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#e7a77e]/20 rounded-xl flex items-center justify-center text-[#e7a77e]">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#232323] mb-4">
                      {section.title}
                    </h3>
                    <p className="text-[#6b7280] leading-relaxed mb-6">
                      {section.description}
                    </p>
                    <Link
                      href={section.href}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full hover:from-[#d18e64] hover:to-[#ea580c] transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {section.cta}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Careers Block - prominent link to /careers */}
          <div className="bg-gradient-to-r from-[#e7a77e]/20 to-[#f59e42]/20 rounded-2xl p-8 md:p-12 border-2 border-[#e7a77e]/40">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#232323] mb-4">
                  Join the Team
                </h2>
                <p className="text-[#6b7280] leading-relaxed max-w-xl">
                  We&apos;re hiring a Design Trainee, Junior Architect, Senior Architect, and Business &amp; Marketing Associate. If you want to design spaces that respond to people and place—explore our open roles.
                </p>
              </div>
              <Link
                href="/careers"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full hover:from-[#d18e64] hover:to-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl text-lg shrink-0"
              >
                View Open Roles
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
