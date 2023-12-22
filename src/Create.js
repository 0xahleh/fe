import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


const Create = () => {
    const [values, setValues] = useState({
        id: '',
        name: '',
        email: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/student', values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Id</label>
                        <input
                            type='number'
                            placeholder='Enter Id'
                            className='form-control'
                            value={values.id}
                            onChange={e => setValues(prevValues => ({ ...prevValues, id: e.target.value }))}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            className='form-control'
                            value={values.name}
                            onChange={e => setValues(prevValues => ({ ...prevValues, name: e.target.value }))}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input
                            type='text'
                            placeholder='Enter Email'
                            className='form-control'
                            value={values.email}
                            onChange={e => setValues(prevValues => ({ ...prevValues, email: e.target.value }))}
                        />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Create;
