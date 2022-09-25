import * as api from '../api';
import {LIKE, DELETE, CREATE, UPDATE, FETCH_ALL, FETCH_ONE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, COMMENT} from '../constances/actionTypes'

export const getPost = (id) => async (dispatch) => {

    try {
        dispatch({type: START_LOADING});
        const { data: {data} } = await api.fetchPost(id);
        
        dispatch({type: FETCH_ONE, payload: {data}});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message); 
    }

}

export const getPosts = (page) => async (dispatch) => {

    try {
        dispatch({type: START_LOADING});
        const { data: {data, currentPage, totalPage} } = await api.fetchPosts(page);
        
        dispatch({type: FETCH_ALL, payload: {data, currentPage, totalPage}});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message); 
    }

}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {

    try {
        dispatch({type: START_LOADING});
        const { data } = await api.getPostsBySearch(searchQuery);

        dispatch({type: FETCH_BY_SEARCH, payload: data});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message); 
    }

}

export const createPost = (post) => async (dispatch) =>{
    try {
        dispatch({type: START_LOADING});
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

export const commentPost = (comment, id) => async (dispatch) => {
    try {
        const {data} = await api.comment(id, comment);

        dispatch({type: COMMENT, payload: data});
        return data.comments
    } catch (error) {
        console.log(error.message); 
    }

}