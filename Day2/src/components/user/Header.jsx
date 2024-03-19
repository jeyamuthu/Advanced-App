import React from 'react';
import "../../assets/css/Header.css"

import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../../components/Redux/userSlice';

import { Link,useNavigate } from 'react-router-dom';
const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const email = user.email ;

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

  };

  return (
    <header id="myHeader" >
    <nav>
        <a><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbSTa2i5ipBlfLGYBX2e1uwXPzckLZp9ARg&usqp=CAU' alt='logo' id='logo'></img>
        </a>
        <Link to='/home' className='link1'>Home</Link>
        <Link to='/loanpage' className='link1' >Loan</Link>
        <Link to='/about' className='link1' >About</Link>
        <Link to='/contactpage' className='link1' >Contact</Link>
        {
          email?(

            <button className='button-link' onClick={handleLogout}>Logout</button>
            ):(
            <button className='button-link' onClick={handleLogout} ><Link to='/login' className='link1' >Login</Link></button>

          )
        }
        
      
      </nav>
    </header>
  );
}

const Section = () => {
  return (
    <div className="page">
   
      <section id="vision" >
        <h1 >About</h1>
      </section>
         
    </div>
  );
}

export { Header, Section };
