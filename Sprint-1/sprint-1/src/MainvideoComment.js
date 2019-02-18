import React, {Component} from 'react';

class Mainvideocomment extends Component{
        getdates(timestamps) {
        let dateinput = new Date(timestamps);
        let day = dateinput.getDate();
        let month = dateinput.getMonth()+1; 
        let year = dateinput.getFullYear();
        
        if(day<10) {
            day='0'+day;
        } 
    
        if(month<10) {
            month='0'+month;
        } 
    
    dateinput = month+'/'+day+'/'+year;
    return dateinput;
    
    }
    render(){
        return(
            <div className ="mainvidoe__comment--container">
                <img className='mohan__picture' src="Assets/Images/Mohan-muruge.jpg" alt="mohan"/>
                <div className = 'mainvideo__comment'>
                    <div className='mainvideo__comment__title'>
                        <p>{this.props.name}</p>
                        <p className ='mainvideo__comment__date'>{this.getdates(this.props.timestamp)}</p>
                    </div>
                    <p>{this.props.comment}</p>
                </div>
            </div>
        )
    }
}
export default Mainvideocomment