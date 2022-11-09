import React from 'react'
import './Post.css'

const Post = () => {
  return (
    <div className='post'>
        <div className='post-container'>
        <div>
        <img src="https://m.media-amazon.com/images/I/71MjzETlTOL.jpg" alt="" srcset="" />
        </div>
         <div className='post-content'>
              <div className='book-details'>
              <h4 className='item-name'>RD SHARMA</h4>
              <p className='item-desc'>Mathematics Books</p>
              </div>
              <div className='user-details'>
                <div className='user'>
                  <p>Price : Rs. 600</p>
                  <p>Seller: Nilay Singh</p>
                </div>
                <div className='upload-time'>
                  <p>1 hr ago</p>
                </div>
              </div>
         </div>
        </div>
    </div>
  )
}

export default Post