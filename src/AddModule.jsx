// AddModule.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addModule } from './Action.jsx';
import './app.css';

const AddModule = ({ addModule }) => {
    const [idCounter, setIdCounter] = useState(3);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [note, setNote] = useState('');

    const handleAddModule = () => {
        if (title === '' || category === '' || note === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        const newModule = {
            id: idCounter.toString(),
            title,
            category,
            note: parseInt(note),
        };

        addModule(newModule);
        setTitle('');
        setCategory('');
        setNote('');
        setIdCounter(idCounter + 1);
    };

    return (
        <div className="add-module-form">
            <h2>Add New Module:</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <input
                type="number"
                placeholder="Note"
                value={note}
                max={20}
                min={0}
                onChange={(e) => setNote(e.target.value)}
            />
            <button onClick={handleAddModule} className='btn btn-primary'>Add Module</button>
        </div>
    );
};

export default connect(null, { addModule })(AddModule);
