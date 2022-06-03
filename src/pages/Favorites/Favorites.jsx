import React from 'react'
import Book from '../../components/Book/Book'
import { useDispatch, useSelector } from 'react-redux';
import { addDelFaovorite } from '../../store/actions';



export default function Favorites() {
    const books = useSelector(store => store.books);
    const dispatch = useDispatch();

    const toggleFavorite = (id) => {
        const booksCopy = [...books];
        const bookIndex = booksCopy.findIndex(book => book.id === id);
        booksCopy[bookIndex] = {...booksCopy[bookIndex], isFavorite: !booksCopy[bookIndex].isFavorite}

        dispatch(addDelFaovorite(booksCopy));
    }


    return (
        <div className='books-container'>
            {books.filter(book => book.isFavorite === true).map((book) => (
                <Book
                    book={book}
                    toggleFavorite={toggleFavorite}
                    key={`book-id-${book.id}`
            }/>
            ))}
        </div>
    )
}



// import React from 'react'
// import Book from '../../components/Book/Book.jsx'
// import { useDispatch, useSelector } from 'react-redux';
// import { addToFavorite } from '../../store/actions';



// export default function Home() {
//     const books = useSelector(store => store.books);


//     console.log(books);

//     return (
//         <div className='books-container'>
            
//           {books.filter((book) => book.isFavorite === true).map((book) => (
//             <Book
//               book={book}
//               key={`book-id-${book.id}` 
//             }/>
//           ))}

//             {/* {books.filter(() => books.isFavorite === true).map((book) => (
//                 <Book
//                     book={book}
//                     key={`book-id-${book.id}` 
//             }/>
//             ))} */}
//         </div>
//     )
// }


