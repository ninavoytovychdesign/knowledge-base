import React, { useState, useEffect } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          // Показуємо тайтл після завершення лоадера
          setTimeout(() => {
            setShowTitle(true);
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Оновлення кожні 30мс для плавної анімації

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-all duration-2000 ease-out ${
      isComplete ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
    }`}>
      <div className="text-center max-w-[880px] px-4 sm:px-6">
        {/* Progress number */}
               <div className={`text-[36px] sm:text-[48px] font-medium text-white font-helvetica transition-all duration-1500 ease-out ${
          isComplete ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}>
          {progress}%
        </div>

        {/* Title that appears after loading */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1500 ease-out ${
          showTitle ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <div className="text-center max-w-[880px] px-4 sm:px-6">
                   <h1 className="text-[20px] sm:text-[28px] font-medium text-textPrimary leading-[130%] font-helvetica">
              <div className="bg-gradient-accent-text">
                Nina Voytovych
              </div>
              <div>
                UI/UX designer shaping digital products through clarity, empathy, and precision.
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
