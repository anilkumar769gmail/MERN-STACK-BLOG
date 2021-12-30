import React from 'react'
import { Link } from 'react-router-dom'

//post - is the props that we recieving from the parent PostList.js
export default function PostItem({post}){

    return(
        <div className='col-md-6 shadow p-3 mb-5 bg-white rounded bgimage'>
            <h1 className='p-1'>{post.title}</h1>
            <img src={post.imageurl} className='img-fluid' alt='pic'/>
            <p className='p-1'>{post.description}</p>
            {/* There is a backtick iside a {``} */}
            <Link to={`/editpost/${post.postid}`}><button type='button' className='btn btn-info'>Update</button></Link>&nbsp;
            <button type='button' className='btn btn-danger'>Delete</button>
        </div>
    )
}