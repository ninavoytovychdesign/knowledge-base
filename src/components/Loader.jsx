import React, { useState, useEffect } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
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
      <div className="text-[48px] font-medium text-white font-helvetica transition-all duration-1500 ease-out">
        {progress}
      </div>
    </div>
  );
}
