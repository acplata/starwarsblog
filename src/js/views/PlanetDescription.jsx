import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import PlanetDetailCard from '../component/PlanetDetailCard.jsx';

const PlanetDescription = () => {
    const { store } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();
    const [planetsDetails, setPlanetsDetails] = useState({});

    const findPlanetsById = () => {
        const parsedId = params.id;
        const currentPlanets = store.planets.find(
            (planets) => planets._id === parsedId
        );

        if (currentPlanets == undefined) {
            navigate("/404");
        }
        setPlanetsDetails(currentPlanets);
    };

    useEffect(() => {
        findPlanetsById();
    }, []);
    console.log(planetsDetails.properties?.name)

    return (
        <>
            <PlanetDetailCard
                name={planetsDetails.properties?.name}
                img="https://live-production.wcms.abc-cdn.net.au/d836d9cddfc48d2e90fb1aeaf9836b87?impolicy=wcms_crop_resize&cropH=567&cropW=1008&xPos=128&yPos=0&width=300&height=200"
                population={planetsDetails.properties?.population}
                terrain={planetsDetails.properties?.terrain}
                climate={planetsDetails.properties?.climate}
                created={planetsDetails.properties?.created}
            />
        </>

    );
}

export default PlanetDescription