
import React, {useState} from 'react'
import uniqid from 'uniqid';

export default function AddPost(){

    //get the hooks set state
    const[title, settitle] = useState('');
    const[imageurl, setimageurl] = useState('');
    const[description, setdescription] = useState('');

    function addpost(){
        var post = {
            title : title,
            imageurl : imageurl,
            description : description,
            postid :uniqid()
        }

        console.log(post);
    }


    return(
        <div className='row justify-content-center'>
            <div className='col-md-7'>
                <div>
                    <input 
                        type='text' 
                        placeholder='title' 
                        className='form-control'
                        value = {title}
                        onChange={(e) =>{settitle(e.target.value)}}
                    />
                    <input 
                        type='text' 
                        placeholder='imageurl' 
                        className='form-control'
                        value = {imageurl}
                        onChange={(e) =>{setimageurl(e.target.value)}}
                    />
                    <textarea 
                        cols='30' 
                        rows='10' 
                        placeholder='Description' 
                        className='form-control'
                        value = {description}
                        onChange={(e) =>{setdescription(e.target.value)}}
                    />
                    <button 
                        type="button" 
                        className='btn btn-success pull-left'
                        onClick = {addpost}>
                        Add Post
                    </button>
                </div>

            </div>
            
        </div>
    )
}