import React, {Component} from 'react';

class Sidevideo extends Component{
    render(){
        return(
            <div className='sidevideo--container'>
                <img src={this.props.image} alt=''></img>
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.channel}</p>
                </div>
            </div>
        )
    }
}

export default Sidevideo;