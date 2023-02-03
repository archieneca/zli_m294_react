import React, { useEffect, useState } from "react";
import { Task } from "../App";
import { Alert, Button } from "@mui/material";

export interface IPropsUpdate {
    taskToEdit: Task,
    taskEdited: (editedTask: Task) => void;
}

const emptyTask: Task = {"title": "", "completed": false, "id": 1};

function Update(props: IPropsUpdate) {
    const [wigu, setWigu] = useState<Task>(props.taskToEdit ?? emptyTask);
    
    useEffect(() => setWigu(props.taskToEdit), [props]);

    function onInputChangeWigu(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setWigu({ ...wigu, [name]: value });
    }

    function onFormSend(event: React.FormEvent<HTMLButtonElement>){
        event.preventDefault();
        props.taskEdited(wigu);
    }

    return(
        <form >
            <p>Titel bearbeiten</p>
            <p>Zurzeit: {props.taskToEdit.title}</p>
            <label>
                <input type="text" name="title" id="titel" placeholder="Hey Whats Up Hello" value={wigu.title} onChange={onInputChangeWigu} required />
            </label>
            <label>
                <Button variant="contained" color="success" onClick={onFormSend}>Save</Button>
            </label>
        </form>
    )
}

export default Update;