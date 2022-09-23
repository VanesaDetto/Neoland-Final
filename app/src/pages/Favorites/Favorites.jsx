import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import "./Favorites.css"
import React, { useEffect, useState, useContext } from 'react';
import { JwtContext } from '../../context/jwtContext';

import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
const Favorites = () => {
    const [allFavorites, setAllFavorites] = useState([]);
    const {user} = useContext(JwtContext)
    const { username } = useParams();
console.log(user, username)

    
    const getFavorites = () => {
     const userStorage = JSON.parse(localStorage.getItem("user"))
     const favorites = userStorage.favoriteExperience;
     setAllFavorites(favorites)
    };
  
    useEffect(() => {
      getFavorites()
     
     
    }, []);
   return(

    <section className='favoritos'> 
        {allFavorites.length ? allFavorites.map((favorite) => <ExperienceCard experience={favorite} key={favorite._id}/>) :<p></p>}
        <h2>En este momento está la página en mantenimiento,disculpen las molestias</h2>
        <img src='https://c.tenor.com/1qrYT711uEoAAAAC/cargando.gif'/>
    </section>
   
   ) 
    
 
}
export default Favorites