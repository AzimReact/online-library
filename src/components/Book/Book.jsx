import React from 'react'
import './Book.scss'
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
            <div  className='img-box'>
                <img className='img' src={book.img} alt="item.img" />
            </div>
            <div onClick={() => toggleFavorite(book.id)} className='add-to-f'>
                <h2 onClick={() => toggleFavorite(book.id)}>{book.name}
                 <FaHeart />
                </h2>
            </div>
            <h2>Author: {book.author}</h2>
            <h3>Category: {book.category}</h3>
            <div onClick={() => goToEditPage(book.id)} className='update'>
                <FaPenAlt />
            </div>

        </div>
    )
        
}
