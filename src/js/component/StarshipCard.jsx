import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const StarshipCard = ({ img, vehicle }) => {
    const { store, actions } = useContext(Context);

    const addNewFavorite = () => {
        actions.addFavorite(vehicle);
    };

    return (
        <div className="container m-2">
            <>
                <div className="row">
                    <div className="card m-2 col-12">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="h-75 m-2" alt="..." />
                        <div className="card-body container">
                            <h5 className="card-title">{vehicle.properties.name}</h5>
                            <p className="card-text">Model: {vehicle.properties.model} </p>
                            <p className="card-text">Manufacturer: {vehicle.properties.manufacturer} </p>
                            <p className="card-text">Passengers: {vehicle.properties.passengers} </p>

                            <div className="d-flex justify-content-between align-items-center">
                                <Link to={"/starshipdescription/" + vehicle._id} className="btn btn-outline-primary">Learn more!</Link>
                                <button className="btn btn-outline-warning" onClick={addNewFavorite}><BsFillHeartFill /> </button>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default StarshipCard