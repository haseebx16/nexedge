import React from 'react'
import Nav from '../components/Navbar'
import { font } from '../components/font/titan'
import Link from 'next/link'
import serviceData from "../components/data/serviceCards"
import Footer from '../components/Footer'
import Services from '../components/Services'

const page = () => {
  return (
    <>
      <Nav/>
      <Services/>
    <Footer/>
    </>
  )
}

export default page