import dogey from "./assets/dog.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        height={200}
        src={dogey}
        alt="this is a dog for learning purposes"
      ></img>
      <img
        height={200}
        src={require("./assets/dog.jpg")}
        alt="this is a dog for learning purposes"
      ></img>
    </div>
  );
}

export default App;
