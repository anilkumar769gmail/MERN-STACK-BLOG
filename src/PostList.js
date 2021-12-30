import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'

//shows the results retrived from the database document posts
export default function PostList(){

    //lifecycle hook
    const [postsdata, setpostsdata] =useState([]);

    //retrive the posts: note axios work same as fetch but much simpler way
    useEffect(() =>{
        axios.get('/api/post/getposts').then(res =>{
            console.log(res.data);
            setpostsdata(res.data);
        }).catch(err =>{
            console.log(err)
        })
    },[]);

    const postlist = postsdata.map(post => {
        return(
            <div className='row justify-content-center'>
                <PostItem post={post}/>
            </div>
        )
    });
    return(
        <div>
            {postlist}
        </div>
    )
}