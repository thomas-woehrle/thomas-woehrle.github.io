import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update windowWidth state whenever the window is resized
    const handleResize = () => {
      // console.log(window.innerWidth);
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>Window Width: {windowWidth}px</p>
    </div>
  );
};

export default MyComponent;
