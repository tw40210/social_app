import {  Typography } from "@material-ui/core";
import {Link} from "react-router-dom";
import useStyles from './styles';
import memories from '../../images/head.jpg';


const Home = () => {
    const classes = useStyles();


    return (
        <div>
            <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center">Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height="60"/>
        </div>
    )
                
}

export default Home;