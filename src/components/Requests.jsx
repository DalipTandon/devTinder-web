import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";



const Requests=()=>{

    const dispatch=useDispatch();
    const userRequest=useSelector(store=>store.request);
    const fetchRequest=async()=>{
        const res=await axios.get(BASE_URL+"/user/request/received",{withCredentials:true});
        // console.log(res.data.data);
        dispatch(addRequest(res.data.data));
    }

    useEffect(()=>{
        fetchRequest();
    },[]);
    if (!userRequest) return;

    if (userRequest.length === 0) return <h1> No Pending Requests Found</h1>;
    
    return (
    <div  className="text-center my-10">
         <h1 className="text-bold text-black text-3xl shadow-xl w-1/2 m-auto">Pending Requests</h1>
        {userRequest.map((request)=>{
        const { _id, firstName, lastName, profilUrl, age, gender, about } =request.fromUserId;     
        
        return(
            
        <div key={_id} className="bg-red-50 m-4 p-4 border flex w-1/2 mx-auto shadow-xl justify-evenly items-center">
            <div>
            <img
            src={profilUrl}
            alt="Profile photo"
             className="w-20 h-20 rounded-full object-cover"
            />
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div className="flex gap-3">
             <button className="btn btn-error">Rejected</button>
            <button className="btn btn-success">Accepted</button>


         </div>
         </div>
         
        )
        
 
 })}
    </div>
    )
}

export default Requests;