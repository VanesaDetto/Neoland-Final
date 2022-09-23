import React from 'react'
import "./Home.css"

const Home = () => {
  return (

    <section className='home'>
      <div className="parallax">
        <div className='parallax-inner'>
         <h2>Tómate la diversión en serio. Haz tiempo en tu vida para el disfrute. Haz algo divertido y emocionante.</h2>
        </div>   
      </div> 
      <h1>Descubre Experiencias Increíbles</h1>
      
      <div className='gallery' >
       
          <div className='photo-2'>           
            <img src="https://cdn.discordapp.com/attachments/997843641752096798/1020614472357912656/unknown.png" />
          </div>
          <div className='photo'>
            <img src="https://cdn.discordapp.com/attachments/997843641752096798/1020333301627633774/unknown.png" alt="Photo11" />
          </div>
          <div className='photo'>
            <img src="https://cdn.discordapp.com/attachments/997843641752096798/1020613682578870272/unknown.png" />
          </div>
       
          <div className='photo'>
            <img src="../../../public/images/Logo2.jpg" alt="Photo4" />
          </div>
          <div className='photo'>
            <img src="../../../public/galería/galería5.jpg" alt="Photo5" />
          </div>
          <div className='photo-2'>
          <img src="https://cdn.discordapp.com/attachments/997843641752096798/1020615537459478598/unknown.png" />
          </div>    
      </div>
    </section>
   

  )
}

export default Home