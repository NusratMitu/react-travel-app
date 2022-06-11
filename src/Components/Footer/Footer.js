import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark d-flex justify-content-between px-5 py-4' >
        <div>
            <small className='text-white'>&copy; 2022 Designed & Developed by <span className='primaryColor'>Nusrat Mitu</span> </small>
        </div>
        <div className="d-flex justify-content-between">
            <p className='text-white'>Contact me:</p>
         <div>
         <a href="https://www.facebook.com/nusrat.mitu.52/" target="_blank" rel="noreferrer"><i className="fa fa-facebook px-3 primaryColor linkHover"></i></a>
         <a href="https://www.linkedin.com/in/nusrat-mitu/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin px-3 primaryColor linkHover"></i></a>
         <a href="https://github.com/NusratMitu" target="_blank" rel="noreferrer"><i className="fab fa-github px-3 primaryColor linkHover"></i></a>
         <a href="https://www.google.com/" target="_blank" rel="noreferrer"><i className="fa fa-google-plus px-3 primaryColor linkHover"></i></a>
         </div>
       </div>
       </div>  
    );
};

export default Footer;