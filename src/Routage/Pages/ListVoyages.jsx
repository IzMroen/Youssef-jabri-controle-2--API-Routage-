import Voyage from "./Voyage"
import React, { Fragment } from 'react'

const ListVoyages = (props) => {
    return (
        <Fragment>
            <h1 className="text-5xl text-black font-bold p-4">Listes de Voyages :</h1>
            <div className="flex justify-between items-center">
                <div className="flex justify-around items-center w-full bg-[#2a2a2a] p-5">
                    {
                        props.voyages.map((voyage, index) => {
                            return (
                                <Voyage key={index} data={voyage} />
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default ListVoyages
