import React, { useRef, useEffect } from "react"
import * as THREE from "three"

export default function ThreeShape() {
  const mountRef = useRef(null)

  useEffect(() => {

 
     



  

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%x",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(#1b0036, #000)", // cosmic vibe
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          backgroundColor: "rgba(255,255,255,0.85)",
          padding: "20px 40px",
          borderRadius: "12px",
          fontSize: "24px",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          pointerEvents: "none",
        }}
      >
        Join the Crystal Crew ✨
      </div>
    </div>
  )
}
