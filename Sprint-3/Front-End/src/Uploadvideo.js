import React from 'react';
import './App.scss';
import axios from 'axios';

export default class Uploadvideo extends React.Component{

    addVideo = (event) => {
        event.preventDefault();
        if(event.target.title.value !== '' && event.target.description.value !== ''){
            axios.post('http://localhost:8080/videos', { 
                "title": event.target.title.value,
                "description":event.target.description.value,
               })
            this.props.history.push('/');
        }
     }

     cancelSubmit = (event) => {
        event.preventDefault();
        window.location.reload();
     }
   render(){
        return(
            <div>
                <h1 className='upload__header'>Upload Video</h1>
                <div className='upload--container'>
                    <div className='upload__image--container'>
                        <label>VIDEO THUMBNAIL</label>
                        <img src='Assets/Images/Upload-video-preview.jpg' alt='upload'/>
                    </div>
                    <form className='upload__form' onSubmit= {this.addVideo}>
                        <div className='upload__title--container'>
                            <label>TITLE YOUR VIDEO</label>
                            <input name='title' placeholder='Add a title to your video'/>
                        </div>
                        <div className='upload__description--container'>
                            <label>ADD A VIDEO DESCRIPTION</label>
                            <textarea name ='description'placeholder='ADD A VIDEO DESCRIPTION'></textarea>
                        </div>
                        <div className='upload__button--container'>
                            <button type='submit' className='upload__button__publish'>PUBLISH</button>
                            <button  onClick = {this.cancelSubmit} type='click' className='upload__button__cancel'>CANCEL</button>
                        </div>
                    </form>
                </div>      
            </div>
        )
    }
}