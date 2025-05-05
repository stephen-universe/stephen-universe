import React, { useState, useEffect } from "react"

const CookieBanner = () => {  
    const [visible, setVisible] = useState(false)  
    useEffect(() => {   
         if (localStorage.getItem('tracking-consent') === null) {      
            setVisible(true)    }  }, [])  
            
    const handleAccept = () => {   
         window.__trackingConsent?.grant()    
            setVisible(false)  }  
            
    const handleReject = () => {    
            localStorage.setItem('tracking-consent', 'false')   
             setVisible(false)  }  
             if (!visible) return null  
             
        return (    
        
        <div className="cookie-banner">      
            <p>We use cookies for analytics. Do you consent to tracking?</p>   
                <div className="cookie-buttons">        
                    <button onClick={handleAccept}>Accept</button>        
                    <button onClick={handleReject}>Reject</button>      
                </div>   
        </div>  )}


export default CookieBanner