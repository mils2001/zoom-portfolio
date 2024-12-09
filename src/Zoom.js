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
        
            <div className='text-container'>
               <h1 className='h1'>Hello, My names are Miles Christian David </h1>
               <p className='lines'>I am software engineer passionate about coding and exploring the tech world. Am graduate of Moringa Tech Collage..My speciality is in React,Javascript,MongoDB,Ruby on Rails.</p>
                 
            </div>
            <div className='btn-container'>
              <button className='btn'>Contact</button>
              <button className='btn1'>Refer</button>

            </div>



        
      </div>
      </div>
   
  )}
  


export default Zoom