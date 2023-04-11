import React from 'react';
import './Loader.css';

const MyLoader = () => {
  return (
    <div data-testid="loaderWraper" className="wraperL">
      <div data-testid="loader" className="loader"></div>
    </div>
  );
};

export default MyLoader;
