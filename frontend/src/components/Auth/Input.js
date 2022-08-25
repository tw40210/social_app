import { Avatar, Container, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({name, handleOnChange, label, autoFocus, type, hanleShowPassword, half}) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12} >
            <TextField
                name={name}
                onChange={handleOnChange}
                variant='outlined'
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name==='password' && {
                    endAdornment:(
                        <InputAdornment position='end'>
                            <IconButton onClick={hanleShowPassword}>
                                {type==='password' ?<Visibility/>: <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    ) 
                }
            }

            />
        </Grid>
    )

}


export default Input