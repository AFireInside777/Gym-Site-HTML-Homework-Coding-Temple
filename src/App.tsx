import Landing from "./pages/Landing"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import ActFooter from "./components/ActFooter"
import Pricing from "./pages/Pricing"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"


function App() {


  return (
    <>
        <Navbar/>
          <Routes>
            <Route path={"/"} element={<Landing/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/pricing"} element={<Pricing/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/signup"} element={<Signup/>}/>
          </Routes>
        <ActFooter/>
    </>
  )
}

export default App
