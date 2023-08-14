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
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPemoVZyttZguCTYrc4VZa3lbuOuS6bqFu0-f26VLE0QDQHLXEdowoWlb63lSJ8R3ytJc&usqp=CAU"
                population={planetsDetails.properties?.population}
                terrain={planetsDetails.properties?.terrain}
                climate={planetsDetails.properties?.climate}
                created={planetsDetails.properties?.created}
            />
        </>

    );
}

export default PlanetDescription