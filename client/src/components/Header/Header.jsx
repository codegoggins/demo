import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
         <div className='container'>
              <div className='left'>
                   <h2>
                   A platform to sell Books Notes & other stuff you don't need.
                   </h2>
                   <h3>
                    Fellow hostellers are waiting...
                   </h3>
              </div>
              <div className='right'>
                   <img src="https://img.freepik.com/free-vector/flat-students-dormitory-room-preparing-exams_88138-1043.jpg?w=996&t=st=1667937465~exp=1667938065~hmac=6238032279a5307142e816704cb676bf67102e33e4268625968431681d09b8f8" alt="" srcset="" />
              </div>
         </div>
    </div>
  )
}

export default Header