import React from "react";
import "./navbar.css";
import piePic from '../../assets/piePic.png'
import Logout from '../Navbar/Logout/Logout'

const Navbar = (props) => {

    return(
        <div>
            <nav>
                <img src = {piePic} alt = 'pie' id = 'piePic' />
                <Logout />
            </nav>
        </div>
    )
}

export default Navbar