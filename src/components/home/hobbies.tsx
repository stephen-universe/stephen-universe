
import React, { Component } from "react";
import Modal from './modal';
import { Spring, animated } from 'react-spring';
import VisibilitySensor from "react-visibility-sensor";





  class Hobbies extends Component {
    constructor() {
      super();
      this.state = {
        show: false
      };
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }
  
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  


render () {

  const centeredStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    overflowX: "hidden"
  };
  
  const h2Styles = {
    fontSize: "82px"
  };
  


        return (
            <>
<Modal show={this.state.show} handleClose={this.hideModal}>
 <p>  Text In Here </p>
</Modal>
               

                <div className="has-text-centered">
                    When I'm not creating products or brand identites
                </div>
            <div className="tile is-ancestor">
              <VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
              <Spring delay={300} from={{opacity: 0}} to={{opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50vh)"}}> 
              {styles => (
          <animated.div style={{styles, width: 100 + '%' }} >          
                
                <div className="tile is-12 has-text-centered">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                               
                             Here is Some Text

                            <br/>
                             <button type="button" onClick={this.showModal}>
                               Click Me 
                              </button>
                            </div>
                          </div>
                      </div>
                </div>
                
                  </animated.div> 
              )}
                </Spring>
                          )}
                          </VisibilitySensor>
            </div>
 
          </>
        );
        }; 
      };
  


export default Hobbies;