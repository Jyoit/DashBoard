import React, {useState} from 'react'

export default function Docs() {
    const [inputValue, setInputValue] = useState();

  // Event handler to update the state when the input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
    <h2> ✍️ Docs</h2>
    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="docs"/>
    
  <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder='💡 give it to go by typing/ below'
        className='Docsinput'
      />
    </div>
  )
}
