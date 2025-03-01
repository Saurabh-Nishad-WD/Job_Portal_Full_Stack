import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import jobListing from '../components/jobListing/jobListing'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <jobListing/>
    </div>
  );
};

export default Home;
