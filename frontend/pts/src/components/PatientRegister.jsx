import React, { useState } from 'react';

const PatientRegister = () => {
    const [formData, setFormData] = useState({ username: '', password: '', medical_history: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/register/patient/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <textarea
                placeholder="Medical History"
                onChange={(e) => setFormData({ ...formData, medical_history: e.target.value })}
            />
            <button className='bg-green-600 p-2 rounded ' type="submit">Register</button>
        </form>
    );
};

export default PatientRegister;
