import React, { useState } from 'react'

const Form = () => {

  const [data, setData] = useState({
    // Name: '',
    // Title: '',
    // Cost: '',
    // Card: '',
    // Votes: '',
    // Review: '',
    // Rating: '',
    // Image: '',
    // Loved: ''
  })

  const handelSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/food',{
      method:"POST",
      headers:{"content-type" :"application/json"},
      body:JSON.stringify(data)
    },
    )
  }

  const handelchange = (e) => {
     const {id,value}=e.target

     setData({...data, [id]:value})

  }

  return (
    <div>
      <h1>Add Restro</h1>
      <form onSubmit={handelSubmit}>
        Name:  <input type="text"  id='Name' onChange={handelchange} placeholder='Enter name' /><br />
        Title: <input type="text"  id='Title' onChange={handelchange} placeholder='Enter Title' /> <br />
        Cost: <input type="number"  id='Cost' onChange={handelchange} placeholder='Enter Cost' /> <br />
        Votes: <input type="number" id='Votes' onChange={handelchange} placeholder='Enter Votes' /> <br />
        Card: <input type="text"  id='Card' onChange={handelchange} placeholder='Enter Card' /> <br />
        Rating: <input type="number"  id='Rating' onChange={handelchange} placeholder='Enter Rating' /> <br />
        Review: <input type="number"  id='Review' onChange={handelchange} placeholder='Enter reviews' /> <br />
        Image: <input type="text"  id='Image' onChange={handelchange} placeholder='Enter Img Url' /> <br />
        Loved: <input type="number"  id='Loved' onChange={handelchange} placeholder='Enter Loved' /> <br /> <br />
        <input type="submit"  id='button' value='submit' />


      </form>
    </div>
  )
}

export default Form