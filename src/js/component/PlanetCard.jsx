import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const PlanetCard = ({ img, planet }) => {
    const { store, actions } = useContext(Context);

    const addNewFavorite = () => {
        actions.addFavorite(planet);
    };

    return (
        <div className="container m-2">
            <>
                <div className="row">
                    <div className="card m-2 col-12">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="h-75 m-2" alt="..." />
                        <div className="card-body container">
                            <h5 className="card-title">{planet.properties.name}</h5>
                            <p className="card-text">Population: {planet.properties.population} </p>
                            <p className="card-text">Terrain: {planet.properties.terrain} </p>

                            <div className="d-flex justify-content-between align-items-center">
                                <Link to={"/planetdescription/" + planet._id} className="btn btn-outline-primary">Learn more!</Link>
                                <a href="#" className="btn btn-outline-warning" onClick={addNewFavorite}> <BsFillHeartFill /> </a>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};
