import Navbar from "./component/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Contacts from "./component/Contacts";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>

      <Contacts />
    </div>
  );
}

export default App;
