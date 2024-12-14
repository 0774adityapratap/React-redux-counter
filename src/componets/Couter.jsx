import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increceCount } from '../Features/CouterSlice';

function Couter() {
    const counter = useSelector((state) => state.counter)
   const  Dispatch = useDispatch()
  return (
    <div>
        
        <div className=''> {counter}</div>
        <button onClick={()=>Dispatch(increceCount())} >incece</button>
        <button onClick={()=>Dispatch(decrement())} >decrede</button>

    </div>
  )
}

export default Couter;