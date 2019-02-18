    import React, {Component} from 'react';

class MainvidDescription extends Component{
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
            <div className ='mainvideo__description--container'>
                <h1>{this.props.title}</h1>
                <div className ='mainvideo__text--container'>
                    <div className ='mainvideo__channel--contianer'>
                        <h2>By {this.props.channel}</h2>
                        <h2 className='mainvideo__date'>{this.getdates(this.props.date)}</h2>
                    </div>
                    <div className ='mainvideo__icon--container'>
                        <img src="Assets/Icons/SVG/Icon-views.svg" alt="eye icon"/>
                        <p>{this.props.views}</p>
                        <img src="Assets/Icons/SVG/Icon-likes.svg" alt="likes icon"/>
                        <p>{this.props.likes}</p>
                    </div>
                </div>
                <p className ='mainvideo__description'>{this.props.description}</p>
            </div>
        )
    }
}
export default MainvidDescription 
