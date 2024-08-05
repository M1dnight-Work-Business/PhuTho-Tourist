import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Article from "./pages/Article";
import Document from "./pages/Document";
import Recruitment from "./pages/Recruitment";
import Footer from "./components/Footer";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<MainLayout/>}>
                    <Route path='/homepage' element={<Homepage/>}/>
                    <Route path='/article' element={<Article/>}/>
                    <Route path='/document' element={<Document/>}/>
                    <Route path='/recruitment' element={<Recruitment/>}/>
                </Route>
            </>
        )
    );
    return <RouterProvider router={router}/>;
}

export default App;
