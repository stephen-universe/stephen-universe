import React, { useEffect, useState, Suspense } from "react";

const EarthWrapper = () => {
  const [Earth, setEarth] = useState(null);

  useEffect(() => {
    // Dynamically import the component only on client
    import("./earth").then((mod) => {
      setEarth(() => mod.default);
    });
  }, []);

  if (!Earth) return <img src="/assets/placeholder.png" alt="Loading Earth..." />;

  return (
    <Suspense fallback={<img src="/assets/placeholder.png" alt="Loading Earth..." />}>
      <Earth />
    </Suspense>
  );
};

export default EarthWrapper;
