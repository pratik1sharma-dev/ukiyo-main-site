import Link from 'next/link';
import Image from 'next/image';

// Think tank content data
const thinkTankContent = [
  {
    id: 'elevating-elegance-modern-landscape-design-for-premium-homes',
    title: 'Elevating Elegance: Modern Landscape Design for Premium Homes',
    category: 'Landscape Architecture',
    shortDescription: 'Transform your outdoor space with modern landscape design',
    mainImage: '/hero-bg-3.jpg',
    date: '2026-06-13',
    author: 'Ukiyo Design Team',
    readTime: '8 min read',
    content: `<h2>Introduction to Modern Landscape Design</h2><p>At Ukiyo Design, we believe that a well-designed landscape is an integral part of any premium home. It not only enhances the aesthetic appeal of the property but also provides a serene and tranquil environment for the inhabitants. In this blog post, we will explore the concept of modern landscape design and how it can elevate the elegance of your home.</p><h2>Key Elements of Modern Landscape Design</h2><p>Modern landscape design is all about creating a seamless transition between the indoor and outdoor spaces. It involves careful planning and attention to detail to create a unique and functional outdoor area that complements the architecture of the home. Some of the key elements of modern landscape design include:</p><ul><li>Simplistic and clean lines</li><li>Use of natural materials such as wood, stone, and water</li><li>Incorporation of plants and greenery</li><li>Outdoor lighting to create ambiance and highlight design features</li><li>Functional outdoor spaces for entertainment and relaxation</li></ul><p>These elements, when combined, create a modern and elegant landscape that is perfect for premium homes.</p><h2>Benefits of Modern Landscape Design</h2><p>There are numerous benefits of incorporating modern landscape design into your premium home. Some of the most significant advantages include:</p><ul><li>Increased property value</li><li>Improved outdoor living experience</li><li>Enhanced aesthetic appeal</li><li>Reduced stress and improved mental health</li><li>Increased opportunities for outdoor entertainment and socialization</li></ul><p>At Ukiyo Design, we have a team of experienced landscape architects and designers who can help you create a modern and elegant landscape that meets your unique needs and preferences.</p><h2>Creating a Modern Landscape Design</h2><p>Creating a modern landscape design requires careful planning and attention to detail. Here are some steps to follow:</p><ol><li>Assess your site and climate to determine the best design approach</li><li>Define your goals and objectives for the outdoor space</li><li>Choose a design style that complements the architecture of your home</li><li>Select materials and plants that are suitable for your climate and design style</li><li>Incorporate functional outdoor spaces for entertainment and relaxation</li><li>Use outdoor lighting to create ambiance and highlight design features</li></ol><p>By following these steps, you can create a modern and elegant landscape that elevates the elegance of your premium home.</p><h2>Conclusion</h2><p>In conclusion, modern landscape design is a great way to elevate the elegance of your premium home. By incorporating key elements such as simplistic and clean lines, natural materials, and functional outdoor spaces, you can create a unique and functional outdoor area that complements the architecture of your home. At Ukiyo Design, we are committed to providing our clients with the best possible landscape design solutions that meet their unique needs and preferences. Contact us today to learn more about our services and how we can help you create a modern and elegant landscape that you will love for years to come.</p>`
  },
  {
    id: 'villa-wellness-hub',
    title: 'How to Make My Villa a Wellness Hub',
    category: 'Residential Wellness Design',
    shortDescription: 'Transform your villa into a comprehensive wellness sanctuary with sustainable design principles and holistic living spaces.',
    mainImage: '/hero-bg-3.jpg',
    date: '2024-12-15',
    author: 'Ukiyo Design Team',
    readTime: '15 min read'
  },
  {
    id: 'ooh-urban-design',
    title: 'OOH Advertising as Urban Design',
    category: 'Urban Experience Research',
    shortDescription: 'Exploring how Out-of-Home advertising can be reimagined as an integral part of urban design and public space experience.',
    mainImage: '/ooh-garima.jpg',
    date: '2025-04-30',
    author: 'Garima Dubey',
    readTime: '8 min read'
  },
  {
    id: 'ahmedabad-haat-street',
    title: 'Ahmedabad Haat Street Revitalization',
    category: 'Urban Design Research',
    shortDescription: 'An in-depth analysis of urban street revitalization through the lens of Ahmedabad\'s Haat Street transformation.',
    mainImage: '/projects/haat/9.png',
    date: '2023-11-20',
    author: 'Ukiyo Research Team',
    readTime: '10 min read'
  },
  {
    id: 'vastrapur-lake',
    title: 'Vastrapur Lake Revitalization',
    category: 'Urban Design Research',
    shortDescription: 'A comprehensive analysis of urban lake revitalization strategies through the case study of Vastrapur Lake, Ahmedabad.',
    mainImage: '/projects/vastrapur lake/1.png',
    date: '2023-12-10',
    author: 'Ukiyo Research Team',
    readTime: '12 min read'
  },
  {
    id: 'haldiram-commercial-landscape',
    title: 'Designing Commercial Landscapes: Safety, Sustainability, and Brand Impact',
    category: 'Commercial Landscape Design',
    shortDescription: 'A case study of the Haldiram landscape design at Modi Mall, Noida, exploring how thoughtful design creates safe, sustainable, and commercially successful spaces.',
    mainImage: '/projects/haldiram/1.jpg',
    date: '2025-11-21',
    author: 'Ukiyo Design Team',
    readTime: '12 min read'
  },
  {
    id: 'extreme-heat-landscape-infrastructure',
    title: 'Designing Indian Cities for Extreme Heat: Landscape as Urban Infrastructure',
    category: 'Climate-Responsive Urban Design',
    shortDescription: 'How landscape can act as cooling infrastructure in Indian cities facing extreme heat and urban heat island effects.',
    mainImage: '/projects/bandhavgarh/front.png',
    date: '2025-05-20',
    author: 'Ukiyo Research Team',
    readTime: '10 min read'
  },
  {
    id: 'retail-public-realm-footfall',
    title: 'From Parking Lots to Public Realms: How Landscape Design Increases Footfall for Indian Retail',
    category: 'Commercial Landscape Strategy',
    shortDescription: 'Using landscape and public realm design to turn retail sites into destinations that increase dwell time, comfort, and brand visibility.',
    mainImage: '/projects/kake.jpg',
    date: '2025-09-15',
    author: 'Ukiyo Design Team',
    readTime: '9 min read'
  },
  {
    id: 'election-ooh-better-cities',
    title: 'Can Political Advertising Make Better Cities? Rethinking OOH During Election Season',
    category: 'Public Space & Media',
    shortDescription: 'A critical look at how election-season OOH could double as public infrastructure instead of visual clutter in Indian cities.',
    mainImage: '/ooh-garima-1.jpg',
    date: '2025-04-30',
    author: 'Garima Dubey',
    readTime: '8 min read'
  }
];

