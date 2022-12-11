import React from "react";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="check my about page there're alot of stuffs goes on there"
        />
        <link rel="canonical" href="/About" />
      </Helmet>
      <p>
        While running TalentQL, we realised that there was a huge knowledge gap
        with some of the software engineers who passed through our vetting
        process, when it came to understanding basic things about software
        engineering.
      </p>
    </>
  );
};

export default About;
