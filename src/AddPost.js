
import React, {useState} from 'react'
import uniqid from 'uniqid';
import axios from 'axios'

//create the posts
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

        axios.post('/api/post/addnewpost',post).then(res=>{
            alert(res.data)
        }).then(err=>{
            console.log(err)
        })
    }


    return(
        <div className='row justify-content-center'>
            <div className='col-md-7' >
                <h1 className='m-3'>Add New Post</h1>
                    <div >
                        <input 
                            type='text' 
                            placeholder='Title' 
                            className='form-control bgimage'
                            value = {title}
                            onChange={(e) =>{settitle(e.target.value)}}
                        />
                        <input 
                            type='text' 
                            placeholder='Imageurl' 
                            className='form-control bgimage'
                            value = {imageurl}
                            onChange={(e) =>{setimageurl(e.target.value)}}
                        />
                        <textarea 
                            cols='30' 
                            rows='10' 
                            placeholder='Description' 
                            className='form-control bgimage'
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