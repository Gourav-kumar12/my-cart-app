import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const {cart} = useSelector((state)=>state)

  return ( 

    <div>
         <div className='bg-green-400 flex items-center justify-between'>

              <NavLink to="/">
              <div className='flex m-auto justify-center ml-5 p-2 ' >
                <img src="https://marketplace.canva.com/EAGR4J_-jYM/2/0/1600w/canva-colorful-abstract-online-shop-free-logo-zxo07UzxTDw.jpg"
                width="60px" height="60px" alt="" />

                </div>
             </NavLink>
        
            <div className='flex flex-row gap-x-4 m-4 font-medium mr-20 items-center text-slate-800 '>
                <NavLink to="/cart" >
                    <p>Home</p>
                </NavLink>
                <NavLink to="/cart">
                    <div className='relative' >
                        <HiMiniShoppingBag className='w-6 h-6'  />
                        {
                            cart.length > 0 && 
                            <span className='absolute -top-1 -right-1 bg-green-500 justify-center
                            rounded-full animate-bounce text-sm px-0.5 text-white ' >{cart.length}</span>
                        }  
                    </div>
                     
                </NavLink>
            </div>
        
        </div>
    </div>
  )
}

export default Navbar