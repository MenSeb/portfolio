import * as React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { About, Error, Home, Layout, Lost } from './pages';

export const routes = (
  <Route element={<Layout />} path="/">
    <Route errorElement={<Error />}>
      <Route element={<Home />} index />
      <Route element={<About />} path="about" />
      <Route element={<Lost />} path="*" />
    </Route>
  </Route>
);

export default createBrowserRouter(createRoutesFromElements(routes));
