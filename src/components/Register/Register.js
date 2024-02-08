import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



function Register() {



  return (
    
        <div className="container d-flex align-items-center justify-content-center">
           <div className="form mt-5 ">
            <form type="submit">
                <h3 className='text-center'>Sign Up</h3>
                <div class="mb-3">
                <label htmlFor="" className='mb-2'>User Name</label>
                    <input className='form-control' type="text" name='uname' placeholder='Enter Your Last Name'/>
                </div>
                <div class="mb-3">
                <label htmlFor="" className='mb-2'>Email</label>
                    <input className='form-control' type="eamil" name='email' placeholder='Enter Your email'/>
                </div>
                <div class="mb-3">
                <label htmlFor="" className='mb-2'>Password</label>
                    <input className='form-control' type="password" name='pass1' placeholder='password'/>
                </div>
                <div class="mb-3">
                <label htmlFor="" className='mb-2'>Confirm Password</label>
                    <input className='form-control' type="password" name='pass2' placeholder='confirm password'/>
                </div>

                <button  class="btn btn-info">Create</button>
            </form>
           </div>
        </div>
       
      )
    
    }
    



export default Register;