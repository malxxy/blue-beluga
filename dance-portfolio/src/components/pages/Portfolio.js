import React from 'react';
import { Card, Image } from 'semantic-ui-react'

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        <Card>
          <Image src='/images/avatar/large/image.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Performance Reel</Card.Header>
            <Card.Description>
              Malia Faith is a go-go dancer based in Southern California.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image src='/images/avatar/large/image.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>EDC Reel</Card.Header>
            <Card.Description>
              Malia Faith was one of four female dancers to select on the main stage at EDC Las Vegas 2023. Malia performed alongside Tiesto, David Guetta, Loud Luxury, Slander, Alison Wonderland, Kaskade, Galantis, and many more.
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default Portfolio;