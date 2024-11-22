import { useState, useEffect } from 'react';
import { Gamepad2 } from 'lucide-react';
import Spline from '@splinetool/react-spline';

interface HeroProps {
  onLoadingComplete: () => void;
  showLoading: boolean;
}

export default function Hero({ onLoadingComplete, showLoading }: HeroProps) {
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [showContent, setShowContent] = useState(!showLoading);
  const [showTitle, setShowTitle] = useState(!showLoading);
  const [showSubtitle, setShowSubtitle] = useState(!showLoading);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sceneLoaded && showLoading) {
      const duration = 2000;
      const interval = 10;
      const steps = duration / interval;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setProgress((currentStep / steps) * 100);
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setShowContent(true);
          onLoadingComplete();
          setTimeout(() => setShowTitle(true), 1500);
          setTimeout(() => setShowSubtitle(true), 2500);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [sceneLoaded, showLoading, onLoadingComplete]);

  function onLoad() {
    setSceneLoaded(true);
  }

  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className={`absolute inset-0 bg-black transition-opacity duration-1500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Spline 
          className="w-full h-full"
          scene="https://prod.spline.design/5SsaEMDXfHkFfAgb/scene.splinecode"
          onLoad={onLoad}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 transition-opacity duration-1500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-extrabold">
            <span className={`block welcome-text mb-4 transition-all duration-1000 ease-out transform ${
              showTitle 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-10'
            }`}>
              Welcome to
            </span>
            <span className={`block text-red-600 studio-text transform transition-all duration-1000 ease-out ${
              showTitle 
                ? 'opacity-100 translate-y-0 hover:scale-105' 
                : 'opacity-0 translate-y-10'
            }`}>
              Apex GameStudio
            </span>
          </h1>
          <div className={`max-w-3xl mx-auto space-y-6 transition-all duration-1000 ease-out ${
            showSubtitle 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 text-outline leading-relaxed">
              Pioneering the future of gaming with seamless integration of Web2 and Web3 technologies.
            </p>
            <p className="text-lg md:text-xl text-gray-400 text-outline-sm">
              Create, play, and own your gaming experience in ways never before possible.
            </p>
          </div>
        </div>
      </div>

      {showLoading && !showContent && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 bg-black">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border-4 border-red-600/30"></div>
            
            <div className="absolute inset-0 animate-spin">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 border-t-4 border-red-600"
                  style={{
                    transform: `rotate(${i * 90}deg)`,
                    clipPath: 'polygon(50% 50%, 45% 0, 55% 0)'
                  }}
                ></div>
              ))}
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <Gamepad2 className="w-12 h-12 text-red-600 animate-pulse" />
            </div>
          </div>

          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-600 transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-red-600 font-mono">
            Loading: {Math.round(progress)}%
          </div>
        </div>
      )}
    </div>
  );
}