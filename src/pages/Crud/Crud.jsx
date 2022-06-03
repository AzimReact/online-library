import './Crud.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { addBook, editBook, deleteBook } from '../../store/actions';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const INITIAL_FORM_STATE = {
  name: '',
  author: '',
  category: '',
  img: '',
}

export default function Crud() {
  const dispatch = useDispatch();
  const books = useSelector(store => store.books);
  const [form, setForm] = useState({ ...INITIAL_FORM_STATE });
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    if (id) setForm(books.find(book => book.id === Number(id)));
    return () => {
      resetState();
    }
  }, [id, books])

  const editedBook = {
    id: id || Date.now(),
    isFavorite: false,
    ...form,
  }

  const setFormField = (key, value) => {
    const formCopy = { ...form };
    formCopy[key] = value;
    setForm(formCopy);
  }

  const handleSaveBook = () => {
    if (id) {
      dispatch(editBook(editedBook));
      navigate('/');
    } else {
      dispatch(addBook(editedBook));
      navigate('/');
    };
  }

  const handleDeleteBook = () => {
    dispatch(deleteBook(id));
    navigate('/');
  }

  const resetState = () => {
    setForm(INITIAL_FORM_STATE);
  }

  return (
    <div className='crud-container'>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >

        <div>
          <TextField id="standard-basic" label="Name" variant="standard" value={form.name} onChange={(e) => setFormField('name', e.target.value)} autoFocus />
        </div>
        <div>
          <TextField id="standard-basic" label="Author" variant="standard" value={form.author} onChange={(e) => setFormField('author', e.target.value)} />
        </div>
        <div>
          <TextField id="standard-basic" label="Category" variant="standard" value={form.category} onChange={(e) => setFormField('category', e.target.value)} />
        </div>
        <div>
          <TextField id="filled-basic" label="Add some link" variant="filled" value={form.img} onChange={(e) => setFormField('img', e.target.value)} />
        </div>
        <Button variant="contained" color="success" className='new-book-btn' onClick={handleSaveBook}>{id ? 'Edit' : 'Add this book'}</Button>
        {
          id ? <Button variant="outlined" color="error" className='new-book-btn' onClick={handleDeleteBook}>{id ? 'Delete' : ''}</Button> : null
        }
      </Box>
    </div>
  )
}
