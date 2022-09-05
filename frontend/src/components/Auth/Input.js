
import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';

import React from 'react';
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({name, handleOnChange, label, autoFocus, type, handleShowPassword, half}) => {
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

                InputProps={name==='password' ? {
                    endAdornment:(
                        <InputAdornment  position='end'>
                            <IconButton aria-label="toggle password visibility" onClick={handleShowPassword}>

                                {type==='password' ?<Visibility/>: <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    ) 
                } :null

            }

            />
        </Grid>
    )

}


export default Input