import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import JobListing from "../components/jobListing/jobListing";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <JobListing />
    </div>
  );
};

export default Home;
