import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {DietPage, MenuPage, ExcercisePage } from "../Pages/ServicePage"
import Header from "./Header";
const MainRoutes = function () {
    return (
        <Router>
             <Routes>
                <Route path="/" element={<DietPage recordsPerPage={8}/>}>
                </Route>
                <Route path="/menu"  element={<MenuPage/>}>
                </Route>
                <Route path="/exercise"  element={<ExcercisePage/>}>
                </Route>
            </Routes>
        </Router>
    )
}

export default MainRoutes