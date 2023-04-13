import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function ViewEmployeeComponent() {
    const navigate = useNavigate();
    const params = useParams();
    const id=params.id;
    const [employee, setEmployee] = useState(null);

    const goToList = () => navigate("/");

    useEffect( () => {
        EmployeeService.getEmployeeById(id).then( (res) => {
            setEmployee(res.data);
        });
    }, []);
    
    return (
        <div>
            <br />
            <div className='card col-md-6 offset-md-3'>
                <div className='card-body'>
                    <h3 className='text-center'>View Employee Details</h3>
                    <div className='row'>
                        <div>Employee First Name: 
                            <span className='ms-2'>                           
                                { employee !== null ?
                                    employee.firstName : "" }
                            </span>
                        </div>
                    </div> <div className='row'>
                        <div>Employee Last Name: 
                            <span className='ms-2'>                           
                                { employee !== null ?
                                    employee.lastName : "" }
                            </span>
                        </div>
                    </div> <div className='row'>
                        <div>Employee Email ID: 
                            <span className='ms-2'>                           
                                { employee !== null ?
                                    employee.emailId : "" }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewEmployeeComponent;