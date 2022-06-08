import React from 'react'
import Book from '../../components/Book/Book'
import './Home.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addDelFavorite } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import Functions from '../../components/Functions/Functions';
import { sortByAsc, sortByDesc } from '../../store/actions';


export default function Home() {
    const books = useSelector(store => store.books);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleFavorite = (id) => {
        const booksCopy = [...books];
        const bookIndex = booksCopy.findIndex(book => book.id === id);
        booksCopy[bookIndex] = {...booksCopy[bookIndex], isFavorite: !booksCopy[bookIndex].isFavorite}

        dispatch(addDelFavorite(booksCopy));
        navigate('/favorites');
    }
    
    let quantity = books.length

    return (
        <>
            <Functions firstFunction={() => dispatch(sortByAsc())} secondFunction={() => dispatch(sortByDesc())}/>
            <div className='quantity-box'>
                <div className='quantity'>Quantity: {quantity} books in library!</div>
            </div>
            <div className='books-container'>
                {books.map((book) => (
                    <Book
                        book={book}
                        toggleFavorite={toggleFavorite}
                        key={`book-id-${book.id}`
                }/>
                ))}
            </div>
        </>

    )
}
