import React from 'react'

const Jumbotron = ({children}) => {
  return (
    <section className='mt-4 p-5 bg-primary text-white rounded'>{

        children.map((el)=>{return el})
        }</section>
  )
}

export default Jumbotron