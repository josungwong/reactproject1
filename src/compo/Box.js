import React from 'react'

const Box = (ect) => {
    console.log(ect)
  return (
    <div className='box'>
        <h1>{ect.title}</h1>
        <img src={ect.item && ect.item.img} alt='' className='item-img'/>
        <h2>Win</h2>
    </div>
  )
}

export default Box