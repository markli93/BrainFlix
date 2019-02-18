import React, {Component} from 'react';
import Sidevideo from './Sidevideo';

class Sidevideolist extends Component{
    render(){
        const sidevideo = this.props.sidevid;
        return(
            <div className='sidevideolist--container'>
                <p className ='sidevideolist__title'>Next Video</p>
                {
                sidevideo.map(function(sidevideo){
                return <Sidevideo title={sidevideo.title}
                                     channel={sidevideo.channel}
                                     image={sidevideo.image}
                                     key ={sidevideo.id}
                                     />
                })
            }
            </div>
        )
    }
}

export default Sidevideolist;