import React, { Suspense } from 'react';

import Header from './components/header';
import Rules from './components/rules';
import Footer from './components/footer';
import Map from './components/Map';

const Loader = () => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">Loading...</div>
    </div>
  );
};

const app = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Rules />
      <Map />
      <Footer />
    </Suspense>
  );
};

export default app;
