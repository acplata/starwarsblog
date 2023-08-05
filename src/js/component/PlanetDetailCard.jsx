import React from 'react'

const PlanetDetailCard = ({ img, name, population, terrain, climate, created }) => {
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
                    <div className="col-3"> Population: {population} </div>
                    <div className="col-3"> Terrain: {terrain} </div>
                    <div className="col-3"> Climate: {climate} </div>
                    <div className="col-3"> Created: {created} </div>
                </div>
            </div >
        </>
    )
}

export default PlanetDetailCard