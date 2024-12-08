import { useState } from "react";
import "./App.css";
import "./Theme.css";

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


  //==================== change mode ===///

  const [theme, settheme] = useState("dark");
  return (
    <div className={`App ${theme}`}>


      <div>
        <button className="light" type="button" onClick={() => {
          settheme("light")
        }
        }>light</button>
        <button style={{ marginLeft: "20px" }} type="button" onClick={() => {
          settheme("dark")
        }
        }>dark</button>
        <button style={{ marginLeft: "20px" }} type="button" onClick={() => {
          settheme("yellow")
        }
        }>yellow</button>
        <button style={{ marginLeft: "20px" }} type="button" onClick={() => {
          settheme("blue")
        }
        }>blue</button>

      </div>

      <h1>My name is {person}</h1>
      <button type="button" onClick={() => {
        setPerson("moemen Ahmed Shafic")
      }
      }>change name</button>
      <br />
      <br />

      <h1>my age is {age}</h1>
      <button onClick={chageAge}>change Age</button>

      <br />
      <br />
      <br />

      <button onClick={changeCount}>count is {count}</button>

    </div>


  );
}

export default App;
