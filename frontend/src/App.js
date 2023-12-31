import './App.css';
import './pages/login.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Contact from './pages/Contact';
import RootLayout from './layouts/RootLayout';
import BlogPage from './pages/BlogPage';
import Login from './pages/Login';
import Register from './pages/Register';

import MemberLayout from './layouts/memberlayout/MemberLayout';
import Dashboard from './pages/member/Dashboard';
import Shop from './pages/member/OnlineShop';





const App = () => {

  
  return (

    <Routes>
      <Route element={ <RootLayout /> } >
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/home" element={<HomePage />}> </Route>
        <Route path="/about" element={<AboutPage />}> </Route>
        <Route path="/contact" element={<Contact /> }> </Route>
        <Route path="/blog-page" element={<BlogPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Route>

      <Route element={<MemberLayout />}>  
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/dashboard" element={<Dashboard />}> </Route>
        <Route path="/online-shop" element={<Shop />}> </Route>
     </Route>   
    </Routes>

    



  );

}
export default App;