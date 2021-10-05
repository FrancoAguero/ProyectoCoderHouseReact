//React
import React, { useEffect, useState } from 'react'

//router
import { Link } from 'react-router-dom'

//Icons
import { 
        Menu, Camera, Storefront, Search, ShoppingCart,
        Settings, ExitToApp, Home 
} from '@material-ui/icons'

import { Input } from '@material-ui/core';
import img from "../../assets/img/profile.jpg"
import { useCart } from '../../context/CartContext';

const NavBar = ({handleHomeContent}) => {
    const { cart, cartQuantity } = useCart()
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        setQuantity(cartQuantity())
    }, [cart])
    
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
                    <li>
                        <a href="">
                            <i className="bx-search"><Search /></i>
                            <input type="text" placeholder="search"/>
                        </a>
                        <span className="tooltip">Search</span>
                    </li>
                    <li>
                        <Link to="/">
                            <i><Home /></i>
                            <span className="links_name"> Inicio </span>
                        </Link>
                        <span className="tooltip"> Inicio </span>
                    </li>
                    <li>
                        <Link to="/shop">
                            <i><Storefront /></i>
                            <span className="links_name"> Tienda </span>
                        </Link>
                        <span className="tooltip"> Tienda </span>
                    </li>
                    <li>
                        <Link to="/cart">
                            <i><ShoppingCart /></i>
                            <span className="links_name"> Carrito {quantity}</span>
                        </Link>
                        <span className="tooltip">Carrito</span>
                    </li>
                    {/* <li>
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
