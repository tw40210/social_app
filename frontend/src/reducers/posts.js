import {LIKE, DELETE, CREATE, UPDATE, FETCH_ALL, FETCH_BY_SEARCH} from '../constances/actionTypes'

const posts = (state = [], action) => {
    switch (action.type) {
        case LIKE:
            return { ...state, posts: state.posts.map((post)=> post._id===action.payload._id ? action.payload : post)};
        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        case UPDATE:
            return { ...state, posts: state.posts.map((post)=> post._id===action.payload._id ? action.payload : post)};
        case FETCH_ALL:
            return { ...state, posts: action.payload.data, currentPage: action.payload.currentPage, totalPage: action.payload.totalPage};
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload.data};
        case CREATE:    
            return { ...state, posts: [...state.posts, action.payload] };
        default:
            return posts;
    }

}

export default posts;