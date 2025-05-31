import appData from "../content/data/setting.json";

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
