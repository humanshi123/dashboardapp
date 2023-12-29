import React from 'react'

export default function Child() {
  return (
    <div className='order-sync'>
  <div className='order1'> 
  <div className='order-flex'> 
      <p className='esty' style={{ color: '#085AFC'}} > E 1234567890</p>
      <p className='date'>Dec 28, 2023</p>
      </div>
      <button className='btn'>open</button>
      
      </div>
   
      <div className='order2'>
        <p> lorem</p>
      </div>
    <div className='order3'>
      <p className='dots'>order syncing</p>
      <p style={{ color: '#085AFC',textDecoration:'underline'}} >  <img
                src="Images/shopify.png"
                alt="Hedy Lamarr"
                className="logo1"
              />1234</p>
      </div>
    </div>
  )
}
