import React from "react";
import "./AddAPostPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RichTextEditor from "../../components/ReachTextEditor/RichTextEditor";
const AddAPostPage = () => {
  return (
    <div className="flex-wrapper">
      <Header />
      <RichTextEditor />
      <Footer />
    </div>
  );
};

export default AddAPostPage;
