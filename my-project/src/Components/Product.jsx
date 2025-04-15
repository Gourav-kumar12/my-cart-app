import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {add,remove} from "../Redux/Slice/CartSlice"
  import {toast} from "react-hot-toast"  

//props ke through data  access kiya destructure
const Product = ({ post }) => {

  const {cart} = useSelector((state)=>state)
  //function add romove ko us krne ke liye dispatch lgate h 
  const dispatch = useDispatch()

  //add button click cart me add ho jaye 
  const addItems = () => {
    dispatch(add(post)); 
    toast.success("Item added successfully!"); 
  }
  const removeItems = () => {
    dispatch(remove(post.id)); 
    toast.error("Item added successfully!"); 
  }
  
  return (
    <div className='flex flex-col justify-center items-center hover:scale-110 transition 
    duration-300 ease-in shadow-sm hover:shadow-slate-400 gap-3 mt-10 mb-6 p-4 ml-5 h-[450px]
     rounded-xl outline  '>
      <div >
          <p className='text-gray-600 font-semibold text-lg text-left w-40 mt-1 '>
          {post.title.split(" ").slice(0,3).join(" ")+"...."}
          </p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-left'>{post.description.split(" ").slice(0,10).join(" ")+"...."}</p>
      </div>
      <div className='h-[150px] w-[150px]'>
        <img src={post.image} alt="product" className='h-full w-full' />
      </div>

      <div className='flex flex-row justify-between gap-12 items-center w-full mt-5'>
          <div>
          <p className='text-green-600 font-semibold' >${post.price}</p>
          </div>

          {/* conditon check p element me p.id ki value same h post.id ke 
          remove 
          than add  */}
          { 
            cart.some((p) => p.id === post.id) 
            ? (<button className='px-3 rounded-full text-slate-800 border font-semibold text-[12px] p-1  hover:bg-slate-700 hover:text-white bg-slate-100 uppercase cursor-pointer transition duration-300 ease-in'
             onClick={removeItems}>Remove Item</button>) 
            : (<button className='px-3 rounded-full text-slate-800 border font-semibold text-[12px] p-1 hover:bg-slate-700 hover:text-white bg-slate-100 uppercase cursor-pointer duration-300 ease-in'
             onClick={addItems}>Add Item</button>)
        
          }
          </div>
      </div>
      
  );
};

export default Product;
