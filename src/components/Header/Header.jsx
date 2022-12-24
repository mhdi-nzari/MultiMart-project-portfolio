import React, { useEffect, useRef } from "react";
import "./header.css";
import logo from "../../assets/images/eco-logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BagHappy, CloseCircle, HambergerMenu, Heart } from "iconsax-react";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hook/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
const Header = () => {
  const headerRef = useRef(null),
    menuRef = useRef(null),
    navigate = useNavigate(),
    totalQuantity = useSelector((state) => state.cart.totalQuantity),
    stickyHeaderFunc = (e) => {
      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 60 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("sticky__header");
        } else {
          headerRef.current.classList.remove("sticky__header");
        }
      });
    },
    navigateToCart = () => {
      navigate("/cart");
    },
    { currentUser } = useAuth(),
    profileActionRef = useRef(null),
    logout = () => [
      signOut(auth)
        .then(() => {
          toast.success("Logged out");
          navigate("/")
        })
        .catch((err) => {
          toast.error(err.message);
        }),
    ];

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const nav__link = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "shop",
      display: "Shop",
    },
    {
      path: "cart",
      display: "Cart",
    },
    {
      path: "Login",
      display: "login/signup",
    },
  ];

  const menuToggle = (e) => {
      menuRef.current.classList.toggle("active__menu");
    },
    toggleProfileAction = () =>
      profileActionRef.current.classList.toggle("show___profileActions");

  return (
    <header className="header" ref={headerRef}>
      <div className="container ">
        <div>
          <div className="nav__wrapper">
            <div className="logo ">
              <img src={logo} alt="" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>

            <div className="  navigation" ref={menuRef}>
              <ul className="menu relative">
                {nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navCalss) =>
                        navCalss.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}

                <span
                  className="absolute left-5 top-5 cursor-pointer blcok md:hidden"
                  onClick={menuToggle}
                >
                  <CloseCircle size="32" color="#ff4f4b" variant="Broken" />
                </span>
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <Heart size="20" color="#3f3f3f" variant="Broken" />
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <BagHappy size="20" color="#3f3f3f" variant="Broken" />
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=""
                  onClick={toggleProfileAction}
                />
                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileAction}
                >
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="flex items-center justify-center flex-col">
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <HambergerMenu size="32" color="#3f3f3f" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
