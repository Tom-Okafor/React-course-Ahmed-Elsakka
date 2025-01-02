import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <h1>PROFIILE CARD</h1>
      <Card
        img="https://th.bing.com/th?id=OIP.-t8MzXN8KG4xHvdBtPuwbQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        name="Susan Bradshaw"
        bio="Hey, I'm Susan. A professional interior decorator. I hope to connect with new people and possibly meet prospective clients."
      />
    </div>
  );
}

export default App;
