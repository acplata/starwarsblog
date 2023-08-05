import React from 'react'

const CharacterDetailCard = ({ img, name, birthYear, gender, height, eyeColor }) => {
    return (
        <>
            <div className="container d-flex gap-5">
                <img src={img} className="m-2" alt="..." />
                <div className="m-5">
                    <h2 className="text-black"> {name} </h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt laborum, rem nihil blanditiis eos atque laboriosam quisquam debitis veniam ea eligendi! Consequatur officiis illum laborum. Minus architecto expedita vero consequuntur!</p>
                </div>
            </div>
            <div className="row">
                <div className="container d-flex px-4 text-center m-3 text-danger">
                    <div className="col-3"> Birth Year: {birthYear} </div>
                    <div className="col-3"> Gender: {gender} </div>
                    <div className="col-3"> Height: {height} </div>
                    <div className="col-3"> Eye Color: {eyeColor} </div>
                </div>
            </div >
        </>
    )
}

export default CharacterDetailCard;