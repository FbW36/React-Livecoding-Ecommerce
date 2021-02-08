import React from 'react';

const NotFound = ({ history }) => {
  return (
    <section className='not-found'>
      <h1>Not Found</h1>
      <button onClick={() => history.goBack()}>Return</button>
    </section>
  );
};

export default NotFound;
