import dogey from "./assets/dog.jpg";
import "./App.css";

function App() {
  const randomImageUrl =
    "https://fastly.picsum.photos/id/191/400/400.jpg?hmac=YCCDFslYbRCTsYI0sqyLDlrA6WkswfZSs2ha8RQiNmU";

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

      <img src={randomImageUrl} alt="" height={200} />
    </div>
  );
}

export default App;
