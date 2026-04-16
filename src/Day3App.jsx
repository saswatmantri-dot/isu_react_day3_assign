import React from 'react'
import StatusCard from './components/StatusCard'
import InputBox from './components/InputBox'
import { useState } from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import DynamicLink from './components/DynamicLink'

function Day3App() {

    const [type, typeSetter] = useState("");
    const handle = (event) => {
      typeSetter(event.target.value);
    }

  return (
    <div>
        <Header />
        <button className = "btn"> 
            Global css styled button
        </button>
        <StatusCard type={type}/>
        <InputBox inputText={type} trigger = {handle} displayText = {"Enter success or error"} />
        <DynamicLink />
        <Footer />
    </div>
  )
}

export default Day3App