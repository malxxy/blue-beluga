import React from 'react';
import gogo from '../../images/gogo.png';

function Main() {
  return (
    <div className='eachContainer'>
      <h1>Go-Go Dancer</h1>
      <div className='mainPage'>
        <div className='mainImg'>
          <img
            src={gogo}
            alt='Malia Faith in go-go costume photographed by Alex Brondo.'/>
        </div>

        <div className='aboutMalia'>
          <h2 style={{borderBottom: '2px solid #4D4D4E', paddingBottom: '1rem'}}>About</h2>
          <p >Malia is go-go dancer and technically trained dancer based in San Diego, CA. 
            She is currently signed with Supernovas Entertainment, a go-go dancer agency often booked by Day Trip LA, 
              Academy LA,  Exchange LA,  Time Nightclub, and Nova SD. </p>
              <p>Malia also performs with Insomniac Entertainment, Parq SD nightclub, and Event Vibe at the Hard Rock Hotel. Further, Malia is a company member with San Diego's top heels performance team - Play Hard Heels. 
            Malia trains in contemporary, ballet, jazz, hip hop, and heels dance.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;