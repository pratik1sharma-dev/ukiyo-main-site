import Image from 'next/image';
import Link from 'next/link';

type ContentItem = 
  | { type: 'heading' | 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'list'; items: string[] }
  | { type: 'link'; text: string; label: string };

interface ThinkTankItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  mainImage: string;
  date: string;
  author: string;
  readTime: string;
  content: ContentItem[];
}

// Import the think tank content from the main page
const thinkTankContent: ThinkTankItem[] = [
  {
    id: 'villa-wellness-hub',
    title: 'How to Make My Villa a Wellness Hub',
    category: 'Residential Wellness Design',
    shortDescription: 'Transform your villa into a comprehensive wellness sanctuary with sustainable design principles and holistic living spaces.',
    mainImage: '/hero-bg-3.jpg',
    date: '2024-12-15',
    author: 'Ukiyo Design Team',
    readTime: '15 min read',
    content: [
      { type: 'heading', text: 'Creating Your Personal Wellness Sanctuary' },
      { type: 'paragraph', text: 'In today\'s fast-paced world, the concept of wellness has evolved beyond mere physical health to encompass mental, emotional, and spiritual well-being. Your villa can become more than just a residence—it can transform into a comprehensive wellness hub that nurtures every aspect of your life. This guide explores how to integrate sustainable design principles with holistic wellness concepts to create a truly transformative living environment.' },
      { 
        type: 'image', 
        src: '/hero-bg-1.jpg', 
        alt: 'Modern villa with wellness-focused outdoor spaces',
        caption: 'A wellness-oriented villa design featuring natural materials and outdoor living spaces'
      },
      { type: 'heading', text: 'The Foundation: Biophilic Design Principles' },
      { type: 'paragraph', text: 'Biophilic design—the practice of connecting people with nature through design—forms the cornerstone of any wellness-focused villa. This approach goes beyond simply adding plants; it creates a seamless integration between indoor and outdoor spaces that promotes mental clarity and reduces stress.' },
      { type: 'list', items: [
        'Natural light optimization through strategic window placement and skylights',
        'Indoor-outdoor living spaces with retractable walls and sliding doors',
        'Natural materials like wood, stone, and bamboo throughout the design',
        'Water features that create soothing ambient sounds',
        'Views of nature from every major living space'
      ]},
      { type: 'heading', text: 'Wellness Zones: Designing for Different Needs' },
      { type: 'paragraph', text: 'A true wellness hub accommodates various activities and states of mind. Consider creating dedicated zones that support different aspects of well-being:' },
      { type: 'list', items: [
        'Meditation and Mindfulness Space: Quiet corner with comfortable seating, natural materials, and minimal distractions',
        'Physical Wellness Area: Home gym with natural ventilation and views of nature',
        'Social Connection Zone: Open living areas that encourage family interaction and social gatherings',
        'Rest and Recovery Space: Bedroom designed for optimal sleep with blackout curtains and temperature control',
        'Creative Expression Area: Studio or workspace with abundant natural light and inspiring views'
      ]},
      { 
        type: 'image', 
        src: '/hero-bg-2.jpg', 
        alt: 'Peaceful meditation space with natural light and plants',
        caption: 'A dedicated meditation space featuring natural materials and abundant natural light'
      },
      { type: 'heading', text: 'Sustainable Wellness: Environmental Considerations' },
      { type: 'paragraph', text: 'True wellness extends beyond personal health to environmental responsibility. Sustainable design features not only reduce your carbon footprint but also create healthier indoor environments:' },
      { type: 'list', items: [
        'Solar panels for renewable energy generation',
        'Rainwater harvesting systems for landscape irrigation',
        'Natural ventilation systems that reduce reliance on air conditioning',
        'Energy-efficient appliances and LED lighting',
        'Local and sustainable building materials',
        'Green roofs and living walls for improved air quality'
      ]},
      { type: 'heading', text: 'The Healing Power of Water' },
      { type: 'paragraph', text: 'Water features play a crucial role in wellness design, offering both visual and auditory benefits. Consider incorporating:' },
      { type: 'list', items: [
        'Reflection pools that create calming visual effects',
        'Water walls that provide white noise for relaxation',
        'Natural swimming pools with chemical-free water treatment',
        'Outdoor showers for connecting with nature',
        'Hot tubs or plunge pools for hydrotherapy benefits'
      ]},
      { 
        type: 'image', 
        src: '/hero-bg-5.jpg', 
        alt: 'Serene water feature with natural stone and plants',
        caption: 'A natural water feature that creates both visual appeal and soothing sounds'
      },
      { type: 'heading', text: 'Technology Integration for Wellness' },
      { type: 'paragraph', text: 'Smart home technology can enhance wellness when thoughtfully integrated. Consider systems that:' },
      { type: 'list', items: [
        'Monitor indoor air quality and automatically adjust ventilation',
        'Control lighting to follow natural circadian rhythms',
        'Manage temperature and humidity for optimal comfort',
        'Provide ambient soundscapes for relaxation and focus',
        'Track sleep patterns and adjust bedroom environment accordingly'
      ]},
      { type: 'heading', text: 'Landscape Design for Wellness' },
      { type: 'paragraph', text: 'The outdoor environment is equally important in creating a wellness hub. Your landscape should include:' },
      { type: 'list', items: [
        'Walking paths that encourage daily movement and connection with nature',
        'Herb gardens for fresh ingredients and aromatherapy',
        'Seating areas for outdoor meditation and relaxation',
        'Native plants that support local biodiversity',
        'Outdoor yoga or exercise spaces',
        'Fire pits for evening gatherings and warmth'
      ]},
      { 
        type: 'image', 
        src: '/hero-bg-6.jpg', 
        alt: 'Lush wellness garden with walking paths and seating areas',
        caption: 'A wellness garden featuring native plants, walking paths, and meditation spaces'
      },
      { type: 'heading', text: 'Material Selection for Health and Wellness' },
      { type: 'paragraph', text: 'The materials you choose for your villa significantly impact indoor air quality and overall wellness. Prioritize:' },
      { type: 'list', items: [
        'Low-VOC paints and finishes that don\'t off-gas harmful chemicals',
        'Natural flooring materials like hardwood, bamboo, or cork',
        'Organic textiles for upholstery and bedding',
        'Non-toxic insulation materials',
        'Natural stone and clay tiles for bathrooms and kitchens'
      ]},
      { type: 'heading', text: 'Creating Daily Wellness Rituals' },
      { type: 'paragraph', text: 'Beyond physical design, consider how your villa can support daily wellness practices. Design spaces that encourage:' },
      { type: 'list', items: [
        'Morning routines with east-facing windows for natural light',
        'Evening wind-down rituals with dimmable lighting',
        'Family meal preparation in well-designed kitchens',
        'Regular exercise through accessible fitness spaces',
        'Mindfulness practices through dedicated meditation areas'
      ]},
      { type: 'heading', text: 'The Financial and Health Benefits' },
      { type: 'paragraph', text: 'Investing in a wellness-focused villa design offers both immediate and long-term benefits:' },
      { type: 'list', items: [
        'Reduced stress levels and improved mental health',
        'Better sleep quality and recovery',
        'Increased property value due to unique wellness features',
        'Lower utility bills through sustainable design',
        'Improved family relationships through shared wellness activities',
        'Enhanced productivity and creativity in home workspaces'
      ]},
      { type: 'heading', text: 'Getting Started: A Step-by-Step Approach' },
      { type: 'paragraph', text: 'Transforming your villa into a wellness hub doesn\'t happen overnight. Start with these foundational steps:' },
      { type: 'list', items: [
        'Assess your current space and identify wellness priorities',
        'Work with architects and designers who understand wellness principles',
        'Begin with one room or area as a pilot project',
        'Gradually expand wellness features throughout your villa',
        'Regularly evaluate and adjust based on your family\'s needs'
      ]},
      { type: 'heading', text: 'Conclusion: Your Wellness Journey Begins at Home' },
      { type: 'paragraph', text: 'Creating a wellness hub in your villa is an investment in your family\'s health, happiness, and future. By combining sustainable design principles with holistic wellness concepts, you can create a living environment that not only meets your basic needs but actively supports your well-being goals. Remember, wellness is a journey, not a destination—your villa can evolve with your changing needs and priorities over time.' },
      { type: 'paragraph', text: 'At Ukiyo Habitat, we believe that every home has the potential to become a wellness sanctuary. Our team of architects and designers specializes in creating spaces that nurture both people and the planet, helping you transform your villa into the wellness hub of your dreams.' }
    ]
  },
  {
    id: 'ooh-urban-design',
    title: 'Reimagining OOH in Public Space Design',
    category: 'Keynote Presentation',
    shortDescription: 'Garima Dubey at South India Talks OOH 2025 on integrating OOH media with public spaces for better urban experiences.',
    mainImage: '/ooh-garima.jpg',
    date: '2025-04-30',
    author: 'Garima Dubey',
    readTime: '5 min read',
    content: [
      { type: 'heading', text: 'Keynote at South India Talks OOH 2025' },
      { type: 'paragraph', text: 'Garima Dubey, Co-Founder of Ukiyo Habitat LLP, recently spoke at South India Talks OOH 2025, held on April 30 at the Hilton Hotel, Chennai. Her talk, titled "OOH as an Integral Part of Public Space Design", redefined how out-of-home (OOH) media can integrate with public spaces to serve both design and communication goals.' },
      { 
        type: 'image', 
        src: '/ooh-garima-1.jpg', 
        alt: 'Garima Dubey presenting at South India Talks OOH 2025',
        caption: 'Presentation at South India Talks OOH 2025, Hilton Hotel, Chennai'
      },
      { type: 'paragraph', text: 'Drawing on her expertise as a landscape architect and urban ecologist, Garima offered a bold perspective on how OOH can contribute positively to the urban realm. Her approach blends climate-sensitive design with democratic placemaking—highlighting how civic infrastructure, when designed thoughtfully, can balance brand presence with environmental and social needs.' },
      { type: 'paragraph', text: 'Garima\'s work at Ukiyo Habitat LLP focuses on ecology-driven, community-centric public space design. Her session delved into the possibilities of integrating OOH seamlessly into urban landscapes to enhance user experience, support city narratives, and ensure inclusivity.' },
      { type: 'heading', text: 'About the Speaker' },
      { type: 'paragraph', text: 'Garima brings a rich academic background as a design educator at Dr. B.R. Ambedkar University and Netaji Subhash University of Technology in Delhi, where she focuses on blue-green infrastructure and sustainable cities.' },
      { type: 'heading', text: 'Event Details' },
      { type: 'paragraph', text: 'The event, organised by Thoughtshows & Events Pvt. Ltd., revolved around the theme "Beyond Billboards: Reimagining OOH"—gathering designers, policymakers, and media professionals to shape the future of the medium.' },
      { type: 'paragraph', text: '📰 Read the event announcement on Media4Growth' },
      { type: 'link', text: 'https://www.media4growth.com/events/talks-ooh-news/garima-dubey-co-founder-of-ukiyo-habitat-llp-to-address-south-india-talks-ooh-2025-76386', label: 'Media4Growth Article' }
    ]
  },
  {
    id: 'ahmedabad-haat-street',
    title: 'Research: Ahmedabad Haat Street Revitalization',
    category: 'Urban Design Research',
    shortDescription: 'An in-depth analysis of urban street revitalization through the lens of Ahmedabad\'s Haat Street transformation.',
    mainImage: '/projects/haat/9.png',
    date: '2023-11-20',
    author: 'Ukiyo Research Team',
    readTime: '10 min read',
    content: [
      { type: 'heading', text: 'Research Overview' },
      { type: 'paragraph', text: 'This research paper examines the Ahmedabad Haat Street revitalization project as a case study in successful urban placemaking. Our study focuses on how the project successfully integrated cultural heritage with contemporary urban design principles to create a vibrant public space along the Sabarmati Riverfront.' },
      { type: 'image', src: '/projects/haat/9.png', alt: 'Aerial view of the revitalized Ahmedabad Haat Street' },
      { type: 'heading', text: 'Research Methodology' },
      { type: 'paragraph', text: 'Our research team conducted:' },
      { type: 'list', items: [
        'Extensive field surveys and observational studies over 18 months',
        'Interviews with project architects, urban planners, and local stakeholders',
        'Analysis of pedestrian movement patterns and space utilization',
        'Documentation of material palettes and construction techniques',
        'Assessment of the project\'s impact on local businesses and tourism'
      ]},
      { type: 'heading', text: 'Key Research Findings' },
      { type: 'paragraph', text: 'Our analysis revealed several important insights about the project\'s success factors:' },
      { type: 'list', items: [
        'The integration of traditional Gujarati architectural elements increased cultural authenticity and local pride',
        'Pedestrianization led to a 42% increase in local business revenue',
        'The project demonstrated how sensitive urban design can preserve heritage while meeting modern needs',
        'Community engagement strategies resulted in high levels of local ownership and maintenance'
      ]},
      { type: 'heading', text: 'Recommendations for Future Projects' },
      { type: 'paragraph', text: 'Based on our research, we recommend the following approaches for similar urban revitalization projects:' },
      { type: 'list', items: [
        'Prioritize pedestrian experience while maintaining accessibility for all users',
        'Incorporate local materials and craftsmanship to support regional economies',
        'Develop flexible public spaces that can adapt to different community needs',
        'Implement sustainable maintenance models involving local stakeholders'
      ]},
      { type: 'paragraph', text: 'This research contributes to the growing body of knowledge on sustainable urban transformation in historic city centers, offering valuable lessons for urban planners and policymakers.' }
    ]
  },
  {
    id: 'vastrapur-lake',
    title: 'Research: Vastrapur Lake Revitalization',
    category: 'Urban Design Research',
    shortDescription: 'A comprehensive analysis of urban lake revitalization strategies through the case study of Vastrapur Lake, Ahmedabad.',
    mainImage: '/projects/vastrapur lake/1.png',
    date: '2023-12-10',
    author: 'Ukiyo Research Team',
    readTime: '12 min read',
    content: [
      { type: 'heading', text: 'Research Overview' },
      { type: 'paragraph', text: 'This research paper examines the successful revitalization of Vastrapur Lake in Ahmedabad as a benchmark for sustainable urban water body management. Our study focuses on the project\'s innovative approaches to balancing ecological restoration with community needs in rapidly urbanizing environments.' },
      { type: 'image', src: '/projects/vastrapur lake/1.png', alt: 'Aerial view of Vastrapur Lake after revitalization' },
      { type: 'heading', text: 'Key Research Findings' },
      { type: 'paragraph', text: 'Our analysis of the Vastrapur Lake project revealed several critical success factors in urban water body restoration:' },
      { type: 'list', items: [
        'The strategic use of native vegetation increased biodiversity by 47% within two years',
        'Permeable surfaces reduced stormwater runoff by 65% compared to conventional paving',
        'Community engagement programs resulted in a 300% increase in volunteer participation in maintenance activities',
        'The project created a model for public-private partnerships in urban environmental management'
      ]},
      { type: 'heading', text: 'Research Methodology' },
      { type: 'paragraph', text: 'Our team conducted:' },
      { type: 'list', items: [
        'Site visits and photographic documentation over a 12-month period',
        'Interviews with project stakeholders and local residents',
        'Analysis of ecological impact assessments and maintenance records',
        'Comparative study with similar urban lake projects across India'
      ]},
      { type: 'heading', text: 'Implications for Urban Planning' },
      { type: 'paragraph', text: 'This research provides valuable insights for urban planners and policymakers, demonstrating how integrated water management strategies can transform underutilized urban water bodies into valuable community assets while addressing climate resilience.' }
    ]
  }
  // Add other think tank content here
];

