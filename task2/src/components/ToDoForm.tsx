import React from "react"

const ToDoForm: React.FC = () => {
    return (
        <form className="to-do-form">
            <input className="to-do-form__input" placeholder="+ Add a task, press Enter to save" />
            <button className="to-do-form__add-btn">Add</button>
        </form>
    )
}

export default ToDoForm