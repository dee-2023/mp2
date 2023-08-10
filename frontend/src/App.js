import './App.css';
import './pages/login.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Contact from './pages/Contact';
import RootLayout from './layouts/RootLayout';
import BlogPage from './pages/Blog';
import Login from './pages/Login';

import MemberLayout from './layouts/memberlayout/MemberLayout';
import BookingSchedule from './pages/member/BookingSchedule';
import OnlineShop from './pages/member/OnlineShop';




const App = () => {

  
  return (

    <Routes>
      <Route element={ <RootLayout /> } >
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/home" element={<HomePage />}> </Route>
        <Route path="/about" element={<AboutPage />}> </Route>
        <Route path="/contact" element={<Contact /> }> </Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Route>

      <Route element={<MemberLayout />}>  
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/booking-schedule" element={<BookingSchedule />}> </Route>
        <Route path="/online-shop" element={<OnlineShop />}> </Route>
     </Route>   
    </Routes>

    



  );

}
export default App;