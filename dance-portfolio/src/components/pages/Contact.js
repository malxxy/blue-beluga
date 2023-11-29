import React from 'react';
import { Button, Form, Icon } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

function Contact() {
  return (
    <div className='eachContainer'>
      <h1>Contact Malia</h1>
      <div className='contactCards'>
        <Card
          href='https://www.instagram.com/maliafaithh/?hl=en'
          header='Instagram'
          target='_blank'
          meta='DM Malia on Instagram'
          description='Performance videos, class videos, photoshoots, and more.'
        />
        <Card
          href='https://www.linkedin.com/in/malia-yraguen-a7778a175/'
          header='LinkedIn'
          target='_blank'
          meta='Connect with Malia on LinkedIn'
          description='Learn about her professional background in the technology industry.'
        />
      </div>
      <div className="ui divider"></div>

      <div>
      <h1>Email</h1>
      <Form className='contactMalia'>
        <Form.Field>
          <label>Full Name</label>
          <input placeholder='Full Name' />
        </Form.Field>
        <Form.Field>
          <label>Subject</label>
          <input placeholder='Subject' />
        </Form.Field>
        <Form.TextArea label='Message' placeholder='Write your message here...' />
        <Button type='submit'>Submit</Button>
      </Form>
      </div>

      <div className="ui divider"></div>
      <div className='eachContainer'>
      <Icon name='instagram' size='huge'/>
      <Icon name='mail' size='huge'/>
      <Icon name='linkedin' size='huge'/>
      </div>
    </div>
  );
}

export default Contact;