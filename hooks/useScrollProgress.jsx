import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const UpdateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeigt = document.body.scrollHeight - window.innerHeight;

      if (scrollHeigt) {
        setCompletion(Number(currentProgress / scrollHeigt).toFixed(2) * 100);
      }
    };

    //event
    window.addEventListener("scroll", UpdateScrollCompletion);
    //clear event
    return () => window.removeEventListener("scroll", UpdateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
