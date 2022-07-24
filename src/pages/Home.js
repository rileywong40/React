import { useRef, useState } from "react";
import Form from "../component/Form.js";

function Home() {
  return (
    <div>
      Home
      <hr />
      <Form onSubmit={(e) => console.log(e)} />
    </div>
  );
}

export default Home;
