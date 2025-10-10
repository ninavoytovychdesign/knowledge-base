import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Затримка для появи після опису в Hero секції
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const projects = [
    {
      id: 1,
      title: "Nova Post",
      description: "Comprehensive UX research of the business account dashboard aimed at identifying user pain points",
      size: "large"
    },
    {
      id: 2,
      title: "HealthPad",
      description: "A self-initiated mobile application — a digital health record for the whole family",
      size: "small"
    },
    {
      id: 3,
      title: "Vertex Studio",
      description: "A visual identity and website concept for a creative studio, showcasing a modern and elegant approach",
      size: "large"
    },
    {
      id: 4,
      title: "Riverton Group",
      description: "A complete redesign of the brand identity and landing page, supported by UX research",
      size: "small"
    },
    {
      id: 5,
      title: "DobraMama",
      description: "A full redesign of the e-commerce platform focused on improving mobile usability, optimizing user flows",
      size: "large"
    },
    {
      id: 6,
      title: "Open Kharkiv",
      description: "A redesign of a civic technology mobile application, improving usability, streamlining flows",
      size: "small"
    }
  ];

  const getCardSize = (size) => {
    return size === "large" ? "w-[888px] h-[396px]" : "w-[432px] h-[396px]";
  };

  return (
    <section className="py-20 pt-[60px]">
      <div className="max-w-screen-xl mx-auto px-12">
        {/* Ряд 1: Nova Post (ліва, довга) + HealthPad (права, коротка) */}
        <div className={`grid grid-cols-[888px_432px] gap-[16px] justify-center mb-[16px] transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`gradient-border shadow-sm p-[24px] px-[32px] ${getCardSize(projects[0].size)} relative overflow-hidden group hover:bg-[#DA292B] slow-hover`}>
            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[28px] font-medium text-textPrimary font-poppins leading-[120%] group-hover:text-white slow-hover">
                  {projects[0].title}
                </h3>
                <button className="w-12 h-12 border border-[#333333] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-white transition-all duration-200 ease-in-out">
                  <ArrowRight className="w-6 h-6 text-textSecondary group-hover:text-white transition-colors duration-200 ease-in-out" />
                </button>
              </div>
              <p className="text-[16px] font-normal text-textSecondary font-poppins leading-[130%] max-w-[368px] group-hover:text-white slow-hover">
                {projects[0].description}
              </p>
            </div>
            
            {/* MacBook Mockup Images */}
            {/* Main MacBook - Front View */}
            <div className="absolute bottom-0 right-0 w-[320px] h-[220px] opacity-25 z-0">
              <svg 
                viewBox="0 0 320 220" 
                className="w-full h-full"
                fill="none"
              >
                {/* MacBook Base - більш реалістичний */}
                <rect 
                  x="15" 
                  y="140" 
                  width="290" 
                  height="70" 
                  rx="12" 
                  fill="#1A1A1A" 
                  stroke="#333333" 
                  strokeWidth="1.5"
                />
                
                {/* MacBook Screen - сучасні пропорції */}
                <rect 
                  x="25" 
                  y="10" 
                  width="270" 
                  height="160" 
                  rx="8" 
                  fill="#000000" 
                  stroke="#333333" 
                  strokeWidth="1.5"
                />
                
                {/* Screen Bezel */}
                <rect 
                  x="30" 
                  y="15" 
                  width="260" 
                  height="150" 
                  rx="6" 
                  fill="#0A0A0A"
                />
                
                {/* Screen Content - Nova Post Dashboard */}
                <rect 
                  x="35" 
                  y="20" 
                  width="250" 
                  height="140" 
                  rx="4" 
                  fill="#1A1A1A"
                />
                
                {/* Top Bar */}
                <rect x="40" y="25" width="240" height="12" rx="2" fill="#2B2B2B" />
                
                {/* Navigation */}
                <rect x="45" y="30" width="40" height="6" rx="1" fill="#4A4A4A" />
                <rect x="90" y="30" width="35" height="6" rx="1" fill="#4A4A4A" />
                <rect x="130" y="30" width="30" height="6" rx="1" fill="#4A4A4A" />
                
                {/* Main Content Area */}
                <rect x="45" y="45" width="230" height="8" rx="1" fill="#333333" />
                <rect x="45" y="58" width="180" height="6" rx="1" fill="#555555" />
                <rect x="45" y="68" width="200" height="6" rx="1" fill="#555555" />
                
                {/* Dashboard Cards */}
                <rect x="50" y="85" width="70" height="35" rx="3" fill="#2B2B2B" stroke="#333333" strokeWidth="0.5" />
                <rect x="125" y="85" width="70" height="35" rx="3" fill="#2B2B2B" stroke="#333333" strokeWidth="0.5" />
                <rect x="200" y="85" width="70" height="35" rx="3" fill="#2B2B2B" stroke="#333333" strokeWidth="0.5" />
                
                {/* Card Content */}
                <rect x="55" y="90" width="25" height="4" rx="1" fill="#4A4A4A" />
                <rect x="55" y="98" width="15" height="3" rx="0.5" fill="#666666" />
                <rect x="55" y="105" width="20" height="3" rx="0.5" fill="#666666" />
                
                <rect x="130" y="90" width="25" height="4" rx="1" fill="#4A4A4A" />
                <rect x="130" y="98" width="15" height="3" rx="0.5" fill="#666666" />
                <rect x="130" y="105" width="20" height="3" rx="0.5" fill="#666666" />
                
                <rect x="205" y="90" width="25" height="4" rx="1" fill="#4A4A4A" />
                <rect x="205" y="98" width="15" height="3" rx="0.5" fill="#666666" />
                <rect x="205" y="105" width="20" height="3" rx="0.5" fill="#666666" />
                
                {/* Bottom Status Bar */}
                <rect x="45" y="130" width="230" height="8" rx="1" fill="#2B2B2B" />
                <rect x="50" y="133" width="40" height="3" rx="0.5" fill="#4A4A4A" />
                <rect x="95" y="133" width="30" height="3" rx="0.5" fill="#4A4A4A" />
                <rect x="130" y="133" width="35" height="3" rx="0.5" fill="#4A4A4A" />
                
                {/* MacBook Logo - сучасний */}
                <rect x="150" y="155" width="20" height="2" rx="1" fill="#333333" />
                
                {/* Trackpad */}
                <rect x="120" y="150" width="80" height="50" rx="8" fill="#1A1A1A" stroke="#333333" strokeWidth="1" />
                
                {/* Keyboard Area */}
                <rect x="40" y="150" width="240" height="8" rx="1" fill="#2B2B2B" />
                
                {/* Keyboard Keys */}
                <rect x="45" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                <rect x="55" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                <rect x="65" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                <rect x="75" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                <rect x="85" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                <rect x="95" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                <rect x="105" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                
                {/* Screen Reflection */}
                <rect x="35" y="20" width="250" height="140" rx="4" fill="url(#screenGradient)" opacity="0.1" />
                
                <defs>
                  <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* MacBook Side View - Left */}
            <div className="absolute bottom-8 left-8 w-[200px] h-[140px] opacity-20 z-0">
              <svg 
                viewBox="0 0 200 140" 
                className="w-full h-full"
                fill="none"
              >
                {/* MacBook Side View */}
                <rect 
                  x="20" 
                  y="60" 
                  width="160" 
                  height="60" 
                  rx="8" 
                  fill="#1A1A1A" 
                  stroke="#333333" 
                  strokeWidth="1"
                />
                
                {/* Screen Side */}
                <rect 
                  x="30" 
                  y="20" 
                  width="140" 
                  height="80" 
                  rx="6" 
                  fill="#000000" 
                  stroke="#333333" 
                  strokeWidth="1"
                />
                
                {/* Screen Content Side */}
                <rect 
                  x="35" 
                  y="25" 
                  width="130" 
                  height="70" 
                  rx="3" 
                  fill="#1A1A1A"
                />
                
                {/* Side Screen Elements */}
                <rect x="40" y="30" width="60" height="6" rx="1" fill="#333333" />
                <rect x="40" y="40" width="40" height="4" rx="0.5" fill="#555555" />
                <rect x="40" y="48" width="50" height="4" rx="0.5" fill="#555555" />
                <rect x="40" y="56" width="35" height="4" rx="0.5" fill="#555555" />
                
                {/* Side Cards */}
                <rect x="50" y="65" width="30" height="20" rx="2" fill="#2B2B2B" />
                <rect x="85" y="65" width="30" height="20" rx="2" fill="#2B2B2B" />
                <rect x="120" y="65" width="30" height="20" rx="2" fill="#2B2B2B" />
              </svg>
            </div>

            {/* MacBook Angled View - Top Right */}
            <div className="absolute top-8 right-8 w-[180px] h-[120px] opacity-15 z-0">
              <svg 
                viewBox="0 0 180 120" 
                className="w-full h-full"
                fill="none"
              >
                {/* MacBook Angled Base */}
                <rect 
                  x="15" 
                  y="80" 
                  width="150" 
                  height="35" 
                  rx="6" 
                  fill="#1A1A1A" 
                  stroke="#333333" 
                  strokeWidth="1"
                />
                
                {/* MacBook Angled Screen */}
                <rect 
                  x="25" 
                  y="15" 
                  width="130" 
                  height="90" 
                  rx="6" 
                  fill="#000000" 
                  stroke="#333333" 
                  strokeWidth="1"
                />
                
                {/* Angled Screen Content */}
                <rect 
                  x="30" 
                  y="20" 
                  width="120" 
                  height="80" 
                  rx="3" 
                  fill="#1A1A1A"
                />
                
                {/* Angled Screen Elements */}
                <rect x="35" y="25" width="50" height="5" rx="1" fill="#333333" />
                <rect x="35" y="35" width="30" height="3" rx="0.5" fill="#555555" />
                <rect x="35" y="42" width="40" height="3" rx="0.5" fill="#555555" />
                
                {/* Angled Cards */}
                <rect x="40" y="50" width="25" height="15" rx="1" fill="#2B2B2B" />
                <rect x="70" y="50" width="25" height="15" rx="1" fill="#2B2B2B" />
                <rect x="100" y="50" width="25" height="15" rx="1" fill="#2B2B2B" />
                
                {/* Angled Trackpad */}
                <rect x="60" y="85" width="60" height="25" rx="4" fill="#1A1A1A" stroke="#333333" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          
          <div className={`gradient-border shadow-sm p-[24px] px-[32px] ${getCardSize(projects[1].size)} relative overflow-hidden group hover:bg-[#11B6E2] slow-hover`}>
            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[28px] font-medium text-textPrimary font-poppins leading-[120%] group-hover:text-white slow-hover">
                  {projects[1].title}
                </h3>
                <button className="w-12 h-12 border border-[#333333] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-white transition-all duration-200 ease-in-out">
                  <ArrowRight className="w-6 h-6 text-textSecondary group-hover:text-white transition-colors duration-200 ease-in-out" />
                </button>
              </div>
              <p className="text-[16px] font-normal text-textSecondary font-poppins leading-[130%] group-hover:text-white slow-hover">
                {projects[1].description}
              </p>
            </div>
            
            {/* iPhone Mockup Image */}
            <div className="absolute bottom-0 right-0 w-[120px] h-[200px] opacity-25 z-0">
              <svg 
                viewBox="0 0 120 200" 
                className="w-full h-full"
                fill="none"
              >
                {/* iPhone Body */}
                <rect 
                  x="10" 
                  y="20" 
                  width="100" 
                  height="160" 
                  rx="20" 
                  fill="#1A1A1A" 
                  stroke="#333333" 
                  strokeWidth="1.5"
                />
                
                {/* Screen */}
                <rect 
                  x="15" 
                  y="30" 
                  width="90" 
                  height="140" 
                  rx="15" 
                  fill="#000000" 
                  stroke="#333333" 
                  strokeWidth="1"
                />
                
                {/* Screen Content - HealthPad App */}
                <rect 
                  x="18" 
                  y="33" 
                  width="84" 
                  height="134" 
                  rx="12" 
                  fill="#1A1A1A"
                />
                
                {/* Status Bar */}
                <rect x="20" y="35" width="80" height="8" rx="1" fill="#2B2B2B" />
                
                {/* Time */}
                <rect x="22" y="37" width="12" height="3" rx="0.5" fill="#4A4A4A" />
                
                {/* Battery */}
                <rect x="85" y="37" width="8" height="3" rx="0.5" fill="#4A4A4A" />
                
                {/* App Header */}
                <rect x="20" y="50" width="80" height="12" rx="2" fill="#2B2B2B" />
                <rect x="25" y="53" width="30" height="4" rx="1" fill="#4A4A4A" />
                
                {/* Health Records List */}
                <rect x="20" y="70" width="80" height="8" rx="1" fill="#333333" />
                <rect x="20" y="82" width="60" height="6" rx="1" fill="#555555" />
                <rect x="20" y="92" width="70" height="6" rx="1" fill="#555555" />
                
                <rect x="20" y="105" width="80" height="8" rx="1" fill="#333333" />
                <rect x="20" y="117" width="50" height="6" rx="1" fill="#555555" />
                <rect x="20" y="127" width="65" height="6" rx="1" fill="#555555" />
                
                <rect x="20" y="140" width="80" height="8" rx="1" fill="#333333" />
                <rect x="20" y="152" width="55" height="6" rx="1" fill="#555555" />
                
                {/* Home Indicator */}
                <rect x="45" y="185" width="30" height="3" rx="1.5" fill="#333333" />
              </svg>
            </div>
          </div>
        </div>

        {/* Ряд 2: Riverton Group (ліва, коротка) + Vertex Studio (права, довга) */}
        <div className={`grid grid-cols-[432px_888px] gap-[16px] justify-center mb-[16px] transition-all duration-1000 ease-out delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`gradient-border shadow-sm p-[24px] px-[32px] ${getCardSize(projects[3].size)} group hover:bg-[#103FD3] slow-hover`}>
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[28px] font-medium text-textPrimary font-poppins leading-[120%] group-hover:text-white slow-hover">
                  {projects[3].title}
                </h3>
                <button className="w-12 h-12 border border-[#333333] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-white transition-all duration-200 ease-in-out">
                  <ArrowRight className="w-6 h-6 text-textSecondary group-hover:text-white transition-colors duration-200 ease-in-out" />
                </button>
              </div>
              <p className="text-[16px] font-normal text-textSecondary font-poppins leading-[130%] group-hover:text-white slow-hover">
                {projects[3].description}
              </p>
            </div>
          </div>
          
          <div className={`gradient-border shadow-sm p-[24px] px-[32px] ${getCardSize(projects[2].size)} relative overflow-hidden group hover:bg-[#3EA3A9] slow-hover`}>
            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[28px] font-medium text-textPrimary font-poppins leading-[120%] group-hover:text-white slow-hover">
                  {projects[2].title}
                </h3>
                <button className="w-12 h-12 border border-[#333333] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-white transition-all duration-200 ease-in-out">
                  <ArrowRight className="w-6 h-6 text-textSecondary group-hover:text-white transition-colors duration-200 ease-in-out" />
                </button>
              </div>
              <p className="text-[16px] font-normal text-textSecondary font-poppins leading-[130%] max-w-[368px] group-hover:text-white slow-hover">
                {projects[2].description}
              </p>
            </div>
            
            {/* Vertex Studio Mockup Image */}
            <div className="absolute left-[503px] top-[41px] w-[456px] h-[496px] z-0 transition-all duration-[700ms] ease-in-out group-hover:left-[356px] group-hover:top-[50%] group-hover:-translate-y-1/2 group-hover:rotate-[15deg]">
              <img 
                src="/mockups/vertex.png" 
                alt="Vertex Studio Website Mockup"
                className="w-full h-full object-contain opacity-100"
                onError={(e) => {
                  console.log('Image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('Image loaded successfully');
                }}
              />
            </div>
          </div>
        </div>

        {/* Ряд 3: DobraMama (ліва, довга) + Open Kharkiv (права, коротка) */}
        <div className={`grid grid-cols-[888px_432px] gap-[16px] justify-center transition-all duration-1000 ease-out delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`gradient-border shadow-sm p-[24px] px-[32px] ${getCardSize(projects[4].size)} relative overflow-hidden hover:bg-[#DA292B] slow-hover`}>
            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[28px] font-medium text-textPrimary font-poppins leading-[120%]">
                  {projects[4].title}
                </h3>
                <button className="w-12 h-12 border border-[#333333] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-white transition-all duration-200 ease-in-out">
                  <ArrowRight className="w-6 h-6 text-textSecondary group-hover:text-white transition-colors duration-200 ease-in-out" />
                </button>
              </div>
              <p className="text-[16px] font-normal text-textSecondary font-poppins leading-[130%] max-w-[368px]">
                {projects[4].description}
              </p>
            </div>
            
            {/* MacBook Mockup Images */}
            {/* Main MacBook - Front View */}
            <div className="absolute bottom-0 right-0 w-[320px] h-[220px] opacity-25 z-0">
              <svg 
                viewBox="0 0 320 220" 
                className="w-full h-full"
                fill="none"
              >
                {/* MacBook Base - більш реалістичний */}
                <rect 
                  x="15" 
                  y="140" 
                  width="290" 
                  height="70" 
                  rx="12" 
                  fill="#1A1A1A" 
                  stroke="#333333" 
                  strokeWidth="1.5"
                />
                
                {/* MacBook Screen - сучасні пропорції */}
                <rect 
                  x="25" 
                  y="10" 
                  width="270" 
                  height="160" 
                  rx="8" 
                  fill="#000000" 
                  stroke="#333333" 
                  strokeWidth="1.5"
                />
                
                {/* Screen Bezel */}
                <rect 
                  x="30" 
                  y="15" 
                  width="260" 
                  height="150" 
                  rx="6" 
                  fill="#0A0A0A"
                />
                
                {/* Screen Content - DobraMama E-commerce */}
                <rect 
                  x="35" 
                  y="20" 
                  width="250" 
                  height="140" 
                  rx="4" 
                  fill="#1A1A1A"
                />
                
                {/* Top Bar */}
                <rect x="40" y="25" width="240" height="12" rx="2" fill="#2B2B2B" />
                
                {/* Navigation */}
                <rect x="45" y="30" width="40" height="6" rx="1" fill="#4A4A4A" />
                <rect x="90" y="30" width="35" height="6" rx="1" fill="#4A4A4A" />
                <rect x="130" y="30" width="30" height="6" rx="1" fill="#4A4A4A" />
                
                {/* Main Content Area */}
                <rect x="45" y="45" width="230" height="8" rx="1" fill="#333333" />
                <rect x="45" y="58" width="180" height="6" rx="1" fill="#555555" />
                <rect x="45" y="68" width="200" height="6" rx="1" fill="#555555" />
                
                {/* Product Grid */}
                <rect x="50" y="85" width="70" height="35" rx="3" fill="#2B2B2B" stroke="#333333" strokeWidth="0.5" />
                <rect x="125" y="85" width="70" height="35" rx="3" fill="#2B2B2B" stroke="#333333" strokeWidth="0.5" />
                <rect x="200" y="85" width="70" height="35" rx="3" fill="#2B2B2B" stroke="#333333" strokeWidth="0.5" />
                
                {/* Product Content */}
                <rect x="55" y="90" width="25" height="4" rx="1" fill="#4A4A4A" />
                <rect x="55" y="98" width="15" height="3" rx="0.5" fill="#666666" />
                <rect x="55" y="105" width="20" height="3" rx="0.5" fill="#666666" />
                
                <rect x="130" y="90" width="25" height="4" rx="1" fill="#4A4A4A" />
                <rect x="130" y="98" width="15" height="3" rx="0.5" fill="#666666" />
                <rect x="130" y="105" width="20" height="3" rx="0.5" fill="#666666" />
                
                <rect x="205" y="90" width="25" height="4" rx="1" fill="#4A4A4A" />
                <rect x="205" y="98" width="15" height="3" rx="0.5" fill="#666666" />
                <rect x="205" y="105" width="20" height="3" rx="0.5" fill="#666666" />
                
                {/* Bottom Status Bar */}
                <rect x="45" y="130" width="230" height="8" rx="1" fill="#2B2B2B" />
                <rect x="50" y="133" width="40" height="3" rx="0.5" fill="#4A4A4A" />
                <rect x="95" y="133" width="30" height="3" rx="0.5" fill="#4A4A4A" />
                <rect x="130" y="133" width="35" height="3" rx="0.5" fill="#4A4A4A" />
                
                {/* MacBook Logo - сучасний */}
                <rect x="150" y="155" width="20" height="2" rx="1" fill="#333333" />
                
                {/* Trackpad */}
                <rect x="120" y="150" width="80" height="50" rx="8" fill="#1A1A1A" stroke="#333333" strokeWidth="1" />
                
                {/* Keyboard Area */}
                <rect x="40" y="150" width="240" height="8" rx="1" fill="#2B2B2B" />
                
                {/* Keyboard Keys */}
                <rect x="45" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                <rect x="55" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                <rect x="65" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                <rect x="75" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                <rect x="85" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                <rect x="95" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                <rect x="105" y="152" width="8" height="4" rx="0.5" fill="#333333" />
                
                {/* Screen Reflection */}
                <rect x="35" y="20" width="250" height="140" rx="4" fill="url(#screenGradient)" opacity="0.1" />
                
                <defs>
                  <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* MacBook Side View - Left */}
            <div className="absolute bottom-8 left-8 w-[200px] h-[140px] opacity-20 z-0">
              <svg 
                viewBox="0 0 200 140" 
                className="w-full h-full"
                fill="none"
              >
                {/* MacBook Side View */}
                <rect 
                  x="20" 
                  y="60" 
                  width="160" 
                  height="60" 
                  rx="8" 
                  fill="#1A1A1A" 
                  stroke="#333333" 
                  strokeWidth="1"
                />
                
                {/* Screen Side */}
                <rect 
                  x="30" 
                  y="20" 
                  width="140" 
                  height="80" 
                  rx="6" 
                  fill="#000000" 
                  stroke="#333333" 
                  strokeWidth="1"
                />
                
                {/* Screen Content Side */}
                <rect 
                  x="35" 
                  y="25" 
                  width="130" 
                  height="70" 
                  rx="3" 
                  fill="#1A1A1A"
                />
                
                {/* Side Screen Elements */}
                <rect x="40" y="30" width="60" height="6" rx="1" fill="#333333" />
                <rect x="40" y="40" width="40" height="4" rx="0.5" fill="#555555" />
                <rect x="40" y="48" width="50" height="4" rx="0.5" fill="#555555" />
                <rect x="40" y="56" width="35" height="4" rx="0.5" fill="#555555" />
                
                {/* Side Cards */}
                <rect x="50" y="65" width="30" height="20" rx="2" fill="#2B2B2B" />
                <rect x="85" y="65" width="30" height="20" rx="2" fill="#2B2B2B" />
                <rect x="120" y="65" width="30" height="20" rx="2" fill="#2B2B2B" />
              </svg>
            </div>

            {/* MacBook Angled View - Top Right */}
            <div className="absolute top-8 right-8 w-[180px] h-[120px] opacity-15 z-0">
              <svg 
                viewBox="0 0 180 120" 
                className="w-full h-full"
                fill="none"
              >
                {/* MacBook Angled Base */}
                <rect 
                  x="15" 
                  y="80" 
                  width="150" 
                  height="35" 
                  rx="6" 
                  fill="#1A1A1A" 
                  stroke="#333333" 
                  strokeWidth="1"
                />
                
                {/* MacBook Angled Screen */}
                <rect 
                  x="25" 
                  y="15" 
                  width="130" 
                  height="90" 
                  rx="6" 
                  fill="#000000" 
                  stroke="#333333" 
                  strokeWidth="1"
                />
                
                {/* Angled Screen Content */}
                <rect 
                  x="30" 
                  y="20" 
                  width="120" 
                  height="80" 
                  rx="3" 
                  fill="#1A1A1A"
                />
                
                {/* Angled Screen Elements */}
                <rect x="35" y="25" width="50" height="5" rx="1" fill="#333333" />
                <rect x="35" y="35" width="30" height="3" rx="0.5" fill="#555555" />
                <rect x="35" y="42" width="40" height="3" rx="0.5" fill="#555555" />
                
                {/* Angled Cards */}
                <rect x="40" y="50" width="25" height="15" rx="1" fill="#2B2B2B" />
                <rect x="70" y="50" width="25" height="15" rx="1" fill="#2B2B2B" />
                <rect x="100" y="50" width="25" height="15" rx="1" fill="#2B2B2B" />
                
                {/* Angled Trackpad */}
                <rect x="60" y="85" width="60" height="25" rx="4" fill="#1A1A1A" stroke="#333333" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          
          <div className={`gradient-border shadow-sm p-[24px] px-[32px] ${getCardSize(projects[5].size)} relative overflow-hidden group hover:bg-[#19A05C] slow-hover`}>
            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[28px] font-medium text-textPrimary font-poppins leading-[120%] group-hover:text-white slow-hover">
                  {projects[5].title}
                </h3>
                <button className="w-12 h-12 border border-[#333333] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-white transition-all duration-200 ease-in-out">
                  <ArrowRight className="w-6 h-6 text-textSecondary group-hover:text-white transition-colors duration-200 ease-in-out" />
                </button>
              </div>
              <p className="text-[16px] font-normal text-textSecondary font-poppins leading-[130%] group-hover:text-white slow-hover">
                {projects[5].description}
              </p>
            </div>
            
            {/* Open Kharkiv Mockup Images */}
            <div className="absolute top-[196px] right-[24px] flex gap-[16px] z-0 transition-all duration-[700ms] ease-in-out group-hover:top-[146px]">
              <img 
                src="/mockups/openkharkiv22.png" 
                alt="Open Kharkiv App Mockup 2"
                className="w-[160px] h-[336px] object-contain opacity-80"
              />
            </div>
            
            {/* Open Kharkiv Mockup 1 - Separate positioning */}
            <img 
              src="/mockups/openkharkiv11.png" 
              alt="Open Kharkiv App Mockup 1"
              className="absolute left-[50px] top-[221px] w-[160px] h-[336px] object-contain opacity-80 rotate-[-8.09deg] z-0 transition-all duration-[700ms] ease-in-out group-hover:left-[50px] group-hover:top-[171px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;