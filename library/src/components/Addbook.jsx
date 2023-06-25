import React, { useState } from 'react'
import {Button, TextField} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Addbook = (props) => {
    var navigate = useNavigate();
    const[inpt,setinpt]=useState(props.data);
    // props
    console.log("props.data",props.data);
    console.log("propsmethod",props.method);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setinpt((inpt)=>({...inpt,[name]:value}))
        console.log(inpt)

    }
    const readHandler=()=>{
        console.log("cliked");
        // props
        if(props.method=="post"){
        axios.post("http://localhost:3007/addbooks",inpt)
        .then((res)=>{
            alert("data added")
            navigate('/')
        })
        .catch(err=>console.log(err))
    }
    if(props.method=="put"){
        axios.put("http://localhost:3007/edit/"+inpt._id,inpt)
        .then((res)=>{
            alert("updated")
            navigate('/')
        })
        .catch(err=>{console.log(err)})
    }
    }

  return (
    <div style={{paddingTop:'150px'}}>
        <TextField 
            variant='outlined'
            label='Enter bookname'
            name='bookname'
            value={inpt.bookname}
            onChange={handleChange}
            
        />
        <br/>
        <TextField
            variant="outlined"
            label="Author"
            name='author'
            value={inpt.author}
            onChange={handleChange}
            style={{ margin: '10px' }}
        />
        <br/>
        <TextField
            variant="outlined"
            label="language"
            name='language'
            value={inpt.language}
            // // value={todoName}
            onChange={handleChange}
            style={{ margin: '10px' }}
            />
            <br/>
            <TextField
            variant="outlined"
            label="genre"
            name='genre'
            value={inpt.genre}
            // // value={todoName}
            onChange={handleChange}
            style={{ margin: '10px' }}
            />
            <br/>
             <TextField
                variant="outlined"
                label="BOOK NUMBER"
                name='booknumber'
                value={inpt.booknumber}
                // // value={todoName}
                onChange={handleChange}
                style={{ margin: '10px' }}
            />
            <br/>
            <Button variant='contained' onClick={readHandler}>Add</Button>
      
    </div>
  )
}

export default Addbook
