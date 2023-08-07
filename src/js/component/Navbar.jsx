import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

const Navbar = ({ index }) => {
    const { store, actions } = useContext(Context);

    const [itemList, setItemList] = useState([]);
    const handleDelete = (index) => {
        actions.deleteFavorite(index);
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
                        {store.favorites.map((favorite) => {
                            console.log(favorite)
                            return (
                                <li className="list-group-item" key={favorite._id} >
                                    {favorite.properties.name}
                                    <button type="button" className="btn-close" onClick={() => handleDelete(favorite._id)}></button>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </div >
    );
}


export default Navbar