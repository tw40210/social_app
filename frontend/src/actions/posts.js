import * as api from '../api';
import {LIKE, DELETE, CREATE, UPDATE, FETCH_ALL} from '../constances/actionTypes'

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();

        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message); 
    }

}

export const createPost = (post) => async (dispatch) =>{
    try {
        const {data} = await api.createPost(post);
        
        dispatch({type: CREATE, payload: data})
    } catch (error) {
        console.log(error.message); 
    }

}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);

        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error.message); 
    }

}

export const deletePost = (id) => async (dispatch) => {
    try {
        console.log(id)
        await api.deletePost(id);

        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error.message); 
    }

}

export const likePost = (id, like) => async (dispatch) => {
    try {
        console.log("Like", like)
        const {data} = await api.likePost(id, like);
        console.log("Like finish", like)

        dispatch({type: LIKE, payload: data});
    } catch (error) {
        console.log(error.message); 
    }

}