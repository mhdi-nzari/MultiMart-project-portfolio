import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import "../styles/login.css";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [loading, setLoading] = useState(false),
    navigate = useNavigate(),
    signIn = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          ),
          user = userCredential.user;
        setLoading(false);
        toast.success("Successfully Logged In ❤");
        navigate("/checkout");
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    };
  return (
    <Helmet title="Login">
      <section>
        <div className="container">
         {
          loading ? <div className="w-full text-center"><h5 className="text-center">Loading ...</h5></div> :  <div className="flex w-96 m-auto text-center flex-col gap-5">
          <h3 className="font-bold text-4xl">Login</h3>
          <form action="" className="auth__form" onSubmit={signIn}>
            <div className="form__group">
              <input
                type="email"
                name=""
                placeholder="Enter your Email"
                id=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__group">
              <input
                type="password"
                name=""
                placeholder="Enter your password"
                id=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="auth__btn  px-10 py-3 rounded-lg bg-white text-slate-700 "
            >
              Login
            </button>
            <p>
              Don't Have an Account ? <Link to={"/signup"}>Signup</Link>
            </p>
          </form>
        </div>
         }
        </div>
      </section>
    </Helmet>
  );
};

export default Login;
