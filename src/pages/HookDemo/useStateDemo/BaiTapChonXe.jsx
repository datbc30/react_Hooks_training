import React, { useState } from 'react'

export default function BaiTapChonXe() {
    const [img,setImg] = useState('./img/products/red-car.jpg')
  return (
    <div>
        <h3>bai tap chon xee</h3>
        <div className='row'>
            <div className='col-6'>
                <img src={img} alt="..." width={500} />
            </div>
            <div className='col-6'>
                <button className='btn btn-danger m-2' onClick={() => {
                    setImg('./img/products/red-car.jpg')
                }}>red</button>
                <button className='btn btn-dark m-2' onClick={() => {
                    setImg('./img/products/black-car.jpg')
                }}>black</button>
                <button className='btn btn-secondary m-2' onClick={() => {
                    setImg('./img/products/silver-car.jpg')
                }}>silver</button>
                <button className='btn btn-secondary' onClick={() => {
                    setImg('./img/products/steel-car.jpg')
                }}>steel</button>
            </div>
        </div>
    </div>
  )
}
