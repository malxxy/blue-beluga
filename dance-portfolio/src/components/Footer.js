import React from 'react';
import { Icon } from 'semantic-ui-react'

function Footer() {
  return (
    <footer>
        <div className='footer'>
            <a href='https://github.com/malxxy' target='_blank'>Code by Malia Faith</a>
            <div>
            <Icon name='instagram' size='small'/>
            <Icon name='mail' size='small'/>
            <Icon name='linkedin' size='small'/>
            </div>
        </div>
    </footer>
  );
}

export default Footer;