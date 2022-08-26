import React from 'react'
import "./jumbotron.module.scss"
const Jumbotron = ({children}) => {
  return (
    <section className='mt-4 mb-3 p-5 bg-light text-black rounded jumbotron row'>{

        children.map((el)=>{return el})
        }</section>
  )
}

export default Jumbotron