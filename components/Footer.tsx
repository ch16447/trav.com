import '@/styles/Footer.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoMdPin } from "react-icons/io";

export default function Footer(){
    return <>
        <footer className="section__container footer__container">
            <div className="footer">
                <div className="footer__col">
                    <a className="logo__a">
                        <FaMapMarkerAlt  size='1.9rem'/>
                        <span className='logo__name'>trav.com</span>
                    </a>
                    <div className="footer__description">
                        <p>
                            Discover new horizons with our all-in-one travel platform. From inspiration to destination, we make every journey effortless and extraordinary.
                        </p>
                    </div>
                    <div className="footer__social">
                        <ul>
                            <li><a href="#"><span className='social__icon icon'><FaFacebook /></span></a></li>
                            <li><a href="#"><span className='social__icon icon'><AiFillInstagram /></span></a></li>
                            <li><a href="#"><span className='social__icon icon'><FaYoutube /></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__col">
                    <h2>Explore</h2>
                    <ul className="footer__links">
                        <li><a href="#">Destinations</a></li>
                        <li><a href="#">Travel Guides</a></li>
                        <li><a href="#">Experiences</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Special Offers</a></li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h2>Support</h2>
                    <ul className="footer__links">
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Booking Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h2>Contact us</h2>
                    <ul className="footer__links">
                        <li>
                            <a href="#" className='contact__content'>
                               <FaPhone size='1.45rem' className='icon'/>
                                <span>+886 912-345-678</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='contact__content'>
                                <IoMail size='1.45rem' className='icon'/>
                                <span>support@trav.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='contact__content'>
                                <IoMdPin size='1.45rem' className='icon'/>
                                <span>Taiwan</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="footer__bar">
                © 2025 trav.com — Your journey begins here.
        </div>
    </>
}