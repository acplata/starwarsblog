import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const PlanetCard = ({ img, name, population, terrain, id }) => {
    const { store } = useContext(Context);
    return (
        <div className="container m-2">
            <>
                <div className="row">
                    <div className="card m-2 col-12">
                        <img src={img} className="m-2" alt="..." />
                        <div className="card-body container">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Population: {population} </p>
                            <p className="card-text">Terrain: {terrain} </p>

                            <div className="d-flex justify-content-between align-items-center">
                                <Link to={"/planetdescription/" + id} className="btn btn-outline-primary">Learn more!</Link>
                                <a href="#" className="btn btn-outline-warning"> <BsFillHeartFill /> </a>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};
