import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './contact';
import Date from './date/date';
import Home1 from './home1';
import Feedback from './increment/feedback';
import Fruit from './increment/fruit';
import Incre from './increment/incre';
import Login from './login';
import Menu1 from './menu1';
import Notification from './notification';
import Fakedetails from './products/fakedetails';
import Fakeproducts from './products/fakeproducts';
import About from './responsive/about';
import Home from './responsive/home';
import Menu from './responsive/menu';
import OrganicFood from './responsive/organicfood';
import OurFarm from './responsive/ourfarm';
import Products from './responsive/products';
import Responsive from './responsive/responsive';
import Testimonial from './responsive/testimonial';
import Works from './responsive/works';
import Social from './social';
import Super from './super';
import Technology from './technology';
import Watch from './watch/watch';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Menu1/>}/>
            <Route path='/home1' element={<Home1/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/super' element={<Super/>}/>
            <Route path='/social' element={<Social/>}/>
            <Route path='/notification' element={<Notification/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/technology' element={<Technology/>}/>
            <Route path='/responsive' element={[<Menu1/>,<Menu/>,<Responsive/>]}/>
            <Route path='/home' element={[<Menu1/>,<Menu/>,<Home/>]}/>
            <Route path='/works' element={[<Menu1/>,<Menu/>,<Works/>]}/>
            <Route path='/about' element={[<Menu1/>,<Menu/>,<About/>]}/>
            <Route path='/ourfarm' element={[<Menu1/>,<Menu/>,<OurFarm/>]}/>
            <Route path='/testimonial' element={[<Menu1/>,<Menu/>,<Testimonial/>]}/>
            <Route path='/organicfood' element={[<Menu1/>,<Menu/>,<OrganicFood/>]}/>
            <Route path='/products' element={[<Menu1/>,<Menu/>,<Products/>]}/> 
            <Route path='/incre' element={[<Menu1/>,<Incre/>]}/> 
            <Route path='/fruit' element={[<Menu1/>,<Fruit/>]}/> 
            <Route path='/feedback' element={[<Menu1/>,<Feedback/>]}/>
            <Route path='/date' element={[<Menu1/>,<Date/>]}/>
            <Route path='/watch' element={[<Menu1/>,<Watch/>]}/>
            <Route path='/fakeproducts' element={[<Menu1/>,<Fakeproducts/>]}/>
            <Route path='/fakedetails/:id' element={[<Menu1/>,<Fakedetails/>]}/>
            
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


