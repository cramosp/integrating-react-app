import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProjectPage() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Hook useNavigate, import it on top. To send the user to the page we want after doing something.
    // In this case, after creating a new project, send the user back to '/projects'
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // Prevent page reload:
        e.preventDefault();

        // Prepare an object with the data that we send to the API:
        // We can do it shorter: const newProject = {title, description}
        // Don't forget to pass this variable in the post request.
        const newProject = {
            title: title,
            description: description
        }

        // Send POST request - axios.post(url, data).then().catch():
        axios.post(`${import.meta.env.VITE_API_URL}/projects`, newProject)
            .then(response => {
                // Project created, we'll redirect to /projects:
                navigate('/projects')
            })
            .catch((error) => {
                console.log("Error creating project in the API...");
                console.log(error);
            })
    }

    return (
        <div className="CreateProjectPage">
            <h3>Add Project</h3>

            <form onSubmit={handleSubmit}>

                <label>
                    Title
                    <input
                        type="text"
                        name='title'
                        placeholder="Enter the title of your project."
                        required={true}
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
                        placeholder="Describe your project."
                        required={true}
                        value={description}
                        // Update state with new value:
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </label>

                <button>Create Project</button>
            </form>

        </div>
    )
}

export default CreateProjectPage;