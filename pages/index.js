import Head from 'next/head'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/landingpage/Hero'
import Offer from '../components/landingpage/Offer'
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Offer />
    </div>
  )
}
