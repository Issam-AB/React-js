import React from 'react'
import './Navbar.css' 
 
import PropTypes from 'prop-types'


const Navbar = (props) => {
    const{title} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-success">
            <a className="navbar-brand" href="#">{title}r</a>      
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                </ul>  
        </nav>
    )
}
Navbar.defaultProps = {
    title: "My Title"
}
Navbar.propTypes = {
    title : PropTypes.number.isRequired 
}
export default Navbar ;