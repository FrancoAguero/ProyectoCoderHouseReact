//React
import React, { useState } from 'react'

//Icons
import { 
        Menu, Camera, Person, Search, QuestionAnswer,
        PieChart, Folder, ShoppingCart, FavoriteBorder,
        Settings, ExitToApp 
} from '@material-ui/icons'

import { Input } from '@material-ui/core';
import img from "../assets/img/profile.jpg"

const NavBar = ({handleHomeContent}) => {

    const handleSidebar = () => {
        let sidebar = document.querySelector('.sidebar')
        sidebar.classList.toggle('active')
        handleHomeContent()
    }

    return (
        <div>
            <div className="sidebar">
                <div className="logo_content">
                    <div className="logo">
                        <Camera />
                        <div className="logo_name">QuantumTech</div>
                    </div>
                    <div id="btn" onClick={handleSidebar}>
                        <Menu/>
                    </div>
                </div>
                <ul className="nav_list">
                    {/* <li>
                        <a href="">
                            <i className="bx-search"><Search /></i>
                            <input type="text" onChange={handleChange} value={state} placeholder="search"/>
                        </a>
                        <span className="tooltip">Search</span>
                    </li> */}
                    <li>
                        <a href="">
                            <i><ShoppingCart /></i>
                            <span className="links_name">Order</span>
                        </a>
                        <span className="tooltip">Order</span>
                    </li>
                    <li>
                        <a href="">
                            <i><Person /></i>
                            <span className="links_name">User</span>
                        </a>
                        <span className="tooltip">User</span>
                    </li>
                    {/* <li>
                        <a href="">
                            <i><QuestionAnswer /></i>
                            <span className="links_name">Mesagges</span>
                        </a>
                        <span className="tooltip">Mesagges</span>
                    </li>
                    <li>
                        <a href="">
                            <i><PieChart /></i>
                            <span className="links_name">Analitycs</span>
                        </a>
                        <span className="tooltip">Analitycs</span>
                    </li>
                    <li>
                        <a href="">
                            <i><Folder /></i>
                            <span className="links_name">File Manager</span>
                        </a>
                        <span className="tooltip">File Manager</span>
                    </li> 
                    <li>
                        <a href="">
                            <i><FavoriteBorder /></i>
                            <span className="links_name">Saved</span>
                        </a>
                        <span className="tooltip">Saved</span>
                    </li>
                    <li>
                        <a href="">
                            <i><Settings /></i>
                            <span className="links_name">Settings</span>
                        </a>
                        <span className="tooltip">Settings</span>
                    </li> */}
                </ul>
                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_details">
                            <img src={img} alt="profile image" />
                            <div className="name_job">
                                <div className="name">Franco Aguero</div>
                                <div className="job">Web Designer</div>
                            </div>
                        </div>
                        <i id='log_out'> <ExitToApp /> </i>
                    </div>
                </div>
            </div>
        </div>
    )
}
    export default NavBar
