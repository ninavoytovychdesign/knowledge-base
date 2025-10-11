import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const ProjectsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [clickedProject, setClickedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  // Calculate modal position 32px from card, always within screen bounds
  const getModalPosition = () => {
    if (!clickedProject) return { left: 0, top: 0 };
    
    const modalWidth = 300;
    const modalHeight = 500;
    const offset = 32;
    const cardSize = clickedProject?.id === clickedProject?.id ? 100 : 70; // Card size on click
    const screenPadding = 20; // Minimum distance from screen edges
    const headerHeight = 80; // Approximate header height
    const footerHeight = 60; // Approximate footer height
    
    // Get card center position
    const cardCenterX = mousePosition.x;
    const cardCenterY = mousePosition.y;
    
    // Try positioning modal to the right of the card first
    let left = cardCenterX + (cardSize / 2) + offset;
    let top = cardCenterY - (modalHeight / 2);
    
    // Check if modal fits on the right side
    if (left + modalWidth > window.innerWidth - screenPadding) {
      // Try left side
      left = cardCenterX - (cardSize / 2) - modalWidth - offset;
    }
    
    // If still doesn't fit on left, position with screen padding
    if (left < screenPadding) {
      left = screenPadding;
    }
    
    // Ensure modal fits vertically and doesn't overlap header/footer
    const minTop = headerHeight + screenPadding;
    const maxTop = window.innerHeight - footerHeight - modalHeight - screenPadding;
    
    if (top < minTop) {
      top = minTop;
    } else if (top > maxTop) {
      top = maxTop;
    }
    
    // Final check: if modal is too close to card horizontally, move it away
    const modalRight = left + modalWidth;
    const modalLeft = left;
    const cardLeft = cardCenterX - (cardSize / 2);
    const cardRight = cardCenterX + (cardSize / 2);
    
    // If modal overlaps with card horizontally, adjust position
    if ((modalLeft < cardRight + offset && modalRight > cardLeft - offset)) {
      // Try to position below the card
      const belowTop = cardCenterY + (cardSize / 2) + offset;
      if (belowTop + modalHeight < window.innerHeight - footerHeight - screenPadding) {
        top = belowTop;
        left = cardCenterX - (modalWidth / 2);
        
        // Ensure horizontal centering doesn't go off screen
        if (left < screenPadding) left = screenPadding;
        if (left + modalWidth > window.innerWidth - screenPadding) {
          left = window.innerWidth - modalWidth - screenPadding;
        }
      } else {
        // Position above the card
        const aboveTop = cardCenterY - (cardSize / 2) - modalHeight - offset;
        if (aboveTop > headerHeight + screenPadding) {
          top = aboveTop;
          left = cardCenterX - (modalWidth / 2);
          
          // Ensure horizontal centering doesn't go off screen
          if (left < screenPadding) left = screenPadding;
          if (left + modalWidth > window.innerWidth - screenPadding) {
            left = window.innerWidth - modalWidth - screenPadding;
          }
        } else {
          // If neither above nor below fits, keep within safe area
          top = Math.max(minTop, Math.min(maxTop, top));
        }
      }
    }
    
    return { left, top };
  };

  useEffect(() => {
    // Затримка для появи після заголовка в Hero секції
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    // Картки над заголовком
    {
      id: 1,
      key: 'novaPost',
      position: { top: '15%', left: '25%' },
      animation: 'float-1',
      letter: 'N',
      title: 'Nova Post',
      description: 'Comprehensive UX research of the business account dashboard aimed at identifying user pain points',
      mockups: ['/mockups/novapost-mockup.png'],
      logo: '/logos/novapost-logo.png',
      color: '#DA292B'
    },
    {
      id: 2,
      key: 'healthPad',
      position: { top: '20%', right: '25%' },
      animation: 'float-2',
      letter: 'H',
      title: 'HealthPad',
      description: 'A self-initiated mobile application — a digital health record for the whole family',
      mockups: ['/mockups/healthpad-mockup.png'],
      logo: '/logos/healthpad-logo.png',
      color: '#11B6E2'
    },
    // Картки під заголовком
    {
      id: 3,
      key: 'vertexStudio',
      position: { top: '65%', left: '15%' },
      animation: 'float-3',
      letter: 'V',
      title: 'Vertex Studio',
      description: 'A visual identity and website concept for a creative studio, showcasing a modern and elegant approach',
      mockups: ['/mockups/vertex.png'],
      logo: '/logos/vertex-logo.png',
      color: '#3EA3A9'
    },
    {
      id: 4,
      key: 'rivertonGroup',
      position: { top: '75%', left: '45%' },
      animation: 'float-4',
      letter: 'R',
      title: 'Riverton Group',
      description: 'A complete redesign of the brand identity and landing page, supported by UX research',
      mockups: ['/mockups/riverton-mockup.png'],
      logo: '/logos/riverton-logo.png',
      color: '#103FD3'
    },
    {
      id: 5,
      key: 'openKharkiv',
      position: { top: '70%', right: '20%' },
      animation: 'float-5',
      letter: 'O',
      title: 'Open Kharkiv',
      description: 'A redesign of a civic technology mobile application, improving usability, streamlining flows',
      mockups: ['/mockups/openkharkiv11.png'],
      logo: '/logos/openkharkiv-logo.png',
      color: '#19A05C'
    }
  ];

  return (
    <>
      {/* Floating cards positioned absolutely */}
      {projects.map((project) => (
        <div
          key={project.id}
          className={`fixed w-[70px] h-[70px] bg-[#141414] rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer z-10 ${project.animation} flex items-center justify-center overflow-hidden ${
            !isVisible 
              ? 'opacity-0' 
              : clickedProject?.id === project.id 
                ? 'w-[100px] h-[100px] opacity-60 blur-sm'
                : hoveredProject?.id === project.id 
                  ? 'opacity-100 blur-none'
                  : 'opacity-60 blur-[2px]'
          }`}
          style={{
            top: project.position.top,
            left: project.position.left,
            right: project.position.right,
            backgroundColor: clickedProject?.id === project.id 
              ? project.color 
              : hoveredProject?.id === project.id 
                ? project.color 
                : '#141414',
            backgroundImage: project.logo ? `url(${project.logo})` : 'none',
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
      ))}
      
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
            <div className="bg-[#141414] rounded-lg p-4 shadow-2xl w-[300px] h-[550px] backdrop-blur-sm">
             {clickedProject.title === 'Open Kharkiv' || clickedProject.title === 'HealthPad' ? (
               /* Open Kharkiv - Auto Layout Container */
               <div className="flex flex-col h-full">
                 {/* Logo at the top */}
                 {clickedProject.logo && (
                   <div className="flex justify-start mb-4">
                     <div className="w-10 h-10 rounded overflow-hidden">
                       <img
                         src={clickedProject.logo}
                         alt={`${clickedProject.title} logo`}
                         className="w-full h-full object-cover"
                       />
                     </div>
                   </div>
                 )}
                 
                 {/* Title */}
                 <h3 className="text-white text-[18px] font-medium font-helvetica mb-4 text-left">
                   {clickedProject.title}
                 </h3>
                 
                 {/* Mockup Container */}
                 <div className="flex-1 flex items-center justify-center px-3 py-3 rounded overflow-hidden mb-3">
                  <img
                    src={clickedProject.mockups[0]}
                    alt={`${clickedProject.title} mockup`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                 </div>
                
                {/* Description */}
                <p className="text-[#CCCCCC] text-[14px] font-helvetica leading-[140%] mb-6">
                   {t(`projects.${clickedProject.key}.description`)}
                </p>
                
                {/* View Project Button */}
                <button className="w-full flex items-center justify-between px-4 py-2 rounded-lg font-medium text-black bg-gradient-accent hover:opacity-90 transition">
                  <span>{t('viewMore')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
             ) : (
               /* Other Projects - Original Layout */
               <div className="flex flex-col h-full">
                 {/* Logo at the top */}
                 {clickedProject.logo && (
                   <div className="flex justify-start mb-4">
                     <div className="w-10 h-10 rounded overflow-hidden">
                       <img
                         src={clickedProject.logo}
                         alt={`${clickedProject.title} logo`}
                         className="w-full h-full object-cover"
                       />
                     </div>
                   </div>
                 )}
                 
                 {/* Title */}
                 <h3 className="text-white text-[18px] font-medium font-helvetica mb-4 text-left">
                   {clickedProject.title}
                 </h3>
                 
                 {/* Mockup Container */}
                 <div className="flex-1 flex items-center justify-center rounded overflow-hidden mb-3">
                  <img
                    src={clickedProject.mockups[0]}
                    alt={`${clickedProject.title} mockup`}
                    className="w-full h-full object-cover transform rotate-0"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Description */}
                <p className="text-[#CCCCCC] text-[14px] font-helvetica leading-[140%] mb-6">
                   {t(`projects.${clickedProject.key}.description`)}
                </p>
                
                {/* View Project Button */}
                <button className="w-full flex items-center justify-between px-4 py-2 rounded-lg font-medium text-black bg-gradient-accent hover:opacity-90 transition">
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