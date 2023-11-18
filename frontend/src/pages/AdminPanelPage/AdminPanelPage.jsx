import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AdminPanel from "../../components/AdminPanel/AdminPanel";

const AdminPanelPage = () => {
  return (
    <div className="flex-wrapper">
      <Header />
      <AdminPanel />
      <Footer />
    </div>
  );
};

export default AdminPanelPage;
