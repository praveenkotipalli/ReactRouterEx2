import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Contact from "./pages/COntact"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Personnel from "./pages/Personnel"
import PersonnelDetail from "./pages/PersonnelDetail"
import Paths from "./pages/Paths"
import Frontend from "./pages/Frontend"
import Backend from "./pages/Backend"
import PrivateRouter from "./pages/PrivateRouter"
import Login from "./pages/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/personnel" element={<Personnel/>}/>
        <Route path="/personnel/:id" element={<PersonnelDetail/>}/>
        <Route path="/contact" element={<PrivateRouter/>}>
          <Route path="" element={<Contact/>}/>
        </Route>
        <Route path="/notFound" element={<NotFound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/paths" element={<Paths/>}>
          <Route path="frontend" element={<Frontend/>}/>
          <Route path="backend" element={<Backend/>}/>
        </Route>

        <Route path="*" element={<Navigate to="/notFound" />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App