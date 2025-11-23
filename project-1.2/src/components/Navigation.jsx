import React from 'react'
const Navigation = () => {
  return (
    <div>
        <nav className='main-nav-section'>
            <div className='logo'>
                <img src="./images/cover.png" alt="logo" />
            </div>

            <ul>
                <li><a href="#about">about</a></li>
                <li><a href="#blog">blog</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#resume">resume</a></li>
                <button></button>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation