import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'

import Input from './Input'
import Icon from './Icon'
import { signIn, signUp } from '../../actions/auth'

const client_id = '196984472269-siko9nc75c0gnemha83cca3qv1sc1lvg.apps.googleusercontent.com'
const Initial_state = {'firstName':'', 'lastName':'', 'email':'', 'password':'', 'confirmPassword':''}

const Auth = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formState, setFormState]= useState(Initial_state)
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        const start = ()=>{
            gapi.client.init({
                client_id : client_id,
                scope : ''
            })
        }
        gapi.load('client:auth2', start)
    }, [])


    const handleShowPassword = () =>{
        setShowPassword((prevShowPassword)=>!prevShowPassword)
    } 

    const handleOnChange = (e)=>{
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        console.log(formState)

        if(isSignUp){
            dispatch(signUp(formState, navigate));
        } else{
            dispatch(signIn(formState, navigate));
        }
    }

    const switchMode = () =>{
        setIsSignUp((prevIsSignUp)=>!prevIsSignUp)
    } 

    const googleSuccess = (res)=>{
        const result = res?.profileObj;
        const token = res?.tokenObj;


        console.log("Login successfully!")
        dispatch({type: 'AUTH', data: {result, token}})
        navigate('/')

    }
    const googleFailure = (e)=>{
        console.log(e)
    }

    return ( 
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>

                <Typography variant='h5'>{isSignUp ? 'Sign up' : 'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleOnSubmit}>
                    <Grid container spacing={2}>

                        {isSignUp &&
                            <>
                            <Input name='firstName' label='First Name' handleOnChange={handleOnChange} autoFocus half/>
                            <Input name='lastName' label='Last Name' handleOnChange={handleOnChange} half/>
                            </>
                            }

                        <Input name='email' label='Email' handleOnChange={handleOnChange} type='email' />
                        <Input name='password' label='Password' handleOnChange={handleOnChange} type={showPassword ? 'test' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignUp &&
                            <Input name='confirmPassword' label='Repeat Password' handleOnChange={handleOnChange} type='password' />
                        }

                    </Grid>
                    <Button className={classes.submit} type='submit' color='primary' fullWidth variant='contained'>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin 
                    clientId={client_id}
                    render={(renderProps)=>(
                        <Button className='{classes.submit}' color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant='contained'>
                            Google Sign in 
                        </Button>
                        )
                    }
                    buttonText='Login'
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                    // isSignedIn={true}

                    />

                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? 'Already have an account? Sign in!' : "Don't have an account? Sing up!"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>


            </Paper>  
        </Container>
    )


}

export default Auth