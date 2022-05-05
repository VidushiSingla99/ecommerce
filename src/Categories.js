import React from 'react'

export default function Categories({setPrice}) {
  return (
    <div className='categories col-1'>
<div className='price-header '><b>Choose Price Range</b></div>
<a onclick={setPrice("100")}>Under Rs 100</a>
Between Rs 100 and Rs 200
Between Rs 200 and Rs 300
Between Rs 300 and Rs 400
Above Rs 400

<div className='price-header mt-5'><b>Choose Size</b></div>
SM<br/>
M <br/>
L<br/>
XL<br/>
XXL<br/>
XXXL

<div className='price-header mt-5'><b>Choose discount Percentage</b></div>
10%-30%<br/>
30%-50%<br/>
50%-70%<br/>
Above 70%<br/>

    </div>
  )
}
