import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import LoginService from '../services/LoginService';

export default function LoginComponent({setToken}) {
    const [userId, setUserId] = useState("");
    const [pwd, setPwd] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const changeUserIdHandler = (e) => setUserId(e.target.value);
    const changePwdHandler = (e) => setPwd(e.target.value);


    const doLogin = (e) => {
        e.preventDefault();

        if (userId === "" || pwd === "") {
            setErrorMsg("User ID and Password are Required.")
        } else {
            let user = {userId: userId, pwd: pwd};
            LoginService.login(user)
                .then( res => setToken(res.data.token))
                .catch( err => setErrorMsg(err.response.data.message));
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 mt-3'>
                        <div className='card-body'>
                            <h3 className='text-center card-title'>Login</h3>
                            <form>
                                <div className='mb-2'>
                                    <label className='form-label' htmlFor='userId'>User ID</label>
                                    <input className='form-control' placeholder='User ID' id='userId' name='userId' type='text'
                                        onChange={changeUserIdHandler}/>
                                </div>
                                <div className='mb-2'>
                                    <label className='form-label' htmlFor='pwd'>Password</label>
                                    <input className='form-control' placeholder='User PWD' id='pwd' name='pwd' type='password'
                                        onChange={changePwdHandler}/>
                                </div>
                                <button className='btn btn-primary' onClick={doLogin}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <p className='text-center text-danger fw-bold'>{errorMsg}</p>
                </div>
            </div>
        </div>
    );
}

LoginComponent.propTypes = {
    setToken: PropTypes.func.isRequired
  }