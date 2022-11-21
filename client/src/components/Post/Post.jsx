import React from 'react'
import './Post.css'

const Post = () => {
  return (
    <div className='post'>
        <div className='post-container'>
        <div className='post-banner'>
        <img src="https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
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