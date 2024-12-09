import React, {useState,useEffect} from 'react'
import './Zoom.css'

const API_URL = "http://localhost:3000/portfolio";

function Zoom() {
const [infoList,setInfoList] = useState([''])
const [description,setDescription] = useState('');
const [screenshot,setScreenshot] = useState('');
const [isDetailsPopupVisible,setIsDetailsPopupVisible] = useState(false);
const [alertMessage,setAlertMessage] = useState('');


const fetchInfo= async() => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    setInfoList(data);
    setDescription(data.description);
    setScreenshot(data.screenshot);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
useEffect(() => {
  fetchInfo();
}, []);
  return (
    <div className='container'>
      <div>
        <img src='https://i.imgur.com/jFvVx5c.png' alt='portfolio-pic' className='pic'/>

        <div>
          <h1>Hi, my name is</h1>

          <h2>I'm a Web Developer</h2>

          <p>I'm a full-stack developer with experience in React, Node.js, Express, MongoDB, and more.</p>


        </div>
      </div>
      </div>
   
  )}
  


export default Zoom