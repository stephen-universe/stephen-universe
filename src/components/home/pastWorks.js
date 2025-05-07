import React from "react";
import TiltCard from "./tiltCards"; // assuming it's saved separately
import { Link } from "gatsby";


export default function InitializeContact() {
  return (
    <div className="container">
      <div
        className="has-text-centered title"
        style={{ marginTop: "15rem", marginBottom: "3rem" }}
      >
        My Creative Process:
      </div>

      <div className="has-text-centered" style={{ marginBottom: "3rem" }}>
        Not all products are created equally. <br />
        In design, every project should solve a unique set of problems. <br />
        <br />
        To follow these guidelines I've generated a process for constructing
        'user-centered' & responsive web design.
      </div>

      <div className="container">
        <div className="row">
          <div className="columns is-multiline is-12 is-mobile">
            <div className="column is-half is-6 has-text-centered">
            <Link to="/detail?card=1">
              <TiltCard
                title="Discover"
                subtitles={[
                  "Interview Both Owner & Customer",
                  "Identify Any Pain Points",
                  "Identify The Competition",
                ]}
                image="/images/discover-bg.jpg"
              />
              </Link>
            </div>
            <div className="column is-half is-6 has-text-centered">
            <Link to="/detail?card=2">
              <TiltCard
                title="Define"
                subtitles={[
                  "Create Problem Statements",
                  "Refine User Personas",
                  "Establish Success Metrics",
                ]}
                image="/images/discover-bg.jpg"
              />
              </Link>
            </div>
          </div>

          <div className="columns is-multiline is-12 is-mobile">
            <div className="column is-half is-6 has-text-centered">
              <Link to="/detail?card=3">
              <TiltCard
                title="Design"
                subtitles={[
                  "Sketch Layouts & Components",
                  "Build Wireframes",
                  "Plan Interaction Patterns",
                ]}
                image="/images/discover-bg.jpg"
              />
              </Link>
            </div>
            <div className="column is-half is-6 has-text-centered">
            <Link to="/detail?card=4">
              <TiltCard
                title="Deploy"
                subtitles={[
                  "Develop & Test",
                  "Launch Responsively",
                  "Iterate Based on Feedback",
  ]}
  image="/images/discover-bg.jpg"
/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
