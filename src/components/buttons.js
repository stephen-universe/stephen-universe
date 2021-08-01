import React from 'react'
import {navigate} from 'gatsby'

export function GoBack() {
    return(

        <div className="button" onClick={() => navigate (-1)}>
            <i>Go Back</i>
        </div>

)}


  
  class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return <img src="scroll-btn.png" style={{backgroundColor: 'transparent', boxShadow: 'none'}} className='scroll button'
                 onClick={ () => { this.scrollToTop(); }}/>
                  
     }
  } 
  
  class ScrollApp extends React.Component {

    render () {
      return <div className="long">
               
                <ScrollButton scrollStepInPx="150" delayInMs="10.66"/>
             </div>
    }
  }


  export default ScrollApp
 

