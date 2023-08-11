import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Navbar from "../component/Navbar.jsx";
import Section from "../component/Section.jsx";


export const Home = () => {
    return (
        <div className="m-5">
            <Section title="Characters" currentSection={"people"}></Section>
            <Section title="Planets" currentSection={"planets"}></Section>
        </div>

    );
};