// Helper function to get think tank content by ID
const getThinkTankContent = (id: string) => {
  return thinkTankContent.find(item => item.id === id) || null;
};

export default function ThinkTankArticle({ params }: { params: { id: string } }) {
  type ContentBlockProps = {
    item: ContentItem;
  };
  
  const ContentBlock = ({ item }: ContentBlockProps) => {
    switch (item.type) {
      case 'heading':
        return <h2 className="text-2xl font-bold text-[#232323] mt-8 mb-4">{item.text}</h2>;
      case 'paragraph':
        return <p className="text-[#6b7280] leading-relaxed mb-4">{item.text}</p>;
      case 'image':
        return (
          <div className="my-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {item.caption && (
                  <p className="text-sm text-gray-500 text-center mt-3 italic">
                    {item.caption}
                  </p>
                )}
              </div>
              <div className="md:col-span-2">
                <div className="card-accent p-6">
                  <h3 className="heading-accent mb-3">
                    Presentation Highlights
                  </h3>
                  <p className="body-text">
                    Garima's keynote presentation at South India Talks OOH 2025 focused on integrating out-of-home media with public space design, emphasizing climate-sensitive approaches and democratic placemaking principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'list':
        return (
          <ul className="list-disc pl-6 mb-4 text-[#6b7280]">
            {item.items.map((listItem, i) => (
              <li key={i} className="mb-2">{listItem}</li>
            ))}
          </ul>
        );
      case 'link':
        return (
          <div className="my-4">
            <a 
              href={item.text} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#e7a77e] hover:text-[#d18e64] transition-colors font-semibold"
            >
              {item.label} →
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        );
      default:
        return null;
    }
  };
  const article = getThinkTankContent(params.id) || {
    id: '',
    title: '',
    category: '',
    date: '',
    author: '',
    mainImage: '',
    content: []
  };

  if (!article.id) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800">Article not found</h2>
        <Link href="/think-tank" className="text-[#e7a77e] hover:underline mt-4 inline-block">
          &larr; Back to Think Tank
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <article className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative w-full">
        {article.mainImage && (
          <div className="aspect-[16/9] md:aspect-[21/9] relative">
            <Image
              src={article.mainImage}
              alt={article.title || 'Article image'}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <span className="text-sm text-white bg-[#e7a77e] px-3 py-1 rounded-full">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">
            {article.title}
          </h1>
          <div className="flex items-center text-white/80 text-sm mt-2">
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>By {article.author}</span>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 lg:p-12">
        <div className="prose max-w-none">
          {article.content.map((item, index) => {
            switch (item.type) {
              case 'heading':
                return (
                  <h2 key={index} className="text-2xl font-bold text-[#232323] mt-8 mb-4">
                    {item.text}
                  </h2>
                );
              case 'paragraph':
                return (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {item.text}
                  </p>
                );
              case 'image':
                return (
                  <div key={index} className="my-8">
                    <div className="flex flex-col md:flex-row md:gap-10 items-center md:items-start">
                      <div className="w-full md:w-auto flex-shrink-0 flex flex-col items-center">
                        <div className="relative w-full max-w-xs md:max-w-md rounded-lg overflow-hidden shadow-lg">
                          {item.src && (
                            <div className="aspect-[3/4] relative">
                              <Image
                                src={item.src}
                                alt={item.alt || 'Content image'}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                        </div>
                        {item.caption && (
                          <p className="text-sm text-gray-500 text-center mt-3 italic max-w-xs md:max-w-md">
                            {item.caption}
                          </p>
                        )}
                      </div>
                      {article.id === 'ooh-urban-design' && (
                        <div className="w-full md:flex-1 mt-8 md:mt-0">
                          <div className="card-accent p-6 h-full flex flex-col justify-center max-w-xl mx-auto md:mx-0">
                            <h3 className="heading-accent mb-3">
                              Presentation Highlights
                            </h3>
                            <p className="body-text">
                              Garima's keynote presentation at South India Talks OOH 2025 focused on integrating out-of-home media with public space design, emphasizing climate-sensitive approaches and democratic placemaking principles.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              case 'list':
                return (
                  <ul key={index} className="list-disc pl-6 mb-4 text-gray-700">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="mb-2">{listItem}</li>
                    ))}
                  </ul>
                );
              case 'link':
                return (
                  <div key={index} className="my-4">
                    <a 
                      href={item.text} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#e7a77e] hover:text-[#d18e64] transition-colors font-semibold"
                    >
                      {item.label} →
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link 
            href="/think-tank" 
            className="inline-flex items-center text-[#e7a77e] hover:text-[#d18e64] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Think Tank
          </Link>
        </div>
      </div>
    </article>
    </div>
  );
}
