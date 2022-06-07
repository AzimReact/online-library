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
            <Button color="secondary" variant="contained" endIcon={<FaHeart color={`${book.isFavorite ? 'red' : ''}`} />} onClick={() => toggleFavorite(book.id)}>
                Add to favorite
            </Button>
            
            <div  className='img-box'>
                <img className='img' src={book.img} alt="item.img" />
            </div>
            <div>
                <h2>Name: {book.name}
                </h2>
            </div   >
                <h2>Author: {book.author}</h2>
                <h3>Category: {book.category}</h3>
                <div onClick={() => goToEditPage(book.id)} className='update'>
                    <FaPenAlt />
            </div>

        </div>
    )
        
}
