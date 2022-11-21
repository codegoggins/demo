import React from 'react'
import './Sell.css'

const Sell = () => {
  return (
    <div className='sell'>
         <img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
         <form className='sellForm'>
               <div className='sf-item'>
                    <label htmlFor="fileInput">
                    <p>Upload an Image of the Item</p>
                    <i class="fa-solid fa-image"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}}/>
               </div>
               <div className='sf-item-details'>
                    <input type="text" placeholder='Item Name' autoFocus={true}/>
                    <textarea placeholder='About the item' />
                    <input type="text" placeholder='User Name' />
                    <input type="number" min={0} placeholder='Item Price' />
                    <input type="text" placeholder='Hostel Name' />                    
               </div>
               <button className='sellSubmit' type='submit'>Post</button>
         </form>  

    </div>
  )
}

export default Sell 