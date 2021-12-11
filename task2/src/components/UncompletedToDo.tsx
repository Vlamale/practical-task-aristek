import React from "react"
import { IToDo } from "../types"
import ToDo from "./ToDo"
import ToDoForm from "./ToDoForm"

interface IUncompletedToDoProps {
    toDos: IToDo[],
    total: number
}

const UncompletedToDo: React.FC<IUncompletedToDoProps> = ({toDos, total}) => {
    
    return (
        <div className="uncompleted">
                <ToDoForm />
            <span className="tag-info total-to-do">Total: {total}</span>
            <span className="tag-info uncompleted-to-do">To do: {toDos.length}</span>
            <span className="tag-info completed-to-do">Completed: {total - toDos.length}</span>

            <h3 className="list-title">To do ({toDos.length})</h3>

            {toDos.map((toDo) => (
                <ToDo key={toDo.id} title={toDo.title} completed={toDo.completed} userId={toDo.userId} id={toDo.id} />
            ))}
        </div>
    )
}

export default UncompletedToDo