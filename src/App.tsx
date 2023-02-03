import axios from "axios";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import "./App.css";
import { Alert } from "@mui/material";
import Edit from "./components/Edit";
import { Link, Navigate } from "react-router-dom";

const emptyTask: Task = { id: 1, title: "", completed: false };

export type Task = {
    id: number;
    title: string;
    completed: boolean;
};

function App() {
    const [task, setTask] = useState<Task[]>([]);
    const [taskToEdit, setTaskToEdit] = useState<Task>(emptyTask);

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get<Task[]>("http://localhost:3001/tasks").then((response) => {
            setTask(response.data);
        });
    }
    function deleteTask(taskToDelete: Task) {
        axios
            .delete("http://localhost:3001/task/" + taskToDelete.id)
            .then(() => {
                loadData();
            });
    }

    function editTask(taskToEdit: Task) {
        axios.put("http://localhost:3001/tasks", taskToEdit).then(() => {
            loadData();
            setTaskToEdit(emptyTask);
        });
    }

    function updateTask(taskToUpdate: Task) {
        axios.post("http://localhost:3001/tasks", taskToUpdate).then(() => {
            loadData();
            setTaskToEdit(taskToUpdate);
            setTaskToEdit(emptyTask);
        });
    }

    function taskEdit(task: Task) {
        setTaskToEdit(task);
    }



    return (
        <div>
            <Tasks tasks={task} deleteTask={deleteTask} editTask={taskEdit} />
            <Edit taskToEdit={taskToEdit} taskEdited={editTask} />
        </div>
    );
}

export default App;
