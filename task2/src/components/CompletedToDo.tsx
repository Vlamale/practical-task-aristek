import React from "react"
import { IToDo } from "../types"
import ToDo from "./ToDo"

interface ICompletedToDoProps {
    toDos: IToDo[]
}

const CompletedToDo: React.FC<ICompletedToDoProps> = ({toDos}) => {
    
    return (
        <div className="completed">
            <h3 className="list-title">Completed ({toDos.length})</h3>

            {toDos.map((toDo) => (
                <ToDo key={toDo.id} title={toDo.title} completed={toDo.completed} userId={toDo.userId} id={toDo.id} />
            ))}
        </div>
    )
}

export default CompletedToDo