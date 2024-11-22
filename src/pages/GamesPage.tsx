import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Games from '../components/Games';
import Footer from '../components/Footer';
import { Gamepad2, Users, Store } from 'lucide-react';

export default function GamesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: "Apex Heroes",
      description: "A competitive multiplayer arena where traditional gaming meets blockchain rewards. Experience intense battles, strategic gameplay, and earn valuable rewards.",
      icon: <Gamepad2 className="w-8 h-8" />,
      image: "/png/games/heroes.png",
      features: [
        "Cross-platform gameplay",
        "Play-to-earn mechanics",
        "NFT character skins",
        "Competitive leagues"
      ]
    },
    {
      title: "Apex Connect",
      description: "Your ultimate freelance hub for gaming professionals. Connect with developers, artists, and creators in the gaming industry.",
      icon: <Users className="w-8 h-8" />,
      image: "/png/games/connect.png",
      features: [
        "Talent marketplace",
        "Secure payments",
        "Project management",
        "Portfolio showcase"
      ]
    },
    {
      title: "Apex Store",
      description: "A decentralized Dapp Store for assets. Publish and showcase securely using blockchain technology.",
      icon: <Store className="w-8 h-8" />,
      image: "/png/games/store.png",
      features: [
        "NFT marketplace",
        "Cross-game assets",
        "Secure trading",
        "Real-time analytics"
      ]
    },
    {
      title: "Fun Games",
      description: "A decentralized PVP wager platform hosting multiple games. In the future house casino games.",
      icon: <Store className="w-8 h-8" />,
      image: "/png/games/store.png",
      features: [
        "PVP",
        "Wager",
        "Secure platform",
        "Real-time analytics"
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source 
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm" 
              type="video/webm"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold welcome-text mb-6">
              
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 text-outline-sm max-w-3xl mx-auto section-description">
              
            </p>
          </div>
        </div>
      </div>

      {/* Extended Games Section */}
      <Games />

      {/* Product Sections */}
      {products.map((product, index) => (
        <section key={product.title} className="relative py-20 z-10">
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-12`}>
              <div className="flex-1">
                <div className="bg-black/10 backdrop-blur-sm p-8 rounded-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-red-600/50 via-red-900/30 to-black/20 text-white/90">
                      {product.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold section-title welcome-text">
                      {product.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-300/90 mb-8 section-description">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.features.map((feature, idx) => (
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
                      src={product.image}
                      alt={product.title}
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