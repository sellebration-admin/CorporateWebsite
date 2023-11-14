import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SinglePostModule from "../../components/SinglePostModule/SinglePostModule";
const SinglePostPage = () => {
  return (
    <div className="flex-wrapper">
      <Header />
      <SinglePostModule />
      <Footer />
    </div>
  );
};

export default SinglePostPage;
