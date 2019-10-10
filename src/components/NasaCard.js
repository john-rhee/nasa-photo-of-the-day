import React from "react";

const NasaCard = props => {
  return (
    <div className="cards" key={props.date}>
      <h2>Title: {props.title}</h2>
      <img className="nasaimg" alt="nasaphoto" src={props.photo} />
      
    </div>
  );
};
export default NasaCard;