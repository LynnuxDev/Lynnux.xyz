import React from 'react';
import { PaperPlaneOutline } from 'react-ionicons'

interface contactProps {
    active: boolean;
}
  
const contact: React.FC<contactProps> = ({active}) => {
    
    if (active === true ) {
        return (
            <article className="contact active" data-page="contact">
          <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>
          <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>
            <form id="contact-form" action="./?messageSuccess" className="form" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="bot-field" />
              <div className="input-wrapper">
                <input type="text" name="fullname" className="form-input" placeholder="Your name or twitch" required />
                <input type="email" name="email" className="form-input" placeholder="Your email address" required />
              </div>
              <textarea name="message" className="form-input" placeholder="Your Message" required></textarea>
              <button className="form-btn" type="submit" data-form-btn>
              <PaperPlaneOutline color={'#ffdb70'} title={'paperPlane'} height="40px" width="40px"/>
                <span>Send Message</span>
              </button>
            </form>
          </section>
        </article>
            );
    } else {
        return(
            <>
            </>
        )
    }
};

export default contact;