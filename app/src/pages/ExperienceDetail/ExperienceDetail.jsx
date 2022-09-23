import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { JwtContext } from '../../context/jwtContext';
import "./ExperienceDetail.css"
import PdiCard from '../../components/PdiCard/PdiCard';
import {  Link} from 'react-router-dom'
import Loader from '../../components/Loader/Loader';


const ExperienceDetail = () => {
  const [actualUser, setActualUser] = useState({});
  const [showFav, setShowFav] = useState(true);
  const [ showLoder, setShowLoder]=useState(false);
  const { user } = useContext(JwtContext);
  const { id } = useParams();
  const [experience, setExperience] = useState({});
  const [pdis, setPdis] = useState([]);



  const getUser = async (defaultExperience) => {
    API.get(`/user/${user._id}`).then((res) => {
      console.log(res)
      setActualUser(res.data.data.user);
      const localExperience = Object.keys(experience).length === 0 ? defaultExperience : experience ;
      if(res.data.data.user.favoriteExperience.includes(localExperience._id)){
        setShowFav(false);
       } else {setShowFav(true)};
    })
  }
  const getFavorites = async () =>{
    API.get(`/user/username/${user.username}`).then((res)=>{
      console.log(res.data.data);
      const user = res.data.data.user[0];
      localStorage.setItem("user", JSON.stringify(user))
    })
  }


  const getExperience = async () => {
    API.get(`/experience/${id}`).then((res) => {
      setExperience(res.data.data)
      return res.data.data
    }).then((res) => {
      getUser(res);    
      const experiencePdis = res.pdis;

      if (experiencePdis.length) {
        if (experiencePdis.length === 1) {
          getExperiencePdi(experiencePdis[0]._id)
        }
        else {
          getPdis(experiencePdis)
        }
      }

    }).catch((err) => {
      setExperience(res.data.data)
      setPdis(res.data.data.pdis)

    }).catch((err) => {
      console.log(err)
    })
  };


  const getExperiencePdi = async (idPdi) => {
    API.get(`/pdi/${idPdi}`).then((res) => {
      setPdis([res.data.data])
    })
  }
  const getPdis = async (experiencePdis) => {
    API.get("/pdi").then((res) => {
      filterPdis(res.data.data, experiencePdis)
    })
  }
  const filterPdis = (allPdis, experiencePdis) => {
    const filteredPdis = []
    allPdis.forEach(pdi => {
      experiencePdis.forEach(experiencePdi => {
        if (experiencePdi._id === pdi._id) {
          filteredPdis.push(pdi)
        }
      })
    });
    setPdis(filteredPdis)
  }

  const addFavorite = async () => {

    const newExperience = {
      favoriteExperience: [...actualUser.favoriteExperience, experience._id]
    };
    if (actualUser.favoriteExperience.indexOf(experience._id) === -1) {
      setShowFav(false)
      API.patch(`/user/${user._id}`, newExperience).then(() => {
        getFavorites();
        setShowLoder(true)
      }).then(() => {
        setShowLoder(false)
      })
    }



  }

  const removeFavorite = async () => {
    const tempFavoriteExperience = actualUser.favoriteExperience

    const newFavoriteExperience = tempFavoriteExperience.filter(e => e !== experience._id)
    const newExperience = {
      favoriteExperience: newFavoriteExperience,
    };
    console.log(newFavoriteExperience)
    setShowFav(true)
    API.patch(`/user/${user._id}`, newExperience).then(( ) => {
      getFavorites();
    })
   
   
  }


  // const pdis] = experience;
  // console.log(pdis)

  useEffect(() => {
    getExperience();
   
  }, []);

  return (
    <>
      {showLoder ? <Loader /> : null}
    <figure className='detail'>

      <div className='conteinerInfo'>
        <div className='imageDetail'>
          <img src={experience.image} alt={experience.name} />
        </div>
        <div className='description'>
          <h2>  {experience.name} </h2>
          <h3>  {experience.location} </h3>
          <p> {experience.description}</p>
          <div className='price'>
            <p>  {experience.price}€</p>
           
          </div>
            <div className='add'> 
               {!showFav ?
              <button onClick={() => removeFavorite()  }>❌</button>
              :  <button onClick={() => addFavorite()  }>💓</button>}
              </div>
        </div>
      </div>
       <div className='PDI '>
        <div className='puntos'>
          <h2> Puntos de interés </h2>
        </div>
        <div className='pdi'>
          {pdis.length ? pdis.map((pdi) => <PdiCard pdi={pdi} key={pdi._id} />) : <p></p>}      
        </div>
        
      </div>
    </figure>
   </>

  );
}

export default ExperienceDetail
