import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Input from './Input'

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false)

    const isSignUp = true;

    const handleShowPassword = () => setShowPassword((prevShowPassword)=>!prevShowPassword)

    const handleOnChange = ()=>{

    }
    
    const handleOnSubmit = ()=>{
        
    }

    return ( 
        <Container component='main' maxWidth='xs'>
            <Paper elevation={3}>
                <Avatar>
                    <LockOutlinedIcon/>
                </Avatar>

                <Typography variant='h5'>{isSignUp ? 'Sign up' : 'Sign in'}</Typography>
                <form onSubmit={handleOnSubmit}>
                    <Grid spacing={2}>
                        {isSignUp &&
                            <>
                            <Input name='firstName' label='First Name' handleOnChange={handleOnChange} autoFocus half/>
                            <Input name='firstName' label='First Name' handleOnChange={handleOnChange} half/>
                            </>
                            }

                        <Input name='email' label='Email' handleOnChange={handleOnChange} type='email' />
                        <Input name='password' label='Password' handleOnChange={handleOnChange} type={showPassword ? 'test' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignUp &&
                            <Input name='confirmPassword' label='Repeat Password' handleOnChange={handleOnChange} type='password' />
                        }
                        <Button type='submit' color='primary' fullWidth variant='contained'>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>

                    </Grid>
                </form>

            </Paper>  
        </Container>
    )


}

export default Auth