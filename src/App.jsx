import React from 'react'
import Formulaire from './API/Formulaire'
import { Routes, Route } from 'react-router-dom'
import { ListVoyages, DetailsVoyage } from './Routage/Pages'




const App = () => {
  const voyages = [
    { id: 1, title: 'ISTANBUL', price: '8900 DH', source: 'image1.jpg' },
    { id: 2, title: 'DAKHLA', price: '4500 DH', source: 'image2.jpg' },
    { id: 3, title: 'MADRID', price: '7000 DH', source: 'image3.jpg' },
  ];
  return (
    <>
      {/* Partie 1 : Le Hook useEffect */}
      <Formulaire/>
      {/* Partie 2 : Routage */}
      <Routes>
        <Route path="/" element={<ListVoyages voyages={voyages} />} />
        <Route path="/DetailsVoyage/:id" element={<DetailsVoyage voyages={voyages} />} />
      </Routes>
    </>
  )
}

export default App