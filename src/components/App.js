
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [count,setCount] = useState(0)
  function increaseCount(e){
    
    setCount(count+1)
    
  }

  return (
    <div>
        {/* Do not remove the main div */   }
        
        <p>Button clicked {count} times</p>
        <button onClick={increaseCount} > Click Me </button>
    </div>
  )
}

export default App
