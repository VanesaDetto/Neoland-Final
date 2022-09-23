import React from "react"
import "./ExperienceCard.css";
import { Link } from "react-router-dom";


const ExperienceCard = ({ experience }) => {
console.log(experience)
  return (
    <Link to={`/experience/${experience._id}`}>
    <figure className="carta">            
        <div className="image-experience">
            <img src={experience.image} alt={experience.name} />                                    
        </div>            
        <div className="text-container">
          <h3>{experience.name}</h3>          
        </div>          
    </figure>
</Link>
  );
};

export default ExperienceCard;



   