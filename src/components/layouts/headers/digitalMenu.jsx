import React, { useState, useEffect } from "react";
import Header from "./header";




export default function DigitalMenu() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updateDimensions = () => {
    const { innerWidth, innerHeight } = window;

    setDimensions({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <main className="">
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />



    </main>
  );
}
