import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import MaliaFaithGoGoResume from '../../images/MaliaFaithGoGoResume.png';

function Resume() {
  return (
    <div className='eachContainer'>
      <h1>Resume</h1>
      <div>
      <Card>
          <Image
          src={MaliaFaithGoGoResume}
          wrapped ui={false} 
          href='http://youtube.com'
          target='_blank'
          />
        </Card>
      </div>
    </div>
  );
}

export default Resume;git