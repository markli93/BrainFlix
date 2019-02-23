import React, {Component} from 'react';
import Mainvideocomment  from './MainvideoComment';


class MainvideoCommentlist extends Component{
    render(){
        const mainvideocomment = this.props.mainvid.comments;
        return(
        <div className='mainvideo__form--container'>
            <h2>{mainvideocomment.length} Comments</h2>
            <form className ='mainvideo__form'>
                <img className ="mohan__picture" src="Assets/Images/Mohan-muruge.jpg" alt="mohan"/>
                <div className ='maivideo__input--container'>
                    <div className ='mainvideo__input'>
                        <label>JOIN THE CONVERSATION</label>
                        <textarea placeholder= 'That was easily the most spectacular BMX moment ever.' id="inputComment" name="inputComment"></textarea>
                    </div>
                    <button className="cta" type="submit">COMMENT</button>
                </div>  
            </form>
            {
                mainvideocomment.map(function(comment){
                return <Mainvideocomment name={comment.name}
                                         comment={comment.comment}
                                         timestamp={comment.timestamp}
                                         key ={comment.id}/>
                })
            }
        </div>
        
        ) 
    }
}
export default MainvideoCommentlist