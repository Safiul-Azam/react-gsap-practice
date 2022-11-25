import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./component/Shared/Navbar";
import SimpleTweenMax from "./component/SimpleTweenMax";
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<SimpleTweenMax />} />
      </Routes>
    </div>
  );
}

export default App;
