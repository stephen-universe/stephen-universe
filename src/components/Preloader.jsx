import appData from "../../content/settings/setting.json";
import React from "react";

const Preloader = () => {
  return (
    <div className="preloader"> 
        <figure>
            <img src={appData.preloader.image} alt={appData.preloader.alt} /> 
        </figure>
    </div>
  );
};
export default Preloader;
