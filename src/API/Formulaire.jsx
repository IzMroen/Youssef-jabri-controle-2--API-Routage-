
import React, { useState, useEffect } from 'react';
const Formulaire = () => {
    const [countries, setCountries] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        selectedCountry: ''
    });
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://countriesnow.space/api/V0.1/countries');
                if (response.ok) {
                    const data = await response.json();
                    setCountries(data.data);
                } else {
                    throw new Error('Erreur lors du chargement des pays');
                }
            } catch (error) {
                console.error('Erreur:', error);
            }
        };
        fetchCountries();
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Données soumises :', formData);
    };

    return (
        <>
            <h1 className="text-5xl text-black font-bold p-4">Formulaire d'inscription :</h1>
            <div className='w-full h-[500px] bg-[#2a2a2a] flex justify-center items-center '>
                <form onSubmit={handleSubmit} className='flex flex-col '>
                    <label className='text-white cursor-pointer' htmlFor='nom'>Nom :</label>
                    <input className='p-2' id='nom' type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                    <label className='text-white cursor-pointer' htmlFor='password'>Mot de passe : </label>
                    <input className='p-2' type="password" id='password' name="password" value={formData.password} onChange={handleInputChange} required />
                    <label className='text-white cursor-pointer'>Pays :</label>
                    <select className='p-2'   name="selectedCountry" value={formData.selectedCountry} onChange={handleInputChange} required
                    >
                        <option value="">Sélectionnez un pays</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country.country}>
                                {country.country}
                            </option>
                        ))}
                    </select>
                    <button className='bg-green-400 my-5 p-2 hover:bg-green-500' type="submit">S'inscrire</button>
                </form>
            </div>
        </>
    );
};

export default Formulaire;

