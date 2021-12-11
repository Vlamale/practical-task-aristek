import React, { useContext } from "react"
import { enableEditAction } from "../context/ToDoContext/action"
import {ToDoContext} from "../context/ToDoContext/ToDoContext"
import { IToDo } from "../types"

const ToDo: React.FC<IToDo> = ({ title, completed, id }) => {
    const {setUncompletedList, setCompletedList, setToDoText, dispatch} = useContext(ToDoContext)

    const checkHandler = () => {
        let checkedTodo: IToDo
        if (!completed) {
            setUncompletedList(prev => {
                const filteredList = prev.filter(toDo => {
                    if (toDo.id === id) {
                        checkedTodo = {
                            ...toDo,
                            completed: true
                        }
                    }
                    return toDo.id !== id
                })
                return filteredList
            })
            setCompletedList(prev => [checkedTodo, ...prev])
        } else {
            setCompletedList(prev => {
                const filteredList = prev.filter(toDo => {
                    if (toDo.id === id) {
                        checkedTodo = {
                            ...toDo,
                            completed: false
                        }
                    }
                    return toDo.id !== id
                })
                return filteredList
            })
            setUncompletedList(prev => [...prev, checkedTodo])
        }
    }

    const removeToDo = () => {
        if (!completed) {
            setUncompletedList(prev => {
                return prev.filter(toDo => toDo.id !== id)
            })
        } else {
            setCompletedList(prev => {
                return prev.filter(toDo => toDo.id !== id)
            })
        }
    }

    const editToDo = () => {
        dispatch(enableEditAction(id))
        setToDoText(title)
    }

    const copyToDo = () => {
        navigator.clipboard.writeText(title)
    }

    return (
        <li className="to-do-item">
            <div className="to-do-item__data">
                <input className="to-do-item__checkbox" type="checkbox" checked={completed} onChange={checkHandler} />
                <span className="to-do-item__name">{title}</span>
            </div>

            <div className={!completed ? 'to-do-item__dashboard' : ''}>
                {completed === false &&
                    <>
                        <button className="to-do-item__btn to-do-item__btn_edit" onClick={editToDo}/>
                        <button className="to-do-item__btn to-do-item__btn_copy" onClick={copyToDo} />
                    </>}
                <button className="to-do-item__btn to-do-item__btn_delete" onClick={removeToDo}/>
            </div>
        </li>
    )
}

export default ToDo