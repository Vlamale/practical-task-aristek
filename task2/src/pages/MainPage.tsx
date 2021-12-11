import React from "react"
import Dashboard from "../components/Dashboard"
import Header from "../components/Header"
import ToDoList from "../components/ToDoList"

const MainPage: React.FC = () => {
    return (
        <>
            <Header />
            <Dashboard />
            <main className="content">
                <ToDoList />
            </main>
        </>
    )
}

export default MainPage