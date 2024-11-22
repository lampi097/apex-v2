import { Code2, Boxes, Cpu, Shield } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Technology({ showSpline = false }) {
  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Hybrid Architecture",
      description: "Seamlessly bridging traditional gaming with blockchain technology"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Trading",
      description: "Safe and transparent in-game asset trading powered by smart contracts"
    },
    {
      icon: <Boxes className="h-6 w-6" />,
      title: "Cross-Platform",
      description: "Play anywhere, anytime, with perfect synchronization across devices"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Advanced AI",
      description: "Next-gen AI systems for dynamic and engaging gameplay experiences"
    }
  ];

  return (
    <section id="technology" className="relative py-20">
      {showSpline ? (
        <div className="absolute inset-0">
          <Spline 
            className="w-full h-full"
            scene="https://prod.spline.design/pwskXHKa-HUVKdB7/scene.splinecode" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent"></div>
        </div>
      ) : (
        <div className="absolute inset-0 grid-background opacity-70" />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold section-title welcome-text">
            About Us
          </h2>
          <p className="mt-4 text-xl text-gray-300 section-description">
            Pushing the boundaries of what's possible in gaming
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative group bg-black/10 backdrop-blur-sm p-6 rounded-xl transition-all duration-500"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-red-600/50 via-red-900/30 to-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-red-500/80 to-red-900/80 text-white/90 shadow-lg group-hover:from-red-600/90 group-hover:to-red-900/90 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-white/90 group-hover:text-red-400/90 transition-colors duration-300">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-300/80 group-hover:text-gray-200/90 transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}