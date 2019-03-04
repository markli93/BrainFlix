import React, {Component} from 'react';

class Mainvideoplayer extends Component{
    constructor(props){
        super(props);
        this.videoPlayer = React.createRef();
        this.state = {
            playing : false,
            mute : false
        }
      }

      play= ()=>{
          const status = this.videoPlayer.current
          if(status.paused){
              status.play()
                 this.setState(
                     {
                         playing : !this.state.playing
                    });      
                }
          else{
              status.pause();
              this.setState(
                  {
                      playing : !this.state.playing
                });
          }
      }

      fullscreen = ()=>{
        const status = this.videoPlayer.current
          status.requestFullscreen();
      }

      mute = ()=>{
        const status = this.videoPlayer.current
          if(status.muted){
            status.muted = false;
            this.setState(
                {
                mute : !this.state.mute
             }
            )
          }
          else{
            status.muted = true;
            this.setState(
                {
                mute : !this.state.mute
             }
            )
          }
      }

    render(){
        return(
            <div className ='mainvideo__player--container'>
             <video poster={this.props.image} ref={this.videoPlayer}><source src ="https://project-2-api.herokuapp.com/stream?api_key=hgbyg" type ="video/mp4"/></video>
                <div className='mainvideoplayer__icon--container'>
                    <button className='mainvideoplayer__icon__play' onClick= {this.play} >
                        {this.state.playing ? ( <img src="Assets/Icons/SVG/Icon-pause.svg" alt='pause'/>)
                        :(<img src="Assets/Icons/SVG/Icon-play.svg" alt='play'/>)}  
                    </button>
                    <div className ='mainvideo__progressbar--container'>
                        <div className ='mainvideo__progressbar'></div>
                        <div className ='mainvideo__timeline'>0:00 / 0:42</div>
                    </div>
                    <button className='mainvideoplayer__icon__full' onClick={this.fullscreen}>
                        <img src="Assets/Icons/SVG/Icon-fullscreen.svg" alt='full screen'/>
                    </button>
                    <button className='mainvideoplayer__icon__volume' onClick={this.mute}>
                    {this.state.mute ? ( <img src="Assets/Icons/SVG/Icon-mute.svg" alt='mute'/>)
                        :(<img src="Assets/Icons/SVG/Icon-volume.svg" alt='volume'/>)}      
                    </button>
                </div>
            </div>
        )
    }
}
export default Mainvideoplayer;