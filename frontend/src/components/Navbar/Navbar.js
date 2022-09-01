import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import useStyles from './styles';
import memories from '../../images/head.jpg';


const Navbar = () => {
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user)

    useEffect(()=>{
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div>
                <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </div>
            <Toolbar >
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imgUrl} >{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button className={classes.logout} variant="contained" color="secondary">Logout</Button>
                </div>)
                :(
                    <Button component={Link} to="/auth" variant="contained" color="primary">SignIn</Button>
                )
            }

            </Toolbar>

        </AppBar>)
                
}

export default Navbar;