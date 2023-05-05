import React from "react";
import Styles from "./Home.module.css";

const Home = () => {
  let value =
    "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  return (
    <div>
      <div className={Styles.Background}>
        <img src={value} />
      </div>

      <div>
        <div className={Styles.Text}>
          <h1>A healthy meal delivered to your door, every single day</h1>
          <section>
            The smart 365-days-per-year food subscription that will make you eat
            helathy again
          </section>
          <button>Start Eating Well</button>
          <div className={Styles.Image}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                alt="logo"
              />
              <img
                src="https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?h=350&auto=compress&cs=tinysrgb"
                alt="logo"
              />
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                alt="logo"
              />
              <img
                src="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                alt="logo"
              />
              <img
                src="https://randomuser.me/api/portraits/women/63.jpg"
                alt="logo"
              />
              <img
                src="https://randomuser.me/api/portraits/men/16.jpg"
                alt="logo"
              />
            </div>
            <div>250,000+ meals delivered last year!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
