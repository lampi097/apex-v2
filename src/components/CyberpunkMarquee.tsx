import { 
  Gamepad2, 
  Dices, 
  Trophy, 
  Sword, 
  Shield, 
  Coins, 
  Wallet, 
  Bitcoin,
  Boxes,
  Box
} from 'lucide-react';

export default function CyberpunkMarquee() {
  const messages = [
    {
      text: "HYBRID GAMING ECOSYSTEM",
      icon: <Gamepad2 className="w-6 h-6 text-purple-500" />
    },
    {
      text: "BLOCKCHAIN MEETS GAMEPLAY",
      icon: <Bitcoin className="w-6 h-6 text-purple-500" />
    },
    {
      text: "INFINITE POSSIBILITIES",
      icon: <Dices className="w-6 h-6 text-purple-500" />
    },
    {
      text: "PLAY TO EARN",
      icon: <Coins className="w-6 h-6 text-purple-500" />
    },
    {
      text: "OWN YOUR ASSETS",
      icon: <Wallet className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <div className="relative py-8 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-purple-500 shadow-[0_0_10px_#8B5CF6,0_0_20px_#8B5CF6]"></div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee-infinite whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={`group-${i}`} className="flex">
              {messages.map((item, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex items-center space-x-4 text-2xl font-bold tracking-[0.2em] mx-8"
                >
                  {item.icon}
                  <span className="bg-gradient-text">{item.text}</span>
                  <span className="text-purple-500">|</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-purple-500 shadow-[0_0_10px_#8B5CF6,0_0_20px_#8B5CF6]"></div>
      
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
}