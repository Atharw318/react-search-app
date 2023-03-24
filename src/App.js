import Data from "./MOCK_DATA.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search...."
        onChange={(event) => {
          console.log(event.target.value);
          setSearchTerm(event.target.value);
        }}
      />
      <div>
        {Data.filter((data) => {
          if (searchTerm === "") {
            return data;
          } else if (
            data.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          }
        }).map((data, index) => {
          return <div>{data.first_name}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
