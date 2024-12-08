import React, { useState, useEffect } from 'react';

function SequentialText() {
  const texts = ["At Scale", "Globally", "Securely"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change the interval time as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" text-5xl font-normal text-primery animate-fade-in-out">
      {texts[currentTextIndex]}
    </div>
  );
}

export default SequentialText;