import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import ProjectDetailsPage from "./ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";

function App() {

  return (
    <>
      <div className='App'>
       
       <Navbar />

        <Routes>
          <Route path='/' element={ <p>This will be the { <HomePage /> }</p> } />
          <Route path="/projects" element={ <ProjectListPage /> } />
          <Route path="/projects/create" element={ <CreateProjectPage /> } />
          <Route path="/projects/:projectId" element={ <ProjectDetailsPage /> } />
          <Route path="/projects/edit/:projectId" element={ <EditProjectPage /> } />           
        </Routes>

      </div>
    </>
  )
}

export default App;
