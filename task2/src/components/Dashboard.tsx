import React from "react"
import tasks from '../img/tasks.svg'

const Dashboard: React.FC = () => {
    return (
        <nav className="dashboard">
            <ul className="dashboard__list">
                <li className="dashboard__item">
                    <img className="dashboard__item_image" src={tasks} />
                </li>
            </ul>
        </nav>
    )
}

export default Dashboard