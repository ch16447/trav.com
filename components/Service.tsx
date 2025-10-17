import '@/styles/Service.css'
import { RiEarthFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { RiUserStarFill } from "react-icons/ri";

export default function Service(){
    
    return (
        <>
          <section className="section__container service__container" id="service">
            <div className="service__header">
              <h1 className="section__header">Crafted Travel Experiences</h1>
              <p className="section__description">
                We offer customized travel planning, guided tours, and exclusive experiences to make every journey effortless and unforgettable.
              </p>
            </div>

            <div className="service">
              <div className="service__content">
                <div className="service__card">
                  <div className="service__icon">
                    <span className="icon"><IoAirplane /></span>
                  </div>
                  <h3>Trip Planning</h3>
                  <p>
                    Easily plan your next adventure with our smart tools for a perfect trip
                  </p>
                </div>

                <div className="service__card">
                  <div className="service__icon">
                    <span className="icon"><FaHome /></span>
                  </div>
                  <h3>Accommodation</h3>
                  <p>
                    Find the best hotels and resorts worldwide, compare prices for comfort and value
                  </p>
                </div>

                <div className="service__card">
                  <div className="service__icon">
                    <span className="icon"><RiEarthFill /></span>
                  </div>
                  <h3>Experiences</h3>
                  <p>
                    Experience authentic local adventures and culture beyond typical sightseeing
                  </p>
                </div>

                <div className="service__card">
                  <div className="service__icon">
                    <span className="icon"><RiUserStarFill /></span>
                  </div>
                  <h3>VIP Services</h3>
                  <p>
                    Enjoy premium travel experiences with unforgettable adventures worldwide
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}