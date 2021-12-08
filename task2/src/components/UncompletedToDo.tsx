import React from "react"
import ToDoForm from "./ToDoForm"
import ToDoList from "./ToDoList"

const UncompletedToDo: React.FC = () => {
    return (
        <div className="uncompleted">
            <ToDoForm />

            <span className="total-info">Total: 7</span>

            <h3 className="list-title">To do (3)</h3>

            <ToDoList />
        </div>
    )
}

export default UncompletedToDo