import React, { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'

const DetailsVoyage = ({ voyages }) => {
    const { id } = useParams()
    const voyage = voyages.find((v) => v.id === parseInt(id))

    return (
        <Fragment>
            <h1 className="text-5xl text-black font-bold p-4">{`Voyage à ${voyage.title}`}</h1>
            <div className='flex justify-around items-center w-full bg-[#2a2a2a] p-5'>
                <div className="flex flex-col items-center p-1 border border-1 bg-white rounded-md h-[350px] w-[260px]">
                    <img src={`/pictures/${voyage.source}`} className='rounded-md' />
                    <div className="w-full flex flex-col items-center">
                        <p className="text-black font-bold m-2">{voyage.title}</p>
                        <p className="font-bold text-gray-900">{voyage.price}</p>
                        <Link className="p-2 text-[14px] rounded flex m-5 justify-center items-center bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]" to="/">
                            Allez vers la page d'accueil
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default DetailsVoyage
