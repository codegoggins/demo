import React from 'react'
import './SingleItem.css'

const SingleItem = () => {
  return (
    <div className='single-item'>
         <div className='single-img'>
              <img src="https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
         </div>
         <div className='single-edit'>
                <i className="fa-solid fa-trash single-delete"></i>
                <i className="fa-solid fa-file-pen single-update"></i>
         </div>
         <div className='single-content'>
            <div className='single-book-details'>
              <h4 className='single-item-name h3'>RD SHARMA</h4>
              <p className='single-item-desc h5'>Lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rerum eos veniam provident perferendis, tempora sunt natus maiores autem quis? Ipsum, obcaecati, consequuntur deserunt autem fugiat quos, sint omnis odio sed incidunt vel. Ipsam cum eveniet eius harum molestias enim!</p>
            </div>
            <div className='single-user-details h5'>
                <div className='single-user'>
                  <p>Price : <strong> Rs. 600</strong></p>
                  <p>Seller: <strong>Nilay Singh</strong></p>
                  <p>Hostel: <strong>Xavier</strong></p>
                  <p>Room: <strong>514</strong> </p>
                </div>
                <div className='single-upload-time'>
                  <p>Uploaded 1 hr ago</p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default SingleItem