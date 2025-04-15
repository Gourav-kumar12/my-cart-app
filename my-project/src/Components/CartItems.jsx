import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {toast} from "react-hot-toast"
import {remove} from "../Redux/Slice/CartSlice"


const CartItems = ({item,itemIndex}) => {
const dispatch = useDispatch();

    //remove ka function item se
    const removeCartItem = ()=>{
      dispatch(remove(item.id));
      toast.error("removed ji item");
    }


  return (
    <div className='flex flex-row justify-center w-[600px]  gap-x-10 mb-10 mt-10 
     p-8 '>

          <div className='h-[160px] w-[160px]'>
            <img src={item.image} alt="product" className='h-full w-full' />
          </div>

          <div className='flex flex-col justify-center '>
             <div>
                <h1 className='text-gray-600 font-semibold text-lg text-left w-40 mt-1 '>
                {item.title.split(" ").slice(0,5).join(" ")+"...."}
                </h1>
                <p className='w-80 text-gray-600 font-normal text-left mb-5'>
                  {item.description.split(" ").slice(0,15).join(" ")+"...."}</p>
              </div> 
                <div className='flex flex-row justify-between w-full'>
                  <p className='text-green-600 font-semibold' >${item.price}</p>

                  <button className='px-3 rounded-full text-slate-200 border font-semibold text-[12px] p-1  hover:bg-slate-700 hover:text-white bg-red-400 
                  uppercase cursor-pointer transition duration-300 ease-in' onClick={removeCartItem}>
                    <MdDelete />
                  </button>
                </div>
             
          </div>
         
           

    </div>
    
  )
}

export default CartItems