import React from 'react'
import ImageContact from '../assets/fooda.jpeg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ImageContact})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name='name' type="text" placeholder="Enter your name..." />
          <label htmlFor="email">Email</label>
          <input name='email' type="email" placeholder="Enter your email..." />
          <label htmlFor="message">Message</label>
          <textarea name='message' placeholder='Enter your meassage' rows='7'></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
