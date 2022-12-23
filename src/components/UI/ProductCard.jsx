import React from "react";
import { motion } from "framer-motion";
import "../../styles/productCard.css";
import { AddCircle } from "iconsax-react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartAction } from "../../redux/slice/cartSlice";
import { toast} from 'react-toastify'

const ProductCard = ({ item }) => {
  const dispatch = useDispatch(),
    addToCart = () => {
      dispatch(
        cartAction.addItem({
          id: item.id,
          productName: item.productName,
          price: item.price,
          imgUrl: item.imgUrl,
        })
      );

    toast.success("Product added successfully")
    };

  return (
    <div className="flex flex-[1_1_280px] p-5 border border-1 overflow-hidden mb-10 sm:mb-0">
      <div className="product__item">
        <div className="priduct__img">
          <motion.img
            whileHover={{ scale: 1.2 }}
            className="transition-all duration-300"
            src={item.imgUrl}
            alt="img/product-img"
          />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`} className="">
              {item.productName}
            </Link>
          </h3>
          <span className="">{item.category}</span>
        </div>
        <div className="product__card-bottom flex items-center justify-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 0.8 }} onClick={addToCart}>
            <AddCircle size="25" color="#ffffff" variant="Broken" />
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
