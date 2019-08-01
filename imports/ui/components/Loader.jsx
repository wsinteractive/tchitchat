import React from 'react';

const Loader = ({ loading, render }) => {
  if (loading)
    return <h2>CHARGEMENT EN COURS...</h2>
  return render;
}

export default Loader;