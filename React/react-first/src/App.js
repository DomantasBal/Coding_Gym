import logo from "./logo.svg";
import "./App.css";

import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Promo from "./components/Promo";

function HomePage() {
  return (
    <div>
      <Nav />
      <Intro />
      <Promo />
      <Footer />
    </div>
  );
}
function App() {
  return <HomePage />;
}

export default App;
