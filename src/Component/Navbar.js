import React from 'react'
import logo from '../images/logo.svg'
const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"> <img className="Img-nav" src={logo} alt="" /> </a>
                <button class= "button"> Try It Free</button>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                
               
            </div>
        </nav>
    )
}

export default Navbar
