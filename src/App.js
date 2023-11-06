import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,

} from "react-router-dom";
import Mobiles from './pages/Mobiles';
import Blog from './pages/Blog';
import Career from './pages/Career';
import Design from './pages/Design';
import Events from './pages/Events';
import Login from './pages/Login';
import OpenSource from './pages/OpenSource';
function App() {
  return (
    <>
    <div>
    <Router>
      <Navbar/>
                <Routes>
                    <Route exact to='/Blog' element = {<Blog/>}></Route>
                    <Route exact to='/Career' element = {<Career/>}></Route>
                    <Route exact to='/Design' element = {<Design/>}></Route>
                    <Route exact to='/Events' element = {<Events/>}></Route>
                    <Route exact to='/Login' element = {<Login/>}></Route>
                    <Route exact to='/Mobiles' element = {<Mobiles/>}></Route>
                    <Route exact to='/OpenSource' element = {<OpenSource/>}></Route>
                </Routes>
            </Router>

      
      <Header heading='Airbnb Engineering & Data Science'/>
      <Section1 heading='Blog Posts' description='On Spark, Hive and small files'/>
      <Section2 heading='Open source Projects'/>
      <Footer/>
    </div>
    </>
  );
}

export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
