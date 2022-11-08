import React from 'react'
import './Post.css'

const Post = () => {
  return (
    <div className='post'>
         <img src="https://4.imimg.com/data4/VK/VX/MY-3291959/r-d-sharma-maths-for-12th-std-cbse-500x500.jpg" alt="" srcset="" />
         <div className='post-content'>
              <h4 className='item-name'>RD SHARMA</h4>
              <p className='item-desc'>Mathematics Books</p>
              <h5>Price :Rs. 600</h5>
              <h5>Seller: Nilay Singh</h5>
              <p>Uploaded 1 hr ago</p>
         </div>
    </div>
  )
}

export default Post