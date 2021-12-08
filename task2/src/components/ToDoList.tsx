import React from "react"

const ToDoList: React.FC = () => {
    return (
        <ul className="to-do-list">
            <li className="to-do-item">
                <div className="to-do-item__data">
                    <input className="to-do-item__checkbox" type="checkbox" />
                    <span className="to-do-item__name">Add Icon to Dashboard </span>
                </div>

                <div className="to-do-item__dashboard">
                    <button className="to-do-item__btn to-do-item__btn_edit" />
                    <button className="to-do-item__btn to-do-item__btn_copy" />
                    <button className="to-do-item__btn to-do-item__btn_delete" />
                </div>
            </li>

            <li className="to-do-item">
                <div className="to-do-item__data">
                    <input className="to-do-item__checkbox" type="checkbox" />
                    <span className="to-do-item__name">Add Icon to Dashboard </span>
                </div>

                <div className="to-do-item__dashboard">
                    <button className="to-do-item__btn to-do-item__btn_edit" />
                    <button className="to-do-item__btn to-do-item__btn_copy" />
                    <button className="to-do-item__btn to-do-item__btn_delete" />
                </div>
            </li>
        </ul>
    )
}

export default ToDoList