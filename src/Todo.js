function Todo(props) {
  function deleteHandler() {
    console.log("click delete");
  }

  return (
    <div className="card">
      <h1>{props.text}</h1>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Done
        </button>
      </div>
    </div>
  );
}

export default Todo;
