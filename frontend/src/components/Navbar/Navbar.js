import { AppBar, Avatar, Button, Container, Toolbar, Typography } from "@material-ui/core";
import {Link, useNavigate, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';
import useStyles from './styles';
import memories from '../../images/WHALE_2_3.png';


const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'});
        navigate('/auth');
        setUser(null);
    }

    useEffect(()=>{
        const token = user?.token;

        if (token){
            const decodedToken = decode(token)
            if (decodedToken.exp *1000 < new Date().getTime()) handleLogout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Container>
                <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </Container>
            <Toolbar >
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imgUrl} >{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button className={classes.logout} variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
                </div>)
                :(
                    <Button component={Link} to="/auth" variant="contained" color="primary">SignIn</Button>
                )
            }

            </Toolbar>

        </AppBar>)
                
}

export default Navbar;