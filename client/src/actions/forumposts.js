import {GET_ALL_FORUMPOSTS, 
    GET_ONE_FORUMPOST, 
    CREATE_NEW_FORUMPOST, 
    UPDATE_ONE_FORUMPOST,
    DELETE_ONE_FORUMPOST} from "./types";

import axios from 'axios';

export const getForumPosts = () => async (dispatch) => {
    axios
        .get('/api/forumposts')
        .then(res => {
            dispatch({
                type: GET_ALL_FORUMPOSTS,
                payload: res.data,
            });
            console.log('data fetched');
        })
        .catch(err =>{
            console.log('Error from ShowForumPostList');
    })
};

export const getOneForumPost = (id) => async (dispatch) => {
    await axios
        .get('/api/forumposts/'+id)
        .then(res => {
            console.log('received '+ res.data._id);
            dispatch({
                type: GET_ONE_FORUMPOST,
                payload: res.data,
            });
        })
        .catch(err => {
            console.log("Error from ShowForumPostDetails");
        })
};

export const createForumPost = (forumpost) => async (dispatch) => {
    axios
        .post('/api/forumposts', forumpost)
        .then(res => {
            dispatch({
                type: CREATE_NEW_FORUMPOST,
                payload: res.data,
            });
        })
        .catch(err => {
            console.log("Error in CreateForumPost!");
        })
};

export const updateForumPost = (id, forumpost) => async (dispatch) => {
        axios
        .put('/api/forumposts/'+ id, forumpost)
        .then(res => {
            dispatch({
                type: UPDATE_ONE_FORUMPOST,
                payload: res.data,
            });
        })
        .catch(err => {
            console.log("Error in UpdateForumPostInfo!");
        })
};


export const deleteForumPost = (id) => async (dispatch) => {
    /*try {
        await api.deleteForumPost(id);

        dispatch({ type: DELETE_ONE_FORUMPOST, payload: id });
    } catch (error) {
        console.log(error.message);
    }
    */
    axios
        .delete('/api/forumposts/'+id)
        .then(res => {
            dispatch({
                type: DELETE_ONE_FORUMPOST,
                payload: id,
            });
        })
        .catch(err => {
            console.log("Error form ShowForumPostDetails_deleteClick");
        })
};
