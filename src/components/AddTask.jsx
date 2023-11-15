import { useState } from "react";
import axios from "axios";

function AddTask(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert projectId to number (API expects to receive the id as a number)
        const id = parseInt(props.projectId);

        // It also expects the ID, we pass it in ProjectDetailsPage where we render the AddTask:
        const requestBody = {
            title: title,
            description: description,
            projectId: id
        }

        // POST /tasks:
        axios.post(`${import.meta.env.VITE_API_URL}/tasks`, requestBody)
            .then( response => {
                // Invoke function in the parent component, so that the list of tasks is updated:
                props.callbackToUpdateProject()
            })
            .catch((error) => {
                console.log("Error creating a new task...");
                console.log(error);
            })
    };

    return (
        <div className="AddTask">
            <h3>Add New Task</h3>

            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Description:</label>
                <textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default AddTask;