import {LIKE, DELETE, CREATE, UPDATE, FETCH_ALL, FETCH_BY_SEARCH, START_LOADING, END_LOADING} from '../constances/actionTypes'

const posts = (state = {isLoading: true, posts: []}, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true}
        case END_LOADING:
            return { ...state, isLoading: false}
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