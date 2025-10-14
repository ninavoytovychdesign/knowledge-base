import React, { useState, useEffect } from "react";
import { useLanguage } from "../lib/LanguageContext";
import { Spotlight } from "../components/ui/spotlight";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [lettersVisible, setLettersVisible] = useState([]);
  const { t } = useLanguage();

  useEffect(() => {
    // Анімація літер для заголовка
    const titleText = t('contactTitle');
    const totalLetters = titleText.length;
    const visibleLetters = [];
    
    // Створюємо масив індексів для хаотичного порядку
    const indices = Array.from({ length: totalLetters }, (_, i) => i);
    const shuffledIndices = indices.sort(() => Math.random() - 0.5);
    
    // Додаємо літери по черзі з випадковою затримкою
    shuffledIndices.forEach((index, i) => {
      setTimeout(() => {
        visibleLetters.push(index);
        setLettersVisible([...visibleLetters]);
      }, i * 80 + Math.random() * 120); // 80-200ms між літерами
    });
  }, [t]);

  // Функція для рендерингу тексту з анімацією літер
  const renderAnimatedText = (text, className = '', startIndex = 0) => {
    return text.split('').map((letter, index) => (
      <span
        key={startIndex + index}
        className={`transition-all duration-300 ${
          lettersVisible.includes(startIndex + index) 
            ? 'opacity-100 transform scale-100' 
            : 'opacity-0 transform scale-75'
        } ${className}`}
        style={{
          transitionDelay: `${Math.random() * 200}ms`
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  // Функція для очищення помилок при зміні значень
  const clearFieldError = (field) => {
    if (validationErrors[field]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    clearFieldError('name');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    clearFieldError('email');
  };

  // Функція валідації
  const validateForm = () => {
    const errors = {};
    
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Валідація форми
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setError("");
    setValidationErrors({});
    
    try {
      // Перевіряємо, чи налаштовані EmailJS ключі
      const serviceId = 'service_your_service_id';
      const templateId = 'template_your_template_id';
      const publicKey = 'your_public_key';
      
      // Якщо ключі не налаштовані, використовуємо fallback
      if (serviceId === 'service_your_service_id' || 
          templateId === 'template_your_template_id' || 
          publicKey === 'your_public_key') {
        
        // Симуляція відправки (для демонстрації)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Логуємо дані в консоль для перевірки
        console.log('Form data:', {
          name,
          email,
          message,
          timestamp: new Date().toISOString()
        });
        
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
        
        return;
      }
      
      // Реальна відправка через EmailJS (коли ключі налаштовані)
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Nina Voytovych'
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black bg-grid-white/[0.02] relative h-[800px]">
      <Spotlight />
      <section className="pt-[80px] pb-20 bg-transparent relative z-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex justify-center items-center">
            <div className="max-w-[600px] bg-transparent rounded-lg pt-0 pb-6 sm:pb-10 px-6 sm:px-10">
                     <h1 className="text-[20px] sm:text-[24px] text-textPrimary text-left mb-4 font-helvetica">
                       {renderAnimatedText(t('contactTitle'), 'text-textPrimary', 0)}
                     </h1>
          <p className="text-textSecondary text-left mb-8 sm:mb-10 font-helvetica">
            {t('contactDescription')}
          </p>

          <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-textPrimary mb-2 font-helvetica">
                {t('nameLabel')} <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder={t('namePlaceholder')}
                value={name}
                onChange={handleNameChange}
                className={`w-full bg-[#141414]/30 text-[#E6E6E6] placeholder-[#777777] placeholder:text-sm placeholder:font-normal rounded-lg px-3 sm:px-4 py-3 focus:outline-none border transition-all duration-300 font-helvetica ${
                  validationErrors.name 
                    ? 'border-red-500 hover:border-red-500' 
                    : 'border-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A]/40'
                }`}
                disabled={isSubmitted}
                required
              />
              {validationErrors.name && (
                <p className="text-red-400 text-xs mt-1 font-helvetica">{validationErrors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-textPrimary mb-2 font-helvetica">
                {t('emailLabel')} <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                value={email}
                onChange={handleEmailChange}
                className={`w-full bg-[#141414]/30 text-[#E6E6E6] placeholder-[#777777] placeholder:text-sm placeholder:font-normal rounded-lg px-3 sm:px-4 py-3 focus:outline-none border transition-all duration-300 font-helvetica ${
                  validationErrors.email 
                    ? 'border-red-500 hover:border-red-500' 
                    : 'border-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A]/40'
                }`}
                disabled={isSubmitted}
                required
              />
              {validationErrors.email && (
                <p className="text-red-400 text-xs mt-1 font-helvetica">{validationErrors.email}</p>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm text-textPrimary mb-2 font-helvetica">{t('messageLabel')}</label>
              <textarea
                placeholder={t('messagePlaceholder')}
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
                className="w-full bg-[#141414]/30 text-[#E6E6E6] placeholder-[#777777] placeholder:text-sm placeholder:font-normal rounded-lg px-3 sm:px-4 py-3 pr-12 sm:pr-16 focus:outline-none border border-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A]/40 transition-all duration-300 font-helvetica"
                disabled={isSubmitted}
              />
              <div className="absolute bottom-3 right-3 text-xs sm:text-sm text-[#777777] font-helvetica">
                {message.length}/1000
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-medium text-black bg-white hover:opacity-90 transition mx-auto flex items-center justify-between px-3 sm:px-4 font-helvetica text-sm sm:text-base ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitted || isLoading}
            >
              <span>{isLoading ? 'Sending...' : t('sendButton')}</span>
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm font-helvetica text-center">{error}</p>
            </div>
          )}

          {/* Success Message Modal */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-50 flex items-center justify-center"
                onClick={() => setIsSubmitted(false)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#141414]/30 border border-[#1A1A1A] rounded-lg p-6 sm:p-8 shadow-2xl w-[400px] max-w-[90vw] backdrop-blur-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Success Checkmark */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-500/30 border border-green-500/50 rounded-full flex items-center justify-center backdrop-blur-md">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white text-[18px] sm:text-[20px] font-medium font-helvetica mb-3 text-center">
                    Thank you!
                  </h3>
                  
                  {/* Description */}
                  <p className="text-textPrimary text-[14px] sm:text-[16px] font-helvetica leading-[140%] text-center">
                    Message sent successfully ✨
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}