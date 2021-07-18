import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Ham from "../Ham";
import Layout from "../Layout";

function Store() {
  return (
    <div>
      <Layout>
        <Header />
        <Ham />
        <Footer />
      </Layout>
    </div>
  );
}
export default Store;
