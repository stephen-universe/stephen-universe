import { Canvas } from '@react-three/fiber'
import Model from './modal';
import { Environment } from '@react-three/drei'
import React, { useEffect } from 'react'
import { useMotionValue, useSpring } from "framer-motion"


export default function FloatingShapes() {


  const mouse = {

    x: useMotionValue(0),
    y: useMotionValue(0)

  }


  const smoothMouse = {

    x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass: 3}),

    y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass: 3})

  }


  const manageMouse = e => {

    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth
    const y = clientY / innerHeight
    mouse.x.set(x);
    mouse.y.set(y);

  }


  useEffect( () => {

    window.addEventListener("mousemove", manageMouse)
    return () => window.removeEventListener("mousemove", manageMouse)

  }, [])


  return (

    <></>

  )

}


