import '@/styles/Contact.css'

export default function Contact(){
    return (
        <>  
            <section className="section__container contact__container" id="contact">
                <div className="contact__header">
                    <h2 className="section__header">
                        Start Your Journey With Us
                    </h2>
                    <p className="section__description" style={{maxWidth : '600px', marginTop : '2rem'}}>
                        Whether you’re planning your first trip or your next one,
                        our team is here to answer your questions and share inspiration.
                    </p>
                </div>
                <div className="contact__content">
                    <form className="contact__form">
                        <input type="text" placeholder="Enter your email"/>
                        <button className="contact__btn">Get in Touch</button>
                    </form>
                </div>
            </section>
        </>
    )
}