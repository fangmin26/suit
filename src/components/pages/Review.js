import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Layout from "../Layout";
import Ham from "../Ham";
import Modal from "./Modal/Modal";

function Review() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    console.log("hey");
  };
  return (
    <div>
      <Layout>
        <Header />
        <section id="review ramb">
          <div className="review">
            <div className="review_title">
              <div className="inner">
                <h2>REVIEW</h2>
              </div>
            </div>
            <div className="review_menu">
              <div className="inner">
                <h3>전체 리뷰</h3>
                <ul>
                  <li>
                    <span className="review_img"></span>
                    <span className="review_list">
                      <strong>Balanced Set-up: Light-up&packable </strong>
                      <em>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </em>
                    </span>
                    <span className="more" onClick={toggleModal}>
                      리뷰보기
                    </span>
                    {modal && <Modal toggleModal={toggleModal} />}
                  </li>
                  <li>
                    <span className="review_img"></span>
                    <span className="review_list">
                      <strong>Balanced Set-up </strong>
                      <em>
                        ipsum dolor sit amet consectetur adipisicing elit.
                      </em>
                    </span>
                    <span className="more" onClick={toggleModal}>
                      리뷰보기
                    </span>
                    {modal && <Modal toggleModal={toggleModal} />}
                  </li>
                  <li>
                    <span className="review_img"></span>
                    <span className="review_list">
                      <strong>Balanced Set-up </strong>
                      <em>
                        ipsum dolor sit amet consectetur adipisicing elit.
                      </em>
                    </span>
                    <span className="more">리뷰보기</span>
                  </li>
                  <li>
                    <span className="review_img"></span>
                    <span className="review_list">
                      <strong>Balanced Set-up </strong>
                      <em>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </em>
                    </span>
                    <span className="more">리뷰보기</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Ham />
        <Footer />
      </Layout>
    </div>
  );
}
export default Review;
