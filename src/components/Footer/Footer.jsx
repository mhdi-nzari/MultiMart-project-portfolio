import { AlignVertically, Call, MessageText } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const year = new Date().getFullYear();


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="mb-4">
              {/* sec One */}
              <div className="logo ">
                
                <div>
                  <h1 className="!text-white">Multimart</h1>
                </div>
              </div>
              <p className="footer__text mt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                dolorem fugiat recusandae modi, omnis nostrum id magni ullam
                sint officiis?
              </p>
            </div>
            <div className="mb-4">
              <div className="footer__quick-links">
                <h4 className="quick__links-title mb-5">Top Category</h4>
                <ul>
                  <li className="mb-2 flex gap-2">
                    <Link to="#">Mobile Phones</Link>
                  </li>
                  <li className="mb-2 flex gap-2">
                    <Link to="#">Modern Sofa</Link>
                  </li>
                  <li className="mb-2 flex gap-2">
                    <Link to="#">Arm Chair</Link>
                  </li>
                  <li className="mb-2 flex gap-2">
                    lu
                    <Link to="#">Smart Watchers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <div className="footer__quick-links">
                <h4 className="quick__links-title mb-5">Use Links</h4>
                <ul>
                  <li className="mb-2 flex gap-2">
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li className="mb-2 flex gap-2">
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li className="mb-2 flex gap-2">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="mb-2 flex gap-2">
                    <Link to="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <div className="footer__quick-links">
                <h4 className="quick__links-title mb-5">Contact</h4>
                <ul className="footer__contact">
                  <li className="mb-2 flex gap-2">
                    <span>
                      <Call size="20" color="#fff" variant="Broken" />
                    </span>
                    <p>123 , Iran , Esfahan , Kashan</p>
                  </li>
                  <li className="mb-2 flex gap-2">
                    <span>
                      <AlignVertically
                        size="20"
                        color="#fff"
                        variant="Broken"
                      />
                    </span>
                    <p>123 , Iran , Esfahan , Kashan</p>
                  </li>
                  <li className="mb-2 flex gap-2">
                    <span>
                      <MessageText size="20" color="#fff" variant="Broken" />
                    </span>
                    <p>ABC@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          <div className="w-full footer__copyright mt-20 border-t border-t-1 border-t-slate-700 py-10">
            <p className="text-center">
              Copy Right {year} Developed By {<a className="text-white font-bold" href="http://mahdi-nazari.ir">Mahdi Nazari</a>} | All right Reversed.
            </p>
          </div>
      </footer>
    </>
  );
};

export default Footer;
