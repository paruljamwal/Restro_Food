import React, { useEffect, useState } from 'react'
import './main.css'
import {BsStarFill} from 'react-icons/bs'

const Main = () => {
    const [data,setData]=useState([])
useEffect(()=>{
    getData();
},[])
    async function getData(){
        const data=await fetch(`http://localhost:8090/food`)
        .then((d)=>d.json())
     setData(data)
    }    
  return (
    <div>
    {
          data.map((e)=>(
            <div className='box'>
                <div>
                <img className='food'  src={e.Image} alt="" />

                </div>
                <div>

               <div className='content'>
                <div>

                <h1 className='red'>{e.Name}</h1>
                 <h3 className='gray'> {e.Title}</h3>
                 <p className='gray'><b>Cost :</b> {e.Cost} Rs. for One</p>
                 <p><b>Card :</b> {e.Card==="True" ? "Accepted" :"Not Accepted"}</p>
                 
                </div>
                 <div className='vote'>
                  <p className='green'>{e.Rating}  <BsStarFill/> </p>
                  <p className='gray'>{e.Votes} Votes</p>
                  <p className='gray'>{e.Review} Reviews</p>
                 </div>
                 </div>


                  <p>{e.Loved} people love</p>
                  <p>Accepts online payments only</p>
                  <hr />
                  <button className='btn'>Order Online</button>
            
                </div>
            
            
            </div>
        ))
    }
        
    </div>
  )
}

export default Main