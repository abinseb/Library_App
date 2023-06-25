import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow ,Button} from '@mui/material';
import axios from 'axios';
import Addbook from './Addbook';


const Viewbooks = () => {
    const [books, setBooks] = useState([]);
    var [update,setupdate] = useState(false);
    var [singleValue,setsingleValue] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3007/viewbooks")
            .then((res) => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const deleteValue=(id)=>{
        console.log(id);
        axios.delete("http://localhost:3007/deletebooks/"+id)
        .then((res)=>{
            alert("Deleted");
            window.location.reload(false)
        })
        .catch(err=>console.log(err))


    }

    const updateValue=(value)=>{
        console.log("Click update");
        setupdate(true);
        setsingleValue(value);


    };


    var finalJSX = <TableContainer style={{ paddingTop: '100px' }}>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>MovieName</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Language</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Booknumber</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {/* Map over the books array to render rows */}
            {books.map((book, index) => (
                <TableRow key={index}>
                    <TableCell>{book.bookname}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.language}</TableCell>
                    <TableCell>{book.genre}</TableCell>
                    <TableCell>{book.booknumber}</TableCell>
                    <TableCell><Button onClick={()=>deleteValue(book._id)} >Delete</Button></TableCell>
                    <TableCell><Button onClick={()=>updateValue(book)} >Update</Button></TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
</TableContainer>

    if(update) finalJSX = <Addbook data={singleValue} method = 'put'/>
        return finalJSX;
};

export default Viewbooks;
