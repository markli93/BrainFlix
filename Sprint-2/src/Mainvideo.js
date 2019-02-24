import React, { Component } from 'react';
import MainvidDescription from './Mainvideodescription';
import Mainvideoplayer from './Mainvideoplayer';
import MainvideoCommentlist from './MainvideoCommentlist';
import Sidevideolist from './Sidevideolist';
import axios from 'axios';
class Mainvideo extends Component{
    state ={
        mainvid: {comments:[]},
        sidevideo : [] 
    }

    componentDidMount() {

       let sidevidPromise = axios.get('https://project-2-api.herokuapp.com/videos/?api_key=mark')
        sidevidPromise.then(response =>  {
            this.setState({
                sidevideo: response.data
            });
        });

        sidevidPromise.catch(error=>{
            console.log(error);
        }); 

       let mainvidPromise = axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=mark`)
        mainvidPromise.then(response =>  {
            this.setState({
                mainvid: response.data
            })
        });

        mainvidPromise.catch(error=>{
            console.log(error);
        }); 
    }

    componentDidUpdate(){
        if(this.state.mainvid.id !== this.props.match.params.id){
            let mainvidPromise = axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=mark`)
                mainvidPromise.then(response =>  {
                    this.setState({
                        mainvid: response.data 
                    })
                });
                mainvidPromise.catch(error=>{
                    console.log(error);
                }); 
    }
    }
    
    render(){
        return(
            <div>
                
            <Mainvideoplayer
              image = {this.state.mainvid.image}
            />
            <MainvidDescription
                title = {this.state.mainvid.title}
                channel = {this.state.mainvid.channel}
                date = {this.state.mainvid.timestamp}
                views = {this.state.mainvid.views}
                likes = {this.state.mainvid.likes}
                description = {this.state.mainvid.description}
            />
            <MainvideoCommentlist mainvid ={this.state.mainvid}/>            
            <Sidevideolist sidevid={this.state.sidevideo}  mainvid ={this.state.mainvid}/>
            </div>
        );
    }
}

export default Mainvideo;