import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLinksComponent from './AdminLinksComponent';
import EmployeeLinksComponent from './EmployeeLinksComponent';
import { ADMIN_EMAIL } from '../utils/utils';

function HeaderComponent(props) {
    const navigate = useNavigate();

    const goHome = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div>
            <header className='fixed-top'>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div className='container'>
                        <a href='#' onClick={(e) => goHome(e)} className='navbar-brand'><img src='../icons8-name-tag-color-96.png' width={40}/>Employee Management App</a>

                        { "token" in props && props.token === ADMIN_EMAIL ? <AdminLinksComponent /> : ""}
                        { "token" in props && props.token !== ADMIN_EMAIL ? <EmployeeLinksComponent /> : ""}
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default HeaderComponent;