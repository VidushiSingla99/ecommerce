import React from 'react'
import {useCart} from 'react-use-cart'

export default function Product(props) {
const {addItem} =useCart();
  return (
    <div className='col-md-3'>
      <div >
<img src={props.src} className='p-img'  name="src" id="src" />
<div className='p-name'  name="title" id="title">{props.title}</div>
<div className='p-price' name="price" id="price"><b>{props.id}</b></div>
<button class="btn btn-success  m-2 mb-3" onClick={()=>addItem(props.item)}>Add to cart</button>
</div>
    </div>

  )
}
