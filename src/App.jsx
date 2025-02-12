import { Link, useRoutes } from "react-router-dom";

import routes from "../routes";
import Routes from "../src/Routes";
import Header from "./components/Header";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <>
      {/* <Header /> */}

      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
