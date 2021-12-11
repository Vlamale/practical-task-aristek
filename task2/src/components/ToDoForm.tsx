import React, { useContext, useEffect, useState } from "react"
import { disableEditAction, setToDoTextAction } from "../context/ToDoContext/action"
import {ToDoContext} from "../context/ToDoContext/ToDoContext"
import { IToDo } from "../types"

const ToDoForm: React.FC = () => {
    const [toDoText, setToDoText] = useState('')
    const {setUncompletedList, editToDoId, dispatch} = useContext(ToDoContext)

    useEffect(() => {
        dispatch(setToDoTextAction(setToDoText))
    }, [])

    const createToDo = async () => {
        if (!toDoText.trim().length) {
            setToDoText('')
            return alert('Todo should not be empty.')
        }
        const data = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
            method: 'POST',
            body: JSON.stringify({
                title: toDoText,
                userId: 1,
                completed: false
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        const newToDo: IToDo = await data.json()
        newToDo.id = Date.now()
        
        setUncompletedList(prev => [...prev, newToDo]);
        setToDoText('')
    }

    const editToDo = async () => {
        if (!toDoText.trim().length) {
            setToDoText('')
            return alert('Todo should not be empty.')
        }
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${editToDoId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                id: editToDoId,
                title: toDoText,
                userId: 1,
                completed: false
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        
        const editToDo: IToDo = await data.json()
        setUncompletedList(prev => {
            const editList = []
            for (let i = 0; i < prev.length; i++) {
                if (prev[i].id === editToDo.id) {
                    prev[i] = editToDo
                }
                editList.push(prev[i])
            }
            return editList
        })
        setToDoText('')
        dispatch(disableEditAction())
    }

    const submitToDo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (editToDoId) {
            await editToDo()
        } else {
            await createToDo()
        }
    }

    return (
        <form className="to-do-form" onSubmit={submitToDo}>
            <input
                className="to-do-form__input"
                placeholder="+ Add a task, press Enter to save"
                value={toDoText}
                onChange={e => setToDoText(e.target.value)}
            />
            {<button className="to-do-form__add-btn">{editToDoId ? 'Save' : 'Add'}</button>}
        </form>
    )
}

export default ToDoForm