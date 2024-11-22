import { Twitter, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 bg-black">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1635241161466-541f065683ba?auto=format&fit=crop&q=80&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
        </div>

        <div className="absolute inset-0 grid-background opacity-30"></div>

        <div className="absolute left-8 bottom-8 w-48 h-48 rounded-xl overflow-hidden">
          <img 
            src="/images/footer/left-image.png" 
            alt="Left Footer Art"
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        
        <div className="absolute right-8 bottom-8 w-48 h-48 rounded-xl overflow-hidden">
          <img 
            src="/images/footer/right-image.png" 
            alt="Right Footer Art"
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <button className="mb-8 relative h-[120px] w-[360px] overflow-hidden bg-white/90 rounded-full transition-all duration-300 hover:bg-white active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center">
              <img 
                src="/png/apex-logo.png" 
                alt="Apex Game Studio" 
                className="h-33 w-auto"
              />
            </button>
            
            <div className="flex space-x-8 mb-8">
              {[
                { icon: <Twitter className="h-6 w-6" />, href: "https://x.com/Apex_Studi0" },
                { icon: <Youtube className="h-6 w-6" />, href: "https://www.youtube.com/@ApexStudio-i4h" },
                { icon: <MessageCircle className="h-6 w-6" />, href: "https://t.me/+uJlfpEHhjZ8yNmM0" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="relative group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
            
            <div className="relative text-center">
              <div className="relative space-y-2">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Apex Game Studio. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs">
                  <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                    Pioneering the Future of Gaming
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-red-500/50 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-red-500/50 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-red-500/50 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
}