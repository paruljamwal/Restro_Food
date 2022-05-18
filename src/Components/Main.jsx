import React, { useEffect, useState } from 'react'
import './main.css'
import {BsStarFill} from 'react-icons/bs';
import {FaVoteYea} from 'react-icons/fa'
import {MdOutlineReviews} from 'react-icons/md'
import {MdShoppingBasket} from 'react-icons/md'
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
    //sort by prize------------------->
    
    const handelchange=(e)=>{
      if(e.target.value==="High"){
       const pri= [...data].sort((a,b)=>{
          return b.Cost- a.Cost
        })
        setData(pri)
      }

      else{
        const low=[...data].sort((a,b)=>{
          return a.Cost-b.Cost
        })
        setData(low)
      } 
    }

    //sort acc to stars------------------------------>
   const handelstar=(e)=>{
     console.log(e.target.id)
     if(e.target.id==="star1"){
       const star=[...data].filter((s)=>{
         return (s.Rating) ===1
       })
       setData(star)
     }
     if(e.target.id==="star2"){
      const star=[...data].filter((s)=>{
        return (s.Rating) ===2
      })
      setData(star)
    }

    if(e.target.id==="star3"){
      const star=[...data].filter((s)=>{
        return (s.Rating) ===3
      })
      setData(star)
    }
    if(e.target.id==="star4"){
      const star=[...data].filter((s)=>{
        return (s.Rating) ===4
      })
      setData(star)
    }
 }
   
const handelcard=(e)=>{
  if(e.target.value==="Card"){
    const card=[...data].filter((c)=>{
      return c.Card ==="True"
    })
    setData(card)
  }

  if(e.target.value="Cash"){
    const cash=[...data].filter((c)=>{
      return c.Card !=="True"
    })
    setData(cash)
  }

}

  return (
    <div>
     <select className='choose' onChange={handelchange}>
       <option value="Sort">Sort By Prize</option>
       <option value="Low">Low To High</option>
       <option value="High">High To Low</option>
     </select>

     <button className='choose' onClick={handelstar} id='star1'>1 ⭐</button>
     <button className='choose' onClick={handelstar} id='star2'>2 ⭐</button>
     <button className='choose' onClick={handelstar} id='star3'>3 ⭐</button>
     <button className='choose' onClick={handelstar} id='star4'>4 ⭐</button>
  

     <button className='choose' onClick={handelcard}>Cash Only</button>
     <button className='choose' onClick={handelcard}>Card Only</button>
    {
        data.map((e)=>(
            <div className='box'>
                <div>
                <img className='food'  src={e.Image} alt="" />

                </div>
                <div>

               <div className='content'>
                <div className='left'>

                <h1 className='red'>{e.Name}</h1>
                 <h3 className='gray'> {e.Title}</h3>
                 <p className='gray'><b>Cost :</b> {e.Cost} Rs. for One</p>
                 <p><b>Card :</b> {e.Card==="True" ? "Accepted" :"Not Accepted"}</p>
                 
                </div>
                 <div className='vote'>
                  <p className='green'>{e.Rating} <BsStarFill/> </p>
                  <p className='gray'>{e.Votes} Votes <FaVoteYea/></p>
                  <p className='gray'>{e.Review} Reviews <MdOutlineReviews/></p>
                 </div>
                 </div>


                  <p>{e.Loved} people love</p>
                  <p>Accepts online payments only</p>
                  <hr />
                  <button className='btn'> Order  <MdShoppingBasket/></button>
                  
                </div>
               
            </div>
            
        ))
      }
    
    </div>
    
  )
}

export default Main