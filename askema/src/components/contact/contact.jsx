import React, {useState} from 'react'
import './contact.css'
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

export default function Contact() {

  const {t, i18n} = useTranslation();

  const notify = () => toast("Thank you for contacting us!");
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send('service_0lu46hr', 'template_lf91snb', formData, 'dE_Zt1ninl6fhRE1y')
      .then((result) => {
          console.log(result.text);
          notify(); // toast
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='bodyOfcontact'>
      <Toaster  />
      <section className='contact'>
        <div className="content">
          <h2>{t("Contact Us")} </h2>
          <p>{t("feel free")} </p>
        </div>
        <div className="container">
          <div className="contactinfo">
            <div className="box">
              <div className="icon"><i class="fa fa-map-marker"  aria-hidden="true"></i></div>
              <div className="text">
                <h3>{t('Address')} </h3>
                <p>Phillipos ,Woreda 11, <br />Addis Ketema, <br />Addis Ababa, <br />Ethiopia</p>
              </div>
            </div>
            
            <div className="box">
              <div className="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
              <div className="text">
                <h3>{t("Phone")} </h3>
                <p>+251989638541 <br />+251965341134</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
              <div>
                <div className="text">
                  <h3>{t("Email")} </h3>
                  <p>h07842233@gmail.com <br /> bethlehemayele1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <form action="" onSubmit={handleSubmit} >
              <h2>{t("Send Message")} </h2>
              <div className="inputBox">
                <input type="text" 
                name="from_name" 
                required="required"  
                value={formData.from_name}
                onChange={(e) => setFormData({...formData, from_name: e.target.value})}
                />
                <span>{t("Full Name")} </span>
              </div>
              <div className="inputBox">
                <input type="text" 
                name="from_email"
                value={formData.from_email}
                onChange={(e) => setFormData({...formData, from_email: e.target.value})} 
                required="required" 
                />
                <span>{t("Email")} </span>
              </div>
              <div className="inputBox">
                <textarea 
                name="message"
                required="required"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
                <span>{t("Type your Message...")} </span>
              </div>
              <div className="inputBox">
                <input type="submit" name="send" value="Send"  />
              </div>
            </form>
          </div>
        </div>
        
        
        
      </section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8116.476495083492!2d38.69927810938119!3d9.042189900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPhillipos%20%2CWoreda%2011%2C%20Addis%20Ketema%2C%20Addis%20Ababa%2C%20Ethiopia!5e1!3m2!1sen!2set!4v1704148628024!5m2!1sen!2set" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
