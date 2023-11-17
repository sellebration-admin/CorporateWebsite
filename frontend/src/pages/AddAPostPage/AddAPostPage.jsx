import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RichTextEditor from "../../components/ReachTextEditor/RichTextEditor";

const AddAPostPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      navigate("/index");
    }
  }, [currentUser, navigate]);

  return (
    <div className="flex-wrapper">
      <Header />
      <RichTextEditor />
      <Footer />
    </div>
  );
};

export default AddAPostPage;
