import React from "react";
import { Container} from "@material-ui/core";
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import Navbar from './components/Navbar/Navbar';
import PostDetails from './components/PostDetails/PostDetails.jsx'

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'))
    return(
        <BrowserRouter>
            <Container maxWidth='xl'>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Navigate to='/posts' replace />}></Route>
                    <Route path='/posts' exact element={<Home />}></Route>
                    <Route path='/posts/search' exact element={<Home />}></Route>
                    <Route path='/posts/:id' exact element={<PostDetails />}></Route>
                    <Route path='/auth' exact element={user ? <Navigate to='/posts' replace /> : <Auth />}></Route>
                </Routes>
            </Container>
        </BrowserRouter>

        


        // </Container>

    );
}

export default App;