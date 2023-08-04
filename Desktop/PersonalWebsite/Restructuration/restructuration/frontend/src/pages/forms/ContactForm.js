import React, { useState } from 'react';

const ContactForm = () => {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
         const response = await fetch('/api/send_email/', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ name, email, message }),
         });

         if (response.ok) {
         console.log('Email sent successfully');
         // Reset form fields if needed
         setName('');
         setEmail('');
         setMessage('');
         } else {
         console.error('Error sending email');
         }
      } catch (error) {
         console.error('Error sending email:', error);
      }
   };



   return (
      <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
         <div className="modal-content">
            <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">Contact Form</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
               <form>
               <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                     Who are you? 🦧
                  </span>
                  <input type="text" className="form-control" placeholder="Nickname" aria-label="Username" aria-describedby="basic-addon1" />
               </div>
               <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="e-mailer address" aria-label="sender email" aria-describedby="basic-addon2" />
                  <span className="input-group-text" id="basic-addon2" style={{ width: '6.5rem', textAlign: 'left' }}>
                     Email 📬
                  </span>
               </div>
               <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="What's that email about?" aria-label="email subject" aria-describedby="basic-addon2" />
                  <span className="input-group-text" id="basic-addon2" style={{ width: '6.5rem', textAlign: 'left' }}>
                     Subject 📌
                  </span>
               </div>
               <div className="input-group mb-3">
                  <span className="input-group-text">
                     Message 📝
                  </span>
                  <textarea className="form-control" aria-label="Tell me more" style={{ height: '8rem' }}></textarea>
               </div>
               <button type="submit" className="btn btn-dark float-end">
                  Done!
               </button>
               </form>
            </div>
         </div>
         </div>
      </div>
   );
};

export default ContactForm;
