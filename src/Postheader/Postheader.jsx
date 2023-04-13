import './Postheader.css'
import React, { useState, useEffect } from 'react';

const Postheader = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = ['Free delivery from $99.-', 'Sustainable materials', 'Made in Europe'];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTextIndex(currentTextIndex === texts.length - 1 ? 0 : currentTextIndex + 1);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, [currentTextIndex]);
  
    return (
      <div className="text-slider">
        <div className="text-wrapper" style={{ transform: `translateX(-${currentTextIndex * 100}%)` }}>
          {texts.map((text, index) => (
            <div key={index} className="text">{text}</div>
          ))}
        </div>
      </div>
    );
  };

export default Postheader