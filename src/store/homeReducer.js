import * as actions from './actionTypes';

const initialState = {
    books: [
        {
            id: 1,
            name: "Eloquent JavaScript",
            author: 'Marijn Haverbeke',
            category: 'Business',
            img: 'https://m.media-amazon.com/images/I/51InjRPaF7L._AC_SY1000_.jpg',
            isFavorite: false
        },
        {
            id: 2,
            name: "Martin Eden",
            author: 'Jack London',
            category: 'Classic  ',
            img: 'https://cdn.ast.ru/v2/ASE000000000850083/COVER/cover1__w340.jpg',
            isFavorite: false
        },
        {
            id: 3,
            name: "Flowers for Algernon",
            author: 'Daniel Keyes',
            category: 'Classic',
            img: 'https://m.media-amazon.com/images/M/MV5BNTA5NTg1ZGMtOWJkYy00NzBkLTg1ZTEtYjJjM2IzMGUzN2IxXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_FMjpg_UX1000_.jpg',
            isFavorite: false
        },
        {
            id: 4,
            name: "Dorian gray",
            author: 'Oscar Wilde',
            category: 'Classic',
            img: 'https://img.wattpad.com/cover/6626233-352-k168522.jpg',
            isFavorite: false
        },
        {
            id: 5,
            name: "Atomic Habits",
            author: 'James Clear',
            category: 'Business',
            img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg',
            isFavorite: false
        },
        {
            id: 6,
            name: "Rich Dad Poor Dad",
            author: 'Robert Kiyosaki',
            category: 'Business',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPi0MjBgMMda5YA3aeknBfdKpTvXJ7iOF7-y0C_lkFhzRPKlFeG3sdDii-y5yVzyNCfB8&usqp=CAU',
            isFavorite: false
        },
        {
            id: 7,
            name: "Naruto",
            author: 'Masashi Kishimoto',
            category: 'Anime',
            img: 'https://citaty.info/files/posters/4278.jpg',
            isFavorite: false
        },
        {
            id: 8,
            name: "The Master and Margarita",
            author: 'Mikhail Bulgakov',
            category: 'Classic',
            img: 'https://almabooks.com/wp-content/uploads/2016/10/9781847492425.jpg',
            isFavorite: false
        },
        {
            id: 9,
            name: "Attack on Titan",
            author: 'Hajime Isayama',
            category: 'Anime',
            img: 'https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg',
            isFavorite: false
        },
        {
            id: 10,
            name: "Fahrenheit 451",
            author: 'Ray Bradbury',
            category: 'Classic',
            img: 'https://anylang.net/sites/default/files/covers/fahrenheit-451_0.jpg',
            isFavorite: false
        },
        {
            id: 11,
            name: "Miracle Morning",
            author: 'Hal Elrod',
            category: 'Business',
            img: 'https://artsynow.com/wp-content/uploads/2014/08/hal21.jpg',
            isFavorite: false
        },
        {
            id: 12,
            name: "The Alchemist",
            author: 'Paulo Coelho',
            category: 'Classic',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-L8mfDTBzMZTEwVF-d1hMFTpozHGzyM6m6kft27zecw8Y6c5s_wlf-BRfL9UgzaLguQ&usqp=CAU',
            isFavorite: false
        },
        {
            id: 13,
            name: "One Piece",
            author: 'Eiichiro Oda',
            category: 'Anime',
            img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/3c/OnePiece_1.jpg/275px-OnePiece_1.jpg',
            isFavorite: false
        },
        {
            id: 14,
            name: "War And Peace",
            author: 'Lev Tolstoy',
            category: 'Classic',
            img: 'https://image.ebooks.com/previews/001/001660/001660423/001660423.jpg',
            isFavorite: false
        },
        {
            id: 15,
            name: "Haikyuu",
            author: 'Haruichi Furudate',
            category: 'Anime',
            img: 'https://st.cdjapan.co.jp/pictures/l/16/33/NEOBK-2544438_102.jpg?v=2',
            isFavorite: false
        },
    ]
}

const sortByAsc = (a, b, key) => {
    const obj1 = a[key];
    const obj2 = b[key];

    if (obj1 < obj2) {
        return 1;
    }
    if (obj1 > obj2) {
        return -1;
    }
    return 0;
};

const sortByDesc = (a, b, key) => {
    const obj1 = a[key];
    const obj2 = b[key];

    if (obj1 < obj2) {
        return -1;
    }
    if (obj1 > obj2) {
        return 1;
    }
    return 0;
};


export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_DEL_FAVORITE:
            return {
                ...state,
                books: action.payload
            };
        case actions.ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload]
            };
        case actions.EDIT_BOOK:
            const editedBook = action.payload;
            const books = [...state.books];
            const index = state.books.findIndex(book => book.id === editedBook.id);
            books.splice(index, 1, editedBook);

            return {
                ...state,
                books: books
            };

        case actions.DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => book.id != action.payload.id)
            };

        case actions.SORT_ASC:
            let newArray = [...state.books]
            newArray = newArray.sort((a, b) => {
                return sortByAsc(a, b, "name");
            })
            return {
                ...state,
                books: newArray
            };
        case actions.SORT_DESC:
            let newArray1 = [...state.books]
            newArray1 = newArray1.sort((a, b) => {
                return sortByDesc(a, b, "name");
            })
            return {
                ...state,
                books: newArray1
            };
        default:
            return state;
    }
}