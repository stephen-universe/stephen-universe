import React, { useState, useEffect } from "react"

const CookieBanner = () => {  
    const [visible, setVisible] = useState(false)  
    useEffect(() => {   
         if (localStorage.getItem('tracking-consent') === null) {      
            setVisible(true)    }  }, [])  
            
            const handleAccept = () => {
                localStorage.setItem('tracking-consent', 'true');
                window.__trackingConsent?.grant?.(); // Optional, depends on your tracking logic
                window.dispatchEvent(new Event("cookie-consent-given")); // <-- ✅ THIS triggers the trackers
                setVisible(false);
              };
            
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