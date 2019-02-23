import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Sidevideo extends Component{
    render(){
        return(
            <div className='sidevideo--container' >
                <Link to={"/"+ this.props.id}>
                <img src={this.props.image} alt=''></img>
                </Link>
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.channel}</p>
                </div>
            </div>
        )
    }
}

export default Sidevideo;