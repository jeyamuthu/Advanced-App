import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './pages/user/Aboutus';
import Home from './pages/user/Home';
import Footer from './components/user/Footer';
import FaqPage from './pages/user/FaqPage';
import TermPage from './pages/user/TermPage';
import PrivacyPage from './pages/user/PrivacyPage';
import Loanpage from './pages/user/Loanpage';
import Loanformpage from './pages/user/LoanFrompage';
import Contactpage from './pages/user/Contactpage';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';
import { Provider } from 'react-redux';
import store from './components/Redux/store';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AddLoan from './pages/Admin/AddLoan';



function App() {
  return (
    <div>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/footer" element={<Footer/>}></Route>
          <Route path="/faqpage" element={<FaqPage/>}></Route>
          <Route path="/termpage" element={<TermPage/>}></Route>
          <Route path="/privacypage" element={<PrivacyPage/>}></Route>
          <Route path="/loanpage" element={<Loanpage/>}></Route>
          <Route path="/loanformpage" element={<Loanformpage/>}></Route>
          <Route path="/contactpage" element={<Contactpage/>}></Route>
          <Route path="/admin" element={<AdminDashboard/>}></Route>
          <Route path="/addloan" element={<AddLoan/>}></Route>
          
        </Routes>
      </BrowserRouter>
      </Provider>
    
    </div>
  );
}

export default App;
