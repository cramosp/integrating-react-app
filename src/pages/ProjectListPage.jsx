import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProjectListPage(){

    console.log("ProjectListPage has been invoked....")

    const [projects, setProjects] = useState([]);


    const getAllProjects = () => {
        axios.get(import.meta.env.VITE_API_URL + "/projects?_embed=tasks")
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.log("Error getting projects from the API...");
                console.log(error);
            })
    };


    useEffect(() => {
        getAllProjects();
    }, []);

    return (
        <div className="ProjectListPage">
            <h1>List of projects:</h1>

            <Link to="/projects/create">
                <p>
                    <button>Create Project</button>
                </p>
            </Link>   

            {projects.map((project, i) => {
                return (
                    <div className="ProjectCard card" key={i} >
                        <Link to={`/projects/${project.id}`}>
                            <h3>{project.title}</h3>
                        </Link>
                    </div>
                );
            })}

        </div>
    )
}

export default ProjectListPage;