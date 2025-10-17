import '@/styles/Gallery.css'
import Image from 'next/image';
import { IoMdPin } from "react-icons/io";

export default function Gallery(){
    return (
        <>
            <section className="gallery__container section__container" id="gallery">
                <div className="gallery__header">
                    <h1 className="section__header">Explore Our Gallery</h1>
                    <p className="section__description">Discover the beauty of our destinations through stunning images that capture the essence of travel — sun, sea, and serenity.</p>
                </div>

                <div className="cards__container">
                    <div className="gallery__cards">
                        <div className="gallery__card">
                            <div className="gallery__image">
                                <Image src='/gallery-1.jpg' alt='gallery-img'  width={600} height={400}></Image>
                                <div className="gallery__shadow"></div>
                                <div className="gallery__content">
                                    <div className="author">
                                        <img src="https://images.pexels.com/users/avatars/520099596/yasin-onus-994.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=2" alt="" loading='lazy'/>
                                        <span className="author__name">Yasin Onuş</span>
                                    </div>
                                    <div className="gallery__locate">
                                        <span className='locate'>Kırklareli</span>
                                        <span className='country'><IoMdPin/> turkey</span>
                                    </div>
                                </div>
                            </div>
            
                        </div>

                        <div className="gallery__card">
                            <div className="gallery__image">
                                <Image src='/gallery-2.jpg' alt='gallery-img'  width={600} height={400}></Image>
                                <div className="gallery__shadow"></div>
                                <div className="gallery__content">
                                    <div className="author">
                                        <img src="https://images.pexels.com/users/avatars/193020565/jay-ngai-449.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=2" alt="" loading='lazy'/>
                                        <span className="author__name">Jay Ngai</span>
                                    </div>
                                    <div className="gallery__locate">
                                        <span className='locate'>Canadian Rockies</span>
                                        <span className='country'><IoMdPin/>Canada</span>
                                    </div>
                                </div>
                            </div>
            
                        </div>

                        <div className="gallery__card">
                            <div className="gallery__image">
                                <Image src='/gallery-3.jpg' alt='gallery-img'  width={600} height={400}></Image>
                                <div className="gallery__shadow"></div>
                                <div className="gallery__content">
                                    <div className="author">
                                        <img src="https://images.pexels.com/users/avatars/748406628/eddson-lens-766.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=2" alt="" loading='lazy'/>
                                        <span className="author__name">Eddson Lens</span>
                                    </div>
                                    <div className="gallery__locate">
                                        <span className='locate'>Banff, AB</span>
                                        <span className='country'><IoMdPin/>Canada</span>
                                    </div>
                                </div>
                            </div>
            
                        </div>

                        <div className="gallery__card">
                            <div className="gallery__image">
                                 <Image src='/gallery-4.jpg' alt='gallery-img'  width={600} height={400}></Image>
                                <div className="gallery__shadow"></div>
                                <div className="gallery__content">
                                    <div className="author">
                                        <img src="https://images.pexels.com/lib/avatars/purple.png?w=130&h=130&fit=crop&dpr=2" alt="" loading='lazy'/>
                                        <span className="author__name">Liuuu _61</span>
                                    </div>
                                    <div className="gallery__locate">
                                        <span className='locate'>Tokyo</span>
                                        <span className='country'><IoMdPin/>Japan</span>
                                    </div>
                                </div>
                            </div>
            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}