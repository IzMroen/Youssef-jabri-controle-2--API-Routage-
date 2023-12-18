// ListModules.js
import './app.css';
import React from 'react';
import { connect } from 'react-redux';
import { deleteModule, updateNote } from './Action.jsx';

const ListModules = ({ modules, deleteModule, updateNote }) => {
    const handleDeleteModule = (moduleId) => {
        deleteModule(moduleId);
    };

    const handleUpdateNote = (moduleId, newNote) => {
        const updatedNote = prompt('Enter new note:', newNote);
        if (updatedNote !== null) {
            updateNote(moduleId, parseInt(updatedNote, 10));
        }
    };

    return (
        <div>
            <h2 style={{marginLeft:"20px"}}>List of Modules:</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Note</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {modules.map((module) => (
                        <tr key={module.id}>
                            <td>{module.id}</td>
                            <td>{module.title}</td>
                            <td>{module.category}</td>
                            <td>{module.note}</td>
                            <td>
                                <button onClick={() => handleDeleteModule(module.id)} className='btn btn-danger'>Delete Module</button>
                                <button onClick={() => handleUpdateNote(module.id, module.note)} className='btn btn-success'>Update Note</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        modules: state.modules,
    };
};

export default connect(mapStateToProps, { deleteModule, updateNote })(ListModules);
