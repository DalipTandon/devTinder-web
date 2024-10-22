import { useState } from "react";
import login from "../../img/login.jpg"
import axios from "axios";
import { ContainerWithChildren } from "postcss/lib/container";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {
    const [emailId,setEmailId]=useState("Dalip@gmail.com");
    const [password,setPassword]=useState("Dalip@123");
    const[error,setError]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const handleSubmit=async()=>{
        try{
            const res=await axios.post(BASE_URL+"/login",
                {
                    emailId,password
                },{withCredentials:true}
            )
           dispatch(addUser(res.data)); 
           navigate("/")        
        }catch(error){
          setError(error.response.data) 
        }
    }
  return (
    <div className="flex  justify-center p-5 my-10">
      <div className="card card-side bg-base-100 shadow-xl  w-2/4 ">
        <figure>
          <img src={login} alt="Movie" />
        </figure>
        <div className="card-body  w-2/3">
          <h2 className="card-title font-semibold">Login</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter your Email </span>
            </div>
            <input
              type="text"
              placeholder="Enter email"
              value={emailId}
              onChange={(e)=>setEmailId(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text">Enter your password</span>
            </div>
            <input
              type="text"
              placeholder="Enter pasword"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary my-3 " onClick={handleSubmit}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
