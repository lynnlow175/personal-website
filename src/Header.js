import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const words = [
    "I am an aspiring software engineer",
    "I love chinese food",
    "live, laugh, love",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const wordFlick = setInterval(() => {
      if (forwards) {
        if (offset >= words[currentWordIndex].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setOffset(0);
        }
      }

      if (skipCount === 0) {
        if (forwards) {
          setOffset((prevOffset) => prevOffset + 1);
        } else {
          setOffset((prevOffset) => prevOffset - 1);
        }
      }
    }, speed);

    return () => clearInterval(wordFlick); // Cleanup on component unmount
  }, [currentWordIndex, offset, forwards, skipCount, words]);

  return (
    <div>
      {/* The element with class 'word' will display the flickering text */}
      <span className="word">{words[currentWordIndex].substr(0, offset)}</span>
    </div>
  );
};

export default Header;
