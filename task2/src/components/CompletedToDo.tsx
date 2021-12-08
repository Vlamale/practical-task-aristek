import React from "react"

const CompletedToDo: React.FC = () => {
    return (
        <div className="completed">
            <h3 className="list-title">Completed (3)</h3>

            <ul className="to-do-list">
                <li className="to-do-item">
                    <input className="to-do-item__checkbox" type="checkbox" />
                    <span className="to-do-item__name">Add Icon to Dashboard </span>

                    <div className="to-do-item__dashboard">
                        <button className="to-do-item__btn to-do-item__btn_delete" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CompletedToDo