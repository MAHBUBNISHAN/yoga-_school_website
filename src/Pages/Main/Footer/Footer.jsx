import React from 'react';
import logo from '../../../assets/logo.webp'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-cyan-800 text-base-content">
        <div>
          <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"></svg>
          <img src={logo} alt="" className='h-20 w-15 ms-10 rounded-3xl' />
          <p className='text-xl ms-10'>School of Yoga </p>
        </div> 
        <div>
          <span className="footer-title">Services Media Link</span> 
          <a className="link link-hover">Facebook</a> 
          <a className="link link-hover">e-mail</a> 
          <a className="link link-hover">youtube</a> 
          <a className="link link-hover">Linkdin</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">facilities</a> 
         
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
        </div>
        
      </footer>
    );
};

export default Footer;