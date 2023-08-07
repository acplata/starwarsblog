import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CharacterCard = ({ img, character }) => {
    const { store, actions } = useContext(Context);

    const addNewFavorite = () => {
        actions.addFavorite(character);
    };

    return (
        <div className="container m-2">
            <>
                <div className="row">
                    <div className="card m-2 col-12" >
                        <img src={img} className="m-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{character.properties.name}</h5>
                            <p className="card-text">Eye Color: {character.properties.eye_color} </p>
                            <p className="card-text">Hair Color: {character.properties.hair_color} </p>

                            <div className="d-flex justify-content-between align-items-center">
                                <Link to={"/characterdescription/" + character._id} className="btn btn-outline-primary">Learn more!</Link>
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