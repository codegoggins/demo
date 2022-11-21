import React from 'react'
import './SinglePost.css'

const SinglePost = () => {
  return (
    <div className='single-post'>
         <div className='sp-img'>
              <img src="https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
         </div>
         <div className='sp-edit'>
                <i className="fa-solid fa-trash sp-delete"></i>
                <i className="fa-solid fa-file-pen sp-update"></i>
         </div>
         <div className='sp-content'>
            <div className='sp-book-details'>
              <h4 className='sp-item-name h3'>RD SHARMA</h4>
              <p className='sp-item-desc h5'>Lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rerum eos veniam provident perferendis, tempora sunt natus maiores autem quis? Ipsum, obcaecati, consequuntur deserunt autem fugiat quos, sint omnis odio sed incidunt vel. Ipsam cum eveniet eius harum molestias enim!</p>
            </div>
            <div className='sp-user-details h5'>
                <div className='sp-user'>
                  <p>Price : <strong> Rs. 600</strong></p>
                  <p>Seller: <strong>Nilay Singh</strong></p>
                  <p>Hostel: <strong>Xavier</strong></p>
                  <p>Room: <strong>514</strong> </p>
                </div>
                <div className='sp-upload-time'>
                  <p>Uploaded 1 hr ago</p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default SinglePost