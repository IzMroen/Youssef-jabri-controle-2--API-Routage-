import React from 'react'
import { Link } from 'react-router-dom'

const Voyage = ({ data }) => {
    return (
        <div className="">
            <div className="flex flex-col items-center p-1 border border-1 rounded-md cursor-pointer bg-white h-[350px] w-[260px]">
                <img className="rounded-md hover:opacity-90" src={`pictures/${data.source}`} />
                <div className="w-full flex flex-col items-center">
                    <p className="text-black font-bold m-2">{data.title}</p>
                    <p className="font-bold text-gray-900">{data.price}</p>
                    <div className="">
                        <div className="">
                            <Link to={`/DetailsVoyage/${data.id}`}>
                                <button type="button"
                                    className=" p-2 rounded flex m-5 justify-center items-center bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]">
                                    Plus de Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Voyage