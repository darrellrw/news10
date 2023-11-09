import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import { FooterBar } from "./components/FooterBar";
// import { Login } from "./components/login";
// import { Register } from "./components/register";

function App() {
  return (
    // <div>
    //   <Login></Login>
    //   <Register></Register>
    // </div>
    <div className="flex flex-col h-screen justify-between">
      <NavigationBar></NavigationBar>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
