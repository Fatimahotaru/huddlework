import React from 'react'
import logo from '../images/logo.svg'
import phone from '../images/icon-phone.svg'
import email from '../images/icon-email.svg'


const Footer = () => {
    return (
        <section className='footer-section'>

            <section className = 'section-ready1'>
                <div>
                    <img className='ready-img1' src={logo} alt='' />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
                    <div className='ready-image1'>
                    <img className='ready-img2' src={phone} alt=''/> <p>Phone: +1-543-123-4567</p>
                    </div>
                     <div className='ready-image2'>
                     <img className='ready-img3'src={email} alt=''/> <p> example@huddle.com</p>
                     </div>
                    
                </div>

            </section>

            <section className='section-ready2'>
                <div className='readyp1'>
                    <h1>NEWSLETTER</h1>
                    <p>
                    To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address
                    </p>
                </div>

                <form className='ready-form'>
                    <input className='ready-input' type='text' id=''  />
                    <button className='ready-button'> Subcribe</button>
                </form>
            </section>
            
        </section>
    )
}

export default Footer
