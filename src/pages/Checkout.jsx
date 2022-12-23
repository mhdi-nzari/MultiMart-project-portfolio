import Helmet from "../components/Helmet/Helmet";
import Commonsection from "../components/UI/CommonSection";
import { motion } from "framer-motion";
import "../styles/checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
const totalQty =   useSelector(state=>state.cart.totalQuantity) , 
totalAmount =  useSelector(state=>state.cart.totalAmount)
  return (
    <Helmet title="Checkout">
      <Commonsection title="Checkout" />
        <section>
          <div className="container">
            <div className="flex  gap-10">
              <div className="flex flex-col basis-4/6">
                <h6 className="mb-4 font-bold">Billing Information</h6>
                <form action="billing__form">
                  <div className="form__group">
                    <input type="text" placeholder="Enter Youre Name " />
                  </div>

                  <div className="form__group">
                    <input type="email" placeholder="Enter Youre Email " />
                  </div>

                  <div className="form__group">
                    <input type="number" placeholder="Phone Number " />
                  </div>

                  <div className="form__group">
                    <input type="text" placeholder="Street Address " />
                  </div>
                  <div className="form__group">
                    <input type="text" placeholder="City " />
                  </div>
                  <div className="form__group">
                    <input type="text" placeholder="POstal Code " />
                  </div>
                  <div className="form__group">
                    <input type="text" placeholder="Country " />
                  </div>
                </form>
              </div>
              <div className="flex basis-2/6 flex-col gap-5 ">
                <div className="chckout__cart flex flex-col gap-5">
                  <h6 className="flex justify-between">Total Qty : <span>{totalQty}</span></h6>
                  <h6 className="flex justify-between">Subtotal : <span>{totalAmount}</span></h6>
                  <h6 className="flex justify-between"><span>Shipping: <br/>Free shiping</span> <span>$0</span></h6>
              
                  <h4 className="flex justify-between">Total Cost : <span>{totalAmount}</span></h4>
                <motion.button whileTab={{scale:0.9}} className=" bg-white text-slate-900 w-full rounded-md text-center px-10 py-2 mt-5 buy__btn auth__btn transition-all duration-300 border border-transparent hover:border-white hover:bg-transparent hover:text-white">Place an Order</motion.button>
                </div>

              </div>
            </div>
          </div>
        </section>

    </Helmet>
  );
};

export default Checkout;
