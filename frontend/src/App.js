import React from "react";
import { Container} from "@material-ui/core";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import Navbar from "./components/Navbar/Navbar";

const App = () => {

    return(
        <BrowserRouter>
            <Container maxidth="lg">
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />}></Route>
                    <Route path='/auth' exact element={<Auth />}></Route>
                </Routes>
            </Container>
        </BrowserRouter>

        


        // </Container>

    );
}

export default App;