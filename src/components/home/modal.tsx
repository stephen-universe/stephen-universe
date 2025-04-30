import React, { useRef } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
} from 'react-spring'

const Modal = ({ handleClose, show, children }) => {
    
    const showHideClassName = show ? "modal d-flex" : "modal d-none";



    
    const springApi = useRef()
    const { size } = useSpring({
      ref: springApi,
      config: config.stiff,
      from: { size: '5%' },
      to: {
        size: show ? '100%' : '5%',
      },
    })
  

    useChain(show ? [springApi] : [ springApi], [
      0,
      show ? 0.1 : 0.6,
    ])
  
   
    return (

        <div className="tile is-4">
        
            

   <div className={showHideClassName}>
 
    <div className="modal-background" onClick={handleClose}></div>  
    <animated.div  style={{ width: size, height: size }}
        onClick={handleClose}>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Modal title</p>
                    <button className="delete" aria-label="close" onClick={handleClose}></button>
            </header>
                <section className="modal-card-body">
                    
                   {children}
                </section>
            
            <footer className="modal-card-foot">
                <button onClick={handleClose} className="button is-success">Okay!</button>
            </footer>
        </div>  
</animated.div>

</div>

        
  </div>   


    );




  };


export default Modal;