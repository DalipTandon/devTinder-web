<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"
=======
import Navbar from "./navbar"
>>>>>>> e152c1e860f6863a1a854ef743e3131d5868657f

function App() {

 return(
  <>
<<<<<<< HEAD
  
  <BrowserRouter basename="/">
  <Routes>
    <Route path="/" element={<Body/>}>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>

    </Route>
  </Routes>
  </BrowserRouter>
=======
  <Navbar/> 

>>>>>>> e152c1e860f6863a1a854ef743e3131d5868657f
  </>
  
 )
}

export default App
