import React from "react";
import PropTypes from "prop-types";

const Welcome = (props) => {
  const handleName = (e) => {
    e.preventDefault();
    alert("Angelina Jolie");
  };
  return (
    <div>
   
    <div style={{ color: " rgb(154, 148, 148)", textAlign: "center" }}>
      <h1 style={{ color:"red",textAlign:"center"}}>my name is {props.fullName}</h1>
      <h3>{props.bio}</h3>
      <h4>{props.profession}</h4>
      {props.children}
      <a href="/" onClick={handleName}>
        Click me !
      </a>
    </div>
  </div>

  );
};
Welcome.defaultProps = {fullName: "Angelina Jolie",bio: " naît le 4 juin 1975 à Los Angeles. Elle est élevée par sa mère, Marcheline Bertrand, qui se sépare de son père, l'acteur Jon Voight, en 1976. A l'âge de 11 ans, lorsque sa famille déménage à Los Angeles, la jeune Angelina décide de devenir actrice et prend ses premiers cours de comédie.",profession: "actrisse"};
Welcome.propTypes = {stringProp: PropTypes.string,functionProp: PropTypes.func};

export default Welcome;