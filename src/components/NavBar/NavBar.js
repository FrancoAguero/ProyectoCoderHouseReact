//React
import React, { useEffect, useState } from 'react'

//router
import { Link, useHistory } from 'react-router-dom'

//Icons
import { 
        Menu, Camera, Storefront, ShoppingCart,
        Settings, ExitToApp, Home, Person 
} from '@material-ui/icons'

//Contexts
import { useCart } from '../../context/CartContext';
import { useAuth } from 'context/AuthContext';


const NavBar = ({handleHomeContent}) => {
    const { error, setError } = useState( "" )
    const { cart, cartQuantity } = useCart()
    const { currentUser, logOut } = useAuth()
    const history = useHistory()

    const handleLogOut = async () => {
        try {
            await logOut()
        } catch ( err ) {
            console.log(err)
        }
    }
    

    useEffect(() => {
    }, [cart, currentUser])
    
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
                        <Link to="/">
                            <i><Home /></i>
                            <span className="links_name"> Inicio </span>
                        </Link>
                        <span className="tooltip"> Inicio </span>
                    </li>
                    <li>
                        <Link to={{pathname: 'shop', search: "category"}} >
                            <i><Storefront /></i>
                            <span className="links_name"> Tienda </span>
                        </Link>
                        <span className="tooltip"> Tienda </span>
                    </li>
                    <li>
                        <Link to="/cart">
                            <i><ShoppingCart /></i>
                            {cart.length !== 0 && <div className="cart_quantity_bubble"><p>{cartQuantity()}</p></div>}
                            <span className="links_name"> Carrito </span>
                        </Link>
                        <span className="tooltip">Carrito</span>
                    </li>
                    <li className="settings">
                        <a href="">
                            <i><Settings /></i>
                            <span className="links_name">Settings</span>
                        </a>
                        <span className="tooltip">Settings</span>
                    </li>
                </ul>
                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_details">
                            <div className="profile_img" > <Person /> </div>
                            <div className="name_job">
                                <div className="name">{ currentUser ? currentUser.email : "Perfil" }</div>
                                <div className="job">Web Designer</div>
                            </div>
                        </div>
                        <i id='log_out' onClick={ handleLogOut }> <ExitToApp /> </i>
                    </div>
                </div>
            </div>
        </div>
    )
}
    export default NavBar
