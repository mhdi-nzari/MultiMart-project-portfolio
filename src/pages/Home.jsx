import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import products from "../assets/data/products";
import Productlist from "../components/UI/Productlist";

import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProduct, setMobileProduct] = useState();
  const [wirelessProducts, setWirelessProducts] = useState();
  const [popularProducts , setPopularProducts] = useState();
  const year = new Date().getFullYear;

  useEffect(() => {
    const filtredTrendingProducts = products.filter(
        (item) => item.category === "chair"
      ),
      filtredBestSalesProducts = products.filter(
        (item) => item.category === "sofa"
      ),
      filtredMobileProduct = products.filter(
        (item) => item.category === "mobile"
      ),
      filtredWirelessProducts = products.filter(
        (item) => item.category === "wireless"
      ),
      filtredPopularProducts = products.filter(
        (item) => item.category === "watch"
      );

    setTrendingProduct(filtredTrendingProducts);
    setBestSalesProducts(filtredBestSalesProducts);
    setMobileProduct(filtredMobileProduct);
    setWirelessProducts(filtredWirelessProducts);
    setPopularProducts(filtredPopularProducts);
  }, []);

  return (
    <>
      <Helmet title={"Home"}>
        <section className="hero__section">
          <div className="container">
            <div className="flex flex-col gap-y-20 lg:flex-row">
              <div className="hero__content flex-1">
                <p className="hero__subtitle">Trending Product in {year}</p>
                <h2>Make Your Interior More Minimalistics & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quod velit commodi animi doloremque natus ullam
                  obcaecati eaque, vitae doloribus quis beatae non inventore ea
                  fugit quos ipsam blanditiis? Distinctio!
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">Shop Now </Link>
                </motion.button>
              </div>
              <div className="flex-1">
                <div className="hero__img">
                  <img src={heroImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />

        {/* trending Product */}
        <section className="trending__products">
          <div className="container">
            <div className="flex flex-col">
              <div className="w-full text-center">
                <h2 className="section__title">Trending Products</h2>
              </div>
              <Productlist data={trendingProduct} />
            </div>
          </div>
        </section>
        <section className="best__sales">
          <div className="container">
            <div className="flex flex-col">
              <div className="w-full text-center">
                <h2 className="section__title">Best Sales</h2>
              </div>
              <div className="flex flex-wrap gap-5 mt-20">
              <Productlist data={bestSalesProducts} />
              </div>
            </div>
          </div>
        </section>

        <section className="timer__count">
          <div className="container">
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="flex flex-1 flex-col count__down-col">
                <div className="clock__top-content">
                  <h4 className="text-white text-md mb-2">Limited Offers</h4>
                  <h3 className="text-white text-lg mb-3">Quality Armchair</h3>
                </div>
                <Clock />
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn store__btn"
                >
                  <Link to="/shop">Visit Store</Link>
                </motion.button>
              </div>

              <div className="flex flex-1  justify-center items-center counter__img">
                <img src={counterImg} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="new__arrivals">
          <div className="container">
            <div className="w-full">
              <div className="w-full text-center">
                <h2 className="section__title">New Arrivals</h2>
              </div>
              <div className="flex flex-wrap gap-5 mt-20">
                <Productlist data={mobileProduct} />
                <Productlist data={wirelessProducts} />
              </div>
            </div>
          </div>
        </section>


        <section className="popular__category">
          <div className="container">
            <div className="w-full">
              <div className="w-full text-center">
                <h2 className="section__title">Popular in Category</h2>
              </div>
              <div className="flex flex-wrap gap-5 mt-20">
                <Productlist data={popularProducts} />
         
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
};

export default Home;
