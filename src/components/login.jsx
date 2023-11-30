import React, {useState, useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setUser, setToken } from '../Slices/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () =>{
    const [showPassword, setShowPassword] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const baseurl = 'http://localhost:8000/api/v1/user';
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = () =>{
        setIsLoading(true)
        console.log(values)
        axios.post(baseurl+'/login', values).then((resp)=>{
            console.log(resp)
            
            dispatch(setUser(resp.data.user))
            dispatch(setToken(resp.data.token))
            toast("Login success", {
                position: "top-center",
                type:'success',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setTimeout(()=>{
                setIsLoading(false)
                navigate('/dashboard')
            }, 3000)
            setIsLoading(false)
            
        }).catch((err)=>{
            console.log(err);
            toast("Login success", {
                position: "top-center",
                type:'error',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setIsLoading(false)
        })
    }

    const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email:'',
            password:'',
        },
        onSubmit
    })

    return(
        <div className='maximum-width' id='body-page'>
            <ToastContainer/>
            <br/>
            <br/>
            <br/>            
            <div className='d-flex align-items-center my-auto justify-content-center vertical-center'>
            <div className='col-md-5 my-auto'>
                <br/>
                <div className='form-area'>
                    <h3>Login</h3>
                    <h6>Fill in the details below to login</h6>
                    <form>
                        <TextField
                            label="Email"
                            id="outlined-start-adornment"
                            fullWidth
                            sx={{ m: 1 }}
                            size = 'small'
                            variant='standard'
                            required
                            onChange={handleChange}
                            name='email'
                            value={values.email}

                                   
                        />
                        <br/>
                        <FormControl sx={{ m: 1 }} fullWidth variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                fullWidth
                                onChange={handleChange}
                                name='password'
                                value={values.password}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            </FormControl>
                        <br/>
                        <button type='submit' className='btn btn-primary submit-button' onClick={handleSubmit}>{isLoading ? <ReactLoading type='spin' color='orange' height={25} width={25}/>:'Login'}</button>
                        <br/>
                        <small className='text-muted'>Have No account? <Link to='/register'>Register</Link></small>
                    </form>
                </div>
            </div>
        </div>
        </div>
        
    )

}

export default Login;