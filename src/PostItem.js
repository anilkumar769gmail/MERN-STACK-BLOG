import axios from 'axios'
import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

//post - is the props that we recieving from the parent PostList.js
export default function PostItem({post}){
     
    const history = useNavigate();
    
    useEffect(() =>{
        AOS.init();
    })

    function deletepost(postid){
        axios.post('/api/post/deletepost', {postid:postid}).then(res =>{
            alert(res.data)
            history(0)
        }).catch(err =>{
            console.log(err)
        })
    }

    return(
        <div className='col-md-8 shadow p-3 mb-5 bg-white rounded bgimage' data-aos="fade-up">
            <h1 className='p-1'>{post.title}</h1>
            <img src={post.imageurl} className='img-fluid' alt='pic'/>
            <p className='p-1'>{post.description}</p>
            {/* There is a backtick iside a {``} */}
            <Link to={`/editpost/${post.postid}`}><button type='button' className='btn btn-info'>Update</button></Link>&nbsp;
            <button type='button' className='btn btn-danger' onClick={()=>{deletepost(post.postid)}}>Delete</button>
        </div>
    )
}