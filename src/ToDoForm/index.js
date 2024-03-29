import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoForm.css"

function ToDoForm(){
    const [newToDoValue, setNewToDoValue] = React.useState("");
    const {
        addToDo,
        setOpenModal,
    } = React.useContext(ToDoContext);




    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
        console.log("A ver que pedo");
        console.log(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Solo en submit");
        console.log(newToDoValue);
        addToDo(newToDoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Enter your new task:</label>
            <textarea 
                value={newToDoValue}
                onChange={onChange}
                placeholder="Learn Redux on Platzi"
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}>
                        Cancel
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                    onClick={onSubmit}>
                        Add
                </button>
            </div>

        </form>

    );
}

export {ToDoForm};