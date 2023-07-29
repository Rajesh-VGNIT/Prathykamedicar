import React from 'react'
import { BiMap } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
const Footer = () => {
  return (
    <footer className="footer-section">
    
        <div className="footer-cta pt-5 pb-5">
            <div className="row" style={{width:"100%"}}>
                
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                       
                        <div className="cta-text">
                            <h4><span className='icon-img'><BiMap/></span> &nbsp;<span>1032, 1st Floor, Niti khand-1 , Indirapuram, Ghaziabad U.P. 201010</span></h4>
                            
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                       
                        <div className="cta-text">
                            <h4><span className='icon-img'><BsFillTelephoneFill/></span> &nbsp;<span>7982119490 , 9999387423</span></h4>
                            
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        
                        <div className="cta-text">
                            <h4><span className='icon-img'><FiMail/></span> &nbsp;<span>info@pratyakshmedicare.com</span></h4>
                            
                        </div>
                    </div>
                </div>
            </div>
        

    </div>
    {/* <div className="copyright-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div className="copyright-text">
                        <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div className="footer-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Policy</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
</footer>
  )
}

export default Footer;
