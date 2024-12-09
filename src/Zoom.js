import React, { Component,} from 'react'



const API_URL = "http://localhost:3000/portfolio"

export class Zoom extends Component {
  const[]= 


  const  fetchInfo= async () => {
    try{
      const responce = await fetch(API_URL);
      if(!responce.ok){
        throw new Error(`HTTP error! status: ${responce.status}`);
      }
    }
  }
  

  render() {
    return (
      <div>
        <img src='https://i.imgur.com/jFvVx5c.png' alt='portfolio-pic' className='pic'/>

        <div>
          <h1>Hi, my name is</h1>

          <h2>I'm a Web Developer</h2>

          <p>I'm a full-stack developer with experience in React, Node.js, Express, MongoDB, and more.</p>


        </div>
      </div>
   
  )}
}

export default Zoom
