import React from 'react';
import { Card, Image } from 'semantic-ui-react'

function Portfolio() {
  return (
    <div className="eachContainer">
      <h1>Portfolio</h1>
      <div className='portfolioCards'>
        <Card>
          <Image src='/images/edc.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Performance Reel</Card.Header>
            <Card.Description>
              Malia Faith is a go-go dancer based in Southern California.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image src='./images/edc.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>EDC Reel</Card.Header>
            <Card.Description>
              Malia Faith was one of four female dancers to select on the main stage at EDC Las Vegas 2023. Malia performed alongside Tiesto, David Guetta, Loud Luxury, Slander, Alison Wonderland, Kaskade, Galantis, and many more.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image src='/images/edc.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Class Video</Card.Header>
            <Card.Description>
              Advanced heels class by Marissa Heart to the song "Adorn".
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image src='/images/avatar/large/image.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Performance Reel</Card.Header>
            <Card.Description>
              Malia Faith is a go-go dancer based in Southern California.
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
      <h1>Gallery</h1>
      <Card>
          <Image src='/images/avatar/large/gogo.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Photo by Alex Brondo</Card.Header>
          </Card.Content>
        </Card>
      <Card>
          <Image src='/images/avatar/large/body.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Photo by Alex Brondo</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image src='/images/avatar/large/edc.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Photo by Insomniac Events</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image src='/images/avatar/large/body.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Photo by Alex Brondo</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image src='/images/avatar/large/sunnies.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Performance Reel</Card.Header>
          </Card.Content>
        </Card>
    </div>
  );
}

export default Portfolio;