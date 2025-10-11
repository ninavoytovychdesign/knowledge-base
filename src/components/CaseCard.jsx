import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CaseCard = ({ title, description, size = 'small' }) => {
  const cardSize = size === 'large' ? 'w-[888px] h-[396px]' : 'w-[432px] h-[396px]';
  
  return (
    <div className={`bg-[#141414] rounded-lg p-8 ${cardSize} hover:bg-[#1B1B1B] transition-colors duration-300 group`}>
      <div className="flex justify-between items-start h-full">
        <div className="flex-1 pr-4">
          {/* Тайтл */}
          <h3 className="text-[32px] font-medium text-gray-900 font-helvetica mb-4">
            {title}
          </h3>
          
          {/* Опис */}
          <p className="text-[20px] font-normal text-gray-700 font-helvetica">
            {description}
          </p>
        </div>
        
        {/* Кнопка */}
        <button className="w-12 h-12 border border-[#8C8C8C] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-white transition-all duration-200 ease-in-out">
          <FaArrowRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-200 ease-in-out" />
        </button>
      </div>
    </div>
  );
};

export default CaseCard;
