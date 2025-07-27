import Image from 'next/image';
import Link from 'next/link';

type ContentItem = 
  | { type: 'heading' | 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'list'; items: string[] };

interface ThinkTankItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  mainImage: string;
  date: string;
  author: string;
  content: ContentItem[];
}

// Import the think tank content from the main page
const thinkTankContent: ThinkTankItem[] = [
  {
    id: 'ahmedabad-haat-street',
    title: 'Research: Ahmedabad Haat Street Revitalization',
    category: 'Urban Design Research',
    shortDescription: 'An in-depth analysis of urban street revitalization through the lens of Ahmedabad\'s Haat Street transformation.',
    mainImage: '/projects/haat/9.png',
    date: '2023-11-20',
    author: 'Ukiyo Research Team',
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
          <div className="my-6">
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
            {item.caption && (
              <p className="text-sm text-gray-500 text-center mt-2">
                {item.caption}
              </p>
            )}
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
    <article className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-96 w-full">
        {article.mainImage && (
          <Image
            src={article.mainImage}
            alt={article.title || 'Article image'}
            fill
            className="object-cover"
          />
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
                    <div className="relative h-80 w-full rounded-lg overflow-hidden">
                      {item.src && (
                        <Image
                          src={item.src}
                          alt={item.alt || 'Content image'}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    {item.caption && (
                      <p className="text-sm text-gray-500 text-center mt-2">
                        {item.caption}
                      </p>
                    )}
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
  );
}
