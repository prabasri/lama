import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/HomePage/Home";
import SampleProjects from "./pages/SampleProjectsPage/SampleProjects";
import Upload from './pages/UploadPage/Upload';

export const config = {
  endpoint: "https://lama-backend-k909.onrender.com",
}

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/sample-projects" element={<SampleProjects/>}/>
          <Route path="/sample-projects/upload" element={<Upload/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
