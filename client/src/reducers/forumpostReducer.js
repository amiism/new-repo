import {GET_ALL_FORUMPOSTS, 
    GET_ONE_FORUMPOST, 
    CREATE_NEW_FORUMPOST, 
    UPDATE_ONE_FORUMPOST,
    DELETE_ONE_FORUMPOST} from "../actions/types";
//import _ from 'lodash';

export default (forumposts = [], action) => {
    switch (action.type) {
        case GET_ALL_FORUMPOSTS:
            return action.payload;
        case GET_ONE_FORUMPOST:
            //return {...forumposts, [action.payload._id]:action.payload};    
            //return forumposts.map((forumpost) => (forumpost._id === action.payload._id ? action.payload : forumpost));
            return forumposts.map((forumpost) => {
                
                if (forumpost._id === action.payload._id) {
                    console.log('forumpost._id: '+ forumpost._id);
                    console.log('action.payload._id: '+ action.payload.title);
                    return {
                        ...forumpost,
                        ...action.payload,
                    };
                } else {
                    return forumpost;
                }
            });
        case CREATE_NEW_FORUMPOST:
            //return {...forumposts, [action.payload._id]:action.payload};    
            return [...forumposts, action.payload];
        case UPDATE_ONE_FORUMPOST:
            return forumposts.map((forumpost) => {
                if (forumpost.id === action.payload.id) {
                  return {
                    ...forumpost,
                    ...action.payload,
                  };
                } else {
                  return forumpost;
                }
              });
            //return {...forumposts, [action.payload._id]:action.payload};    
            //return forumposts.map((forumpost) => (forumpost._id === action.payload._id ? action.payload : forumpost));
        case DELETE_ONE_FORUMPOST:
            return forumposts.filter(({ id }) => id !== action.payload.id);
            //return _.omit(forumposts, action.payload);
            //return forumposts.filter((forumpost) => forumpost._id !== action.payload);
        default:
            return forumposts;
    }
};