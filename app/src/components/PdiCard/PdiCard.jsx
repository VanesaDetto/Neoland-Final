import React from "react"
import "./PdiCard.css";
import { Link } from "react-router-dom";


const PdiCard = ({ pdi }) => {

  return (
    <Link to={`/pdi/${pdi._id}`}>
    <figure className="cartaPdi">          
         <div className="img-container">         
              <img className="card_image" src={pdi.image} alt={pdi.name} />         
         </div>  
      <div className="text-container-2">
        <h3>{pdi.name}</h3> 
        <p>{pdi.price}€</p>
      </div>     
    </figure>
    </Link>
  );
};

export default PdiCard;