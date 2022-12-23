import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import products from "../assets/data/products";
import { Star1 } from "iconsax-react";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/Productlist";
import "../styles/product-details.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../redux/slice/cartSlice";
import { toast } from "react-toastify";
const ProductDetails = () => {
  const { id } = useParams(),
    product = products.find((item) => item.id === id),
    {
      imgUrl,
      productName,
      price,
      avgRating,
      reviews,
      description,
      shortDesc,
      category,
    } = product,
    [tab, setTab] = useState("desc"),
    [rating, setrating] = useState(null),
    dispatch = useDispatch(),
    reviewUser = useRef(""),
    reveiwMsg = useRef(""),
    relatedProducts = products.filter((item) => item.category === category),
    submitHandler = (e) => {
      e.preventDefault();
      const reviewUserName = reviewUser.current.value,
        reviewUserMsg = reveiwMsg.current.value,
        reviewObj = {
          userName :reviewUserName , 
          text :reviewUserMsg,
          rating ,
        }
     
    }, 
    addToCart = ()=>{
      dispatch(cartAction.addItem({
        id , image:imgUrl , productName , price
      }))
      toast.success("Product Added to Cart 😍")
    } ;
    useEffect(() => {
  
    window.scrollTo(0,0)
    
    }, [product])
    
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className=" pt-0">
        <div className="container">
          <div className="flex flex-wrap flex-col lg:flex-row">
            <div className="flex basis-full justify-center  lg:basis-1/2">
              <img src={imgUrl} alt="" className="w-3/4" />
            </div>
            <div className="flex basis-full lg:basis-1/2">
              <div className="product__details ">
                <h2 className="!text-4xl font-bold">{productName}</h2>
                <div className="product__rating flex flex-col  gap-5 mb-4 ">
                  <div className="product__rating flex mt-5 rating__group ">
                    <span onClick={() => setrating(1)}>
                      <Star1 size="20" color="#ff7f50" />
                    </span>
                    <span >
                      <Star1 size="20" color="#ff7f50" />
                    </span>
                    <span >
                      <Star1 size="20" color="#ff7f50" />
                    </span>
                    <span >
                      <Star1 size="20" color="#ff7f50" />
                    </span>
                    <span >
                      <Star1 size="20" color="#ff7f50" />
                    </span>
                    <p className="ml-5">
                      (<span>{avgRating}</span> Ratings)
                    </p>
                  </div>

                  <div className="flex items-center gap-5">
                    <span className="product__price">${price}</span>
                    <span>Category : {category.toUpperCase()}</span>
                  </div>
                  <p className=" ">{shortDesc}</p>
                  <motion.button
                    className=" buy__btn w-fit px-10 py-3 text-white bg-purple-700 rounded-md outline-none"
                    whileTap={{ scale: 1.2 }}
                    onClick={addToCart}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="w-full">
            <div className="tab__wrappper flex items-center gap-5">
              <h6
                className={`${
                  tab === "desc" ? "active__tab" : ""
                } cursor-pointer`}
                onClick={() => setTab("desc")}
              >
                Desctiption
              </h6>
              <h6
                className={`${
                  tab === "rev" ? "active__tab " : ""
                } cursor-pointer`}
                onClick={() => setTab("rev")}
              >
                Reviews ({reviews.length})
              </h6>
            </div>

            {tab === "desc" ? (
              <div className="tab__content mt-5 cursor-pointer">
                <p className="mt-5 cursor-pointer">{description}</p>
              </div>
            ) : (
              <div className="mt-5 product__reviews">
                <div className="review__wrapper">
                  <ul>
                    {reviews.map((item, index) => (
                      <li className="mt-5 mb-4" key={index}>
                        <h6>John Doe</h6>
                        <span>{item.rating}(average)</span>
                        <p>{item.text}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="review__form">
                    <h4>Leave your Experince </h4>
                    <form action="" onSubmit={submitHandler}>
                      <div className="form__group">
                        <input
                          type="text"
                          placeholder="Enter Name"
                          ref={reviewUser}
                          required
                        />
                      </div>
                      <div className="form__group flex w-fit items-center gap-2">
                        <motion.span whileTap={{scale:1.2}} className="flex" onClick={() => setrating(1)}>
                          1 <Star1 size="20" color="#ff7f50" className="mr-2" />
                        </motion.span>
                        <motion.span whileTap={{scale:1.2}} className="flex" onClick={() => setrating(2)}>
                          2 <Star1 size="20" color="#ff7f50" className="mr-2" />
                        </motion.span>
                        <motion.span whileTap={{scale:1.2}} className="flex" onClick={() => setrating(3)}>
                          3 <Star1 size="20" color="#ff7f50" className="mr-2" />
                        </motion.span>
                        <motion.span whileTap={{scale:1.2}} className="flex" onClick={() => setrating(4)}>
                          4 <Star1 size="20" color="#ff7f50" className="mr-2" />
                        </motion.span>
                        <motion.span whileTap={{scale:1.2}} className="flex" onClick={() => setrating(5)}>
                          5 <Star1 size="20" color="#ff7f50" className="mr-2" />
                        </motion.span>
                      </div>

                      <div className="form__group">
                        <textarea
                          rows={4}
                          type="text"
                          placeholder="Review Message  "
                          ref={reveiwMsg}
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="buy__btn px-10 py-2 bg-purple-800 text-white text-xl w-fit rounded-md"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            <div className="w-full mt-10">
              <h2 className="related__title">You might also like</h2>
            </div>
            <ProductsList data={relatedProducts} />
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
