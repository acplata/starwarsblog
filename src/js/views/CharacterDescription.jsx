import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router';
import CharacterDetailCard from '../component/CharacterDetailCard.jsx';
import { useNavigate } from 'react-router';

const PeopleDescription = () => {
  const { store } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  const [peopleDetails, setPeopleDetails] = useState({});

  const findPeopleById = () => {
    const parsedId = params.id;
    const currentPeople = store.people.find(
      (people) => people._id === parsedId
    );

    if (currentPeople == undefined) {
      navigate("/404");
    }
    setPeopleDetails(currentPeople);
  };

  useEffect(() => {
    findPeopleById();
  }, []);
  console.log(peopleDetails.properties?.name)

  return (
    <>
      <CharacterDetailCard
        name={peopleDetails.properties?.name}
        img="https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg"
        birthYear={peopleDetails.properties?.birth_year}
        gender={peopleDetails.properties?.gender}
        height={peopleDetails.properties?.height}
        eyeColor={peopleDetails.properties?.eye_color}
      />
    </>

  );
};

export default PeopleDescription;