import React from 'react'
import Post from '../Post/Post'
import './Posts.css'

const Posts = () => {
  return (
    <div className='posts'>
         <div className='posts-container'>
              <h1 className='posts-title'>Items on Sale</h1>
              <div className='posts-items'>
                   <div className='post'>
                        <Post/>
                   </div>
              </div>
         </div>
    </div>
  )
}

export default Posts