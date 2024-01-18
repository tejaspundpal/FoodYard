import React from 'react'
import { useState } from 'react'

const Profile = (props) => {

    const [count,setCount] = useState(0);

    return (
    <div>
        <h3>Profile functional Component</h3>
        <p>Count : {count}</p>
        <button onClick={()=>{
            setCount(1)
        }}>count</button>
    </div>
  )
}

export default Profile