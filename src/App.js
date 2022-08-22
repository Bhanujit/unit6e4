import { Container } from "@chakra-ui/react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <div>
      <Navbar/>
    <MainRoutes/>
    </div>
  );
}

export default App;
