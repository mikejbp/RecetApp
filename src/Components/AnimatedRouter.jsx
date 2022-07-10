import { AnimatePresence } from "framer-motion";
import { useLocation, Route, Routes } from 'react-router-dom';
import  React  from 'react';

import Error from '../Pages/Error';

import Home from '../Pages/Home';
import Recetas from '../Pages/Recetas';
import Profile from '../Pages/Profile';
import RecetaDetail from "./RecetaDetails/RecetaDetail";
import Register from '../Pages/Register'
import CreatePosts from './CreatePosts/CreatePosts'
import Searcher from "../Pages/Searcher";

export const AnimatedRoutes = () => {
    const location = useLocation();

  return (
    <AnimatePresence>
      { /* CONFIGURAR RUTAS Y PAGINAS */}
                <Routes location={location} key={location.pathname}>
                    <Route
                    path="/"
                    element={<React.Suspense fallback='Loading...'>
                    <Home />
                </React.Suspense>}/>

                    <Route
                    path="/home"
                    element={<React.Suspense fallback='Loading...'>
                    <Home />
                </React.Suspense>}/>

                    <Route
                    path="/recetas"
                    element={<React.Suspense fallback='Loading..'>
                    <Recetas />
                    </React.Suspense>} />

                    <Route
                    path="/receta/:recetaId"
                    element={<React.Suspense fallback='Loading..'>
                    <RecetaDetail />
                    </React.Suspense>} />

                    <Route
                    path="/register"
                    element={<React.Suspense fallback='Loading..'>
                    <Register />
                    </React.Suspense>} />

                    <Route
                    path="/profile"
                    element={<React.Suspense fallback='Loading..'>
                    <Profile />
                    </React.Suspense>} />

                    <Route
                    path="/create"
                    element={<React.Suspense fallback='Loading..'>
                    <CreatePosts />
                    </React.Suspense>} />

                    <Route
                    path="/searcher"
                    element={<React.Suspense fallback='Loading..'>
                    <Searcher />
                    </React.Suspense>} />

                    <Route
                    path="*"
                    exact element={<Error />} />
                </Routes>
    </AnimatePresence>
  )
}