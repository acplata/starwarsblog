import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

const Navbar = ({ index }) => {
    const { actions } = useContext(Context);

    const handleDelete = (index) => {
        actions.deleteContact(index);
    };

    return (
        <div className="navbar bg-black">
            <div className="container d-flex">
                <Link to="/" className="navbar-brand">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/400px-Star_Wars_Logo.svg.png" alt="Logo" className="d-inline-block align-text-top w-25" />
                </Link>
                <div className="dropdown">
                    <button className="btn bg-black text-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites
                    </button>
                    <ul className="dropdown-menu">
                        <li className="list-group-item" key={index} >
                            <button type="button" className="btn-close" onClick={() => handleDelete(index)}></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )

}


export default Navbar