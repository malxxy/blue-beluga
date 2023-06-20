import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

function Contact() {
  return (
    <div className="eachContainer">
      <h1>Contact Malia</h1>
      <div className="contactCards">
        <Card
          href='https://www.instagram.com/malia.yraguen/?hl=en'
          header='Instagram'
          meta='Follow Malia on Instagram'
          description='Dance videos, photoshoots, and more.'
        />
        <Card
          href='https://www.linkedin.com/in/malia-yraguen-a7778a175/'
          header='LinkedIn'
          meta='Connect with Malia on LinkedIn'
          description='Dance videos, photoshoots, and more.'
        />
      </div>

      <div>
      <Form className='contactMalia'>
        <Form.Field>
          <label>Full Name</label>
          <input placeholder='Full Name' />
        </Form.Field>
        <Form.Field>
          <label>Subject</label>
          <input placeholder='Subject' />
        </Form.Field>
        <Form.TextArea label='About' placeholder='Write your message here...' />
        <Button type='submit'>Submit</Button>
      </Form>
      </div>
    </div>
  );
}

export default Contact;