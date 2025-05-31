'use client'; // Marking this as a Client Component since it uses browser APIs

import { useRouter } from 'next/navigation';
import React from 'react';

export function GoBack() {
  const router = useRouter();

  return (
    <div className="button" onClick={() => router.back()}>
      <i>Go Back</i>
    </div>
  );
}

class ScrollButton extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      intervalId: 0
    };
    
    this.scrollStep = this.scrollStep.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render() {
    return (
      <img 
        src="/scroll-btn.png" 
        style={{backgroundColor: 'transparent', boxShadow: 'none'}} 
        id='scrollTop' 
        className='scrollTopStick'
        onClick={this.scrollToTop}
        alt="Scroll to top"
      />
    );
  }
} 

class ScrollApp extends React.Component {
  render() {
    return (
      <div className="long">
        <ScrollButton scrollStepInPx="150" delayInMs="10.66"/>
      </div>
    );
  }
}

export default ScrollApp;