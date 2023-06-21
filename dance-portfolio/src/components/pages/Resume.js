import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import resume from '../../images/Malia_Faith_GoGoTechnical_Resume.pdf';

function Resume() {
  return (
    <div className='eachContainer'>
      <h1>Resume</h1>
      <div>
      <Card>
          <Image
          src={resume}
          wrapped ui={false} 
          href='http://youtube.com'
          target='_blank'
          />
        </Card>
      </div>
    </div>
  );
}

export default Resume;