import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProjectPage(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const {projectId} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        // GET request to /project/:projectId
        axios.get(`${import.meta.env.VITE_API_URL}/projects/${projectId}`)
            .then( response => {
                setTitle(response.data.title)
                setDescription(response.data.description)
            })
            .catch((error) => console.log(error));
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Prepare an object with the data that we send to the api:
        const requestBody = {
            title: title,
            description: description
        }

        // PUT request to /projects/:projectId
        axios.put(`${API_URL}/projects/${projectId}`, requestBody)
            .then( response => {
                navigate(`/projects/${projectId}`);
            })
            .catch((error) => {
                console.log("Error updating project...");
                console.log(error);
            })
    }

    const deleteProject = () => {
        axios.delete(`${import.meta.env.VITE_API_URL}/projects/${projectId}`)
            .then( response => {
                navigate("/projects");
            })
            .catch((error) => {
                console.log("Error deleting project...");
                console.log(error);
            })
    }

    return (
        <div className="EditProjectPage">
        <h3>Edit the Project</h3>

        <form onSubmit={handleFormSubmit}>
            <label>
                Title
                <input
                    type="text"
                    name='title'
                    value={title}
                    // Update state with new value:
                    onChange={(e) => { setTitle(e.target.value) }}
                />
            </label>

            <label>
                Description
                <input
                    type="text"
                    name='description'
                    value={description}
                    // Update state with new value:
                    onChange={(e) => { setDescription(e.target.value) }}
                />
            </label>

            <button type="submit">Update Project</button>
        </form>

        <button onClick={deleteProject}>Delete Project</button>

    </div>
    )
}

export default EditProjectPage;