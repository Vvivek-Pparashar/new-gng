import "../Features/featurecomp.css";

const Featurecomponent = (props) => {
  return (
    <div className="feature-component">
      <img src={props.featureLogo} alt="logo" />
      <h1>{props.heading}</h1>
      <p>{props.brief}</p>
    </div>
  );
};

export default Featurecomponent;
