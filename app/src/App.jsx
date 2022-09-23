import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { JwtContextProvider } from "./context/jwtContext"
import RequireAuth from "./components/RequireAuth/RequireAuth"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Form from "./components/RegisterComp/Form/RegisterComp"
import Login from "./pages/Login/Login"
// import Profile from "./pages/Profile/Profile"
import Experience from "./pages/Experience/Experience"
import ExperienceDetail from "./pages/ExperienceDetail/ExperienceDetail"
import PdiDetail from "./pages/PdiDetail/PdiDetail"
import Profile from "./pages/Profile/Profile"
import './App.css'
import Pdi from "./pages/Pdi/Pdi"
import Favorites from "./pages/Favorites/Favorites"


const App = () => {

  return (
    <JwtContextProvider >
   
      <div className="App">      
        <Router>
          <Header />
          <Routes>            
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Form />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<RequireAuth> <Profile /> </RequireAuth>} /> 
            <Route path="/experience" element={<RequireAuth><Experience /></RequireAuth>} />
            <Route path="/experience/:id" element={<ExperienceDetail />} /> 
            <Route path="/pdi" element={<RequireAuth><Pdi /> </RequireAuth>} />          
            <Route path="/pdi/:id" element={<RequireAuth><PdiDetail /></RequireAuth>} /> 
            <Route path="/favorites" element={<RequireAuth><Favorites/></RequireAuth> }/>                         
          </Routes>
        </Router>
        <Footer />
      </div>
    </JwtContextProvider>
  )
}

export default App
