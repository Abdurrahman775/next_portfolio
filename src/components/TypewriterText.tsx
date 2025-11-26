// components/TypewriterText.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  className?: string;
  cursorColor?: string;
  typingSpeed?: number;
  deleteSpeed?: number;
  delayBeforeType?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className = '',
  cursorColor = 'bg-indigo-400',
  typingSpeed = 100,
  deleteSpeed = 50,
  delayBeforeType = 500,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false); // True = typing, False = deleting/idle
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // Trigger when 50% visible

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isInView) {
      // Start typing logic
      if (displayText.length < text.length) {
        // If we haven't finished typing, type the next character
        // Add a small delay before starting if it's the very beginning
        const delay = displayText.length === 0 ? delayBeforeType : typingSpeed;
        
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, delay);
      }
    } else {
      // Start deleting logic (unwrite)
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length - 1));
        }, deleteSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isInView, text, typingSpeed, deleteSpeed, delayBeforeType]);

  return (
    <span ref={ref} className={`inline-flex items-center ${className}`}>
      {displayText}
      <motion.span
        className={`inline-block w-[2px] h-[1em] ml-1 ${cursorColor}`}
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </span>
  );
};

export default TypewriterText;
