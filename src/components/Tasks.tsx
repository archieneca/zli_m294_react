import { Task } from "../App";
import { Alert, Button } from "@mui/material";

const emptyTask: Task = { id: 1, title: "", completed: false };

export interface IPropsTasks {
    tasks: Task[];
    deleteTask: (task: Task) => void;
    editTask: (task: Task) => void;
}

export default function Tasks(props: IPropsTasks) {
    return (
        <ol id="alle">
            {props.tasks.map((todo: Task) => (
                <li key={todo.id}>
                    {todo.title}
                    <>
                        <Button
                            className="wiguu"
                            variant="contained"
                            color="error"
                            onClick={() => props.deleteTask(todo)}
                        >                            
                            Delete
                        </Button>
                    </>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => props.editTask(todo)}
                    >
                        Edit
                    </Button>
                    
                </li>
            ))}
        </ol>
    );
}
