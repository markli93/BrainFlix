import React from 'react';
import './App.scss';

export default class Uploadvideo extends React.Component{
    render(){
        return(
            <div>
                <h1 className='upload__header'>Upload Video</h1>
                <div className='upload--container'>
                    <div className='upload__image--container'>
                        <label>VIDEO THUMBNAIL</label>
                        <img src='Assets/Images/Upload-video-preview.jpg' alt='upload'/>
                    </div>
                    <form className='upload__form'>
                        <div className='upload__title--container'>
                            <label>TITLE YOUR VIDEO</label>
                            <input placeholder='Add a title to your video'/>
                        </div>
                        <div className='upload__description--container'>
                            <label>ADD A VIDEO DESCRIPTION</label>
                            <textarea placeholder='ADD A VIDEO DESCRIPTION'></textarea>
                        </div>
                    </form>
                </div>
                    <div className='upload__button--container'>
                        <button className='upload__button__publish'>PUBLISH</button>
                        <button className='upload__button__cancel'>CANCEL</button>
                    </div>
            </div>
        )
    }
}