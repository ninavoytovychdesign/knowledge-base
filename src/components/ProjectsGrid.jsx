import React, { useState, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { getAssetPath } from '../utils/assetPath';

const ProjectsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [clickedProject, setClickedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  // Calculate modal position centered on screen
  const getModalPosition = () => {
    if (!clickedProject) return { left: 0, top: 0 };
    
    // Check if window is available (for SSR)
    if (typeof window === 'undefined') {
      return { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' };
    }
    
    // Center modal both horizontally and vertically
    return { 
      left: '50%', 
      top: '50%', 
      transform: 'translate(-50%, -50%)' 
    };
  };

  useEffect(() => {
    // Затримка для появи після заголовка в Hero секції
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    // Картки під заголовком
    {
      id: 1,
      key: 'novaPost',
      position: { top: '40%', left: '32%' },
      mobilePosition: { top: '40%', left: '10%' },
      animation: 'float-1',
      letter: 'N',
      title: 'Nova Post',
      description: 'Comprehensive UX research of the business account dashboard aimed at identifying user pain points',
      mockups: [getAssetPath('mockups/novapost-mockup.png')],
      logo: getAssetPath('logos/novapost-logo.png'),
      hoverLogo: getAssetPath('logos/novapost-logo.png'),
      color: '#DA292B'
    },
    {
      id: 2,
      key: 'healthPad',
      position: { top: '42.5%', left: '65%', transform: 'translateX(-50%)' },
      mobilePosition: { top: '45%', right: '10%' },
      animation: 'float-2',
      letter: 'H',
      title: 'HealthPad',
      description: 'A self-initiated mobile application — a digital health record for the whole family',
      mockups: [getAssetPath('mockups/healthpad-mockup.png')],
      logo: getAssetPath('logos/healthpad-logo.png'),
      hoverLogo: getAssetPath('logos/healthpad-logo.png'),
      color: '#11B6E2'
    },
    // Інші картки
    {
      id: 3,
      key: 'vertexStudio',
      position: { top: '50%', left: '15%' },
      mobilePosition: { top: '50%', left: '10%' },
      animation: 'float-3',
      letter: 'V',
      title: 'Vertex Studio',
      description: 'A visual identity and website concept for a creative studio, showcasing a modern and elegant approach',
      mockups: [getAssetPath('mockups/vertex.png')],
      logo: getAssetPath('logos/vertex-logo.png'),
      hoverLogo: getAssetPath('logos/vertex-logo.png'),
      color: '#3EA3A9'
    },
    {
      id: 4,
      key: 'rivertonGroup',
      position: { top: '60%', left: '50%', transform: 'translateX(-50%)' },
      mobilePosition: { top: '60%', left: '50%' },
      animation: 'float-4',
      letter: 'R',
      title: 'Riverton Group',
      description: 'A complete redesign of the brand identity and landing page, supported by UX research',
      mockups: [getAssetPath('mockups/rivertong-mockup.png?v=2')],
      logo: getAssetPath('logos/riverton-logo.png'),
      hoverLogo: getAssetPath('logos/riverton-logo.png'),
      color: '#103FD3'
    },
    {
      id: 5,
      key: 'openKharkiv',
      position: { top: '50%', left: '85%' },
      mobilePosition: { top: '55%', left: '85%' },
      animation: 'float-5',
      letter: 'O',
      title: 'Open Kharkiv',
      description: 'A redesign of a civic technology mobile application, improving usability, streamlining flows',
      mockups: [getAssetPath('mockups/openkharkiv11.png')],
      logo: getAssetPath('logos/openkharkiv-logo.png'),
      hoverLogo: getAssetPath('logos/openkharkiv-logo.png'),
      color: '#19A05C'
    }
  ];

  return (
    <>
         {/* Floating cards positioned absolutely */}
         {projects.map((project) => {
           const isMobile = window.innerWidth < 768;
           const position = isMobile ? project.mobilePosition : project.position;
           
           return (
             <div
               key={project.id}
               className={`fixed z-10 ${project.animation}`}
               style={{
                 top: position.top,
                 left: position.left,
                 right: position.right,
                 transform: position.transform || 'none',
               }}
             >
          {/* Orbital Effect - Around entire card and label */}
          {hoveredProject?.id === project.id && (
            <div className="absolute inset-0 pointer-events-none">
              {/* Orbital Circle - covers card and label */}
              <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] border border-[#333333] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              {/* Orbital Dot */}
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#333333] rounded-full animate-orbit"></div>
            </div>
          )}
          
          {/* Project Card */}
          <div className="relative">
            
            <div
              className={`rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer flex items-center justify-center overflow-hidden ${
                !isVisible 
                  ? 'opacity-0' 
                  : clickedProject?.id === project.id 
                    ? 'w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] blur-sm bg-[#141414]/60'
                    : hoveredProject?.id === project.id 
                      ? 'w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] blur-none bg-[#141414]/100'
                      : 'w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] bg-[#141414]/60'
              }`}
            style={{
              backgroundColor: clickedProject?.id === project.id 
                ? project.color 
                : hoveredProject?.id === project.id 
                  ? project.color
                  : project.color,
              backgroundImage: `url(${
                clickedProject?.id === project.id
                  ? project.logo
                  : hoveredProject?.id === project.id
                    ? project.hoverLogo
                    : project.logo
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={(e) => {
              if (clickedProject?.id === project.id) {
                setClickedProject(null);
              } else {
                setClickedProject(project);
                setMousePosition({ x: e.clientX, y: e.clientY });
              }
            }}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
          </div>
          </div>
          
          {/* Project Label - Only visible on hover */}
          {hoveredProject?.id === project.id && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-0 py-1 text-white text-[12px] sm:text-[14px] font-helvetica pointer-events-none text-center whitespace-nowrap">
              <div className="font-medium font-helvetica">{project.title}</div>
            </div>
          )}
             </div>
           );
         })}
      
      {/* Blur background overlay */}
      {clickedProject && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 cursor-pointer" 
          onClick={() => setClickedProject(null)}
        />
      )}
      
      {/* Modal tooltip */}
      {clickedProject && (
        <div
          className="fixed z-50"
          style={getModalPosition()}
          onClick={(e) => e.stopPropagation()}
        >
                 <div className="bg-[#141414]/30 border border-[#1A1A1A] rounded-lg p-3 sm:p-4 shadow-2xl w-[600px] h-[800px] backdrop-blur-md">
             {clickedProject.title === 'HealthPad' ? (
               /* HealthPad - Auto Layout Container */
               <div className="flex flex-col h-full">
                 {/* Logo and UI Badge at the top */}
                 <div className="flex justify-between items-center mb-4">
                   {clickedProject.hoverLogo && (
                     <div className="w-10 h-10 rounded overflow-hidden">
                       <img
                         src={clickedProject.hoverLogo}
                         alt={`${clickedProject.title} logo`}
                         className="w-full h-full object-cover"
                       />
                     </div>
                   )}
                   
                   {/* UI Badge for Vertex Studio */}
                   {clickedProject.title === 'Vertex Studio' && (
                     <div className="relative">
                       <img 
                         src={getAssetPath('logos/flag-logo.svg')} 
                         alt="UI Badge" 
                         className="w-6 h-10"
                       />
                     </div>
                   )}
                 </div>
                 
                 {/* Title */}
                 <h3 className="text-white text-[16px] sm:text-[18px] font-medium font-helvetica mb-4 text-left">
                   {clickedProject.title}
                 </h3>
                 
                 {/* Mockup Container */}
                 <div className="flex-1 flex items-center justify-center rounded overflow-hidden mb-3">
                   <img
                     src={clickedProject.mockups[0]}
                     alt={`${clickedProject.title} mockup`}
                     className="w-full h-auto max-h-[300px] object-contain scale-[1.5]"
                     onError={(e) => {
                       e.target.style.display = 'none';
                     }}
                   />
                 </div>
                 
                 {/* Description */}
                 <>
                   <h4 className="text-textPrimary text-[14px] sm:text-[16px] font-medium font-helvetica mb-2">
                     {t(`projects.${clickedProject.key}.descriptionTitle`)}
                   </h4>
                   <p className="text-textPrimary text-[12px] sm:text-[14px] font-helvetica leading-[140%] mb-6">
                     {t(`projects.${clickedProject.key}.description`)}
                   </p>
                 </>
                
                 {/* View Project Button */}
                 <button className="w-full flex items-center justify-between px-3 sm:px-4 py-2 rounded-lg font-medium text-[#777777] bg-[#1A1A1A] border border-[#1A1A1A] hover:border-[#333333] transition font-helvetica text-[12px] sm:text-[14px] cursor-not-allowed" disabled>
                  <span>{t('viewMore')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
             ) : (
               /* Other Projects - Original Layout */
               <div className="flex flex-col h-full">
                 {/* Logo and UI Badge at the top */}
                 <div className="flex justify-between items-center mb-4">
                   {clickedProject.hoverLogo && (
                     <div className="w-10 h-10 rounded overflow-hidden">
                       <img
                         src={clickedProject.hoverLogo}
                         alt={`${clickedProject.title} logo`}
                         className="w-full h-full object-cover"
                       />
                     </div>
                   )}
                   
                   {/* UI Badge for Vertex Studio */}
                   {clickedProject.title === 'Vertex Studio' && (
                     <div className="relative">
                       <img 
                         src={getAssetPath('logos/flag-logo.svg')} 
                         alt="UI Badge" 
                         className="w-6 h-10"
                       />
                     </div>
                   )}
                 </div>
                 
                 {/* Title */}
                 <h3 className="text-white text-[16px] sm:text-[18px] font-medium font-helvetica mb-4 text-left">
                   {clickedProject.title}
                 </h3>
                 
                 {/* Mockup Container */}
                 <div className={`flex-1 flex items-center justify-center rounded overflow-hidden mb-3 ${
                   clickedProject.title === 'Nova Post' ? 'items-center justify-center' : ''
                 }`}>
                   <img
                     src={clickedProject.mockups[0]}
                     alt={`${clickedProject.title} mockup`}
                     className={`w-full h-auto max-h-[300px] object-contain ${
                       clickedProject.title === 'Nova Post' ? 'scale-[1.35] mx-auto' : 
                       clickedProject.title === 'HealthPad' ? 'scale-[1.5]' :
                       clickedProject.title === 'Open Kharkiv' ? 'scale-[1.5]' : 
                       clickedProject.title === 'Riverton Group' ? 'scale-[1.5]' :
                       clickedProject.title === 'Vertex Studio' ? 'scale-[1.5]' : 'scale-100'
                     }`}
                     onError={(e) => {
                       e.target.style.display = 'none';
                     }}
                   />
                 </div>

                 {/* Description */}
                 <>
                   <h4 className="text-textPrimary text-[14px] sm:text-[16px] font-medium font-helvetica mb-2">
                     {t(`projects.${clickedProject.key}.descriptionTitle`)}
                   </h4>
                   <p className="text-textPrimary text-[12px] sm:text-[14px] font-helvetica leading-[140%] mb-6">
                     {t(`projects.${clickedProject.key}.description`)}
                   </p>
                 </>
                
                 {/* View Project Button */}
                 <button className="w-full flex items-center justify-between px-3 sm:px-4 py-2 rounded-lg font-medium text-[#777777] bg-[#1A1A1A] border border-[#1A1A1A] hover:border-[#333333] transition font-helvetica text-[12px] sm:text-[14px] cursor-not-allowed" disabled>
                  <span>{t('viewMore')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsGrid;