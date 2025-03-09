import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    const formRef = useRef(null); // Create a reference for the form

    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_qc2tfap', 
            'template_deis1sg', 
            formRef.current,  // Use the form reference here
            'u1zNdt4n39povdcNl' // Public Key
        )
        .then(
            () => {
                setStatus("Message sent successfully!");
                formRef.current.reset(); // Reset form after successful submission
            },
            (error) => {
                setStatus("Failed to send message. Try again later.");
                console.error('FAILED...', error.text);
            }
        );
    };

    return (
        <div id='cntct' className='flex flex-col md:flex-row justify-center items-center'>
        <div className=" max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Contact Me</h2>

<form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
    <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
    />
    <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
    />
    <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
    />
    <button 
        type="submit" 
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
    >
        Send Message
    </button>
</form>
{status && <p className="mt-4 text-center text-green-600">{status}</p>}

            </div>
          
          
        </div>
        <div className=' card-body'>
            <h1 className='font-bold text-3xl'>Get in Touch</h1>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                     <MdEmail /> maimunarahman30@gmail.com
                        </div>
                        <div className='flex items-center gap-2'>
                        <IoCall/>0172674905
                        </div>
               
                </div>
  
            </div>
        </div>
    );
};

export default Contact;
