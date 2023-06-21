import React from 'react';
import gogo from '../../images/gogo.png';

function Main() {
  return (
    <div className='eachContainer'>
      <h1>Dancer</h1>
      <div className='mainPage'>
        <div className='mainImg'>
          <img
            src={gogo}
            alt='Malia Faith in gogo outfit' />
        </div>

        <div className='aboutMalia'>
          <h2>About</h2>
          <p >Malia is go-go dancer and technically trained dancer based in San Diego, CA. 
            She is currently a signed performer with Supernovas Entertainment, an agency 
            that provieds go-go dancers to events such as Day Trip LA, 
              Academy LA,  Exchange LA,  Time Nightclub, and Nova SD. </p>
              <p>Malia performs regularly at Insomniac Events, Parq SD nightclub, and the Hard Rock Hotel. Further, Malia is a company member with San Diego's top heels performance team - Play Hard Heels. 
            Malia has a technical background in contemporary, ballet, jazz, hip hop, and heels dance.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;