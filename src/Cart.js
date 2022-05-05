import React from "react";
import {useCart} from 'react-use-cart'

export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1>Your cart is empty</h1>;
  return (
   <section className="py-4 container col-10">
     <div className=" justify-content-center">
       <div className="">
         <h5>Cart ({totalUniqueItems}) total items:({totalItems})</h5>
         <table className="table table-light table-hover m-0">
           <tbody>
             {items.map((item, index)=>{
               return(
                 <tr key={index}>
                   <td>
                     <img className="p-img" src={item.src}/>
                     </td>
                     <td>{item.title}</td>
                     <td>{item.price}</td>
                     <td>Quantity ({item.quantity})</td>
                     <td>
                       <button
                       className="btn btn-info ms-2 m-2" onClick={()=> updateItemQuantity(item.id, item.quantity-1)}>-</button>
                       <button
                       className="btn btn-info ms-2 m-2" onClick={()=> updateItemQuantity(item.id, item.quantity+1)}>+</button>
                       <button
                       className="btn btn-danger ms-2 m-2" onClick={()=> removeItem(item.id)}>removeItem</button>
                       </td>
                       </tr>)})}
                       </tbody>
                       </table>

       </div>
     </div>
   </section>
  );
}
