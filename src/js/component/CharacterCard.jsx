import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CharacterCard = ({ img, name, eyeColor, hairColor, id }) => {
    const { store, actions } = useContext(Context);
    const [newFavorite, setNewFavorite] = useState();
    const addNewFavorite = () => {
        actions.addFavorite(newFavorite);
    };

    return (
        <div className="container m-2">
            <>
                <div className="row">
                    <div className="card m-2 col-12" >
                        <img src={img} className="m-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Eye Color: {eyeColor} </p>
                            <p className="card-text">Hair Color: {hairColor} </p>

                            <div className="d-flex justify-content-between align-items-center">
                                <Link to={"/characterdescription/" + id} className="btn btn-outline-primary">Learn more!</Link>
                                <button className="btn btn-outline-warning" onClick={addNewFavorite}><BsFillHeartFill /> </button>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default CharacterCard;