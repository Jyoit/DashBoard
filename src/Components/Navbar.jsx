import React from 'react'

export default function Navbar() {
  
  return (
    <div>
      <div className="app">
      <div className="sidebar">
        <ul>
          <li>Refro Team</li>
          
          <li><input type="Text" placeholder='Ask your AI Assistant'/><button>🔍</button></li>
          <li><div><h3>Your team used 8/50 free docs</h3><p>upgrade to create unlimited docs</p></div></li>
          <li>🔵 Catch up
          </li>
          <li>💬 Discussions</li>
        </ul>
        <ul>
          <li><h2>Favourites</h2></li>
          <li> 👋 Getting Started</li>
        </ul>
        <ul>
          <li><h2>🔒My Channels</h2>
          <li> 👋 my private channels</li></li>
          <li>📖Engineering</li>
          <li>📖Product</li>

         
        </ul>
        <br/>
        <br/>
        <br/>
        <ul>
          <li>Add people</li>
          <li>Templates</li>
          <li>Shared with me</li>
          <li>Archived</li>

        </ul>
      </div>
      
    </div>
    </div>
  )
}
