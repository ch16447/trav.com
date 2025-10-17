import '@/styles/Home.css'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from 'react-icons/fa6';
import { PiAirplaneTiltFill } from "react-icons/pi";


export default function Home(){

    return (
        <>
            <main className="home__container" id='home'>
                <section className='home__section'>
                    <div className="details">
                        <h1 className="home section__header" style={{color:'#d8d6d6'}}>
                            Flights, Hotels & Trips — All in One Place
                        </h1>
                        <p className="home section__description" style={{color:'#d8d6d6'}}>
                            Book the best deals and let us help you plan a seamless journey, from takeoff to checkout.
                        </p>
                    </div>
                        <div className="tour__search" >
                            <div className="card" style={{flex:1}}>
                                <div className="title">
                                    <FaLocationDot style={{fontSize:"1.23rem", color:"#125477ff"}}/>
                                    <span className="title">Location</span>
                                </div>
                                <span className='description'>Tokyo</span>
                            </div>
                            <div className="card" style={{flex:1}}>
                                <div className="title">
                                    <TiWeatherPartlySunny style={{fontSize:"1.46rem", color:"#125477ff"}}/>
                                    <span className="title">Weather</span>
                                </div>
                                <span className='description'>summer</span>
                            </div>
                            <div className="card">
                                <div className="title">
                                    <PiAirplaneTiltFill style={{fontSize:"1.46rem", color:"#125477ff"}}/>
                                    <span className="title">Airline</span>
                                </div>
                                <span className='description'>JAL</span>
                            </div>
                            <div className="card search">
                                <div className="search">
                                    <IoSearch className='icon__IoSearch' style={{fontSize:"1.46rem", color:"#ffffffff"}}/>
                                    <span className='icon__text'>book now</span>
                                </div>
                            </div>
                        </div>
                </section>
            </main>
        </>
    )
}