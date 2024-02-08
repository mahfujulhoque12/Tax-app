import React from 'react';

const Login = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center">
           <div className="form mt-5 ">
            <form type="submit">
            <h3 className='text-center'>Login</h3>
                <div class="mb-3">
                <label htmlFor="" className='mb-2'>User Name</label>
                    <input className='form-control' type="text" name='uname' placeholder='Enter Your Last Name'/>
                </div>
              
                <div class="mb-3">
                <label htmlFor="" className='mb-2'> Password</label>
                    <input className='form-control' type="password" name='pass' placeholder='confirm password'/>
                </div>

                <button  class="btn btn-info">Login</button>
            </form>
           </div>
        </div>
    );
};

export default Login;