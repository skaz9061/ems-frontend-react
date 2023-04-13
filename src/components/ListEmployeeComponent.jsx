import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { ADMIN_EMAIL } from '../utils/utils';
import '../styles.css';

export default function ListEmployeeComponent ({token}) {
    const [employees, setEmployees] = useState([]); 
    const navigate = useNavigate();

    const addEmployee = () => navigate('/add-employee');
    const viewEmployee = (id) => {
        return () => navigate(`/view-employee/${id}`)
     };
     
     const updateEmployee = (id) => {
        return () => navigate(`/update-employee/${id}`)
     };
     
     const deleteEmployee = (id) => {
        return () => {
            EmployeeService.deleteEmployee(id).then(res => {
                setEmployees(employees.filter(employee => employee.id !== id));
            });
        }
     };

    useEffect( () => {
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
        });
    });

    return (
        <div className='container bg-white-transparent py-2 px-5 border border-5 border-info rounded-5'>
            <h2 className='text-center'>Employee List</h2>
            <div className='row'>
                <table className='table table-striped table-bordered bg-white'>
                    <thead>
                        <tr className='text-center'>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee =>
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td className='text-center'>
                                    { token === ADMIN_EMAIL ?
                                        <span>
                                            <button className="btn btn-info" onClick={updateEmployee(employee.id)}>Update</button>
                                            <button className="btn btn-danger ms-2" onClick={deleteEmployee(employee.id)}>Delete</button>
                                        </span>
                                    : "" }
                                        <button className="btn btn-warning ms-2" onClick={viewEmployee(employee.id)}>Details</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}