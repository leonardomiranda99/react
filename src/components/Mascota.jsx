import React from 'react'
import { Edad } from './edad';
import '../App.css'

const mascota = ({name,age,show}) => {
  return (
    <>
     <h3 className="mascota">Soy una mascota y me llamo  {name}</h3>
     <Edad className="mascota" edad={age} show={show} />
    </>
  )
}

export default mascota;
