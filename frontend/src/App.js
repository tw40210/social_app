import React, {useEffect, useState} from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {getPosts} from './actions/posts'

import Posts from './components/Posts/Posts'
import Form from './components/Forms/Form'
import useStyles from './styles'
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home'

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch(); 

    useEffect(() =>{
        dispatch(getPosts());
    }, [currentId, dispatch])

    return(
        <BrowserRouter>
            <Container maxidth="lg">
                <Routes>
                    <Route path='/' exact element={<Home />}></Route>
                </Routes>
            </Container>
        </BrowserRouter>

        
        //     <Navbar />
        //     <Grow in>
        //         <Container >
        //             <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
        //                 <Grid item xs={12} sm={7}>
        //                     <Posts setCurrentId={setCurrentId} />
        //                 </Grid>
        //                 <Grid item xs={12} sm={4}>
        //                     <Form currentId={currentId} setCurrentId={setCurrentId} />
        //                 </Grid>
        //             </Grid>
        //         </Container>
        //     </Grow>

        // </Container>

    );
}

export default App;