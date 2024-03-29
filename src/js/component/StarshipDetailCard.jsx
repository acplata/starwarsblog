import React from 'react'

export const StarshipDetailCard = ({ img, name, model, manufacturer, passengers }) => {
    return (
        <>
            <div className="container d-flex m-5 gap-5">
                <img src={img} className="m-2" alt="..." />
                <div className="m-5">
                    <h2 className="text-black"> {name} </h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt laborum, rem nihil blanditiis eos atque laboriosam quisquam debitis veniam ea eligendi! Consequatur officiis illum laborum. Minus architecto expedita vero consequuntur!</p>
                </div>
            </div>
            <div className="row">
                <div className="container d-flex px-4 text-center m-3 text-danger">
                    <div className="col-3"> Model: {model} </div>
                    <div className="col-3"> Manufacturer: {manufacturer} </div>
                    <div className="col-3"> Passengers: {passengers} </div>
                </div>
            </div >
        </>
    )
}

export default StarshipDetailCard