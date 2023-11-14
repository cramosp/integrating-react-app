import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";

function App() {

  return (
    <>
      <div className='App'>
       
       <Navbar />

        <Routes>
          <Route path='/' element={<p>This will be the {<HomePage />}</p>} />
          <Route path="/projects" element={<ProjectListPage />} />        </Routes>
      </div>
    </>
  )
}

export default App
