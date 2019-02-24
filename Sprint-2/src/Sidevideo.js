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
                        <Link to={"/"+ this.props.id}>
                            <h3>{this.props.title}</h3>
                        </Link>
                        <Link to={"/"+ this.props.id}>
                            <p>{this.props.channel}</p>
                        </Link>
                    </div>
            </div>
        )
    }
}

export default Sidevideo;