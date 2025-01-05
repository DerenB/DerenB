import React, { useState, useEffect } from "react";

import '../styles/Typing.css';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 150);

      return () => clearInterval(interval);
    }
  }, [index, text]);

  return <div className="output">{displayedText}</div>;
};

export default Typewriter;