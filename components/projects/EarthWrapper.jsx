"use client"; // Mark this as a Client Component

import dynamic from "next/dynamic";
import Image from "next/image";

const EarthWrapper = () => {
  // Using Next.js dynamic import with SSR disabled
  const Earth = dynamic(() => import("./earth"), {
    ssr: false,
    loading: () => (
      <Image 
        src="/assets/placeholder.png" 
        alt="Loading Earth..." 
        width={500} // Set appropriate width
        height={500} // Set appropriate height
      />
    ),
  });

  return <Earth />;
};

export default EarthWrapper;