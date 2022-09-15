import * as api from '../api';
import {LIKE, DELETE, CREATE, UPDATE, FETCH_ALL, FETCH_BY_SEARCH} from '../constances/actionTypes'

export const getPosts = (page) => async (dispatch) => {

    try {
        const { data: {data, currentPage, totalPage} } = await api.fetchPosts(page);
        
        dispatch({type: FETCH_ALL, payload: {data, currentPage, totalPage}});
    } catch (error) {
        console.log(error.message); 
    }

}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {

    try {
        const { data } = await api.getPostsBySearch(searchQuery);
        console.log(data);

        dispatch({type: FETCH_BY_SEARCH, payload: data});
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
        await api.deletePost(id);

        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error.message); 
    }

}

export const likePost = (id, like) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id, like);

        dispatch({type: LIKE, payload: data});
    } catch (error) {
        console.log(error.message); 
    }

}