import React from 'react';
import { Icon } from 'semantic-ui-react';

function Footer() {
  return (
    <footer>
        <div className='footer'>
          <div>
              <a href='https://github.com/malxxy' 
              target='_blank' 
              style={{'fontSize':'1.75rem'}}>
              Code by Malia Faith
                </a>
          </div>
          <div>
            <a href='https://www.instagram.com/maliafaithh/?hl=en' target='_blank'><Icon name='instagram' size='lg'/></a>
            <a href='https://www.linkedin.com/in/malia-yraguen-a7778a175/' target='_blank'><Icon name='linkedin' size='lg'/></a>
          </div>
        </div>
    </footer>
  );
}

export default Footer;