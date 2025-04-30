import { graphql, StaticQuery, Link } from "gatsby";
import React from "react"
import "../styles/style.scss"




export default props =>  (
    <>

    <StaticQuery
    query={graphql`
    query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }      
`}
    render={data => (
        <>
        <div className="tile is-ancestor">
        <div className="tile is-6 is-parent">
            <div className="tile is-child box">
                
             
                <p className="title"><h2>Title</h2></p>
                <Link to="/project/on-the-geneology-of-morals">
                        <img className="project-box" src="/assets/background-1.jpg" />
                </Link>
                <p> Lorem Ipsum</p>
                <div className="column is-1 is-pulled-right">
                <Link to="/project/on-the-geneology-of-morals" >
                    <div className="buttons  has-addons is-right">
                        <button className="button">Click Me</button>
                    </div>
                </Link>
                </div>
            </div>
        </div>
        </div>
        
               
          
        
            <div className="tile is-ancestor">
                <div className="tile is-4">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">One</p>
                                <Link to="/"><img className="project-box"  src="/assets/background-1.jpg" /></Link>
                                <p> Lorem Ipsum</p>
                                <div className="column is-1 is-pulled-right">
                                <Link to="/" >
                                    <div className="buttons  has-addons is-right">
                                        <button className="button">Click Me</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="tile is-8">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">One</p>
                                <Link to="/"><img className="project-box"  src="/assets/background-1.jpg" /></Link>
                                <p> Lorem Ipsum</p>
                                 <div className="column is-1 is-pulled-right">
         <Link to="/" >
                                    <div className="buttons  has-addons is-right">
                                        <button className="button">Click Me</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
        
        
            <div className="tile is-ancestor">
                <div className="tile is-9">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">One</p>
                                <Link to="/"><img className="project-box"  src="/assets/background-1.jpg" /></Link>
                                <p> Lorem Ipsum</p>
                                 <div className="column is-1 is-pulled-right">
         <Link to="/" >
                                    <div className="buttons  has-addons is-right">
                                        <button className="button">Click Me</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="tile is-3">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">One</p>
                                <Link to="/"><img className="project-box"  src="/assets/background-1.jpg" /></Link>
                                <p> Lorem Ipsum</p>
                                 <div className="column is-1 is-pulled-right">
         <Link to="/" >
                                    <div className="buttons  has-addons is-right">
                                        <button className="button">Click Me</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
        
        
            <div className="tile is-ancestor">
                <div className="tile is-8 is-vertical">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">One</p>
                                <Link to="/"><img className="project-box"  src="/assets/background-1.jpg" /></Link>
                                <p> Lorem Ipsum</p>
                                 <div className="column is-1 is-pulled-right">
         <Link to="/" >
                                    <div className="buttons  has-addons is-right">
                                        <button className="button">Click Me</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
        
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">One</p>
                                <Link to="/"><img className="project-box"  src="/assets/background-1.jpg" /></Link>
                                <p> Lorem Ipsum</p>
                                 <div className="column is-1 is-pulled-right">
         <Link to="/" >
                                    <div className="buttons  has-addons is-right">
                                        <button className="button">Click Me</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                
              
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">One</p>
                                <Link to="/"><img className="project-box"  src="/assets/background-1.jpg" /></Link>
                                <p> Lorem Ipsum</p>
                                 <div className="column is-1 is-pulled-right">
         <Link to="/" >
                                    <div className="buttons  has-addons is-right">
                                        <button className="button">Click Me</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                </div>
        
                <div className="tile is-4 ">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">One</p>
                                <Link to="/"><img className="project-box"  src="/assets/background-1.jpg" /></Link>
                                <p> Lorem Ipsum</p>
                                 <div className="column is-1 is-pulled-right">
         <Link to="/" >
                                    <div className="buttons  has-addons is-right">
                                        <button className="button">Click Me</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
            </>
    )}
    />
    </>
  )
