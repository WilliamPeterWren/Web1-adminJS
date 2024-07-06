import React from 'react';
import { useParams } from 'react-router-dom';

function Supplier() {
  const { slug } = useParams(); 
  return (
    <div>
      <h1>this is contact supplier </h1>
      <h5>slug: {slug}</h5>
    </div>
  )
}

export default Supplier
