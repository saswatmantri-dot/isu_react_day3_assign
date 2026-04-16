import React from 'react'

function InputBox({inputText, trigger, displayText}) {
  return (
    <input
        type = "text"
        value={inputText}        
        onChange={trigger}
        placeholder={displayText}
    />
  )
}

export default InputBox