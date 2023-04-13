import React, { Component, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { validateEmail } from '../utils/utils';

function CreateEmployeeComponent() {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [firstNameInp, setFirstNameInp] = useState();

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [lastNameInp, setLastNameInp] = useState();

    const [emailId, setEmailId] = useState("");
    const [emailIdError, setEmailIdError] = useState("");
    const [emailIdInp, setEmailIdInp] = useState();

    const [employeeForm, setEmployeeForm] = useState();

    const navigate = useNavigate();

    const validateEmailField = () => {
        let valid = true;

        if (emailId === "") {
            setEmailIdError("Email ID is Required.");
            emailIdInp.className = 'form-control invalid';
            valid = false;
        } else if (!validateEmail(emailId)) {
            setEmailIdError("Must enter a valid email address.");
            emailIdInp.className = 'form-control invalid';
            valid = false;
        }

        return valid;
    }
    
    const changeFirstNameHandler = (event) => setFirstName(event.target.value);
    const changeLastNameHandler = (event) => setLastName(event.target.value);
    const changeEmailIdHandler = (event) => {
        setEmailId(event.target.value);
        validateEmailField();
    };

    useEffect(() => {
        setFirstNameInp(document.getElementById("firstName"));
        setLastNameInp(document.getElementById("lastName"));
        setEmailIdInp(document.getElementById("emailId"));
        setEmployeeForm(document.getElementById("employeeForm"));
    }, []);

    const clearValidation = () => {
        setFirstNameError("");
        firstNameInp.className = 'form-control';

        setLastNameError("");
        lastNameInp.className = 'form-control';

        setEmailIdError("");
        emailIdInp.className = 'form-control';

        employeeForm.className = 'needs-validation';
    }

    const validateForm = () => {
        clearValidation();

        let valid = true;

        if (firstName === "") {
            setFirstNameError("First Name is Required.");
            firstNameInp.className = 'form-control invalid';
            valid = false;
        }

        if (lastName === "") {
            setLastNameError("Last Name is Required.");
            lastNameInp.className = 'form-control invalid';
            valid = false;
        }

        if (!validateEmailField()) {
            valid = false;
        }

        employeeForm.className = 'was-validated';
        return valid;
    }

    const saveEmployee = (e) => {
        e.preventDefault();

        if (validateForm()) {

            let employee = {firstName: firstName, lastName: lastName, emailId: emailId};
            console.log('employee => ' + JSON.stringify(employee));
    
            EmployeeService.createEmployee(employee).then(res => navigate('/employees'));
        }
    };

    const cancel = () => navigate("/employees");
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 mt-3'>
                        <div className='card-body'>
                            <h3 className='text-center card-title'>Add Employee</h3>
                            <form id='employeeForm' className='needs-validation'>
                                <div className="mb-3">
                                    <label className='form-label' htmlFor='firstName'>First Name</label>
                                    <input placeholder='First Name' id='firstName' name='firstName' type='text' className='form-control'
                                        value={firstName} onChange={changeFirstNameHandler} required/>
                                    <div className="invalid-feedback">
                                        {firstNameError}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className='form-label' htmlFor='lastName'>Last Name</label>
                                    <input placeholder='Last Name' id='lastName' name='lastName' className='form-control'
                                        value={lastName} onChange={changeLastNameHandler} required/>
                                    <div className="invalid-feedback">
                                        {lastNameError}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className='form-label' htmlFor='emailId'>Email ID</label>
                                    <input placeholder='Email ID' id='emailId' name='emailId' className='form-control'
                                        value={emailId} onChange={changeEmailIdHandler} type="email" required/>
                                    <div className="invalid-feedback">
                                        {emailIdError}
                                    </div>
                                </div>
                                <button className='btn btn-success' onClick={saveEmployee}>Save</button>
                                <button className='btn btn-danger ms-2' onClick={cancel}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEmployeeComponent;