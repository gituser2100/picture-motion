import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactUsItems from '../components/ContactUsComponents'

const ContactUs = () => {
  return (
    <>
    <h1 className='text-5xl mt-2 font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br to-purple-500 from-40% via-gray-500 via-10% from-indigo-300 uppercase 
    text-center'>Contact Us</h1>
    <ContactUsItems />
    <ContactForm />
    </>
  )
}

export default ContactUs