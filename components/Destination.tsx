import '@/styles/Destination.css'
import { IoLocationSharp } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { RiGroup3Fill } from "react-icons/ri";
import { MdStarRate } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import Image from 'next/image';


export default function Destination(){
    return (
        <>
        <section className="section__container destination__container" id="destination">
            <div className="destination__header">
                <h1 className="section__header">
                    Discover Your Next Adventure
                </h1>
                <p className="section__description">
                    Explore unique places, hidden gems, and unforgettable experiences across the globe. Your next great story starts here.
                </p>
            </div>

            <div className="destinaton__content">
                <div className="destination__card">
                    <div className="destination__img">
                        <Image src='/destination-japan.jpg' alt='gallery-img' width={400} height={400}></Image>
                        <div className="rate"></div>
                    </div>

                    <div className="card__content">
                        <div className="locate">
                            <span className="locate__name">
                                Kyoto
                            </span>
                            <span className="rate">
                                <span className='rate__icon'><MdStarRate/></span>
                                <span className='rate__text'> 5.0</span>
                            </span>
                        </div>
                        <div className="price">
                            <p>$450 ~ $1200<span> /night</span></p>
                        </div>
                        
                        <div className="card__details">
                            <div className="location">
                                <span className='location__icon'><IoLocationSharp/></span>
                                <span className="location__name">Japan</span>
                            </div>

                            <div className="weather">
                                <span className='weather__icon'><IoSunny/></span>
                                <span className="weather__name">29°C</span>
                            </div>

                            <div className="group">
                                <span className="group__icon"><RiGroup3Fill/></span>
                                <span className="group__name">10+</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="destination__card">
                    <div className="destination__img">
                        <Image src='/destination-italy.jpg' alt='gallery-img'  width={400} height={400}></Image>
                    </div>


                    <div className="card__content">
                        <div className="locate">
                            <span className="locate__name">
                                Wildsee
                            </span>
                            <span className="rate">
                                <span className='rate__icon'><MdStarRate/></span>
                                <span className='rate__text'>4.5</span>
                            </span>
                        </div>
                        
                        <div className="price">
                            <span><p>$500 ~ $2200<span> /night</span></p></span>
                        </div>
                        <div className="card__details">
                            <div className="location">
                                <span className='location__icon'><IoLocationSharp/></span>
                                <span className="location__name">Italy</span>
                            </div>

                            <div className="weather">
                                <span className='weather__icon'><IoSunny/></span>
                                <span className="weather__name">25°C</span>
                            </div>

                            <div className="group">
                                <span className="group__icon"><RiGroup3Fill/></span>
                                <span className="group__name">31+</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="destination__card">
                    <div className="destination__img">
                        <Image src='/destination-maldives.jpg' alt='gallery-img'  width={400} height={400}></Image>
                        <div className="rate"></div>
                    </div>

                    <div className="card__content">
                        <div className="locate">
                            <span className="locate__name">
                                Maafushi
                            </span>
                            <span className="rate">
                                <span className='rate__icon'><MdStarRate/></span>
                                <span className='rate__text'>4.3</span>
                            </span>
                        </div>
                        <div className="price">
                            <span><p>$510 ~ $1800<span> /night</span></p></span>
                        </div>
                        <div className="card__details">
                            <div className="location">
                                <span className='location__icon'><IoLocationSharp/></span>
                                <span className="location__name">Maldives</span>
                            </div>

                            <div className="weather">
                                <span className='weather__icon'><IoSunny/></span>
                                <span className="weather__name">21°C</span>
                            </div>

                            <div className="group">
                                <span className="group__icon"><RiGroup3Fill/></span>
                                <span className="group__name">25+</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="destination__card">
                    <div className="destination__img">
                        <Image src='/destination-taiwan.jpg' alt='gallery-img'  width={400} height={400}></Image>
                        <div className="rate"></div>
                    </div>

                    <div className="card__content">
                        <div className="locate">
                            <span className="locate__name">
                                Kaohsiung
                            </span>
                            <span className="rate">
                                <span className='rate__icon'><MdStarRate/></span>
                                <span className='rate__text'>4.0</span>
                            </span>
                        </div>
                        <div className="price">
                            <span><p>$510 ~ $1800<span> /night</span></p></span>
                        </div>
                
                        <div className="card__details">
                            <div className="location">
                                <span className='location__icon'><IoLocationSharp/></span>
                                <span className="location__name">Taiwan</span>
                            </div>

                            <div className="weather">
                                <span className='weather__icon'><TiWeatherPartlySunny/></span>
                                <span className="weather__name">30°C</span>
                            </div>

                            <div className="group">
                                <span className="group__icon"><RiGroup3Fill/></span>
                                <span className="group__name">10+</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="destination__card">
                    <div className="destination__img">
                        <Image src='/destination-indo.jpg' alt='gallery-img'  width={400} height={400}></Image>
                        <div className="rate"></div>
                    </div>

                    <div className="card__content">
                        <div className="locate">
                            <span className="locate__name">
                                Maafushi
                            </span>
                            <span className="rate">
                                <span className='rate__icon'><MdStarRate/></span>
                                <span className='rate__text'>4.2</span>
                            </span>
                        </div>
                        <div className="price">
                            <span><p>$510 ~ $1800<span> /night</span></p></span>
                        </div>
                        <div className="card__details">
                            <div className="location">
                                <span className='location__icon'><IoLocationSharp/></span>
                                <span className="location__name">Indonesia</span>
                            </div>

                            <div className="weather">
                                <span className='weather__icon'><IoSunny/></span>
                                <span className="weather__name">25°C</span>
                            </div>

                            <div className="group">
                                <span className="group__icon"><RiGroup3Fill/></span>
                                <span className="group__name">21+</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="destination__card">
                    <div className="destination__img">
                        <Image src='/destination-egypt.jpg' alt='gallery-img'  width={400} height={400}></Image>
                        <div className="rate"></div>
                    </div>

                    <div className="card__content">
                        <div className="locate">
                            <span className="locate__name">
                                Giza
                            </span>
                            <span className="rate">
                                <span className='rate__icon'><MdStarRate/></span>
                                <span className='rate__text'>4.0</span>
                            </span>
                        </div>
                        <div className="price">
                            <span><p>$310 ~ $1800<span> /night</span></p></span>
                        </div>
                        <div className="card__details">
                            <div className="location">
                                <span className='location__icon'><IoLocationSharp/></span>
                                <span className="location__name">Egypt</span>
                            </div>

                            <div className="weather">
                                <span className='weather__icon'><IoSunny/></span>
                                <span className="weather__name">31°C</span>
                            </div>

                            <div className="group">
                                <span className="group__icon"><RiGroup3Fill/></span>
                                <span className="group__name">40+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}