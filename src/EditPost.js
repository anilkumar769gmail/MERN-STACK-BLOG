import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditPost(){

    const params = useParams();
     //get the hooks set state
     const[title, settitle] = useState('');
     const[imageurl, setimageurl] = useState('');
     const[description, setdescription] = useState('');

     const history = useNavigate();

    /*
    useEffect - is like a componentDidMount()
    axios - is like fetch method but much simpler, dont have to declare REST API methods and content-type
    */
    useEffect(()=>{
        axios.post('/api/post/getpostdata', {postid: params.postid}).then(res =>{
            
            console.log(res.data[0]);
            //contains the old data that needs to be updated
            const postdata = res.data[0]
            settitle(postdata.title)
            setimageurl(postdata.imageurl)
            setdescription(postdata.description)
        }).catch(err=>{
            console.log(err)
          })
    },[params.postid]);

    function editpost(){
        const updatedpost = {
            title:title,
            imageurl:imageurl,
            description:description,
            postid:params.postid
        }
          //sends the updated post back to the database
          axios.post('/api/post/updatepost',updatedpost).then(res =>{
            console.log(res)
            alert(res.data)
            history('/')
          }).catch(err => {
            console.log(err);
        })
    }
    return(
        <div className='row justify-content-center'>
            <div className='col-md-7' >
                <h1 className='m-3'>Update Post</h1>
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
                            onClick = {editpost}
                            type="button" 
                            className='btn btn-success float-left'
                            >
                            Submit Post
                        </button>
                    </div>
            </div>
        </div>
    )
}