import "./App.css";

const data = [
  {
    id: 1,
    title: "something",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "https://picsum.photos/200/300?random",
    price: "43$",
  },
  {
    id: 2,
    title: "something2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "https://picsum.photos/200/300?random",
    price: "3$",
  },
  {
    id: 3,
    title: "something3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "https://picsum.photos/200/300?random",
    price: "44$",
  },
];

function App() {
  const dataTop = data.map((item) => {
    const itemText = `${item.title} - ${item.price}`;
    return <li>{itemText}</li>;
  });

  return (
    <div className="App">
      <ul>{dataTop}</ul>
    </div>
  );
}

export default App;
