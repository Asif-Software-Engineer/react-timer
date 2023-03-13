import React from 'react'
import { useState } from "react";
import './time.css'

const Time = () => {
    // let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
  
    const [ctime, setCtime] = useState(time);
    const UpdateTime = () => {
      let time = new Date().toLocaleTimeString();
      setCtime(time);
    };
    setInterval(UpdateTime, 1000);
      return (
        <div className='Time'>
          {ctime}
        </div>
      )
    }

export default Time;
