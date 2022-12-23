import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import "../styles/login.css";


import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, DownloadURL, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { async } from "@firebase/util";

import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [userName, setUserName] = useState(""),
    [file, setFile] = useState(null),
    [loading, setLoading] = useState(false),
    navigate = useNavigate(),

    signup = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          ),

          user = userCredential.user ,
          storageRef = ref(storage , `images/${Date.now() + userName}`) ,
           uploadtTask = uploadBytesResumable(storageRef , file);
         

            uploadtTask.on((error)=>{
              toast.error(error.message)
            } , ()=>{
              getDownloadURL(uploadtTask.snapshot.ref).then(async(DownloadURL)=>{
                updateProfile(user,{
                  displayName:userName , 
                  photoURL : DownloadURL,
                })

              // store user data in firestore database
              await setDoc(doc(db,'users' , user.uid),{
                uid:user.uid,
                displayName:userName,
                email , 
                photoURL :DownloadURL
              })  
              })
            })
            toast.success("Completed your signup 😍")
      setLoading(false)
      navigate('/login')
      } catch (error) {
        setLoading(false)
        toast.error("SomeThings went Wrong 😢")
      }
    };
  return (
    <Helmet title="SignUp">
      <section>
        <div className="container">
       {
        loading ? <div className="text-center w-full"><h6 className="font-bold">Loading</h6></div> :    <div className="flex w-96 m-auto text-center flex-col gap-5">
        <h3 className="font-bold text-4xl">SignUp</h3>
        <form action="" className="auth__form" onSubmit={signup}>
          <div className="form__group">
            <input
              type="text"
              name=""
              placeholder="Enter your UserName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form__group">
            <input
              type="email"
              name=""
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__group">
            <input
              type="password"
              name=""
              placeholder="Enter your password"
             
              
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form__group">
            <input type="file" onChange={(e) => setFile(e.target.files)} />
          </div>
          <button type="submit" className="auth__btn  px-10 py-3 rounded-lg bg-white text-slate-700">
            Create an Account
          </button>
          <p>
            Already Have an Account ? <Link to={"/signup"}></Link>
          </p>
        </form>
      </div>
       }
        </div>
      </section>
    </Helmet>
  );
};

export default Signup;