export const metadata = {
  title: "Think Tank | Ukiyo Habitat",
  description: "Research, insights, and thought leadership on sustainable design, urban ecology, and the future of our built environment.",
  keywords: [
    "Ukiyo Habitat think tank",
    "sustainable design research",
    "urban ecology insights",
    "landscape architecture research",
    "ecological design thought leadership",
    "climate-responsive design insights",
    "urban resilience research",
    "public space design research",
    "blue-green infrastructure insights",
    "water-sensitive planning research",
    "participatory urbanism insights",
    "community placemaking research",
    "sustainable cities research",
    "ecological urban design",
    "urban planning insights",
    "environmental design research",
    "social impact design insights",
    "adaptive reuse research",
    "child-friendly spaces research",
    "urban renewal insights",
    "landscape-led urbanism",
    "ecological restoration research",
    "sustainable development insights",
    "urban design innovation",
    "environmental architecture research",
    "OOH public space design",
    "South India Talks OOH 2025",
    "Garima Dubey OOH presentation"
  ],
};

export default function ThinkTank() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="divider-primary mx-auto mb-8"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#232323] mb-8 leading-tight">
            Think <span className="text-[#e7a77e]">Tank</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#6b7280] leading-relaxed max-w-4xl mx-auto">
            Research, insights, and thought leadership on sustainable design, urban ecology, and the future of our built environment.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {thinkTankContent.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((item) => (
              <Link href={`/think-tank/${item.id}`} key={item.id} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-64 w-full">
                    <Image
                      src={item.mainImage}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="text-sm text-white bg-[#e7a77e] px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-xl font-bold text-[#232323] mb-2 group-hover:text-[#e7a77e] transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-grow">{item.shortDescription}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{item.date}</span>
                      <span>By {item.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
