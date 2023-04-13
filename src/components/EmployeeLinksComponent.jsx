import React from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeLinksComponent(props) {
    const navigate = useNavigate();

    const goHome = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div className='me-auto'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#" onClick={(e) => goHome(e)}>View Employees</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default EmployeeLinksComponent;