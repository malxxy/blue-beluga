import React from 'react';
import { Icon } from 'semantic-ui-react'

function Footer() {
  return (
    <footer>
        <div className='footer'>
            <a href='https://github.com/malxxy' target='_blank'>Code by Malia Faith</a>
            <div>
              <a href='https://www.instagram.com/maliafaithh/?hl=en' target='_blank'><Icon name='instagram' size='small'/></a>
              <a href='https://www.linkedin.com/in/malia-yraguen-a7778a175/' target='_blank'><Icon name='linkedin' size='small'/></a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;