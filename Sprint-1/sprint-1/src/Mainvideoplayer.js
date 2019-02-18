import React, {Component} from 'react';

class Mainvideoplayer extends Component{
    render(){
        return(
            <div className ='mainvideo__player--container'>
                <div className='mainvideoplayer__icon--container'>
                    <div className='mainvideoplayer__icon__play'>
                        <img src="Assets/Icons/SVG/Icon-play.svg"/>
                    </div>
                    <div className ='mainvideo__progressbar--container'>
                        <div className ='mainvideo__progressbar'></div>
                        <div className ='mainvideo__timeline'>0:00 / 0:42</div>
                    </div>
                    <div className='mainvideoplayer__icon__full'>
                        <img src="Assets/Icons/SVG/Icon-fullscreen.svg"/>
                    </div>
                    <div className='mainvideoplayer__icon__volume'>
                        <img src="Assets/Icons/SVG/Icon-volume.svg"/>
                    </div>
                </div>
                <video poster="Assets/Images/video-list-0.jpg"><source src ="https://project-2-api.herokuapp.com/stream?api_key=hgbyg" type ="video/mp4"/></video>
            </div>
        )
    }
}
export default Mainvideoplayer;