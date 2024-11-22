import { Code2, Boxes, Cpu, Shield } from 'lucide-react';

export default function Games() {
  const games = [
    {
      title: "Game Design",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&q=80&w=1920",
      description: "Building hybrid gaming experiences that seamlessly combine Web2 and Web3 technologies. Our innovative approach integrates traditional gaming mechanics with blockchain rewards, creating immersive worlds where players can truly own their achievements.",
      rarity: "legendary",
      tokenId: "#0001",
      attributes: ["Hybrid", "P2E", "Multiplayer"],
      stats: {
        innovation: 98,
        gameplay: 95,
        graphics: 92
      }
    },
    {
      title: "Platform HUB",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920",
      description: "Your premier destination for connecting with professionals. Our freelance hub revolutionizes collaboration in the freelance industry, offering secure smart contracts, milestone-based payments, and a talent-rich ecosystem.",
      rarity: "epic",
      tokenId: "#0002",
      attributes: ["Freelance", "Marketplace", "Rewards"],
      stats: {
        security: 96,
        community: 94,
        features: 90
      }
    },
    {
      title: "Decentralized Store",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1920",
      description: "A next-generation Dapp Store for digital assets. Publish and showcase your project,Dapp across multiple platforms. Features instant settlements, cross-chain compatibility, and advanced tools.",
      rarity: "rare",
      tokenId: "#0003",
      attributes: ["Publish", "Dapps", "Cross-chain"],
      stats: {
        accessibility: 93,
        security: 95,
        usability: 91
      }
    }
  ];

  return (
    <section id="games" className="relative py-20">
      <div className="absolute inset-0 cyber-grid"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold section-title welcome-text">
            Apex Studio's
          </h2>
          <p className="mt-4 text-xl text-gray-400 section-description">
            Experience the future of gaming with our innovative ecosystem
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <div
              key={game.title}
              className="group relative h-[600px]"
            >
              {/* Holographic Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-pulse rounded-xl transition-all duration-500"></div>
              
              {/* NFT Card */}
              <div className="relative bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden h-full flex flex-col">
                {/* Rarity Border */}
                <div className={`absolute inset-0 ${
                  game.rarity === 'legendary' ? 'bg-[conic-gradient(from_0deg,#ffd700,#ff4500,#9400d3,#ffd700)]' :
                  game.rarity === 'epic' ? 'bg-[conic-gradient(from_0deg,#9400d3,#ff1493,#9400d3)]' :
                  'bg-[conic-gradient(from_0deg,#4169e1,#00bfff,#4169e1)]'
                } opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

                {/* Content Container */}
                <div className="relative p-4 flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative h-[250px] overflow-hidden rounded-lg mb-4">
                    <img 
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Token ID */}
                    <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs font-mono text-white/80">
                      {game.tokenId}
                    </div>
                    
                    {/* Rarity Badge */}
                    <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                      game.rarity === 'legendary' ? 'bg-yellow-500/30 text-yellow-300 border border-yellow-500/50' :
                      game.rarity === 'epic' ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50' :
                      'bg-blue-500/30 text-blue-300 border border-blue-500/50'
                    }`}>
                      {game.rarity}
                    </div>
                  </div>

                  {/* NFT Details */}
                  <div className="flex-grow flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                        {game.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {game.description}
                      </p>
                    </div>
                    
                    {/* Stats */}
                    <div className="space-y-2">
                      {Object.entries(game.stats).map(([stat, value]) => (
                        <div key={stat} className="flex items-center justify-between">
                          <span className="text-xs text-gray-400 capitalize">{stat}</span>
                          <div className="w-32 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                game.rarity === 'legendary' ? 'bg-yellow-500' :
                                game.rarity === 'epic' ? 'bg-purple-500' :
                                'bg-blue-500'
                              }`}
                              style={{ width: `${value}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-400">{value}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Attributes */}
                    <div className="grid grid-cols-3 gap-2">
                      {game.attributes.map((attr, idx) => (
                        <div 
                          key={idx}
                          className={`px-2 py-1 rounded-full text-xs text-center ${
                            game.rarity === 'legendary' ? 'bg-yellow-500/10 text-yellow-300/90' :
                            game.rarity === 'epic' ? 'bg-purple-500/10 text-purple-300/90' :
                            'bg-blue-500/10 text-blue-300/90'
                          } backdrop-blur-sm border border-white/10`}
                        >
                          {attr}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Holographic Lines */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)] opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}