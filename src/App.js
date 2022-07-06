import Campaigns from "./components/Campaigns";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import MobileApp from "./components/MobileApp";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import { Route,Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Home from "pages/Home";
import Register from "pages/Register";
import Login from "pages/Login";
import Yemek from "pages/Yemek";
import Su from "pages/Su";
import Carsi from "pages/Carsi";
import Buyuk from "pages/Buyuk";


function App() {


  
  return (
   <> 

   <Toaster position="top-right"/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/yemek" element={<Yemek/>}/>
   <Route path="/su" element={<Su/>}/>
   <Route path="/carsi" element={<Carsi/>}/>
   <Route path="/buyuk" element={<Buyuk/>}/>
   </Routes>


   <Header/>
    <HeroSection/>
   <div className="container mx-auto"> 
   <Categories/>
   <Campaigns/>
   <Favorites/>
   <MobileApp/>
   <Cards/>
   </div>
    <Footer/>

   </> 
  );
}

export default App;
