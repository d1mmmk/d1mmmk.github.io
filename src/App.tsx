import React, { Fragment } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import loadable from '@loadable/component';

import 'styles/style.scss';
import { NavigationItem } from 'interfaces/NavigationItem';
import { AppFooter, AppHeader } from 'common';
import Main from 'common/AppMain';
import { APP_PARAMS } from 'parameters';
import useMyName from 'hooks/useMyName';

const Home = loadable(() => import('pages/Home'));
const Contacts = loadable(() => import('pages/Contacts'));
const About = loadable(() => import('pages/About'));

const navigationItems: NavigationItem[] = [
  {
    order: 10,
    path: '/',
    title: 'Home',
  },
  {
    order: 20,
    path: '/About',
    title: 'About',
  },
  {
    order: 30,
    path: '/Contacts',
    title: 'Contacts',
  },
]

function App() {
  let location = useLocation();
  const year_from: number = APP_PARAMS.YEAR_FROM;
  const githablink: string = APP_PARAMS.GIT_URL;

  const myName = useMyName();

  React.useEffect(() => {
    // console.log(location);
  }, [location]);

  return (
    <div className="app">
      <AppHeader items={navigationItems} />
      <Main element={
        <Routes>
          <Route index element={
          <React.Suspense fallback={<>...</>}>
            <Home />
          </React.Suspense>
          } />
          <Route path='about' element={
            <React.Suspense fallback={<>...</>}>
              <About githablink={githablink}/>
            </React.Suspense>
          } />
          <Route path='Contacts' element={
            <React.Suspense fallback={<>...</>}>
              <Contacts name={myName} />
            </React.Suspense>
          } />
          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      } />
      <AppFooter year_from={year_from} />
    </div>
  );
}

export default App;
