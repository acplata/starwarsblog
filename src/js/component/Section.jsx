import React, { useContext } from 'react'
import { Context } from '../store/appContext.js';
import CharacterCard from './CharacterCard.jsx';
import { PlanetCard } from './PlanetCard.jsx';

const Section = ({ title, currentSection }) => {
    const { store } = useContext(Context)
    return (
        <div>
            <h2 className="m-3">{title}</h2>

            <div className="container-fluid d-flex overflow-x-scroll">
                {currentSection === "people" &&
                    store.people.map((character) => {
                        return (
                            <CharacterCard
                                name={character.properties.name}
                                img="https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg"
                                eyeColor={character.properties.eye_color}
                                hairColor={character.properties.hair_color}
                                id={character._id}
                                key={character._id}
                            />
                        );
                    })}
            </div>
            <div className="container-fluid d-flex overflow-x-scroll">
                {currentSection === "planets" && store.planets.map((planet) => {
                    return (
                        <PlanetCard
                            name={planet.properties.name}
                            img="https://live-production.wcms.abc-cdn.net.au/d836d9cddfc48d2e90fb1aeaf9836b87?impolicy=wcms_crop_resize&cropH=567&cropW=1008&xPos=128&yPos=0&width=300&height=200"
                            population={planet.properties.population}
                            terrain={planet.properties.terrain}
                            id={planet._id}
                            key={planet._id}
                        />
                    )
                })
                }
            </div>

        </div>
    );
};

export default Section;