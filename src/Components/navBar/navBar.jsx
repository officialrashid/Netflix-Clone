import React from 'react'
import "./navBar.css"
function navBar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      <div className='nav'>
        <h5 className='navitems'>Home</h5>
        <h5 className='navitems'>Tv programmes</h5>
        <h5 className='navitems'>Originals</h5>
        <h5 className='navitems'>My List</h5>
        </div>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  )
}

export default navBar
