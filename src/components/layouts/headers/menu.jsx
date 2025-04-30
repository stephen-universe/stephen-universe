import React from "react";
import { motion } from "framer-motion";

const anim = {

  initial: {
      opacity: 0
  },

  open: {
      opacity: 1

  },

  exit: {
      opacity: 0

  }

}


export default function index({menuIsActive}) {

return (

  <motion.div 
      className="pixel-menu"
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "closed"}>

      <p>Home</p>
      <p>About</p>
      <p>Contact</p>

  </motion.div>

)}