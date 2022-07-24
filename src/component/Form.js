import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText((_) => event.target.value);
  };
  const handleClick = () => {
    onSubmit(text);
  };
  const handleEnter = (event) => {
    if (event.key == "Enter") {
      onSubmit(text);
    }
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <br />
      <button onClick={handleClick}>Submit</button>
    </>
  );
};

export default Form;
