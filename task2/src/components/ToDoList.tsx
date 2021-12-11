import React, { useEffect, useReducer, useState } from "react"
import {ToDoContext, reducer, initialState} from "../context/ToDoContext/ToDoContext"
import { IProcessedToDoData, IToDo } from "../types"
import CompletedToDo from "./CompletedToDo"
import UncompletedToDo from "./UncompletedToDo"

const ToDoList: React.FC = () => {
    const [uncompletedList, setUncompletedList] = useState<IToDo[]>([])
    const [completedList, setCompletedList] = useState<IToDo[]>([])
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        let cleanUpFunction = false
        if (!cleanUpFunction) {
            (async function () {
                const data: IToDo[] = await (await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')).json()

                const processedData: IProcessedToDoData = data.reduce((acc: IProcessedToDoData, item) => {

                    if (item.completed) {
                        acc.completed.push(item)
                    } else {
                        acc.unCompleted.push(item)
                    }
                    return acc
                }, { unCompleted: [], completed: [] })
                setUncompletedList(processedData.unCompleted);
                setCompletedList(processedData.completed)
            })()
        }
        return () => { cleanUpFunction = true }
    }, [])

    return (
        <ToDoContext.Provider value={{...state, setUncompletedList, setCompletedList, dispatch}}>
            <UncompletedToDo toDos={uncompletedList} total={uncompletedList.length + completedList.length} />
            <CompletedToDo toDos={completedList} />
        </ToDoContext.Provider>
    )
}

export default ToDoList