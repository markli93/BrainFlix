import React, { Component } from 'react';
import mainvideoData from './Mainvideodata';
import MainvidDescription from './Mainvideodescription';
import Mainvideoplayer from './Mainvideoplayer';
import MainvideoCommentlist from './MainvideoCommentlist';
import sidevideodata from './Sidevideodata';
import Sidevideolist from './Sidevideolist';
class Mainvideo extends Component{
    state ={
        mainvid : mainvideoData,   
        sidevideo : sidevideodata 
    }
    render(){
        return(
            <div>
            <Mainvideoplayer/>
            <MainvidDescription
            title = {this.state.mainvid.title}
            channel = {this.state.mainvid.channel}
            date = {this.state.mainvid.timestamp}
            views = {this.state.mainvid.views}
            likes = {this.state.mainvid.likes}
            description = {this.state.mainvid.description}
            />
            <MainvideoCommentlist mainvid ={this.state.mainvid}/>
            <Sidevideolist sidevid={this.state.sidevideo}/>
            </div>
        );
    }
}

export default Mainvideo;