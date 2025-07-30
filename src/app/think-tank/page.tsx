import Link from 'next/link';
import Image from 'next/image';

// Think tank content data
const thinkTankContent = [
  {
    id: 'ooh-urban-design',
    title: 'OOH Advertising as Urban Design',
    category: 'Urban Experience Research',
    shortDescription: 'Exploring how Out-of-Home advertising can be reimagined as an integral part of urban design and public space experience.',
    mainImage: '/ooh-garima.jpg',
    date: '2024-01-15',
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
  }
];

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
            {thinkTankContent.map((item) => (
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
