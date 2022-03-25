import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import Images from "./components/Images";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {<Header title={data.title} />}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      {<Images img={data.hdurl} />}
    </div>
  );
}

export default App;
