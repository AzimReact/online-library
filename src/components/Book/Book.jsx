import './Book.scss';
import React from 'react';
import Button from '@mui/material/Button';
import { FaHeart } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

export default function Book({ book, toggleFavorite }) {

    const navigate = useNavigate();

    const goToEditPage = (bookId) => {
        navigate(`/crud/${bookId}`);
    }

    return (
        <div className='item'>

            {
            book.isFavorite === true
                ?   <Button color="success" variant="contained" endIcon={<FaHeart color='red' />} onClick={() => toggleFavorite(book.id)}>
                        Remove from favorite
                    </Button>
                :   <Button color="success" variant="contained" endIcon={<FaHeart color='white' />} onClick={() => toggleFavorite(book.id)}>
                        Add to favorite
                    </Button>
            }
            
            <div  className='img-box'>
                <img className='img' src={book.img} alt="item.img" />
            </div>
            <div>
                <h2>Name: {book.name}
                </h2>
            </div   >
            <h2>Author: {book.author}</h2>
            <h3>Category: {book.category}</h3>

            <Button color="success" variant="contained" endIcon={<FaPenAlt />} onClick={() => goToEditPage(book.id)}>
                Edit or Delete 
            </Button>

        </div>
    )
        
}
