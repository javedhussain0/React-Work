import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>
                A web library, also known as a digital library or online library such as e-books, academic journals, databases, and multimedia content, enabling users to access information from anywhere with an internet connection. 
                </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header