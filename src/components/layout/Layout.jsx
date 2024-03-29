// Import react modules
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = () => (
  <Fragment>
    <Header />
    {/* Wrap all content in column-direction flexbox */}
    <div className="apptheme">
      {/* REPLACE: {props.children} */}
      <Outlet />
    </div>
    <Footer />
  </Fragment>
);

export default Layout;
