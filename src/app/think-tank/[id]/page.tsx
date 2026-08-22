import Image from 'next/image';
import Link from 'next/link';
import SEOOptimizer from '../../components/SEOOptimizer';

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
    id: 'harit-setu-blue-green-infrastructure',
    title: 'Harit Setu: Blue-Green Infrastructure Strategies for Indian Metro Cities',
    category: 'Water-Sensitive Urban Design',
    shortDescription: 'How linear green corridors and bioswales integrate stormwater management with ecological mobility across Indian urban centers.',
    mainImage: '/projects/harit-setu.jpg',
    date: '2026-08-15',
    author: 'Ukiyo Research Team',
    readTime: '11 min read',
    content: [
      { type: 'heading', text: 'Introduction: Re-engineering City Hydrology' },
      { type: 'paragraph', text: 'Indian metropolitan regions face a dual crisis every monsoon: sudden urban flooding followed by acute groundwater depletion. Traditional concrete drains flush rainwater away as wastewater, starving the water table. The Harit Setu framework proposed by Ukiyo Habitat redefines urban drainage as linear ecological corridors—transforming flood zones into active public landscapes.' },
      { 
        type: 'image',
        src: '/projects/harit-setu.jpg',
        alt: 'Harit Setu blue green infrastructure network visualization',
        caption: 'Harit Setu framework: integrating bioswales, rain gardens, and non-motorized transport along urban edges.'
      },
      { type: 'heading', text: 'Key Pillars of Blue-Green Corridors' },
      { type: 'list', items: [
        'Bioswales & Infiltration Trenches: Capturing run-off at source to naturally filter and recharge aquifers.',
        'Non-Motorized Transit (NMT) Paths: Shaded pedestrian and cycle lanes running along natural drainage paths.',
        'Native Wetland Flora: Phytoremediation using native plants like Typha and Vetiver grass to cleanse surface run-off.',
        'Micro-Climate Mitigation: Lowering ambient street temperatures by 2°C to 4°C during summer peaks.'
      ]},
      { type: 'heading', text: 'Implementation Framework for Delhi NCR & Metro Regions' },
      { type: 'paragraph', text: 'By retrofitting road rights-of-way and underutilized canal edges into Harit Setu corridors, cities reduce storm damage costs while adding high-quality recreational open spaces for dense neighborhoods.' }
    ]
  },
  {
    id: 'participatory-codesign-urban-placemaking',
    title: 'Participatory Co-Design: How Community Listening Shapes Resilient Public Spaces',
    category: 'Urban Placemaking & Research',
    shortDescription: 'Empowering citizens through collaborative mapping, co-design workshops, and community-led public space stewardship.',
    mainImage: '/projects/codesign.jpg',
    date: '2026-08-01',
    author: 'Garima Dubey',
    readTime: '9 min read',
    content: [
      { type: 'heading', text: 'Designing With People, Not Just For Them' },
      { type: 'paragraph', text: 'Public space interventions often fail when top-down blueprints ignore the daily rhythms of local residents, street vendors, elders, and children. At Ukiyo Habitat, we place participatory co-design at the center of urban placemaking—treating local communities as co-creators rather than passive end-users.' },
      { 
        type: 'image',
        src: '/projects/codesign.jpg',
        alt: 'Participatory co-design workshop with community stakeholders',
        caption: 'Co-design workshop in action: mapping neighborhood stories and spatial priorities.'
      },
      { type: 'heading', text: 'The Co-Design Process' },
      { type: 'list', items: [
        'Spatial Storytelling & Micro-Surveys: Understanding historical usage, safety concerns, and seasonal shifts.',
        'Tactical Urbanism Prototyping: Testing temporary seating, shade, and pop-up plazas before permanent construction.',
        'Inclusive Governance Models: Forming local stewardship committees for long-term maintenance and pride.'
      ]},
      { type: 'paragraph', text: 'When citizens actively shape their streets and parks, public space usage increases by over 60%, fostering safety, equity, and civic belonging.' }
    ]
  },
  {
    id: 'biophilic-workplace-campuses',
    title: 'Designing Future-Ready Workplace Campuses: Integrating Nature, Microclimates, and Commercial Value',
    category: 'Commercial Architecture & Ecology',
    shortDescription: 'How outdoor biophilic workspaces and climate-adaptive corporate landscapes boost employee productivity and property valuation.',
    mainImage: '/hero-bg-8.jpg',
    date: '2026-07-20',
    author: 'Ukiyo Design Team',
    readTime: '10 min read',
    content: [
      { type: 'heading', text: 'The Evolution of the Corporate Campus' },
      { type: 'paragraph', text: 'Modern corporate offices in Gurgaon, Noida, and Bangalore are moving beyond glass towers surrounded by asphalt parking. Today’s premier employers recognize that biophilic landscapes—outdoor meeting pods, walking loops, micro-climate shade structures, and courtyard gardens—directly improve employee mental focus, retention, and ESG sustainability metrics.' },
      { 
        type: 'image',
        src: '/hero-bg-8.jpg',
        alt: 'Modern biophilic workplace campus with outdoor green meeting spaces',
        caption: 'Biophilic corporate landscape: outdoor work zones, natural shade, and native courtyard planting.'
      },
      { type: 'heading', text: 'Commercial & Environmental ROI' },
      { type: 'list', items: [
        'Higher Dwell & Engagement Time: Employees leverage outdoor breakout spaces for collaboration.',
        'Energy Efficiency: Strategic tree shading lowers cooling loads on adjacent building glass facades by up to 18%.',
        'Increased Asset Valuation: Biophilic certified commercial properties command premium rental rates.'
      ]}
    ]
  },
  {
    id: 'climate-resilient-living',
    title: 'Climate-Resilient Living: How Landscape Architecture Can Combat El Niño Effects',
    category: 'Sustainability',
    shortDescription: 'Landscape architecture combats El Niño effects.',
    mainImage: '/hero-bg-3.jpg',
    date: '2026-06-14',
    author: 'Ukiyo Design Team',
    readTime: '8 min read',
    content: [
      { type: 'paragraph', text: 'Climate change has become a pressing issue globally, and India is no exception. The country has been experiencing severe weather conditions, including the devastating effects of El Niño. As a result, there is an increasing need for climate-resilient living, which can be achieved through innovative landscape architecture. At Ukiyo Design, we believe that well-designed outdoor spaces can help mitigate the impacts of climate change, and we are committed to creating sustainable and resilient landscapes that promote wellness and harmony with nature.' },
      { type: 'heading', text: 'Understanding El Niño Effects' },
      { type: 'paragraph', text: 'El Niño is a complex weather phenomenon that occurs when the surface temperature of the Pacific Ocean rises, leading to extreme weather events such as droughts, floods, and heatwaves. These events can have devastating effects on the environment, human health, and the economy. In India, El Niño has been linked to severe droughts, crop failures, and water shortages, highlighting the need for climate-resilient infrastructure and landscape design. By understanding the effects of El Niño, landscape architects can design outdoor spaces that are adapted to these changing weather patterns and help reduce the risks associated with them.' },
      { type: 'paragraph', text: 'Landscape architecture can play a critical role in mitigating the effects of El Niño by incorporating climate-resilient design principles. This includes the use of drought-tolerant plants, rainwater harvesting systems, and green roofs, which can help reduce the urban heat island effect and manage stormwater runoff. Additionally, landscape architects can design outdoor spaces that promote biodiversity, improve air quality, and provide shade and shelter from extreme weather events. By adopting these strategies, we can create resilient and sustainable landscapes that support human well-being and the environment.' },
      { type: 'list', items: ['Drought-tolerant plants', 'Rainwater harvesting systems', 'Green roofs', 'Permeable pavements', 'Green walls'] },
      { type: 'heading', text: 'Designing Climate-Resilient Landscapes' },
      { type: 'paragraph', text: 'Designing climate-resilient landscapes requires a holistic approach that takes into account the social, economic, and environmental factors that affect a particular region. At Ukiyo Design, we use a multidisciplinary approach that involves collaboration with architects, engineers, and environmental scientists to create sustainable and resilient landscapes. Our design process involves assessing the site\'s microclimate, soil conditions, and hydrology, as well as the local culture and community needs. By understanding these factors, we can design outdoor spaces that are adapted to the local climate and support the well-being of both people and the environment.' },
      { type: 'paragraph', text: 'One of the key principles of climate-resilient landscape design is to create outdoor spaces that are flexible and adaptable to changing weather conditions. This can be achieved through the use of modular design elements, such as movable planters and seating areas, which can be easily rearranged or removed in response to extreme weather events. Additionally, landscape architects can design outdoor spaces that incorporate multiple functions, such as parks that also serve as flood control measures or green roofs that provide insulation and reduce energy consumption. By designing landscapes that are flexible and multifunctional, we can create resilient and sustainable outdoor spaces that support human well-being and the environment.' },
      { type: 'heading', text: 'Promoting Wellness and Sustainability' },
      { type: 'paragraph', text: 'Climate-resilient landscape design is not only about mitigating the effects of climate change but also about promoting wellness and sustainability. At Ukiyo Design, we believe that outdoor spaces should be designed to support human health and well-being, while also protecting the environment. This can be achieved through the use of natural materials, incorporation of biodiversity, and creation of spaces that promote physical activity and social interaction. By designing outdoor spaces that are sustainable, resilient, and supportive of human well-being, we can create a healthier and more livable environment for future generations.' },
      { type: 'paragraph', text: 'In conclusion, climate-resilient living is essential for mitigating the effects of El Niño and promoting sustainability and wellness. At Ukiyo Design, we are committed to creating innovative and sustainable landscapes that support human well-being and the environment. By adopting climate-resilient design principles and incorporating sustainable materials and technologies, we can create outdoor spaces that are resilient, adaptable, and supportive of human health and the environment. As we move forward in an increasingly uncertain climate, it is essential that we prioritize climate-resilient landscape design and create outdoor spaces that promote wellness, sustainability, and harmony with nature.' }
    ]
  },
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
      { type: 'link', text: 'https://www.media4growth.com/events/talks-ooh-news/garima-dubey-co-founder-of-ukiyo-habitat-llp-to-address-south-india-talks-ooh-2025-76386', label: 'Media4Growth Article' },
      { type: 'paragraph', text: '📖 Read the detailed coverage of Garima\'s presentation' },
      { type: 'link', text: 'https://www.media4growth.com/events/talks-ooh-news/ooh-as-an-integral-part-of-public-space-design-garima-dubeys-vision-at-south-india-talks-ooh-76554', label: 'Garima Dubey\'s Vision at South India Talks OOH' }
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
  },
  {
    id: 'haldiram-commercial-landscape',
    title: 'Designing Commercial Landscapes: Safety, Sustainability, and Brand Impact',
    category: 'Commercial Landscape Design',
    shortDescription: 'A case study of the Haldiram landscape design at Modi Mall, Noida, exploring how thoughtful design creates safe, sustainable, and commercially successful spaces.',
    mainImage: '/projects/haldiram/1.jpg',
    date: '2025-11-21',
    author: 'Ukiyo Design Team',
    readTime: '12 min read',
    content: [
      { type: 'heading', text: 'Introduction: The New Paradigm of Commercial Landscape Design' },
      { type: 'paragraph', text: 'Commercial landscape design has evolved beyond mere aesthetics. Today\'s successful retail and commercial spaces require landscapes that balance safety, sustainability, accessibility, and commercial impact. The Haldiram landscape design at Modi Mall, Noida, exemplifies this integrated approach—creating an environment that is safe, inclusive, eco-conscious, and visually iconic while driving brand visibility and footfall.' },
      { 
        type: 'image', 
        src: '/projects/haldiram/1.jpg', 
        alt: 'Haldiram landscape design at Modi Mall, Noida',
        caption: 'The flagship landscape design for Haldiram at Modi Mall, Noida, demonstrates how thoughtful design creates safe, sustainable, and commercially successful spaces'
      },
      { type: 'heading', text: 'Safety First: Designing for All Ages and Abilities' },
      { type: 'paragraph', text: 'The foundation of the Haldiram landscape design prioritizes safety through meticulous attention to pathway detailing. Non-slip surfaces, secure railings, and gentle level changes ensure effortless navigation for senior citizens, children, and differently-abled visitors. This approach prevents falls and creates a sense of security that encourages longer visits.' },
      { type: 'list', items: [
        'Non-slip pathway materials that maintain grip even during monsoon seasons',
        'Secure railings at appropriate heights for both adults and children',
        'Gentle level changes with ramps instead of steps where possible',
        'Barrier-free movement ensuring wheelchair accessibility throughout',
        'Clear visual markers and wayfinding for easy navigation',
        'Adequate lighting for evening safety and visibility'
      ]},
      { 
        type: 'image', 
        src: '/projects/haldiram/2.png', 
        alt: 'Safe pathway design with non-slip surfaces and railings',
        caption: 'Pathway design emphasizing safety with non-slip surfaces, secure railings, and barrier-free movement'
      },
      { type: 'heading', text: 'Water Management: Eliminating Waterlogging and Mud' },
      { type: 'paragraph', text: 'One of the most critical challenges in Indian commercial landscapes is managing water during monsoon seasons. The Haldiram design addresses this through high-performance drainage systems and smart water-management solutions that eliminate waterlogging and muddy slush (kichad), keeping the site clean and accessible even during peak monsoon.' },
      { type: 'list', items: [
        'Advanced drainage systems with proper slope gradients',
        'Permeable paving materials that allow water infiltration',
        'Strategic placement of drainage points to prevent pooling',
        'Smart water-management systems that collect and reuse rainwater',
        'Maintenance-friendly design that prevents mud accumulation',
        'Year-round accessibility regardless of weather conditions'
      ]},
      { 
        type: 'image', 
        src: '/projects/haldiram/3.png', 
        alt: 'Water management systems preventing waterlogging',
        caption: 'Smart water-management systems ensure the landscape remains accessible and clean throughout the year'
      },
      { type: 'heading', text: 'Family-Friendly Design: Kids Play Zones and Social Spaces' },
      { type: 'paragraph', text: 'A dedicated kids\' play zone designed with strict safety standards adds significant family appeal to the commercial space. This creates an environment where families can spend extended time, naturally increasing dwell time and potential sales. The play area is carefully integrated with the overall design, maintaining visual coherence while prioritizing child safety.' },
      { type: 'list', items: [
        'Age-appropriate play equipment with safety-certified materials',
        'Soft-fall surfaces to prevent injury',
        'Shaded areas to protect children from sun exposure',
        'Parental supervision zones with comfortable seating',
        'Integration with overall landscape design for visual harmony',
        'Regular safety audits and maintenance protocols'
      ]},
      { 
        type: 'image', 
        src: '/projects/haldiram/4.png', 
        alt: 'Kids play area with safety-focused design',
        caption: 'A dedicated kids\' play zone designed with strict safety standards, encouraging family visits and extended stays'
      },
      { type: 'heading', text: 'Brand Building Through Visual Design' },
      { type: 'paragraph', text: 'Curated visual elements create Instagram-worthy backdrops that naturally boost the Haldiram brand\'s visibility and footfall. In today\'s social media-driven world, photogenic spaces become marketing assets, with visitors sharing their experiences online and organically promoting the brand.' },
      { type: 'list', items: [
        'Strategic placement of visually striking elements',
        'Color palettes that complement brand identity',
        'Unique architectural features that become photo destinations',
        'Seasonal planting that maintains visual interest year-round',
        'Lighting design that enhances evening photography',
        'Integration of brand elements without overwhelming the space'
      ]},
      { 
        type: 'image', 
        src: '/projects/haldiram/5.jpg', 
        alt: 'Instagram-worthy landscape design elements',
        caption: 'Curated visual elements create photogenic backdrops that enhance brand visibility and encourage social media sharing'
      },
      { type: 'heading', text: 'Sustainability: Native Plantings and Eco-Friendly Materials' },
      { type: 'paragraph', text: 'The planting palette focuses on native, low-maintenance species, integrated water-saving systems, and eco-friendly materials. This approach strengthens sustainability credentials while reducing long-term operational costs—a win-win for both environmental responsibility and business efficiency.' },
      { type: 'list', items: [
        'Native plant species adapted to local climate conditions',
        'Low-maintenance planting schemes that reduce water and care requirements',
        'Integrated water-saving systems including drip irrigation',
        'Eco-friendly materials with low environmental impact',
        'Carbon-sequestering plant selections',
        'Biodiversity support through native species selection'
      ]},
      { 
        type: 'image', 
        src: '/projects/haldiram/6.png', 
        alt: 'Sustainable native planting and eco-friendly materials',
        caption: 'Native, low-maintenance plantings and eco-friendly materials create sustainable landscapes that reduce operational costs'
      },
      { type: 'heading', text: 'Commercial Impact: Increasing Footfall and Dwell Time' },
      { type: 'paragraph', text: 'The overall strategy increases store engagement by crafting a warm, walkable, and photogenic public space that encourages families to visit, stay longer, and return frequently. Every component strikes a balance between functionality, aesthetics, accessibility, and commercial value.' },
      { type: 'list', items: [
        'Extended dwell time through comfortable, engaging spaces',
        'Increased repeat visits due to positive experience',
        'Higher footfall from word-of-mouth and social media sharing',
        'Enhanced brand perception through quality design',
        'Differentiation from competitors through unique landscape experience',
        'Long-term value creation through sustainable design practices'
      ]},
      { type: 'heading', text: 'The Future of Commercial Landscape Design' },
      { type: 'paragraph', text: 'The Haldiram landscape design represents a new standard for commercial spaces—one that recognizes landscapes as integral to business success. By prioritizing safety, sustainability, accessibility, and visual appeal, this approach creates spaces that serve multiple purposes: protecting visitors, supporting the environment, building brand identity, and driving commercial success.' },
      { type: 'paragraph', text: 'As commercial spaces continue to evolve, the integration of thoughtful landscape design will become increasingly important. The outdoor area becomes a signature, future-ready landscape that elevates both customer experience and brand identity, turning what was once considered mere exterior decoration into a strategic business asset.' },
      { type: 'heading', text: 'Conclusion: Design That Delivers' },
      { type: 'paragraph', text: 'The Haldiram landscape design at Modi Mall, Noida, demonstrates how commercial landscapes can successfully balance multiple objectives. By creating safe, sustainable, accessible, and visually compelling spaces, the design not only enhances the customer experience but also contributes to business success through increased footfall, extended dwell time, and enhanced brand perception.' },
      { type: 'paragraph', text: 'At Ukiyo Habitat, we believe that every commercial landscape should be designed with this integrated approach—where safety, sustainability, accessibility, and commercial impact work together to create spaces that are both beautiful and beneficial. The future of commercial design lies in recognizing landscapes as essential components of business strategy, not just aesthetic additions.' }
    ]
  },
  {
    id: 'extreme-heat-landscape-infrastructure',
    title: 'Designing Indian Cities for Extreme Heat: Landscape as Urban Infrastructure',
    category: 'Climate-Responsive Urban Design',
    shortDescription: 'How landscape can act as cooling infrastructure in Indian cities facing extreme heat and urban heat island effects.',
    mainImage: '/projects/bandhavgarh/front.png',
    date: '2025-05-20',
    author: 'Ukiyo Research Team',
    readTime: '10 min read',
    content: [
      { type: 'heading', text: 'Introduction: Heatwaves Are Now a Design Brief' },
      { type: 'paragraph', text: 'Every summer, Indian cities break their own temperature records. Streets shimmer, parks empty out by noon, and public spaces become hostile for anyone without a car or AC. Extreme heat is no longer a rare event—it is the new background condition we are designing in.' },
      { type: 'paragraph', text: 'As landscape and urban designers, we believe heat is not just a climate story; it is an infrastructure story. The way we plant trees, shape streets, manage water, and specify materials can either amplify the urban heat island—or quietly cool it.' },
      { type: 'heading', text: 'Heat in Indian Cities: More Than Just a Number' },
      { type: 'paragraph', text: 'In Delhi NCR, Jabalpur, Bangalore and other cities we work in, heat is wrapped up with hard, reflective surfaces, sparse tree cover, stored daytime heat, broken shade, and zero-infiltration paving. When we design only for roads, parking, and building footprints, we ignore a powerful toolset for cooling: landscape.' },
      { type: 'list', items: [
        'Endless concrete, granite, and metal that store and radiate heat',
        'Sparse or poorly placed tree cover along streets and plazas',
        'Materials that release heat late into the night, keeping neighbourhoods hot',
        'Fragmented pockets of shade instead of continuous shaded routes',
        'Surfaces that repel rainwater instead of letting it soak and cool the soil'
      ]},
      { 
        type: 'image',
        src: '/projects/bandhavgarh/front.png',
        alt: 'Bandhavgarh landscape demonstrating layered planting for cooler micro-climate',
        caption: 'Bandhavgarh landscape: layered native planting that cools and restores the forest edge micro-climate.'
      },
      { type: 'heading', text: 'Landscape as Cooling Infrastructure' },
      { type: 'paragraph', text: 'Landscape is often treated as an afterthought—something green to be “added” once the building and roads are done. In reality, it can function as a distributed cooling system running across the city.' },
      { type: 'list', items: [
        'Shade trees as micro-climate machines along streets, plazas, and building edges',
        'Permeable, planted ground instead of dark, continuous blacktop',
        'Water edges and rills that cool adjacent spaces when paired with planting and airflow',
        'Wind corridors created by aligning openings, setbacks, and tree placement with prevailing winds'
      ]},
      { type: 'heading', text: 'Lessons from Our Work' },
      { type: 'paragraph', text: 'In Bandhavgarh, along the forest fringes, dense native planting and layered canopy re-created forest edge conditions, naturally cooling the site while supporting biodiversity. At Vastrapur Lake, shaded seating loops, vegetated buffers and gentle topography make the waterfront usable beyond early morning and late evening.' },
      { type: 'paragraph', text: 'At Haldiram in Modi Mall, Noida, micro-climate design directly supports commercial goals: non-slip, light-toned paving that stays cooler, shade along approach routes, and drainage that avoids waterlogging and “kichad” even during storms.' },
      { type: 'heading', text: 'Five Principles for Heat-Resilient Indian Cities' },
      { type: 'list', items: [
        'Start with shade, not shrubs—tree canopy planning should lead the brief.',
        'Design for 1 pm in May, not 7 pm in December—test sections and materials for peak heat.',
        'Use water carefully and visibly—well-designed, well-aerated water bodies paired with shade and seating.',
        'Let soil breathe—maximise permeable surfaces to cool cities and support groundwater.',
        'Measure comfort, not just temperature—consider shade, breeze, glare, surface temperature, and time-of-day use.'
      ]},
      { type: 'heading', text: 'Conclusion: Cooling Is a Design Choice' },
      { type: 'paragraph', text: 'Indian cities will continue to get hotter. But how hot our streets, plazas, campuses, and housing edges feel is not inevitable. It is the result of thousands of design decisions about trees, pavements, water, and built form.' },
      { type: 'paragraph', text: 'When we treat landscape as infrastructure, we gain a quiet, resilient toolkit to cool cities beautifully and affordably. At Ukiyo Habitat, this is the lens we bring to every project—from forest edges to food courts, from residential complexes to public lakes.' }
    ]
  },
  {
    id: 'retail-public-realm-footfall',
    title: 'From Parking Lots to Public Realms: How Landscape Design Increases Footfall for Indian Retail',
    category: 'Commercial Landscape Strategy',
    shortDescription: 'Using landscape and public realm design to turn retail sites into destinations that increase dwell time, comfort, and brand visibility.',
    mainImage: '/projects/kake.jpg',
    date: '2025-09-15',
    author: 'Ukiyo Design Team',
    readTime: '9 min read',
    content: [
      { type: 'heading', text: 'Introduction: Retail Is Competing on Experience' },
      { type: 'paragraph', text: 'In Indian cities, malls and high streets are no longer competing only on brands and discounts. They are competing on experience—where families can comfortably spend a few hours, where kids have space to move, and where elders feel safe and oriented.' },
      { type: 'paragraph', text: 'Landscape—the space between car and shopfront—is becoming a powerful differentiator. A thoughtful exterior can quietly move a site from a pure parking lot to a true public realm.' },
      { 
        type: 'image',
        src: '/projects/haldiram/1.jpg',
        alt: 'Haldiram landscape at Modi Mall, Noida, illustrating retail public realm',
        caption: 'Haldiram at Modi Mall, Noida: landscape as an extension of the brand and public realm.'
      },
      { type: 'heading', text: 'The Invisible Journey: Car Door to Cash Counter' },
      { type: 'paragraph', text: 'Most retail journeys share the same basic steps: arrive, navigate parking or drop-off, walk to the entrance, transition inside, and decide whether to linger or leave. If this outdoor experience is hot, confusing, flooded, dusty, or uncomfortable, the brand starts with a trust deficit before anyone sees a single product.' },
      { type: 'heading', text: 'Haldiram at Modi Mall, Noida: Landscape as Brand Amplifier' },
      { type: 'paragraph', text: 'Our proposal for Haldiram at Modi Mall approached landscape as part of the brand experience, not an add-on. Safe, non-slip pathways make movement easy for seniors and children; drainage design prevents waterlogging and muddy “kichad”; and family-friendly pockets with kids’ play and seating encourage longer stays.' },
      { type: 'list', items: [
        'Non-slip, light-toned paving that stays cooler and safer underfoot',
        'Shaded approaches that protect visitors from heat while queuing or waiting',
        'Kids’ play zones that integrate visually with the overall design',
        'Composed views and planting that naturally encourage photo moments and sharing'
      ]},
      { type: 'heading', text: 'Kake Da Hotel: Interior Edges as Experience' },
      { type: 'paragraph', text: 'Inside Kake Da Hotel at Ambience Mall, Vasant Kunj, interior “landscape” also shapes experience. A contemporary interpretation of Punjabi dhaba culture, warm materials and lighting, and intuitive circulation all contribute to the space becoming one of the mall’s most photographed dining destinations.' },
      { type: 'heading', text: 'Why Landscape Matters for Footfall' },
      { type: 'list', items: [
        'Extends dwell time through comfortable shaded seating and play pockets',
        'Encourages social media sharing with distinctive, photogenic corners',
        'Signals care and safety through good lighting, planting, and clear paths',
        'Softly buffers chaotic roads and parking from the calmer retail core'
      ]},
      { type: 'heading', text: 'Four Design Moves for Retail Landscapes' },
      { type: 'list', items: [
        'Treat entry as a sequence, not just a door—design the entire arrival journey.',
        'Design for the non-shopper—make grandparents, kids, and companions comfortable.',
        'Use planting as signage and zoning—guide movement without heavy-handed barriers.',
        'Plan for monsoon from day one—no flooding, mud, or awkward stepping-stones.'
      ]},
      { type: 'heading', text: 'Conclusion: The Public Realm Is Part of the Brand' },
      { type: 'paragraph', text: 'For Indian retail—especially F&B and experience-led brands—the space outside the door is not neutral. It can either leak value or quietly generate it.' },
      { type: 'paragraph', text: 'By investing in landscape as public realm, brands like Haldiram and Kake Da Hotel can turn sites into destinations that people remember, photograph, and return to. At Ukiyo Habitat, we see this edge space as a shared canvas between brand, city, and everyday life.' }
    ]
  },
  {
    id: 'election-ooh-better-cities',
    title: 'Can Political Advertising Make Better Cities? Rethinking OOH During Election Season',
    category: 'Public Space & Media',
    shortDescription: 'A critical look at how election-season OOH could double as public infrastructure instead of visual clutter in Indian cities.',
    mainImage: '/ooh-garima-1.jpg',
    date: '2025-04-30',
    author: 'Garima Dubey',
    readTime: '8 min read',
    content: [
      { type: 'heading', text: 'Introduction: When Cities Turn Into Billboards' },
      { type: 'paragraph', text: 'Every election season, Indian cities transform. Flyovers, medians, and roundabouts are draped in banners, flags, and flex. Political messaging becomes the dominant street language.' },
      { type: 'paragraph', text: 'Most of this out-of-home (OOH) media is treated as a necessary visual mess—something we tolerate until it is cleared away. But what if we used this enormous investment differently? Instead of asking only “How do we remove clutter?”, we can ask: how can all this visibility also serve public space?' },
      { 
        type: 'image',
        src: '/ooh-garima.jpg',
        alt: 'OOH talk exploring public space and advertising',
        caption: 'Exploring how OOH can move from visual noise to public asset in Indian cities.'
      },
      { type: 'heading', text: 'From Disruption to Contribution' },
      { type: 'paragraph', text: 'In her talk at South India Talks OOH 2025, our co-founder Garima Dubey described a future where OOH is not an interruption but a quiet character that changes the plot. Applied to election season, this could mean hoardings that provide shade, structures that include seating or rain protection, and media elements that double as wayfinding or civic information.' },
      { type: 'heading', text: 'Election Media as Temporary Urban Infrastructure' },
      { type: 'paragraph', text: 'Election cycles pour enormous money and materials into the city surface—poles, frames, gantries, flex, lighting, kiosks. Instead of treating all of this as single-use visual noise, cities could demand that OOH structures contribute physically to public life.' },
      { type: 'list', items: [
        'Design guidelines that require media structures to provide shade, seating, bike racks, or planters',
        'Modular systems that can be re-skinned with new campaigns but remain as public amenities',
        'Party-agnostic infrastructure where the structure stays, but messages change over time'
      ]},
      { type: 'heading', text: 'What This Could Look Like' },
      { type: 'paragraph', text: 'Imagine election banners mounted on a continuous shaded walkway with seating every 50 metres; gantry frames over intersections that incorporate safe pedestrian crossings and legible wayfinding; or party flags mounted on solar-powered light poles that stay as improved lighting long after the campaign ends.' },
      { type: 'heading', text: 'Risks and Design Responsibilities' },
      { type: 'paragraph', text: 'This vision is not simple. It comes with real risks: visual dominance of one party in critical civic spaces, the danger of normalising permanent political messaging, and questions of maintenance and ownership once campaigns end.' },
      { type: 'list', items: [
        'Clearly separate time-bound messaging from long-term infrastructure in design and regulation.',
        'Ensure equitable access to prominent sites via transparent policies.',
        'Build removal, reuse, and retrofitting into every OOH structure brief.'
      ]},
      { type: 'heading', text: 'From OOH as Expense to OOH as Investment' },
      { type: 'paragraph', text: 'For political parties and brands alike, OOH is a recurring cost. If every major campaign left behind better-lit streets, cooler shaded sidewalks, clearer wayfinding, or small but meaningful amenities, that spend would become part of the city’s public good.' },
      { type: 'paragraph', text: 'OOH vendors, designers, and urban bodies could co-create a catalogue of dual-use formats: each media type paired with a physical benefit.' },
      { type: 'heading', text: 'Conclusion: Designing the Democracy We See' },
      { type: 'paragraph', text: 'Election seasons reveal what our cities look like when visibility becomes the only priority. As urban and landscape designers, we cannot simply wish advertising away—but we can insist that if it occupies our shared air and ground, it should also give something back.' },
      { type: 'paragraph', text: 'At Ukiyo Habitat, we see this as part of a larger question: can every layer of the city—even the most temporary—be designed to support climate, community, and dignity?' }
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
    shortDescription: '',
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
    <>
      <SEOOptimizer
        type="article"
        title={article.title}
        description={article.shortDescription}
        image={article.mainImage}
        author={article.author}
        publishedTime={article.date}
        modifiedTime={article.date}
        section={article.category}
        tags={[]}
      />
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
    </>
  );
}
