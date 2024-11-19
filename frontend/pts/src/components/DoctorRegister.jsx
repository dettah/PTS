import React, { useState } from 'react';

const DoctorRegister = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        specialty: '',
        first_name: '',
        last_name: '',
        email: '',
        country: '',
        hospital: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/register/doctor/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <h1>Doctor Registration</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                />
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
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Country"
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Specialty"
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Hospital"
                    onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default DoctorRegister;







// import React, { useState } from 'react';

// const DoctorRegister = () => {
//     const [formData, setFormData] = useState({ username: '', password: '', specialty: '' });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('/api/register/doctor/', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData),
//         });
//         const data = await response.json();
//         console.log(data);
//     };

//     return (

//         <div className='  '>
//             <h1 className=''>doctor</h1>
//             <form className='' onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Specialty"
//                     onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
//                 />
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default DoctorRegister;
