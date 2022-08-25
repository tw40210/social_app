import React from "react";
import { Container} from "@material-ui/core";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home'

const App = () => {

    return(
        <BrowserRouter>
            <Container maxidth="lg">
                <Routes>
                    <Route path='/' exact element={<Home />}></Route>
                </Routes>
            </Container>
        </BrowserRouter>

        


        // </Container>

    );
}

export default App;