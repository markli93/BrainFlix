import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component{
    render(){
        return(
            <header>
                <nav className="navbar">
                    <div className="navbar__logo--container">
                       <Link to={'/'}> <img src="Assets/Logo/Logo-brainflix.svg" className="navbar__logo" alt="Band Logo"/></Link>
                    </div>
                    <form>
                        <input placeholder="Search" type="text" className ="navbar__input"/>
                        <div className="navbar__button--container">
                            <Link to={'/upload'} className="navbar__upload__link">
                                <button className="navbar__button">UPLOAD</button>
                            </Link>
                            <img className= 'mohan__picture'src="Assets/Images/Mohan-muruge.jpg" alt="mohan"/>
                        </div> 
                    </form>
                </nav>
            </header>
        )
    }
    
}
export default Navbar;