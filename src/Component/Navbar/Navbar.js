import React from 'react'
import './Navbar.css' 
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


const Navbar = (props) => {
    const{title} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-success">
            <a className="navbar-brand" href="#d">{title}</a>      
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Contact/add">Add</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/About">About</Link>
                    </li>
                </ul>  
        </nav>
    )
}
// Navbar.defaultProps = {
//     title: "My Title"
// }
Navbar.propTypes = {
    title : PropTypes.number.isRequired 
}
export default Navbar ;