import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'})

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatePost) => API.patch(`/posts/${id}`, updatePost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id, like) => API.patch(`/posts/${id}/${like}/likePost`)

export const signIn = (formData) => API.post(`/user/signIn`, formData)
export const signUp = (formData) => API.post(`/user/signUp`, formData)