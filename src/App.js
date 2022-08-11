
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from './component/Chat/Chat';

// const ENDPOINT = 'http://localhost:4500/';
// const socket = socket(ENDPOINT, { transports:['websocket'] });


function App() {

  
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element= {<Join/>} />
        <Route path="/chat" element= {<Chat />} />
      </Routes>
    </Router>
      
      {/* <>
      <Join />

      </> */}
      
    </div>
  );
}

export default App;
