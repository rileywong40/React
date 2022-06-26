import Todo from "./Todo";
import Diolog from "./Diolog";

function App() {
  return (
    <div>
      List
      <Todo text="Swimming" />
      <Todo text="Dancing" />
      <Todo text="Coding" />
      <Diolog />
    </div>
  );
}

export default App;
