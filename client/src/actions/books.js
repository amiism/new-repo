import {GET_ALL_BOOKS, 
    GET_ONE_BOOK, 
    CREATE_NEW_BOOK, 
    UPDATE_ONE_BOOK,
    DELETE_ONE_BOOK} from "./types";

import axios from 'axios';

export const getBooks = () => async (dispatch) => {
    axios
        .get('/api/books')
        .then(res => {
            dispatch({
                type: GET_ALL_BOOKS,
                payload: res.data,
            });
            console.log('data fetched');
        })
        .catch(err =>{
            console.log('Error from ShowBookList');
    })
};

export const getOneBook = (id) => async (dispatch) => {
    axios
        .get('/api/books/'+id)
        .then(res => {
            dispatch({
                type: GET_ONE_BOOK,
                payload: res.data,
            });
            console.log('received '+ res.data.title);
        })
        .catch(err => {
            console.log("Error from ShowBookDetails");
        })
};

export const createBook = (book) => async (dispatch) => {
    axios
        .post('/api/books', book)
        .then(res => {
            dispatch({
                type: CREATE_NEW_BOOK,
                payload: res.data,
            });
        })
        .catch(err => {
            console.log("Error in CreateBook!");
        })
};

export const updateBook = (id, book) => async (dispatch) => {
        axios
        .put('/api/books/'+ id, book)
        .then(res => {
            dispatch({
                type: UPDATE_ONE_BOOK,
                payload: res.data,
            });
        })
        .catch(err => {
            console.log("Error in UpdateBookInfo!");
        })
};


export const deleteBook = (id) => async (dispatch) => {
    /*try {
        await api.deleteBook(id);

        dispatch({ type: DELETE_ONE_BOOK, payload: id });
    } catch (error) {
        console.log(error.message);
    }
    */
    axios
        .delete('/api/books/'+id)
        .then(res => {
            dispatch({
                type: DELETE_ONE_BOOK,
                payload: id,
            });
        })
        .catch(err => {
            console.log("Error form ShowBookDetails_deleteClick");
        })
};
