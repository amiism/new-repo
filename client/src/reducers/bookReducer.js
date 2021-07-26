import {GET_ALL_BOOKS, 
    GET_ONE_BOOK, 
    CREATE_NEW_BOOK, 
    UPDATE_ONE_BOOK,
    DELETE_ONE_BOOK} from "../actions/types";
import _ from 'lodash';

export default (books = [], action) => {
    switch (action.type) {
        case GET_ALL_BOOKS:
            return action.payload;
        case GET_ONE_BOOK:
            return {...books, [action.payload._id]:action.payload};    
            //return books.map((book) => (book._id === action.payload._id ? action.payload : book));
        case CREATE_NEW_BOOK:
            return {...books, [action.payload._id]:action.payload};    
            //return [...books, action.payload];
        case UPDATE_ONE_BOOK:
            return {...books, [action.payload._id]:action.payload};    
            //return books.map((book) => (book._id === action.payload._id ? action.payload : book));
        case DELETE_ONE_BOOK:
            return _.omit(books, action.payload);
            //return books.filter((book) => book._id !== action.payload);
        default:
            return books;
    }
};