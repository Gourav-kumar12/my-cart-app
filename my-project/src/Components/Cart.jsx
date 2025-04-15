//cart ko bin props ke data kese mill rha h redux ke though {cart }
// You're mapping over the cart array (from Redux) and for each item,
//  you're rendering the CartItems component:

import React, { useEffect, useState } from 'react'
import CartItems from './CartItems'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"

const Cart = () => {
  //slice se data lane ke liye cart 
  const {cart} = useSelector((state)=>state)
  const [totalNumber, setTotalNumber] = useState(0);

  //totalAmount ka add logic
  useEffect(()=>{
    setTotalNumber(cart.reduce((acc,curr)=>acc + curr.price, 0 ));
  },[])

  return (
    <div>

        { cart.length > 0 ? 
        (   <div className='flex flex-row justify-center gap-4'>
              <div className='justify-center '>
                  {cart.map((item,index)=>{
                  return <CartItems key={item.id} item={item} itemIndex={index} />
                  })}
              </div>

                {/* //summery wale section ke liye */}
              <div className='p-4 mt-20 '>
                <div >
                  <h1 className='text-green-500 text-4xl font-semibold'>This Is Your Cart</h1>
                </div>
                <div className='mt-4'>
                  <p>
                    <span className='text-gray-500 text-xl font-semibold '  >total items : {cart.length}</span>
                  </p>
                  <div className='mt-4'>
                    <span className='text-gray-500 text-xl font-semibold'>Total Amount : ${totalNumber}</span>
                  </div>
                  <div className='mt-4'>
                    <Link to="/">
                        <button className='bg-green-500 text-2xl rounded-xl m-2 px-4  text-white font-semibold'>Check Out</button>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
        )
          
            : 

            (
              <div>
                <div>
                  <h1>Empty Your Bag</h1>
                </div>
                <div>

                    <Link to = {"/"} >
                      <button className='bg-green-500'>
                          Home
                      </button>
                    </Link>
                </div>
                
                
              </div>
            )

          
        }

    </div>
  )
}

export default Cart