import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router';

const CharacterDescription = () => {
  const { store, actions } = useContext(Context)

  return (
    <>
      <div className="container d-flex gap-5">
        <img src="https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg" className="m-2" alt="..." />
        <div className="m-5">
          <h2 className="text-black">Leia </h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt laborum, rem nihil blanditiis eos atque laboriosam quisquam debitis veniam ea eligendi! Consequatur officiis illum laborum. Minus architecto expedita vero consequuntur!</p>
        </div>
      </div>
      <div className="row">
        <div className="container d-flex px-4 text-center m-3 text-danger">
          <div className="col-3"> Birth Year: </div>
          <div className="col-3"> Gender: </div>
          <div className="col-3"> Height: </div>
          <div className="col-3"> Eye Color:</div>
        </div>
      </div >
    </>

  );
};

export default CharacterDescription