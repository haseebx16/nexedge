import React from 'react'
import Nav from '../components/Navbar'
import WebsiteDesign from '../components/About'
import Footer from '../components/Footer'
import ContactPage from '../components/Contact'

const page = () => {
  return (
    <>
      <Nav/>
      <WebsiteDesign/>
      <ContactPage/>
      <Footer/>
    </>
  )
}

export default page