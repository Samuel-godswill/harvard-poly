import React from 'react'
import './Contact.css'
import msg from '../../assets/msg.png'
import mail from '../../assets/mail.jpeg'
import phone from '../../assets/phone.jpeg'
import location from '../../assets/location.jpeg'
import whiteArrow from '../../assets/whiteArrow.png'

export const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg} alt=''/></h3>
            <p>Harvard Poly stands as a leading institution committed to providing accessible education, empowering individuals with the essential skills required to excel in the contemporary world.</p>
            <ul>
                <li> <img src={mail} alt=''/>Contact@ugbemsamuel6@gmail.com</li>
                <li> <img src={phone} alt=''/> +234 9061294102</li>
                <li> <img src={location} alt=''/> 20 GRA Ikeja. Lagos</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={whiteArrow} alt=''/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}
