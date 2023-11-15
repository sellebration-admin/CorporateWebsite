import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AllPostsModule from "../../components/AllPostsModule/AllPostsModule";

const AllPostsPage = () => {
  return (
    <div className="flex-wrapper">
      <Header />
      <AllPostsModule />
      <Footer />
    </div>
  );
};

export default AllPostsPage;
