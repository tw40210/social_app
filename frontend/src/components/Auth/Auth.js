import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';

import Input from './Input'

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const classes = useStyles();

    const handleShowPassword = () =>{
        setShowPassword((prevShowPassword)=>!prevShowPassword)
        console.log(showPassword)
    } 

    const handleOnChange = ()=>{

    }
    
    const handleOnSubmit = ()=>{
        
    }
    const switchMode = () =>{
        setIsSignUp((prevIsSignUp)=>!prevIsSignUp)
        console.log(showPassword)
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
                            <Input name='firstName' label='First Name' handleOnChange={handleOnChange} half/>
                            </>
                            }

                        <Input name='email' label='Email' handleOnChange={handleOnChange} type='email' />
                        <Input name='password' label='Password' handleOnChange={handleOnChange} type={showPassword ? 'test' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignUp &&
                            <Input name='confirmPassword' label='Repeat Password' handleOnChange={handleOnChange} type='password' />
                        }
                        <Button className={classes.submit} type='submit' color='primary' fullWidth variant='contained'>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>

                    </Grid>
                </form>
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignUp ? 'Already have an account? Sign in!' : "Don't have an account? Sing up!"}
                        </Button>
                    </Grid>
                </Grid>
            </Paper>  
            <Button color='primary' variant='contained' onClick={handleShowPassword}>HAHA</Button>
        </Container>
    )


}

export default Auth