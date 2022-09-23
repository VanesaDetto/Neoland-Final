import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar';
import { useEffect, useState } from "react";
import { API } from "../../services/API";
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import "./Experience.css"




const Experience = () => {
  const [allExperiences, setAllExperiences] = useState([]);
  const [filterWord, setFilterWord] = useState("");


  const filteredExperiences = allExperiences.filter(
    (experience) =>
     
    experience.name?.toLowerCase().includes(filterWord)  ||
    experience.location?.toLowerCase().includes(filterWord) 
  );



  const getAllExperiences = async () => {
    API.get("/experience").then((res) => {
      setAllExperiences(res.data.data);
      
    });
  };

  useEffect(() => {
    getAllExperiences();
  }, [filterWord]);


  return (
    <section className='general-experience'>   
    <div className='buscador'>
          <SearchBar setFilterWord={setFilterWord} />
          </div>
      <div className='div-card'>  

      {allExperiences.length ? filteredExperiences.map((experience) => (<ExperienceCard experience={experience} key={experience._id}
      />)) : <p>Loading...</p>}
         </div>        
    </section>

  )
   




}

export default Experience