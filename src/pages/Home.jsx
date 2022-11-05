import React from 'react'
import {Helmet} from 'react-helmet-async'
const Home = () => {
  return(
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="check my home page there're alot of stuffs goes on there"/>
        <link rel="canonical" href="/Home" />
      </Helmet>
      <div>
        Learn the in-demand skills required to take you from             beginner
        to industry ready in 12 months. No degree
        or prior tech experience required.
      </div>
    </>
  )
}

export default Home