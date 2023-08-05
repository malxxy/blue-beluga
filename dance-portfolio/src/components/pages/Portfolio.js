import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import headshot from '../../images/headshot.png';
import edc from '../../images/edc.png';
import body from '../../images/body.png';
import pool from '../../images/pool.png';
import sunnies from '../../images/sunnies.png';

function Portfolio() {
  return (
    <div className='eachContainer'>
      <h1>Portfolio</h1>
      <div className='portfolioCards'>
      <Card>
          <Image wrapped ui={false} 
          href='http://youtube.com'
          target='_blank'/>
          <Card.Content>
            <Card.Header>Malia Faith Choreograophy</Card.Header>
            <Card.Description>
              Intermediate hip hop heels choreography by Malia Faith at Play Hard Heels.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image 
          wrapped ui={false} 
          href='http://youtube.com'
          target='_blank'
          />
          <Card.Content>
            <Card.Header>EDC Reel</Card.Header>
            <Card.Description>
              Malia Faith was 1/4 female dancers selected to perform on the main stage at EDC Las Vegas 2023. Malia performed alongside Tiesto, David Guetta, Loud Luxury, Slander, Alison Wonderland, Kaskade, Galantis, and many more critically acclaimed DJs.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image
          wrapped ui={false} 
          href='http://youtube.com'
          target='_blank'
          />
          <Card.Content>
            <Card.Header>Performance Reel</Card.Header>
            <Card.Description>
              Malia Faith is a go-go dancer based in Southern California.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image wrapped ui={false}
          href='http://youtube.com'
          target='_blank' />
          <Card.Content>
            <Card.Header>Heels Class with Marissa Heart</Card.Header>
            <Card.Description>
              Advanced heels choreography by Marissa Heart at Playground LA. Malia was chosen to film in a select group chosen from 80+ dancers.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image wrapped ui={false} 
          href='http://youtube.com'
          target='_blank'/>
          <Card.Content>
            <Card.Header>Heels Class</Card.Header>
            <Card.Description>
              Advanced heels choreography by Janelle Murphy at Play Hard Heels.
            </Card.Description>
          </Card.Content>
        </Card>
       
      </div>
      <div className="ui divider"></div>
      <div>
      <h1>Gallery</h1>
      <div className='gallery'>
      <Card>
          <Image src={headshot} wrapped ui={false} rounded />
          <Card.Content>
            <Card.Description>Photo by Insomniac Events</Card.Description>
          </Card.Content>
        </Card>
      <Card>
          <Image src={edc} wrapped ui={false} rounded alt='Malia Faith performing at main stage EDCLV'/>
          <Card.Content>
            <Card.Description>Photo by Alex Brondo</Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image src={body} wrapped ui={false} rounded/>
          <Card.Content>
            <Card.Description>Photo by Alex Brondo </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image src={sunnies} wrapped ui={false} rounded/>
          <Card.Content>
            <Card.Description>Photo by Alex Brondo</Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image src={pool} wrapped ui={false} />
          <Card.Content>
            <Card.Description>Performance Reel</Card.Description>
          </Card.Content>
        </Card>
        </div>
        </div>
    </div>
  );
}

export default Portfolio;