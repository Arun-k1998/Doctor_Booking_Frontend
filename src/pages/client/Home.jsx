import React from 'react'
import Navbar from '../../components/client/navbar/Navbar'
import Banner from '../../components/client/Banner/Banner'
import Cards from '../../components/client/Cards/Cards'
import Footer from '../../components/client/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home
