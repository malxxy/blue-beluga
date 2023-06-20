import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function Main() {
  return (
    <div className="eachContainer">
      <h1>Dancer</h1>
      <Card>
          <Image wrapped ui={false} />
        </Card>
      <div>
        <h3>About</h3>
        <p>Malia is a technical and gogo dancer based in San Diego, CA. She is currently a signed performer with Supernovas Entertainment, an agency that provieds gogo dancers to events such as Day Trip LA and nightclubs including Academy LA, Exchange LA, Time Nightclub, and NOVA SD. Further, Malia is a company member with San Diego's top heels performance team - Play Hard Heels. She dances gogo regularly at Insomniac Events, Parq SD nightclub, and the Hard Rock Hotel. Malia has a technical background in contemporary, ballet, jazz, hip hop, and heels dance.</p>
      </div>
    </div>
  );
}

export default Main;