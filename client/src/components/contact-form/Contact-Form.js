import React,{useState} from 'react';

import './contact-form.scss'

const ContactForm = () =>{

    const [user, setUser] = useState({
        email: "",
        name: '',
        contactNumber: '',
        message: ""
      });

    const {email,name,contactNumber,message} = user;

    const handleChange = e => {
        const { value, name } = e.target;
    
        setUser({...user, [name]: value })
      };
    return(
        <div className='contact-form'>

            <div className="contact-text">
                <h3>
                    DACA VREI SA LUCRAM IMPREUNA, LASA-MI UN MESAJ 
                </h3>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id egestas cras pharetra id proin.
                </p>

                <h5>
                    Telefon: 0777777777
                </h5>

                <h5>
                    email: duluman@md-gym.com
                </h5>
            </div>
            
            
            <form id="contact-form" className='form'>
                <div className="form-group name">
                    <input 
                    type="text" 
                    className="form-input" 
                    value={name} 
                    placeholder="Name"
                    name='name'
                    onChange={handleChange} />
                </div>
                <div className="form-group phone">
                    <input 
                    type="text" 
                    className="form-input" 
                    value={contactNumber} 
                    placeholder="Phone"
                    name='contactNumber'
                    onChange={handleChange} />
                </div>
                <div className="form-group email">
                    <input 
                    type="email" 
                    className="form-input" 
                    name='email'
                    placeholder="email"
                    value={email} 
                    onChange={handleChange} />
                </div>
                <div className="form-group message">
                    <textarea
                     className="form-input"
                     rows="5" 
                     placeholder="Message"
                     name='message'
                     value={message} 
                     onChange={handleChange} />
                </div>
                <div className='submit'>
                <button className='submit-button'>Trimite</button>
                </div>
            </form>
            </div>
        
    )
}

export default ContactForm; 