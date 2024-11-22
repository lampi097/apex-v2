import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import Technology from '../components/Technology';
import Footer from '../components/Footer';
import { Users, Target, Lightbulb } from 'lucide-react';

export default function TechnologyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Who Are We",
      description: "A pioneering game development studio at the forefront of Web3 gaming innovation. Our team combines decades of gaming industry experience with blockchain expertise to create unprecedented gaming experiences.",
      icon: <Users className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920",
      features: [
        "Industry veterans",
        "Blockchain experts",
        "Creative innovators",
        "Gaming enthusiasts"
      ]
    },
    {
      title: "Our Vision",
      description: "We envision a future where gaming transcends traditional boundaries, creating an ecosystem where players truly own their gaming experiences and digital assets have real-world value.",
      icon: <Target className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920",
      features: [
        "Decentralized gaming",
        "Player ownership",
        "Cross-platform integration",
        "Sustainable economy"
      ]
    },
    {
      title: "Apex Solutions",
      description: "Our cutting-edge technology stack powers the next generation of gaming experiences, seamlessly integrating blockchain technology with traditional gaming mechanics.",
      icon: <Lightbulb className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920",
      features: [
        "Smart contract integration",
        "Cross-chain compatibility",
        "Scalable infrastructure",
        "Advanced security"
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black">
          <Spline 
            className="w-full h-full"
            scene="https://prod.spline.design/pwskXHKa-HUVKdB7/scene.splinecode" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold welcome-text mb-6">
             Apex GameStudio
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 text-outline-sm max-w-3xl mx-auto section-description">
              Pioneering the future of gaming through innovation and technology
            </p>
          </div>
        </div>
      </div>

      {/* Extended Technology Section */}
      <Technology />

      {/* Information Sections */}
      {sections.map((section, index) => (
        <section key={section.title} className="relative py-20 z-10">
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-12`}>
              <div className="flex-1">
                <div className="bg-black/10 backdrop-blur-sm p-8 rounded-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-red-600/50 via-red-900/30 to-black/20 text-white/90">
                      {section.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold section-title welcome-text">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-300/90 mb-8 section-description">
                    {section.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 text-gray-300/80 group-hover:text-gray-200/90 transition-colors duration-300"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500/80"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-red-600/50 via-red-900/30 to-black/20 rounded-xl blur-sm group-hover:opacity-100 transition-all duration-500 opacity-75"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}