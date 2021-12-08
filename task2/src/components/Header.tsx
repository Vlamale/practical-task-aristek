import React from "react"
import logo from '../img/logo.svg'
import profile from '../img/profile.svg'

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img className="header-left__logo" src={logo} />
                <h1 className="header-left__title">Task</h1>
            </div>
            <div className="header-right">
                <span className="header-right__user-name">Vlad</span>
                <img className="header-right__user-image" src={profile} />
                <i className="header-right__dropdown"></i>
            </div>
        </header>
    )
}

export default Header