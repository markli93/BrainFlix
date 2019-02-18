import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <header>
                <nav className="navbar">
                    <div className="navbar__logo--container">
                        <img src="Assets/Logo/Logo-brainflix.svg" className="navbar__logo" alt="Band Logo"/>
                    </div>
                    <form>
                        <input placeholder="Search" type="text" className ="navbar__input"/>
                        <div className="navbar__button--container">
                            <button className="navbar__button">UPLOAD</button> 
                            <img className= 'mohan__picture'src="Assets/Images/Mohan-muruge.jpg" alt="mohan"/>
                        </div> 
                    </form>
                </nav>
            </header>
        )
    }
    
}
export default Navbar;