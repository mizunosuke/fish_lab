import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { InputPage } from './inputpage/InputPage';
import { Home } from './toppage/Home';
import { Lab } from "./labpage/Lab";
import { DataProvider } from "./DataProvider";

function App() {
  
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/input" element={<InputPage/>}/>
            <Route path="/lab" element={<Lab/>}/>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
