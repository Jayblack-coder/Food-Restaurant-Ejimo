import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (

    <Layout>
   <div className='Home'>
    <div className='HeaderContainer'>
      <h1>Food Website</h1>
      <p>Best Food In Naija</p>
      <Link to='/menu'>
      <button>
        ORDER NOW
      </button></Link>
    </div>
   </div>
    </Layout>
      
  )
}

export default Home
