import React from 'react'
import { useParams } from 'react-router-dom'

function Menufacturer() {
  const {slug} = useParams();
  return (
    <div>
      <h1>Menufacturer</h1>
      <h5>Thật ra slug la: {slug}</h5>
    </div>
  )
}

export default Menufacturer
