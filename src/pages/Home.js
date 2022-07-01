import { Outlet } from "react-router-dom";
function Home() {
  return (
    <div>
      Home
      <hr />
      <Outlet />
    </div>
  );
}

export default Home;
