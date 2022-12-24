import React from "react";
import "../styles/Cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Trash } from "iconsax-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../redux/slice/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems),
    totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Shoping Cart">
      <CommonSection title="Shoping Cart" />

      <section>
        <div className="container">
          <div className="flex w-full flex-col lg:flex-row gap-10">
            <div className="flex basis-3/4">
              {cartItems.length === 0 ? (
                <h2 className="text-3xl text-center">No Item to The Cart</h2>
              ) : (
                <table className="table w-full border-collapse  ">
                  <thead className="border-b ">
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="flex basis-1/4 flex-col gap-5 bg-gray-100 py-10 px-5 rounded-md">
              <div className="flex justify-between items-center">
                <small className="">Subtotal</small>
                <p className="font-bold  text-2xl mb-3">${totalAmount}</p>
              </div>
              <p>texes and shiping will calculate in checkout</p>
              <div className="w-full flex justify-between">
                <button className="buy__btn px-2 py-2 w-fit  rounded-md text-slate-800 ">
                  <Link to="/shop">Continue Shiping</Link>
                </button>
                <button className="buy__btn px-2 py-2 w-fit bg-purple-800 text-white rounded-md text-center ">
                  <Link to="/checkout">Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

const Tr = ({ item, index }) => {
  const dispatch = useDispatch(),
    deleteProduct = () => {
      dispatch(cartAction.deleteItem(item.id));
    };

  return (
    <tr key={index}>
      <td className="py-5">
        <img src={item.image} alt="" />
      </td>
      <td className="py-5">{item.productName}</td>
      <td className="py-5">{item.price}</td>
      <td className="py-5">{item.quantity}</td>
      <td className="py-5">
        <motion.span whileTap={{ scale: 0.8 }} onClick={deleteProduct}>
          <Trash
            size="20"
            color="#f47373"
            variant="Bulk"
            className="cursor-pointer"
          />
        </motion.span>
      </td>
    </tr>
  );
};

export default Cart;
