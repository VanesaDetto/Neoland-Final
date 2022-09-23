import React from 'react'
import { useEffect, useState } from "react";
import SearchBar from '../../components/SearchBar/SearchBar';
import { API } from "../../services/API";
import PdiCard from '../../components/PdiCard/PdiCard';
import { Link } from 'react-router-dom';
import "./Pdi.css"
import Loader from '../../components/Loader/Loader';

const Pdi = () => {
  const [allPdis, setAllPdis] = useState([]);
  const [filterWord, setFilterWord] = useState("");

  const filteredPdis = allPdis.filter(
    (pdi) =>
     
    pdi.name?.toLowerCase().includes(filterWord)  

    
  );



  const getAllPdis = async () => {
    API.get("/pdi").then((res) => {
      setAllPdis(res.data.data);
      console.log(allPdis)
    });
  };

  useEffect(() => {
    getAllPdis();
  }, [filterWord]);


  return (
    <section className='pdi'>  
      <div className='buscador'>
          <SearchBar setFilterWord={setFilterWord} />
          </div>       
      {allPdis.length ? allPdis.map((pdi) => <PdiCard pdi={pdi} key={pdi._id}
      />) :<p>Loading...</p>}
    </section>
  )
}

export default Pdi