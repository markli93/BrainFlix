import React, {Component} from 'react';
import Sidevideo from './Sidevideo';

class Sidevideolist extends Component{
    render(){
        let sidevideolist = this.props.sidevid;
        let mainvid = this.props.mainvid;
        let newVideolist = sidevideolist.filter(sidevid=>{
            return sidevid.id !== mainvid.id})
        return(
            <div className='sidevideolist--container'>
                <p className ='sidevideolist__title'>Next Video</p>
                {
                newVideolist.map(sidevideo=>{
                return <Sidevideo title={sidevideo.title}
                                  channel={sidevideo.channel}
                                  image={sidevideo.image}
                                  id ={sidevideo.id}
                                  key ={sidevideo.id}
                        />
                })
            }
            </div>
        )
    }
}

export default Sidevideolist;