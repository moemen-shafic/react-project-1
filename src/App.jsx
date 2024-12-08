import { useState } from "react";
import "./App.css";

function App() {

  const [person, setPerson] = useState("moemen Shafic");

  const [age, setAge] = useState(28);
  const [count, setCount] = useState(0);

  const chageAge = () => {
    setAge(37)
  }
  
const changeCount = () => {
  setCount(count + 1)
}

  return (
    <div className="App">
      <h1>My name is {person}</h1>
      <button type="button" onClick={() => {
        setPerson("moemen Ahmed Shafic")
      }
      }>change name</button>
<br/>
<br/>

<h1>my age is {age}</h1>
<button onClick={chageAge}>change Age</button>

<br/>
<br/>
<br/>

<button onClick={ changeCount }>count is {count}</button>

    </div>

    
  );
}

export default App;
