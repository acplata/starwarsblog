import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import StarshipDetailCard from '../component/StarshipDetailCard.jsx';

const StarshipDescription = () => {
    const { store } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();
    const [vehiclesDetails, setVehiclesDetails] = useState({});

    const findVehiclesById = () => {
        const parsedId = params.id;
        const currentVehicles = store.vehicles.find(
            (vehicles) => vehicles._id === parsedId
        );

        if (currentVehicles == undefined) {
            navigate("/404");
        }
        setVehiclesDetails(currentVehicles);
    };

    useEffect(() => {
        findVehiclesById();
    }, []);
    console.log(vehiclesDetails.properties?.name)

    return (
        <>
            <StarshipDetailCard
                name={vehiclesDetails.properties?.name}
                img="https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg"
                model={vehiclesDetails.properties?.model}
                manufacturer={vehiclesDetails.properties?.manufacturer}
                passengers={vehiclesDetails.properties?.passengers}
            />
        </>

    );
};

export default StarshipDescription;