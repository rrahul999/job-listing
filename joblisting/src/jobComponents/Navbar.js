import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="container-fluid">
            <nav className="bd-example  bg-secondary ">
                <ul className="nav justify-content-center">
                    <li className="nav-item"><Link className="text-light nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="text-light nav-link" to="/createjob">createjob</Link></li>
                    <li className="nav-item"><Link className="text-light nav-link" to="/joblist">joblist</Link></li>
                    <li className="nav-item"><Link className="text-light nav-link" to="/Apply">Apply</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
