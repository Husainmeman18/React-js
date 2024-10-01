import React from 'react'
import "./Main.css"
export const Header = () => {
  return (
    <header className="head">
    <div className="headline">
      <ul>
        <a href="#" className="png">
          <li>
            <h2 className="logo-text">YT</h2>
          </li>
        </a>
      </ul>
    </div>
    <div className="headmain">
      <ul>
        <a href="#" className="same">
          <li>Home</li>
        </a>
        <a href="#" className="same">
          <li>Pages</li>
        </a>
        <a href="#" className="same">
          <li>Portfolio</li>
        </a>
        <a href="#" className="same">
          <li>Blog</li>
        </a>
        <a href="#" className="same">
          <li>Contact Us</li>
        </a>
        <a href="#" className="btn">
          <li>
            <button className="b1">Get Started</button>
          </li>
        </a>
      </ul>
    </div>
  </header>
  )
}
