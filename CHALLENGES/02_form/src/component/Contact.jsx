import { useState } from "react"
import './contact.css';

const Contact=()=>{

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:"",
    });

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>({...prev,[name]:value}));
    };

    const [valid, setValid] = useState(false);


const handleSubmit=(e)=>{
    e.preventDefault();
    // basic form validation

    if(!formData.name || !formData.email || !formData.message){
        alert("All fields are required!");
        return;
    }
setValid(true);

  // Reset form
  setFormData({ name: "", email: "", message: "" });

}
    return(

        <div className="contact-container">
        <h2>Contact Us</h2>
        {valid && <p className="success">Your message has been sent!</p>}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required value={formData.message} onChange={handleChange}></textarea>

            <button type="submit">Send Message</button>
        </form>
    </div>
    );
};

export default Contact;